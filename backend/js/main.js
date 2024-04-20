//* Global variables
var dictionary, dictionarySet, board, tileSet, tileBag, alphabet;
var englishAlphabet = languages[0].editions[0].alphabet;



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
function drawTilesBackend(player, numTiles) {
	let howManyTilesToDraw = Math.min(numTiles, tileBag.length);
	let newHandTiles = [];

	if (player == "user") newHandTiles = deepCopy(userHandTiles);
	else                  newHandTiles = deepCopy(botHandTiles);

	// Adding tiles to hand
	for (let t = 0; t < howManyTilesToDraw; t++) {
		let tileBagIndex = Math.floor(Math.random() * tileBag.length);
		let letter = tileBag[tileBagIndex];
		let tileObject = {
			letter: letter,
			blank: (letter == "?"),
			player: player,
			handIndex: handSize - numTiles + t
		}
		tileBag.splice(tileBagIndex, 1);
		newHandTiles.push(tileObject);
	}

	// Reordering current tiles
	for (let t = 0, tn = newHandTiles.length; t < tn; t++) {
		newHandTiles[t].handIndex = t;
	}

	if (player == "user") userHandTiles = newHandTiles;
	else                   botHandTiles = newHandTiles;
}



//* Apply play to tile map
function applyPlayBackend(player, play) {
	let tilesPlayed = play.tilesPlayed;
	
	// Update tile map
	for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
		let tileObject = tilesPlayed[t];
		tileMap[tileObject.row][tileObject.col] = tileObject;
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