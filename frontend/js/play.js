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
function createHands() {
	$(".hand-tiles").empty();

	for (let i = 0; i < handSize; i++) {
		$(".hand-tiles").append(`
			<div class="tile-slot">
				<div class="tile-slot-indicator"></div>
			</div>
		`);
	}
}

//
function drawTilesFrontend(player) {
	let tilesContainer = $(".tilebag-tiles-container");
	let handTiles = userHandTiles;
	if (player == "bot") handTiles = botHandTiles;

	// Update tilebag
	$(".tilebag-count").html(tileBag.length);
	tilesContainer.empty();
	for (let l = 0, ln = tileBag.length; l < ln; l++) {
		let letter = tileBag[l];
		let newTileElement = tileElement.clone();
		let rotLimit = 8;
		let randomRot = Math.random() * 2 * rotLimit - rotLimit;

		if (letter == "?") newTileElement.addClass("blank");
		else newTileElement.find(".tile-letter").html(letter);
		newTileElement.css("transform", `rotate(${randomRot}deg)`);
		tilesContainer.append(newTileElement);
	}

	// Update hand
	for (let t = 0, tn = handTiles.length; t < tn; t++) {
		let letter = handTiles[t].letter;
		let newTileElement = tileElement.clone();
		let correspondingSlot = $(`.${player}-hand-tiles .tile-slot`).eq(t);

		newTileElement.attr("data-state", "hand");
		newTileElement.attr("data-letter", letter);
		newTileElement.attr("data-hand-index", t);
		if (letter == "?") {
			newTileElement.addClass("blank");
		} else {
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

	var scrollContainer = $(".play-history-scroll-container")[0];
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
		let cellIndex = tile.row * board.length + tile.col;
		let correspondingCell = $(".cell").eq(cellIndex);

		setTimeout(function() {
			newTileElement.animate({
				"top": correspondingCell.offset().top,
				"left": correspondingCell.offset().left
			}, tileMoveDuration);
		}, tileMoveDelay);
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
	tileMap[7][7] = {letter: "A", isBlank: false, row: 7, col: 7};
	playTileMap = newTileMap(board.length);

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
	handSize = 7;
	userHandTiles = [];
	botHandTiles = [];

	// Player variables
	botName = languages[lId].editions[eId].botName;
	botScore = 0;
	userName = "Shawn";
	userScore = 0;
	currentPlayer = "bot";

	$(".tilebag-count").html(tileBag.length);

	// Backend
	drawTilesBackend("user");
	drawTilesBackend("bot");

	// Frontend
	$(".play-screen").css("font-family", langFont);
	changePlayer("user");
	$(".play-history-textbox").attr("placeholder", `Chat with ${botName}...`);
	createBoard();
	createHands();

	$(".user-score-box").find(".player-name").html(userName);
	$(".bot-score-box").find(".player-name").html(botName);
	setTimeout(function() {
		drawTilesFrontend("user");
		drawTilesFrontend("bot");
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
	var hand = $(".player-hand-tiles");
    var tiles = hand.children();
    while (tiles.length) {
        hand.append(tiles.splice(Math.floor(Math.random() * tiles.length), 1)[0]);
	}
});

$(".recall-btn").click(function() {
	$(`.tile[data-state="placed-hand"]`).each(function() {
		$(this).attr("data-state", "hand");
		$(this).css({"top": "", "left": ""});
	});
});

$(".skip-btn").click(function() {
	writeMessage("user", "other", `${userName} has skipped their turn.`)
});

$(".exchange-btn").click(function() {
	drawTiles("user", handSize);
	updateTileBagFrontend();
});

/* $(".play-btn").click(function() {
	var play = {
	}
	play.score = calculateScore(play, tileSet, board);

	if (true) {
		for (let r = 0, rn = board.length; r < rn; r++) {
			for (let c = 0, cn = board[0].length; c < cn; c++) {
				tileMap[r][c] = playTileMap[r][c];
			}
		}

		// Backend
		// applyPlayBackend("user", play);
		let neededTiles = handSize - userHandTiles.length;
		drawTilesBackend("user", neededTiles);

		// Frontend
		$(".user-score").html(userScore);
		writeMessage("user", "play", play);
		drawTilesFrontend("user");
	}
}); */

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

$(".play-btn").on("click", function() {
	botWorker.postMessage({
		board: board,
		tileSet: tileSet,
		tileMap: tileMap,
		handTiles: botHandTiles,
		wordTrie: wordTrie,
		functions: {
			uniquify: "" + uniquify,
			transpose: "" + transpose,
			deepCopy: "" + deepCopy,
			calculateScore: "" + calculateScore
		}
	});
});

botWorker.onmessage = e => {
	let play = e.data;

	// Backend
	applyPlayBackend("bot", play);
	let neededTiles = handSize - botHandTiles.length;
	drawTilesBackend("bot", neededTiles);

	// Frontend
	botPlayTiles(play);
	drawTilesFrontend("bot");
	$(".bot-score-box").find(".player-score").html(botScore);
	writeMessage("bot", "play", play);
	changePlayer("user");
}