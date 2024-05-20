var Game = {
	board: [],
	premiumCells: null,
	alphabet: [],

	tileMap: [],
	tileSet: [],
	tileBag: [],
	maxTileCount: 0,

	rackSize: 0,
	User: null,
	Bot: null,

	currentBlankIndex: null,
	currentPlayer: null,
	currentDialog: null,

	langFont: "",
	errorMessages: [],

	new: function(lId, eId) {
		let langExonym = languages[lId].exonym;
		let wordArray = window[camelize(langExonym) + "List"];
		this.WordTrie = new Trie(wordArray);

		let boardId = languages[lId].editions[eId].boards[0];
		this.board = boards[boardId];
		this.premiumCells = languages[lId].editions[eId].premiumCells;
		this.alphabet = languages[lId].editions[eId].alphabet;

		this.tileMap = newTileMap(this.board.length);
		this.tileSet = languages[lId].editions[eId].tileSet;
		this.generateTileBag();
		// this.sortTileBag();
		this.maxTileCount = this.tileBag.length;

		this.rackSize = languages[lId].editions[eId].rackSize;
		this.User = new Player("user", "Shawn");
		this.Bot = new Player("bot", languages[lId].editions[eId].botName);
		this.User.drawTiles(this.rackSize);
		this.Bot.drawTiles(this.rackSize);
		this.currentPlayer = "bot";

		this.langFont = `"Noto Sans"`;
		if (typeof languages[lId].font !== "undefined") this.langFont += `, "${languages[lId].font}"`;
		this.errorMessages = languages[lId].editions[eId].errorMessages;

		console.log(this.User.rackTiles);
	},

	generateTileBag: function() {
		let bagIndex = 0;
		for (let l = 0, ln = this.tileSet.length; l < ln; l++) {
			for (let t = 0, tn = this.tileSet[l].freq; t < tn; t++) {
				let tile = new Tile("bag", this.tileSet[l].letter, bagIndex);
				this.tileBag.push(tile);
				bagIndex++;
			}
		}
	},

	sortTileBag: function() {
		this.tileBag.sort((a, b) => a.letter.localeCompare(b.letter));
	}
}



class Player {
	type = "";
	name = "";
	rackTiles = [];
	score = 0;

	tilePerms = [];
	playsTested = 0;
	validPlays = [];
	msElapsed = 0;
	maxMs = 100 * 1000;

	constructor(type, name) {
		this.type = type;
		this.name = name;
	}

	drawTiles(numTiles) {
		let maxRackSize = this.rackTiles.length + numTiles;

		// Adding tiles to rack and reordering
		for (let t = 0; t < maxRackSize; t++) {
			if (t < this.rackTiles.length)
				this.rackTiles[t].rackIndex = t;
			else {
				let bagIndex = Math.floor(Math.random() * Game.tileBag.length);
				// let tileBagIndex = Game.tileBag.length - 1;
				let tile = Game.tileBag.splice(bagIndex, 1)[0];
				tile.state = "rack";
				tile.rackIndex = t;
				this.rackTiles.push(tile);
			}
		}
	}

	recallTiles() {
		for (let t = 0, tn = this.rackTiles.length; t < tn; t++)
			this.rackTiles[t].state = "rack";
	}

	exchangeTiles() {
		let numTilesExchanged = 0;
		for (let t = 0, tn = this.rackTiles.length; t < tn; t++) {
			let exchange = this.rackTiles[t].exchange;
			if (exchange) {
				let tileToExchange = this.rackTiles.splice(t, 1)[0];
				tileToExchange.strip();
				Game.tileBag.push(tileToExchange);
				t--; tn--;
			}
			numTilesExchanged++;
		}

		this.drawTiles(numTilesExchanged);
	}

	findScoredWord(vectorBefore, vectorAfter) {
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

	testConnectivity(vector, direction, tiles) {
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

	calculateScore(words) {
		let totalScore = 0;

		for (let w = 0, wn = words.length; w < wn; w++) {
			let wordTiles = words[w].tiles;
			let wordScore = 0;
			let multipliers = [];

			for (let t = 0, tn = wordTiles.length; t < tn; t++) {
				let tile = wordTiles[t];
				wordScore += tile.points;
			}

			for (let t = 0, tn = wordTiles.length; t < tn; t++) {
				let tile = wordTiles[t];
				if (tile.state == "placed-rack") {
					let squareId = Game.board[tile.row][tile.col];
		
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
	
	//! Clunky implementation; needs refactoring to avoid returning object awkwardly
	testPlay(tiles, paraConnect, perpConnect, words) {
		let outcome = {
			valid: false,
			error: null,
			data: null
		}

		//? Does the play contain the center square?
		let includesCenter = false;
		for (let t = 0, tn = tiles.length; t < tn; t++) {
			let tile = tiles[t];
			let isCenterRow = (tile.row == Math.floor(Game.board.length / 2));
			let isCenterCol = (tile.col == Math.floor(Game.board[0].length / 2));
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
			if (!Game.WordTrie.search(word.string)) {
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
						scoredWords: words,
						score: this.calculateScore(words)
					}
				} else {
					outcome.error = 3;
					outcome.data = invalidWord;
				}
			}
			else outcome.error = 2;
		}
		else outcome.error = 1;

		return outcome;
	}

	unscrambleRack() {
		//* Generate every combination of letter array, i.e. powerset
		// Time complexity: O(n^2)
		let powerset = arr => {
			let allCombos = arr.reduce((subsets, value) => {
				let newSubsets = subsets.map(set => [value, ...set]);
				return subsets.concat(newSubsets);
			}, [[]]).slice(1);
		
			return allCombos;
		}		

		//* Generate every permutation of letter array using Heap's Algorithm
		// Time complexity: O(n!)
		let permutate = arr => {
			let output = [];
		
			let swap = (arrToSwap, indexA, indexB) => {
				const temp = arrToSwap[indexA];
				arrToSwap[indexA] = arrToSwap[indexB];
				arrToSwap[indexB] = temp;
			}
		
			let generate = (n, heapArr) => {
				if (n === 1) {
					output.push(heapArr.slice());
					return;
				}
			
				generate(n - 1, heapArr);
			
				for (let i = 0; i < n - 1; i++) {
					if (n % 2 === 0)
						swap(heapArr, i, n - 1);
					else
						swap(heapArr, 0, n - 1);
			
					generate(n - 1, heapArr);
				}
			}
		
			generate(arr.length, arr.slice());
		
			return output;
		};

		//* Combinate, permutate, account for blank tiles, and remove duplicates
		let allCombos = powerset(this.rackTiles);
		for (let c = 0, cn = allCombos.length; c < cn; c++) {
			let comboPerms = permutate(allCombos[c]);
			for (let p = 0, pn = comboPerms.length; p < pn; p++) {
				let perm = comboPerms[p];
				for (let t = 0, tn = perm.length; t < tn; t++) {
					if (perm[t].blank) {
						for (let s = 0, sn = tileSet.length; s < sn; s++) {
							let blankOption = deepCopy(perm[t]);
							blankOption.letter = tileSet[s].letter;
							comboPerms.push(blankOption);
						}
						comboPerms.splice(p, 1);
					}
				}
			}
			this.tilePerms.push(...comboPerms);
		}
	}

	generatePlays() {
		let rows = Game.tileMap;
		let cols = transpose(rows);
		let startTime = performance.now();

		//
		let findOpenSquares = vector => {
			let openSquares = [];
			for (let i = 0, n = vector.length; i < n; i++) {
				if (vector[i] == null) openSquares.push(i);
			}
			return openSquares;
		}

		// Calculate all valid word plays for a single vector (row or column)
		let generateVectorPlays = (vectorBefore, direction, vectorIndex) => {
			let vectorLength = vectorBefore.length;

			let paraVectors = rows;
			let perpVectors = cols;
			let perpDirection = "col";
			if (direction == "col") {
				perpVectors = rows;
				perpDirection = "row";
			}

			let openSquareIndexes = findOpenSquares(vectorBefore);
			let lastVectorIndex = vectorIndex - 1;
			let nextVectorIndex = vectorIndex + 1;
			let isLastVectorPopulated = false;
			let isThisVectorPopulated = openSquareIndexes.length < vectorLength;
			let isNextVectorPopulated = false;

			if (lastVectorIndex >= 0)
				isLastVectorPopulated = findOpenSquares(paraVectors[lastVectorIndex]).length < vectorLength;
			if (nextVectorIndex < vectorLength)
				isNextVectorPopulated = findOpenSquares(paraVectors[nextVectorIndex]).length < vectorLength;

			if (isLastVectorPopulated || isThisVectorPopulated || isNextVectorPopulated) {
				// Trying each permutation of tiles along vector
				for (let p = 0, pn = this.tilePerms.length; p < pn; p++) {
					let tilePerm = this.tilePerms[p];

					// Iterate through each starting point for tile permutation
					for (let s = 0, sn = openSquareIndexes.length - tilePerm.length + 1; s < sn; s++) {
						//* Time limiter
						this.msElapsed = performance.now() - startTime;
						if (this.msElapsed < this.maxMs) {
							let tilesPlayed = [];
							let vectorAfter = deepCopy(vectorBefore);
							let scoredWords = [];
							let perpConnect = false;

							// Apply tile permutation to open squares along both vector axes
							for (let l = 0, ln = tilePerm.length; l < ln; l++) {
								let tile = deepCopy(tilePerm[l]);
								let indexAlongVector = openSquareIndexes[s + l];

								tile.state = "placed-rack";
								if (direction == "row") {
									tile.row = vectorIndex;
									tile.col = indexAlongVector;
								} else {
									tile.row = indexAlongVector;
									tile.col = vectorIndex;
								}

								// Apply to parallel vector
								tilesPlayed.push(tile);
								vectorAfter[indexAlongVector] = tile;

								// Perpendicular validity
								let perpVectorBefore = perpVectors[indexAlongVector];
								let perpVectorAfter = deepCopy(perpVectorBefore);
								perpVectorAfter[vectorIndex] = tile;
								if (!perpConnect)
									perpConnect = this.testConnectivity(perpVectorBefore, perpDirection, [tile]);
								let perpWord = this.findScoredWord(perpVectorBefore, perpVectorAfter);
								if (perpWord.string.length > 1) scoredWords.push(perpWord);

								this.playsTested++; //? Dev
							}

							// Parallel validity
							let paraConnect = this.testConnectivity(vectorBefore, direction, tilesPlayed);
							let paraWord = this.findScoredWord(vectorBefore, vectorAfter);
							if (paraWord.string.length > 1) scoredWords.push(paraWord);

							let play = this.testPlay(tilesPlayed, paraConnect, perpConnect, scoredWords);
							if (play.valid) this.validPlays.push(play.data);
						}
					}
				}
			}
		}

		// Test all plays for all rows
		for (let i = 0, n = rows.length; i < n; i++) {
			generateVectorPlays(rows[i], "row", i);
		}

		// Test all plays for all columns
		for (let i = 0, n = cols.length; i < n; i++) {
			generateVectorPlays(cols[i], "col", i);
		}
	}

	choosePlay() {
		this.validPlays.sort((a, b) => b.score - a.score);
		return this.validPlays[0];
	}

	applyPlay(play) {
		let tilesPlayed = play.tilesPlayed;
		
		// Update tile map
		for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
			let tile = tilesPlayed[t];
			tile.state = "placed-board";
			Game.tileMap[tile.row][tile.col] = tile;
		}

		// Update tile racks
		for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
			let rackIndex = tilesPlayed[t].rackIndex;
			this.rackTiles = $.grep(this.rackTiles, tile => tile.rackIndex != rackIndex);
		}

		// Update score
		this.score += play.score;
	}
}



class Tile {
	state = null;
	blank = null;
	letter = null;
	points = 0;
	bagIndex = null;
	rackIndex = null;
	row = null;
	col = null;
	exchange = false;

	constructor(state, letter, bagIndex) {
		this.state = state;
		this.blank = (letter == "?");
		this.letter = this.blank ? null : letter;
		this.points = Game.tileSet.find(x => x.letter == letter).points;
		this.bagIndex = bagIndex;
	}

	strip() {
		this.state = null;
		if (this.blank) this.letter = null;
		this.rackIndex = null;
		this.row = null;
		this.col = null;
		this.exchange = false;
	}
}



class TrieNode {
	children = {};
	isEndOfWord = false;
}

class Trie {
	root = new TrieNode();

	constructor(wordArray) {
		for (let w = 0, wn = wordArray.length; w < wn; w++)
			this.insert(wordArray[w]);
	}

	insert(word) {
		let node = this.root;
		for (let i = 0; i < word.length; i++) {
			let char = word[i];
			if (!node.children[char]) node.children[char] = new TrieNode();
			node = node.children[char];
		}
		node.isEndOfWord = true;
	}

	search(word) {
		let node = this.root;
		for (let i = 0; i < word.length; i++) {
			let char = word[i];
			if (!node.children[char]) return false;
			node = node.children[char];
		}
		return node.isEndOfWord;
	}

	startsWith(prefix) {
		let node = this.root;
		for (let i = 0; i < prefix.length; i++) {
			let char = prefix[i];
			if (!node.children[char]) return false;
			node = node.children[char];
		}
		return true;
	}
}