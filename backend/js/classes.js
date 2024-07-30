var Game = {
	WordTrie: null,
	board: null,
	premiumCells: null,
	alphabet: null,

	tileMap: null,
	tileSet: null,
	tileBag: null,
	maxTileCount: null,

	rackSize: null,
	User: null,
	Bot: null,

	firstPlayer: null,
	currentPlayer: null,
	currentDialog: null,
	currentBlank: null,
	ordinals: null,

	langFont: null,
	errorMessages: null,

	new: function(lId, eId) {
		let wordList = languages[lId].editions[eId].wordList;
		this.WordTrie = new Trie(wordLists[wordList]);

		let boardId = languages[lId].editions[eId].board;
		this.board = boards[boardId];
		this.premiumCells = languages[lId].editions[eId].premiumCells;
		this.alphabet = languages[lId].editions[eId].alphabet;

		this.tileMap = newTileMap(this.board.length);
		this.tileSet = languages[lId].editions[eId].tileSet;
		this.generateTileBag();
		this.maxTileCount = this.tileBag.length;

		this.rackSize = languages[lId].editions[eId].rackSize;
		this.User = new Player("user", "You");
		this.User.score = 0;
		this.Bot = new Player("bot", languages[lId].editions[eId].botName);
		this.Bot.score = 0;
		this.Bot.response = languages[lId].editions[eId].botResponse;
		this.ordinals = [this.Bot, this.User];

		this.langFont = `"Noto Sans"`;
		if (typeof languages[lId].font !== "undefined") this.langFont += `, "${languages[lId].font}"`;
		this.errorMessages = languages[lId].editions[eId].errorMessages;
	},

	generateTileBag: function() {
		this.tileBag = [];

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
		this.tileBag.sort((a, b) => a.bagIndex - b.bagIndex);
	},

	isGameOver: function() {
		let isTileBagEmpty = (this.tileBag.length == 0);
		let isUserPlayedOut = (this.User.rackTiles.length == 0);
		let isBotPlayedOut = (this.Bot.rackTiles.length == 0);
		let isUserPassedOut = (this.User.consecutivePasses == 2);
		let isBotPassedOut = (this.Bot.consecutivePasses == 2);
		if (
			isTileBagEmpty &&
			(isUserPlayedOut || isBotPlayedOut || isUserPassedOut || isBotPassedOut)
		) {
			this.ordinals.sort((a, b) => a.score - b.score);
			return true;
		}
		return false;
	}
}

class Player {
	type = "";
	name = "";
	rackTiles = [];
	score = 0;
	currentPlay = null;

	plyCount = 0;
	consecutivePasses = 0;

	botTilePerms = [];
	botPlaysTested = 0;
	botValidPlays = [];
	response = null;

	msElapsed = 0;
	maxMs = 15 * 1000;

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
				// let bagIndex = Game.tileBag.length - 1;
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
		for (let t = 0, tn = this.rackTiles.length; t < tn; t++) {
			let exchange = this.rackTiles[t].exchange;
			if (exchange) {
				let tileToExchange = this.rackTiles.splice(t, 1)[0];
				tileToExchange.strip();
				Game.tileBag.push(tileToExchange);
				t--; tn--;
			}
		}
		Game.sortTileBag();
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

		let scoredClumps = (clumpsAfter.filter(clumpAfter => {
			return !clumpsBefore.some(clumpBefore => {
				return clumpBefore.length === clumpAfter.length && clumpBefore.every((obj, index) => {
					let keys1 = Object.keys(obj).sort();
					let keys2 = Object.keys(clumpAfter[index]).sort();
					return (keys1.length === keys2.length && keys1.every((key, i) => key === keys2[i] && obj[key] === clumpAfter[index][key]));
				});
			});
		}));

		let word = {
			single: (scoredClumps.length == 1),
			string: scoredClumps[0].reduce((word, tile) => word + tile.letter, ""),
			tiles: scoredClumps[0]
		}

		return word;
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

	testPlay(tiles) {
		let play = {
			valid: false,
			error: null,
			data: null
		}
	
		if (tiles.length > 0) {
			let firstRow = Math.min(...tiles.map(tile => tile.row));
			let firstCol = Math.min(...tiles.map(tile => tile.col));
			let sameRow = tiles.every(tile => tile.row == firstRow);
			let sameCol = tiles.every(tile => tile.col == firstCol);
		
			if (sameRow || sameCol) {
				let paraDirection = sameRow ? "row" : "col";
				let perpDirection = sameRow ? "col" : "row";
				let vectorIndex = sameRow ? firstRow : firstCol;
		
				let paraVectors = sameRow ? Game.tileMap : transpose(Game.tileMap);
				let perpVectors = sameRow ? transpose(Game.tileMap) : Game.tileMap;
		
				let vectorBefore = paraVectors[vectorIndex];
				let vectorAfter = deepCopy(vectorBefore);
				let scoredWords = [];
				let perpConnect = false;
				let includesCenter = false;
		
				let centerRow = Math.floor(Game.board.length / 2);
				let centerCol = Math.floor(Game.board[0].length / 2);
		
				for (let t = 0, tn = tiles.length; t < tn; t++) {
					let tile = tiles[t];
					let indexAlongVector = sameRow ? tile.col : tile.row;
		
					vectorAfter[indexAlongVector] = tile;
		
					let perpVectorBefore = perpVectors[indexAlongVector];
					let perpVectorAfter = deepCopy(perpVectorBefore);
					perpVectorAfter[vectorIndex] = tile;
					if (!perpConnect) perpConnect = this.testConnectivity(perpVectorBefore, perpDirection, [tile]);
					let perpWord = this.findScoredWord(perpVectorBefore, perpVectorAfter);
					if (perpWord.string.length > 1) scoredWords.push(perpWord);
		
					if (!includesCenter) includesCenter = (tile.row == centerRow && tile.col == centerCol);
				}
		
				let paraConnect = this.testConnectivity(vectorBefore, paraDirection, tiles);
				let paraWord = this.findScoredWord(vectorBefore, vectorAfter);
				if (paraWord.string.length > 1) scoredWords.push(paraWord);
		
				let isConnected = paraConnect || perpConnect;
				let isSingleValidWord = true;
				let invalidWord = "";

				for (let w = 0, wn = scoredWords.length; w < wn; w++) {
					let single = scoredWords[w].single;
					let string = scoredWords[w].string;
					if (!single || !Game.WordTrie.search(string)) {
						isSingleValidWord = false;
						invalidWord = string || invalidWord;
						break;
					}
				}
		
				if (includesCenter || isConnected) {
					if (scoredWords.length > 0) {
						if (isSingleValidWord) {
							play.valid = true;
							play.data = {
								tilesPlayed: tiles,
								scoredWords: scoredWords,
								score: this.calculateScore(scoredWords)
							}
						} else {
							play.error = "invalid word(s)";
							play.data = invalidWord;
						}
					}
					else play.error = "some tiles unconnected";
				}
				else play.error = "unconnected anchor tile";
			}
			else play.error = "tiles in multiple vectors";
		}
		else play.error = "zero tiles";
	
		this.currentPlay = play;
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
				let temp = arrToSwap[indexA];
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
						for (let s = 0, sn = Game.tileSet.length; s < sn; s++) {
							let blankOption = deepCopy(perm[t]);
							blankOption.letter = Game.tileSet[s].letter;
							comboPerms.push(blankOption);
						}
						comboPerms.splice(p, 1);
					}
				}
			}
			this.botTilePerms.push(...comboPerms);
		}

		this.botTilePerms.shuffle();
	}

	generateBotPlays() {
		let findOpenSquares = vector => {
			let openSquares = [];
			for (let i = 0, n = vector.length; i < n; i++) {
				if (vector[i] == null) openSquares.push(i);
			}
			return openSquares;
		}

		let generateVectorPlays = (paraVectors, direction, vectorIndex) => {
			let isVectorPopulated = index => {
				let isPopulated = false;
				if (0 <= index && index < vectorBefore.length)
					isPopulated = findOpenSquares(paraVectors[index]).length < vectorBefore.length
				return isPopulated;
			}

			let vectorBefore = paraVectors[vectorIndex];
			let openSquareIndexes = findOpenSquares(vectorBefore);

			if (
				isVectorPopulated(vectorIndex - 1) ||
				isVectorPopulated(vectorIndex) ||
				isVectorPopulated(vectorIndex + 1) ||
				(Game.User.plyCount + Game.Bot.plyCount == 0 && vectorIndex == Math.floor(Game.tileMap.length / 2))
			) {
				for (let p = 0, pn = this.botTilePerms.length; p < pn; p++) {
					let tilePerm = this.botTilePerms[p];
					for (let s = 0, sn = openSquareIndexes.length - tilePerm.length; s <= sn; s++) {
						this.msElapsed = performance.now() - startTime;
						if (this.msElapsed < this.maxMs) {
							let tilesPlayed = deepCopy(tilePerm);
							for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
								let tile = tilesPlayed[t];
								let indexAlongVector = openSquareIndexes[s + t];

								tile.state = "placed-rack";
								tile.row = (direction == "row") ? vectorIndex : indexAlongVector;
								tile.col = (direction == "row") ? indexAlongVector : vectorIndex;
							}

							this.testPlay(tilesPlayed);
							this.botPlaysTested++;
							if (this.currentPlay.valid) this.botValidPlays.push(this.currentPlay.data);	
						}
					}
				}
			}
		}

		let rows = Game.tileMap;
		let cols = transpose(rows);
		let startTime = performance.now();

		for (let v = 0, vn = rows.length; v < vn; v++) generateVectorPlays(rows, "row", v);
		for (let v = 0, vn = cols.length; v < vn; v++) generateVectorPlays(cols, "col", v);
	}

	chooseBotPlay() {
		this.botValidPlays.sort((a, b) => b.score - a.score);
		let midPlayIndex = Math.floor(this.botValidPlays.length / 2);
		return this.botValidPlays[midPlayIndex];
	}

	applyPlay(play) {
		// Update tile map
		for (let t = 0, tn = play.tilesPlayed.length; t < tn; t++) {
			let tile = play.tilesPlayed[t];
			tile.state = "placed-board";
			Game.tileMap[tile.row][tile.col] = tile;
		}

		// Update tile racks
		for (let t = 0, tn = play.tilesPlayed.length; t < tn; t++) {
			let rackIndex = play.tilesPlayed[t].rackIndex;
			this.rackTiles = this.rackTiles.filter(tile => tile.rackIndex !== rackIndex);
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