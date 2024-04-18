//* Global variables
var dictionary, dictionarySet, board, tileSet, tileBag, alphabet;
var englishAlphabet = languages[0].editions[0].alphabet;
var tileMoveDuration = 500;
var tileMoveDelay = 100;



//* Tailored deep copy function
//* Works for 2D arrays, object arrays, and mixed-type arrays
function deepCopy(arr) {
	return structuredClone(arr);
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

		for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
			let letter = tilesPlayed[t].letter;
			let row = tilesPlayed[t].row;
			let col = tilesPlayed[t].col;
			let squareId = board[row][col];

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
	return Array(dimension).fill().map(() => Array(dimension).fill(null));
}

function transpose(arr) {
	return arr[0].map((col, i) => arr.map(row => row[i]));
}



//* Randomly draw (and remove) specified number of tiles from tile bag
function drawTilesBackend(player) {
	let howManyTiles = Math.min(handSize, tileBag.length);
	let newTiles = [];

	for (let t = 0; t < howManyTiles; t++) {
		let tileIndex = Math.floor(Math.random() * tileBag.length);
		let tileObject = {
			letter: tileBag[tileIndex],
			isBlank: false
		}
		if (tileObject.letter == "?") tileObject.isBlank = true;

		tileBag.splice(tileIndex, 1);
		newTiles.push(tileObject);
	}

	if (player == "user") {
		userHandTiles.push(...newTiles);
		// userHandTiles.sort();
	} else {
		botHandTiles.push(...newTiles);
		// botHandTiles.sort();
	}
}



//* Apply play to tile map
function applyPlayBackend(player, play) {
	let tilesPlayed = play.tilesPlayed;
	
	// Update tile map
	for (let t = 0, tn = tilesPlayed; t < tn; t++) {
		let tile = tilesPlayed[t];
		if (play.direction == "row") {
			tileRow = play.vectorIndex;
			tileCol = tile.index;
		} else {
			tileRow = tile.index;
			tileCol = play.vectorIndex;
		}
		tileMap[tileRow][tileCol] = tile.letter;
	}

	// Update tile hands
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