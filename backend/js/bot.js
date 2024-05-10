importScripts("trie.js");

class Bot {
	tilePerms = [];
	playsTested = 0;
	validPlays = [];

	msElapsed = 0;
	maxMs = 100 * 1000;

	constructor(rackTiles) {
		this.rackTiles = rackTiles;
	}

	//* Generate all subset permutations of tiles
	unscramble() {
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
		// let uniqueCombos = this.uniquify(allCombos);
		let allPerms = [];
		for (let c = 0, cn = allCombos.length; c < cn; c++) {
			let comboPerms = permutate(allCombos[c]);
			for (let p = 0, pn = comboPerms.length; p < pn; p++) {
				let perm = comboPerms[p];
				for (let t = 0, tn = perm.length; t < tn; t++) {
					if (perm[t].letter == "?") {
						for (let s = 0, sn = tileSet.length; s < sn; s++) {
							let blankOption = this.deepCopy(perm[t]);
							blankOption.letter = tileSet[s].letter;
							comboPerms.push(blankOption);
						}
						comboPerms.splice(p, 1);
					}
				}
			}
			allPerms.push(...comboPerms);
		}
		this.tilePerms = this.uniquify(allPerms);
	}

	//* Generate all possible plays based on tile permutations applied to all rows and columns
	generatePlays() {
		let rows = tileMap;
		let cols = this.transpose(rows);
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
							let vectorAfter = this.deepCopy(vectorBefore);
							let scoredWords = [];
							let perpConnect = false;

							// Apply tile permutation to open squares along both vector axes
							for (let l = 0, ln = tilePerm.length; l < ln; l++) {
								let tile = this.deepCopy(tilePerm[l]);
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
								let perpVectorAfter = this.deepCopy(perpVectorBefore);
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

	//* Choose a play from valid play pool
	//* Currently works by choosing highest scoring play
	choosePlay() {
		this.validPlays.sort((a, b) => b.score - a.score);
		return this.validPlays[0];
	}
}



onmessage = e => {
	eval(e.data.functions);
	Bot.prototype.uniquify = uniquify;
	Bot.prototype.transpose = transpose;
	Bot.prototype.deepCopy = deepCopy;
	Bot.prototype.findScoredWord = findScoredWord;
	Bot.prototype.testConnectivity = testConnectivity;
	Bot.prototype.calculateScore = calculateScore;
	Bot.prototype.testPlay = testPlay;

	board = e.data.board;
	tileSet = e.data.tileSet;
	tileMap = e.data.tileMap;
	wordTrie = e.data.wordTrie;
	Object.setPrototypeOf(wordTrie, Trie.prototype);


	// Actually generating plays
	var botInstance = new Bot(e.data.rackTiles);

	botInstance.unscramble();
	let rackString = "";
	for (let t = 0, tn = botInstance.rackTiles.length; t < tn; t++) {
		rackString += botInstance.rackTiles[t].letter;
		if (t < tn - 1) rackString += ",";
	}
	console.log(`${rackString} → Generated ${botInstance.tilePerms.length.toLocaleString()} tile permutations...`);

	botInstance.generatePlays();
	var secondsElapsed = botInstance.msElapsed / 1000;
	console.log(`Tested ${botInstance.playsTested.toLocaleString()} plays in ${secondsElapsed} seconds...`);
	console.log(`Found ${botInstance.validPlays.length.toLocaleString()} valid plays...`);

	var play = botInstance.choosePlay();
	console.log(play);


	postMessage(play);
};