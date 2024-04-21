var tileMoveDuration = 500;
var tileMoveDurationQuick = tileMoveDuration / 2;
var tileMoveDelay = 150;



//* Visual functions
var tileElement = $(`
	<div class="tile">
		<div class="tile-inside">
			<div class="tile-letter"></div>
			<div class="tile-points"></div>
		</div>
	</div>
`);

//
function createBoard() {
	for (let i = 0; i < board.length; i++) {
		let letter = alphabet[i];
		if (i >= alphabet.length) {
			letter = alphabet[i % alphabet.length];
			for (let j = 0; j < Math.floor(i / alphabet.length); j++) {
				letter += alphabet[i % alphabet.length];
			}
		}

		$(".board-letter-container").append(`<div class="board-letter">${letter}</div>`);
		$(".board-number-container").append(`<div class="board-number">${i + 1}</div>`);
	}

	for (let r = 0; r < board.length; r++) {
		for (let c = 0; c < board[r].length; c++) {
			let id = board[r][c];
			let cellElement = $(`
				<div class="cell" data-cell-id="${id}" data-row="${r}" data-col="${c}">
					<div class="cell-indicator"></div>
				</div>
			`);

			if (id == 1) {
				cellElement.append(i_star);
			} else if (id > 1) {
				abbr = premiumCells.find(x => x.id === id).abbr;
				cellElement.append(`<div class="cell-abbr">${abbr}</div>`);
			}
	
			$(".board").append(cellElement);
		}
	}
}

//
function createRacks() {
	$(".rack-tiles").empty();

	for (let i = 0; i < rackSize; i++) {
		$(".rack-tiles").append(`
			<div class="tile-slot">
				<div class="tile-slot-indicator"></div>
			</div>
		`);
	}
}

//
function drawTilesFrontend(player, numTiles) {
	let rackTiles = userRackTiles;
	if (player == "bot") rackTiles = botRackTiles;
	let tilesContainer = $(".tilebag-tiles-container");

	// Update tilebag tiles
	$(".tilebag-count").html(tileBag.length);
	tilesContainer.empty();
	for (let l = 0, ln = tileBag.length; l < ln; l++) {
		let letter = tileBag[l];
		let newTileElement = tileElement.clone();
		let rotLimit = 8;
		let randomRot = Math.random() * 2 * rotLimit - rotLimit;

		if (letter == "?") newTileElement.attr("data-blank", "blank");
		else newTileElement.find(".tile-letter").html(letter);
		newTileElement.css("transform", `rotate(${randomRot}deg)`);
		tilesContainer.append(newTileElement);
	}

	// Update rack tiles
	for (let t = 0, tn = rackTiles.length; t < tn; t++) {
		let correspondingSlot = $(`.${player}-rack-tiles .tile-slot`).eq(t);

		if (t < rackTiles.length - numTiles) {
			let correspondingTile = $(`.tile[data-player="${player}"][data-state="rack"]`).eq(t);
			correspondingTile.attr("data-rack-index", t);
			correspondingTile.animate({
				"top": correspondingSlot.offset().top,
				"left": correspondingSlot.offset().left
			}, tileMoveDuration);
		} else {
			let letter = rackTiles[t].letter;
			let blank = rackTiles[t].blank;
			let newTileElement = tileElement.clone();

			newTileElement.attr({
				"data-state": "rack",
				"data-letter": letter,
				"data-blank": blank,
				"data-player": player,
				"data-rack-index": t,
				"data-row": "",
				"data-col": "",
			});

			if (!blank) {
				let points = tileSet.find(x => x.letter === letter).pts;
				newTileElement.find(".tile-letter").html(letter);
				newTileElement.find(".tile-points").html(points);
			}

			newTileElement.css({
				"top": tilesContainer.offset().top,
				"left": tilesContainer.offset().left
			});
			$(".play-screen").append(newTileElement);

			setTimeout(function() {
				newTileElement.animate({
					"top": correspondingSlot.offset().top,
					"left": correspondingSlot.offset().left
				}, tileMoveDuration);
			}, t * tileMoveDelay);
		}
	}
}

//
function writeMessage(player, type, content) {
	let messageString = "";
	let icon = i_user;
	if (player == "bot") icon = i_bot;

	// From the textbox
	if (type == "talk") {
		messageString = `"${content}"`;
	}
	// After a successful play
	else if (type == "play") {
		let name = "";

		if (player == "user") name = "You";
		else name = botName;

		let scoredWords = content.scoredWords;
		for (let w = 0, wn = scoredWords.length; w < wn; w++) {
			scoredWords[w] = `<b>${scoredWords[w].string.toLowerCase()}</b>`;
		}

		let wordsString = "";
		if (scoredWords.length == 1) {
			wordsString = scoredWords[0];
		} else if (scoredWords.length == 2) {
			wordsString = `${scoredWords[0]} and ${scoredWords[1]}`;
		} else if (scoredWords.length > 2) {
			let lastWord = scoredWords.pop();
			wordsString = scoredWords.join(", ") + ", and " + lastWord;
		}

		messageString = `${name} played ${wordsString} and scored <b>${content.score}</b> points.`;
	}
	// Skip, exchange, error message
	else if (type == "other") {
		messageString = `<i>${content}</i>`;
	}

	$(".play-history-scroll-container").append(`
		<div class="play-history-message" data-player="${player}">
			<div class="player-icon">${icon}</div>
			<div class="play-history-text">${messageString}</div>
		</div>
	`);

	let scrollContainer = $(".play-history-scroll-container")[0];
	scrollContainer.scrollTo(0, scrollContainer.scrollHeight);
}

//
function changePlayer(player) {
	currentPlayer = player;
	$(".play-screen").attr("data-current-player", player);
}

// 
function botPlayTiles(play) {
	for (let t = 0; t < play.tilesPlayed.length; t++) {
		let tile = play.tilesPlayed[t];
		let rackIndex = tile.rackIndex;
		let correspondingTile = $(`.tile[data-player="bot"][data-state="rack"][data-rack-index="${rackIndex}"]`);
		let cellIndex = tile.row * board.length + tile.col;
		let correspondingCell = $(".cell").eq(cellIndex);

		correspondingTile.attr("data-state", "placed-board");
		setTimeout(function() {
			correspondingTile.animate({
				"top": correspondingCell.offset().top,
				"left": correspondingCell.offset().left
			}, tileMoveDuration);
		}, t * tileMoveDelay);
	}
}



//* Game start function
function newGame(lId, eId) {
	// Word list variables
	let langExonym = languages[lId].exonym;
	let wordArray = window[camelize(langExonym) + "List"];
	wordTrie = new Trie();
	for (let w = 0, wn = wordArray.length; w < wn; w++) wordTrie.insert(wordArray[w]);

	// Font variables
	let langFont = `"Noto Sans"`;
	if (typeof languages[lId].font !== 'undefined') langFont += `, "${languages[lId].font}"`;

	// Board variables
	let boardId = languages[lId].editions[eId].boards[0];
	board = boards[boardId];
	$(":root").css({
		"--board-dimension": board.length,
		"--cell-dimension": (standardCellDimension * 15) / board.length + "px"
	});
	premiumCells = languages[lId].editions[eId].premiumCells;
	tileMap = newTileMap(board.length);
	// playTileMap = newTileMap(board.length);

	// Tile variables
	alphabet = languages[lId].editions[eId].alphabet;
	tileSet = languages[lId].editions[eId].tileSet;
	tileBag = [];
	tileBagCounts = deepCopy(tileSet);
	for (let l = 0; l < tileSet.length; l++) {
		let letterObject = tileSet[l];
		for (let i = 0; i < letterObject.freq; i++) {
			tileBag.push(letterObject.letter);
		}
		delete tileBagCounts[l].pts;
	}
	totalTileCount = tileBag.length;
	rackSize = 6;
	userRackTiles = [];
	botRackTiles = [];

	// Player variables
	botName = languages[lId].editions[eId].botName;
	botScore = 0;
	userName = "Shawn";
	userScore = 0;
	currentPlayer = "bot";

	$(".tilebag-count").html(tileBag.length);

	// Backend
	drawTilesBackend("user", rackSize);
	drawTilesBackend("bot", rackSize);

	// Frontend
	$(".play-screen").css("font-family", langFont);
	changePlayer("user");
	$(".play-history-textbox").attr("placeholder", `Chat with ${botName}...`);
	createBoard();
	createRacks();

	$(".user-score-box").find(".player-name").html(userName);
	$(".bot-score-box").find(".player-name").html(botName);
	setTimeout(function() {
		drawTilesFrontend("user", rackSize);
		drawTilesFrontend("bot", rackSize);
	}, 1000);
}



//* Button functionality
$(".quit-btn").click(function() {
	newScreen("lang");
});

$(".start-over-btn").click(function() {
});

$(".resign-btn").click(function() {
});

$(".shuffle-btn").click(function() {
	let shuffleArray = arr => {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}

	shuffleArray(userRackTiles);

	$(`.tile[data-player="user"][data-state*="rack"]`).each(function(t) {
		let $this = $(this);
		let rackIndex = userRackTiles[t].rackIndex;
		let correspondingSlot = $(`.user-rack-tiles .tile-slot`).eq(rackIndex);

		userRackTiles[t].rackIndex = t;
		$this.attr("data-rack-index", rackIndex);

		if ($this.is(`[data-state="rack"]`)) {
			$this.animate({
				"top": correspondingSlot.offset().top,
				"left": correspondingSlot.offset().left
			}, tileMoveDurationQuick);
		}
	});
});

$(".recall-btn").click(function() {
	$(`.tile[data-player="user"][data-state="placed-rack"]`).each(function() {
		let rackIndex = $(this).attr("data-rack-index");
		let correspondingSlot = $(`.user-rack-tiles .tile-slot`).eq(rackIndex);

		$(this).attr("data-state", "rack");
		$(this).animate({
			"top": correspondingSlot.offset().top,
			"left": correspondingSlot.offset().left
		}, tileMoveDuration);
	});
});

$(".skip-btn").click(function() {
	writeMessage("user", "other", `${userName} has skipped their turn.`)
});

$(".exchange-btn").click(function() {
	drawTiles("user", rackSize);
	updateTileBagFrontend();
});

$(".play-btn").click(function() {
	if ($(`.tile[data-player="user"][data-state="placed-rack"]`).length > 0) {
		let tilesPlayed = [];
		$(`.tile[data-player="user"][data-state="placed-rack"]`).each(function() {
			let rackIndex = $(this).attr("data-rack-index");
			let tileObject = userRackTiles[rackIndex];
			tilesPlayed.push(tileObject);
			$(this).attr("data-state", "placed-board");
		});

		let play = {
			tilesPlayed: tilesPlayed,
			score: 69
		}
		// play.score = calculateScore(play, tileSet, board);

		// Backend
		applyPlayBackend("user", play);
		let numTilesDesired = play.tilesPlayed.length;
		let numTilesAllowed = Math.min(numTilesDesired, tileBag.length);
		drawTilesBackend("user", numTilesAllowed);

		// Frontend
		$(".user-score-box").find(".player-score").html(userScore);
		// writeMessage("user", "play", play);
		drawTilesFrontend("user", numTilesAllowed);
		changePlayer("bot");

		botWorker.postMessage({
			board: board,
			tileSet: tileSet,
			tileMap: tileMap,
			rackTiles: botRackTiles,
			wordTrie: wordTrie,
			functions: {
				uniquify: "" + uniquify,
				transpose: "" + transpose,
				deepCopy: "" + deepCopy,
				calculateScore: "" + calculateScore
			}
		});
	}
});

$(".tilebag-icon").click(function() {
	let tileBagContainer = $(".tilebag-container");
	let showTime = parseFloat(tileBagContainer.css("--show-duration")) * 1000;

	$(".tilebag-scroll-container").scrollTop(0);
	tileBagContainer.addClass("show-tilebag");
	setTimeout(() => tileBagContainer.removeClass("show-tilebag"), showTime);
});

$(".play-history-send-btn").click(function() {
	var textboxVal = $(".play-history-textbox").val();
	var messageContainer = $(".play-history-message-container")[0];

	if (textboxVal.length > 0) {
		writeMessage("user", "talk", textboxVal);
		$(".play-history-textbox").val("");

		let botResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
		setTimeout(function() {
			writeMessage("bot", "talk", botResponse);
		}, 2000);
	}

	messageContainer.scrollTo(0, messageContainer.scrollHeight);
});
$(document).keydown(function(e) {
	if (e.code == "Enter" && $(".play-history-textbox").is(':focus'))
		$(".play-history-send-btn").click();
});

$(document).keydown(function(e) {
	if (e.key == "p") {
		if ($(".play-screen").attr("data-current-player") == "user")
			$(".play-screen").attr("data-current-player", "bot");
		else
			$(".play-screen").attr("data-current-player", "user");
	}
});



//* Bot play
var botWorker = new Worker("../backend/js/bot.js");

botWorker.onmessage = e => {
	let play = e.data;

	// Backend
	applyPlayBackend("bot", play);
	let numTilesDesired = play.tilesPlayed.length;
	let numTilesAllowed = Math.min(numTilesDesired, tileBag.length);
	drawTilesBackend("bot", numTilesAllowed);

	// Frontend
	botPlayTiles(play);
	$(".bot-score-box").find(".player-score").html(botScore);
	writeMessage("bot", "play", play);
	changePlayer("user");

	setTimeout(function() {
		drawTilesFrontend("bot", numTilesAllowed);
	}, tileMoveDuration + (numTilesAllowed - 1) * tileMoveDelay);
}