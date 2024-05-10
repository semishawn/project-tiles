//* Global variables
var dictionary, dictionarySet, board, tileSet, tileBag, alphabet;
var englishAlphabet = languages[0].editions[0].alphabet;



//*
String.prototype.format = function() {
	var args = arguments;
	return this.replace(/{(\d+)}/g, function(match, number) {
		return typeof args[number] != "undefined" ? args[number] : match;
	});
};



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



//* Tile map operations
function newTileMap(dimension) {
	return Array(dimension).fill().map(() => Array(dimension).fill(null));
}

function transpose(arr) {
	return arr[0].map((col, i) => arr.map(row => row[i]));
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
			let tile = {
				state: "rack",
				letter: letter,
				blank: (letter == "?"),
				points: tileSet.find(x => x.letter === letter).points,
				player: player,
				rackIndex: t,
				row: null,
				col: null
			}
			tileBag.splice(tileBagIndex, 1);
			newRackTiles.push(tile);
		}
	}

	if (player == "user") userRackTiles = newRackTiles;
	else                   botRackTiles = newRackTiles;
}



//* 
function findScoredWord(vectorBefore, vectorAfter) {
	let findTileClumps = vector => {
		let clumps = [];
		let tileStack = [];
		for (let t = 0, tn = vector.length; t < tn; t++) {
			if (vector[t] == null) {
				clumps.push(tileStack);
				tileStack = [];
			} else tileStack.push(vector[t]);
		}
		if (tileStack.length > 0) clumps.push(tileStack);
		return clumps;
	}

	let clumpsBefore = findTileClumps(vectorBefore);
	let clumpsAfter = findTileClumps(vectorAfter);

	let scoredTiles = (clumpsAfter.filter(clumpAfter => {
		return !clumpsBefore.some(clumpBefore => {
			return clumpBefore.length === clumpAfter.length && clumpBefore.every((obj, index) => {
				let keys1 = Object.keys(obj).sort();
				let keys2 = Object.keys(clumpAfter[index]).sort();
				return (keys1.length === keys2.length && keys1.every((key, i) => key === keys2[i] && obj[key] === clumpAfter[index][key]));
			});
		});
	}))[0];

	return {
		string: scoredTiles.reduce((word, tile) => word + tile.letter, ""),
		tiles: scoredTiles
	}
}



//* Determine if the new tiles are connected to previously placed tiles 
function testConnectivity(vector, direction, tiles) {
	let startsWithPrevTiles = false;
	let endsWithPrevTiles = false;
	let hasPrevTilesInMiddle = false;

	let firstIndex = Math.min(...tiles.map(tile => tile.col));
	let lastIndex =  Math.max(...tiles.map(tile => tile.col));
	if (direction == "col") {
		firstIndex = Math.min(...tiles.map(tile => tile.row));
		lastIndex =  Math.max(...tiles.map(tile => tile.row));
	}

	if (firstIndex > 0) {
		if (vector[firstIndex - 1] !== null)
			startsWithPrevTiles = true;
	}
	if (lastIndex < vector.length - 1) {
		if (vector[lastIndex + 1] !== null)
			endsWithPrevTiles = true;
	}
	if ((lastIndex - firstIndex + 1) > tiles.length) {
		hasPrevTilesInMiddle = true;
	}
	
	return startsWithPrevTiles || endsWithPrevTiles || hasPrevTilesInMiddle;
}



//* Calculate score of play incorporating premium squares
function calculateScore(play, board) {
	let totalScore = 0;

	for (let w = 0, wn = play.scoredWords.length; w < wn; w++) {
		let wordTiles = play.scoredWords[w].tiles;
		let wordScore = 0;
		let multipliers = [];

		for (let t = 0, tn = wordTiles.length; t < tn; t++) {
			let tile = wordTiles[t];
			wordScore += tile.points;
		}

		for (let t = 0, tn = wordTiles.length; t < tn; t++) {
			let tile = wordTiles[t];
			if (tile.state == "placed-rack") {
				let squareId = board[tile.row][tile.col];
	
				switch (squareId) {
					case 2: wordScore += tile.points; break;
					case 3: multipliers.push(2); break;
					case 4: wordScore += (2 * tile.points); break;
					case 5: multipliers.push(3); break;
				}
			}
		}

		for (let m = 0, mn = multipliers.length; m < mn; m++)
			wordScore *= multipliers[m];

		totalScore += wordScore;
	}

	return totalScore;
}



//* Test the validity of play, return an outcome object (success/error)
//! Clunky implementation; needs refactoring to avoid returning object awkwardly
function testPlay(tiles, paraConnect, perpConnect, words) {
	let outcome = {
		valid: false,
		error: null,
		data: null
	}

	//? Does the play contain the center square?
	let includesCenter = false;
	for (let t = 0, tn = tiles.length; t < tn; t++) {
		let tile = tiles[t];
		let isCenterRow = (tile.row == Math.floor(board.length / 2));
		let isCenterCol = (tile.col == Math.floor(board[0].length / 2));
		if (isCenterRow && isCenterCol) includesCenter = true;
	}

	//? Is the play connected parallely or perpendicularly?
	let isConnected = false;
	if (paraConnect || perpConnect) isConnected = true;

	//? Is the play logical?
	let isLogical = false;
	if (words.length > 0) isLogical = true;

	//? Are all the words played real words?
	let isValid = true;
	let invalidWord = "";
	words.forEach(word => {
		if (!wordTrie.search(word.string)) {
			isValid = false;
			invalidWord = word.string;
			return false;
		}
	});

	if (includesCenter || isConnected) {
		if (isLogical) {
			if (isValid) {
				outcome.valid = true;
				outcome.data = {
					tilesPlayed: tiles,
					scoredWords: words
				}

				// Calculate score using own play, assign to self
				outcome.data.score = this.calculateScore(outcome.data, board);
			}
			else {
				outcome.error = 2;
				outcome.data = invalidWord;
			}
		}
		else outcome.error = 1;
	}
	else outcome.error = 0;

	return outcome;
}



//* Apply play to tile map
function applyPlayBackend(player, play) {
	let tilesPlayed = play.tilesPlayed;
	
	// Update tile map
	for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
		let tile = tilesPlayed[t];
		tile.state = "placed-board";
		tileMap[tile.row][tile.col] = tile;
	}

	// Update tile racks
	for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
		let rackIndex = tilesPlayed[t].rackIndex;
		if (player == "user") userRackTiles = $.grep(userRackTiles, tile => tile.rackIndex != rackIndex);
		else                   botRackTiles = $.grep(botRackTiles, tile => tile.rackIndex != rackIndex);
	}

	// Update score
	if (player == "user") userScore += play.score;
	else                   botScore += play.score;
}