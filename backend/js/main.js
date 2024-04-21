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



//* Apply play to tile map
function applyPlayBackend(player, play) {
	let tilesPlayed = play.tilesPlayed;
	
	// Update tile map
	for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
		let tileObject = tilesPlayed[t];
		tileMap[tileObject.row][tileObject.col] = tileObject;
	}

	// Update tile racks
	for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
		let rackIndex = tilesPlayed[t].rackIndex;
		if (player == "user") {
			userRackTiles = $.grep(userRackTiles, tile => tile.rackIndex != rackIndex);
			userScore += play.score;
		} else {
			botRackTiles = $.grep(botRackTiles, tile => tile.rackIndex != rackIndex);
			botScore += play.score;
		}
	}
}



//* Randomly draw (and remove) specified number of tiles from tile bag
function drawTilesBackend(player, numTiles) {
	let newRackTiles = [];
	if (player == "user") newRackTiles = deepCopy(userRackTiles);
	else                  newRackTiles = deepCopy(botRackTiles);
	let maxRackSize = newRackTiles.length + numTiles;

	// Adding tiles to rack and reordering
	for (let t = 0; t < maxRackSize; t++) {
		if (t < newRackTiles.length) {
			newRackTiles[t].rackIndex = t;
		} else {
			let tileBagIndex = Math.floor(Math.random() * tileBag.length);
			let letter = tileBag[tileBagIndex];
			let tileObject = {
				letter: letter,
				blank: (letter == "?"),
				player: player,
				rackIndex: t,
				row: null,
				col: null
			}
			tileBag.splice(tileBagIndex, 1);
			newRackTiles.push(tileObject);
		}
	}

	if (player == "user") userRackTiles = newRackTiles;
	else                   botRackTiles = newRackTiles;
}