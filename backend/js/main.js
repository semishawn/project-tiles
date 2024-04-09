//* Global variables
var dictionary, dictionarySet, board, tileSet, tileBag, alphabet;
var englishAlphabet = languages[0].editions[0].alphabet;



//* Tailored deep copy function
//* Works for 2D arrays, object arrays, and mixed-type arrays
function deepCopy(arr) {
	let arrCopy = [];

	// 2D array
	if (arr[0].constructor === Array) {
		for (let i = 0, n = arr.length; i < n; i++) {
			arrCopy[i] = arr[i].slice();
		}
	}
	// Object array
	else if (arr[0].constructor === Object) {
		arrCopy = structuredClone(arr);
	}
	// 1D array
	else arrCopy = arr.slice(0);

	return arrCopy;
}



//* JSON string mapping method to remove duplicate elements from array
//* Works for 2D arrays, object arrays, and mixed-type arrays
function uniquify(arr) {
	let uniques = [];
	let itemsFound = {};
	for(let i = 0, n = arr.length; i < n; i++) {
		let stringified = JSON.stringify(arr[i]);
		if (itemsFound[stringified]) continue;
		uniques.push(arr[i]);
		itemsFound[stringified] = true;
	}
	return uniques;
}



//* Calculate score of play incorporating premium squares
function calculateScore(play, tileSet, board) {
	let totalScore = 0;

	let tilePoints = letter => {
		return tileSet.find(x => x.letter === letter).pts;
	}

	let unmodifiedPoints = word => {
		let points = 0;
		for (let l = 0, ln = word.length; l < ln; l++) points += tilePoints(word[l]);
		return points;
	}

	for (let w = 0, wn = play.scoredWords.length; w < wn; w++) {
		let word = play.scoredWords[w].string;
		let wordPoints = unmodifiedPoints(word);
		let tilesPlayed = play.scoredWords[w].tilesPlayed;
		let direction = play.scoredWords[w].direction;
		let vectorIndex = play.scoredWords[w].vectorIndex;

		for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
			let letter = tilesPlayed[t].letter;
			var index = tilesPlayed[t].index;

			let squareId = board[vectorIndex][index];
			if (direction == "col") squareId = board[index][vectorIndex];

			switch (squareId) {
				case 2: wordPoints += tilePoints(letter); break;
				case 3: wordPoints *= 2; break;
				case 4: wordPoints += (2 * tilePoints(letter)); break;
				case 5: wordPoints *= 3; break;
			}
		}

		totalScore += wordPoints;
	}

	return totalScore;
}



//* Tile map operations
function newTileMap(dimension) {
	return Array(dimension).fill().map(() => Array(dimension).fill(" "));
}

function transpose(arr) {
	return arr[0].map((col, i) => arr.map(row => row[i]));
}



//* Randomly draw (and remove) specified number of tiles from tile bag
function drawTilesBackend(player, numTiles) {
	let howManyTiles = Math.min(numTiles, tileBag.length);
	let newTiles = [];

	for (let t = 0; t < howManyTiles; t++) {
		let tileIndex = Math.floor(Math.random() * tileBag.length);
		let tileLetter = tileBag[tileIndex];
		tileBag.splice(tileIndex, 1);
		newTiles.push(tileLetter);
	}

	if (player == "user") userHandTiles.push(...newTiles);
	else                  botHandTiles.push(...newTiles);
	userHandTiles.sort();
	botHandTiles.sort();
}



//* Apply play to tile map
function applyPlay(player, play) {
	// Update tile map
	let rows = deepCopy(tileMap);
	if (play.direction == "row") {
		rows[play.vectorIndex] = play.newVector;
		tileMap = rows;
	} else {
		let cols = transpose(rows);
		cols[play.vectorIndex] = play.newVector;
		tileMap = transpose(cols);
	}

	// Update tile hands
	let tilesPlayed = play.tilesPlayed;
	if (player == "user") {
		for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
			let tileIndex = userHandTiles.findIndex(x => x === tilesPlayed[t].letter);
			userHandTiles.splice(tileIndex, 1);
		}
		userScore += play.score;
	} else {
		for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
			let tileIndex = botHandTiles.findIndex(x => x === tilesPlayed[t].letter);
			botHandTiles.splice(tileIndex, 1);
		}
		botScore += play.score;
	}
}