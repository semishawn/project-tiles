importScripts("trie.js");

class Bot {
	tilePerms = [];
	playsTested = 0;
	validPlays = [];

	msElapsed = 0;
	maxMs = 15000;

	constructor(board, tileSet, tileMap, handTiles, wordTrie) {
		this.board = board;
		this.tileSet = tileSet;
		this.tileMap = tileMap;
		this.handTiles = handTiles;
		this.wordTrie = wordTrie;
	}

	//* Generate all subset permutations of tiles
	unscramble() {
		//* Generate every combination of letter array, i.e. powerset
		// Time complexity: O(n^2)
		let powerset = arr => {
			let allCombos = arr.reduce(
				(subsets, value) => subsets.concat(
					subsets.map(set => [value, ...set])
				),
				[[]]
			).slice(1);
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

		//* Combinate, permutate, remove duplicates
		let allCombos = powerset(this.handTiles);
		let uniqueCombos = this.uniquify(allCombos);
		let allPerms = [];
		for (let i = 0, n = uniqueCombos.length; i < n; i++) {
			let comboPerms = permutate(uniqueCombos[i]);
			allPerms.push(...comboPerms);
		}
		this.tilePerms = this.uniquify(allPerms);
	}

	//* Generate all possible plays based on tile permutations applied to all rows and columns
	generatePlays() {
		let rows = this.tileMap;
		let cols = this.transpose(rows);
		let startTime = performance.now();

		//
		let findOpenSquares = vector => {
			let openSquares = [];
			for (let i = 0, n = vector.length; i < n; i++) {
				if (vector[i] == " ") openSquares.push(i);
			}
			return openSquares;
		}

		// Given a before and after state of a vector, determine the word that will be added to score
		let findScoredWord = (vectorBefore, vectorAfter) => {
			let wordsInVector = arr => arr.toString().replaceAll(",", "").trim().split(/\s+/);
			let wordsBefore = wordsInVector(vectorBefore).filter(i => i);
			let wordsAfter = wordsInVector(vectorAfter);
			wordsBefore.forEach(word => {
				let wordIndex = wordsAfter.findIndex(e => e == word);
				if (wordIndex > -1) wordsAfter.splice(wordIndex, 1);
			});
			return wordsAfter[0];
		}

		// Determine if the new tiles are connected to previously played tiles 
		let isConnected = (vector, tiles) => {
			let startsWithPrevTiles = false;
			let endsWithPrevTiles = false;
			let hasPrevTilesInMiddle = false;

			let firstIndex = tiles[0].index;
			let lastIndex = tiles.slice(-1).index;
			let indexBefore = firstIndex - 1;
			let indexAfter = lastIndex + 1;

			if (indexBefore >= 0) {
				if (vector[indexBefore] != " ")
					startsWithPrevTiles = true;
			}
			if (indexAfter <= vector.length - 1) {
				if (vector[indexAfter] != " ")
					endsWithPrevTiles = true;
			}
			if ((lastIndex - firstIndex + 1) > tiles.length)
				hasPrevTilesInMiddle = true;

			return startsWithPrevTiles || endsWithPrevTiles || hasPrevTilesInMiddle;
		}

		//
		let scoredWordObject = (a, b, c, d) => {
			return {
				string: a,
				tilesPlayed: b,
				direction: c,
				vectorIndex: d
			}
		}

		// Calculate all valid word plays for a single vector (row or column)
		let generateVectorPlays = (vectorBefore, direction, vectorIndex) => {
			let vectorLength = vectorBefore.length;

			let paraVectors = rows;
			let perpDirection = "col";
			let perpVectors = cols;
			if (direction == "col") {
				perpDirection = "row";
				perpVectors = rows;
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
							let vectorAfter = this.deepCopy(vectorBefore);
							let scoredWords = [];
							let perpConnect = false;

							// Apply tile permutation to open squares along both vector axes
							for (let l = 0, ln = tilePerm.length; l < ln; l++) {
								let letter = tilePerm[l];
								let paraIndex = openSquareIndexes[s + l];
								let paraTileObject = {letter: letter, index: paraIndex};
								let perpTileObject = {letter: letter, index: vectorIndex};

								// Apply to parallel vector
								tilesPlayed.push(paraTileObject);
								vectorAfter[paraIndex] = letter;

								// Perpendicular validity
								let perpVectorBefore = perpVectors[paraIndex];
								let perpVectorAfter = this.deepCopy(perpVectorBefore);
								perpVectorAfter[vectorIndex] = letter;
								if (!perpConnect) perpConnect = isConnected(perpVectorBefore, [perpTileObject]);
								let perpWord = findScoredWord(perpVectorBefore, perpVectorAfter);
								if (perpWord.length > 1) {
									let perpWordObject = scoredWordObject(perpWord, [perpTileObject], perpDirection, paraIndex);
									scoredWords.push(perpWordObject);
								}

								this.playsTested++; //? Dev
							}

							// Parallel validity
							let paraConnect = isConnected(vectorBefore, tilesPlayed);
							let paraWord = findScoredWord(vectorBefore, vectorAfter);
							if (paraWord.length > 1) {
								let paraWordObject = scoredWordObject(paraWord, tilesPlayed, direction, vectorIndex);
								scoredWords.push(paraWordObject);
							}

							//? 1. Is the play logical?
							if (scoredWords.length > 0) {
								//? 2. Is the play connected parallely or perpendicularly?
								if (paraConnect || perpConnect) {
									let isValid = true;
									scoredWords.forEach(wordObject => {
										if (!this.wordTrie.search(wordObject.string)) {
											isValid = false;
											return false;
										}
									});

									//? Are all the words played real words?
									if (isValid) {
										let play = {
											tilesPlayed: tilesPlayed,
											newVector: vectorAfter,
											direction: direction,
											vectorIndex: vectorIndex,
											scoredWords: scoredWords
										}

										// Calculate score using own object, assign to self
										play.score = this.calculateScore(play, this.tileSet, this.board);
										this.validPlays.push(play);
									}
								}
							}
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

	//* Choose a play from valid play pool
	//* Currently works by choosing highest scoring play
	choosePlay() {
		// let chosenPlay = this.validPlays[Math.floor(Math.random() * this.validPlays.length)];
		let highestScore = Math.max(...this.validPlays.map(play => play.score));
		let highestScoringPlays = this.validPlays.filter(play => {
			return play.score === highestScore;
		});

		let chosenPlay = highestScoringPlays[Math.floor(Math.random() * highestScoringPlays.length)];

		return chosenPlay;
	}
}



onmessage = e => {
	eval(e.data.functions.uniquify);
	eval(e.data.functions.transpose);
	eval(e.data.functions.deepCopy);
	eval(e.data.functions.calculateScore);
	Bot.prototype.uniquify = uniquify;
	Bot.prototype.transpose = transpose;
	Bot.prototype.deepCopy = deepCopy;
	Bot.prototype.calculateScore = calculateScore;

	let wordTrie = e.data.wordTrie;
	Object.setPrototypeOf(wordTrie, Trie.prototype);

	var botInstance = new Bot(
		e.data.board,
		e.data.tileSet,
		e.data.tileMap,
		e.data.handTiles,
		wordTrie
	);

	botInstance.unscramble();
	console.log(`${botInstance.handTiles} → Generated ${botInstance.tilePerms.length} tile permutations...`);

	botInstance.generatePlays();
	var secondsElapsed = botInstance.msElapsed / 1000;
	console.log(`Tested ${botInstance.playsTested} plays in ${secondsElapsed} seconds...`);
	console.log(`Found ${botInstance.validPlays.length} valid plays...`);

	var play = botInstance.choosePlay();
	console.log(play);

	postMessage(play);
};