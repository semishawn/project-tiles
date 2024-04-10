//* Visual functions
var tileElement = $(`
	<div class="tile" letter="">
		<div class="tile-inside">
			<div class="tile-letter"></div>
			<div class="tile-points"></div>
		</div>
	</div>
`);

function drawTilesFrontend() {
	$(".player-hand-tiles").empty();

	for (let t = 0; t < userHandTiles.length; t++) {
		let letter = userHandTiles[t];
		let newTileElement = tileElement.clone();

		newTileElement.attr("data-state", "hand");
		newTileElement.attr("letter", letter);
		if (letter == "?") {
			newTileElement.addClass("blank");
		} else {
			let points = tileSet.find(x => x.letter === letter).pts;
			newTileElement.find(".tile-letter").html(letter);
			newTileElement.find(".tile-points").html(points);
		}

		$(".player-hand-tiles").append(`
			<div class="tile-slot">
				<div class="tile-slot-indicator"></div>
				${newTileElement.prop("outerHTML")}
			</div>
		`);
	}
}

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
				<div class="cell" cell-id="${id}">
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

function updateBoardTiles() {
	$(`.tile[data-state="placed-board"]`).remove();

	for (let r = 0; r < tileMap.length; r++) {
		for (let c = 0; c < tileMap[r].length; c++) {
			let newTileElement = tileElement.clone();
			let cellIndex = r * board.length + c;
			let correspondingCell = $(".cell").eq(cellIndex);

			if (tileMap[r][c] != " ") {
				let letter = tileMap[r][c];
				let points = tileSet.find(x => x.letter === letter).pts;
				newTileElement.find(".tile-letter").html(letter);
				newTileElement.find(".tile-points").html(points);
				newTileElement.attr("data-state", "placed-board");
				newTileElement.css({
					"top": correspondingCell.position().top - inputBorderWidth,
					"left": correspondingCell.position().left - inputBorderWidth
				});
				$(".play-screen").append(newTileElement);
			}
		}
	}
}

function updateTileBagFrontend() {
	$(".tilebag-count").html(tileBag.length);

	tilesContainer = $(".tilebag-tiles-container");
	tilesContainer.empty();
	for (let l = 0, ln = tileBag.length; l < ln; l++) {
		let letter = tileBag[l];
		let newTileElement = tileElement.clone();
		let rotLimit = 8;
		let randomRot = Math.random() * 2 * rotLimit - rotLimit;

		if (letter == "?") {
			newTileElement.addClass("blank");
		} else {
			let points = tileSet.find(x => x.letter === letter).pts;
			newTileElement.find(".tile-letter").html(letter);
			newTileElement.find(".tile-points").html(points);
		}

		newTileElement.css("transform", `rotate(${randomRot}deg)`);
		tilesContainer.append(newTileElement);
	}
}

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



//* Game start function
function newGame(lId, eId) {
	// Dictionary variables
	let langExonym = languages[lId].exonym;
	dictionary = window[camelize(langExonym) + "Dict"];
	dictionarySet = new Set(dictionary);
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
	tileMap[7][7] = "A";
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
	userHandTiles = [];
	botHandTiles = [];

	// Player variables
	botName = languages[lId].editions[eId].botName;
	botScore = 0;
	userName = "Shawn";
	userScore = 0;
	handSize = 7;

	// Backend
	drawTilesBackend("user", handSize);
	drawTilesBackend("bot", handSize);

	// Frontend
	createBoard();
	updateBoardTiles();
	drawTilesFrontend();
	$(".bot-score-box").find(".player-name").html(botName);
	$(".user-score-box").find(".player-name").html(userName);
	$(".play-history-textbox").attr("placeholder", `Chat with ${botName}...`);
	updateTileBagFrontend();
	$(".play-screen").css("font-family", langFont);
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

$(".play-btn").click(function() {
	/* var play = {

	}
	play.score = calculateScore(play, tileSet, board); */

	for (let r = 0, rn = board.length; r < rn; r++) {
		for (let c = 0, cn = board[0].length; c < cn; c++) {
			tileMap[r][c] = playTileMap[r][c];
		}
	}

	// Backend
	applyPlay("user", play);
	var neededTiles = handSize - userHandTiles.length;
	drawTilesBackend("user", neededTiles);

	// Frontend
	updateBoardTiles();
	updateTileBagFrontend();
	$(".user-score").html(botScore);
	writeMessage("user", "play", play);
	drawTilesFrontend();
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
	if (e.code == "Enter") $(".play-history-send-btn").click();
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

$(document).keydown(function(e) {
	if (e.code == "Space") {
		botWorker.postMessage({
			board: board,
			tileSet: tileSet,
			tileMap: tileMap,
			handTiles: botHandTiles,
			dictionarySet: dictionarySet,
			functions: {
				uniquify: "" + uniquify,
				transpose: "" + transpose,
				deepCopy: "" + deepCopy,
				calculateScore: "" + calculateScore
			}
		});
	}
});

botWorker.onmessage = e => {
	let play = e.data;

	// Backend
	applyPlay("bot", play);
	let neededTiles = handSize - botHandTiles.length;
	drawTilesBackend("bot", neededTiles);

	// Frontend
	updateBoardTiles();
	updateTileBagFrontend();
	$(".bot-score-box").find(".player-score").html(botScore);
	writeMessage("bot", "play", play);
	$(".play-screen").attr("data-current-player", "user");
}