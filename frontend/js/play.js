//* Visual
var TileElement = {
	moveDur: 500,
	moveDurFast: 250,
	moveDelay: 150,
	html: $(`
		<div class="tile">
			<div class="tile-inside">
				<div class="tile-letter"></div>
				<div class="tile-points"></div>
			</div>
		</div>
	`)
}

$.fn.moveTo = function(element, duration) {
	$(this).animate({
		"top": $(element).offset().top,
		"left": $(element).offset().left
	}, duration);
}

$.fn.changeLetter = function() {
	let rackIndex = $(this).attr("data-rack-index");
	let letter = $(this).attr("data-letter");

	Game.currentBlankIndex = rackIndex;
	$(`[name="blank-option"]`).prop("checked", false);
	if (letter != null) $(`#blank-option-${letter}`).prop("checked", true);

	showDialog("blank");
}

function generateTileBagFE() {
	let tilesContainer = $(".tilebag-tiles-container");
	$(".tilebag-count").html(Game.tileBag.length);

	tilesContainer.empty();
	for (let t = 0, tn = Game.tileBag.length; t < tn; t++) {
		let letter = Game.tileBag[t].letter;
		let blank = Game.tileBag[t].blank;
		let points = Game.tileBag[t].points;
		let newTileElement = TileElement.html.clone();

		Object.keys(Game.tileBag[t]).forEach(key => {
			let kebabKey = camelToKebab(key);
			let value = Game.tileBag[t][key];
			if (value == null) value = "";
			newTileElement.attr(`data-${kebabKey}`, value);
		});

		if (!blank) {
			newTileElement.attr("data-letter", letter)
			newTileElement.find(".tile-letter").html(letter);
			newTileElement.find(".tile-points").html(points);
		}

		let rotLimit = 8;
		let randomRot = Math.random() * 2 * rotLimit - rotLimit;
		newTileElement.css("transform", `rotate(${randomRot}deg)`);
		tilesContainer.append(newTileElement);
	}
}

function generateBoardFE() {
	for (let i = 0; i < Game.board.length; i++) {
		let letter = Game.alphabet[i];
		if (i >= Game.alphabet.length) {
			letter = Game.alphabet[i % Game.alphabet.length];
			for (let j = 0; j < Math.floor(i / Game.alphabet.length); j++) {
				letter += Game.alphabet[i % Game.alphabet.length];
			}
		}

		$(".board-letter-container").append(`<div class="board-letter">${letter}</div>`);
		$(".board-number-container").append(`<div class="board-number">${i + 1}</div>`);
	}

	for (let r = 0; r < Game.board.length; r++) {
		for (let c = 0; c < Game.board[r].length; c++) {
			let id = Game.board[r][c];
			let cellElement = $(`
				<div class="cell" data-cell-id="${id}" data-row="${r}" data-col="${c}">
					<div class="cell-indicator"></div>
				</div>
			`);

			if (id == 1) {
				cellElement.append(i_star);
			} else if (id > 1) {
				abbr = Game.premiumCells.find(x => x.id === id).abbr;
				cellElement.append(`<div class="cell-abbr">${abbr}</div>`);
			}
	
			$(".board").append(cellElement);
		}
	}
}

function generateRacksFE() {
	$(".rack-tiles").empty();

	for (let i = 0; i < Game.rackSize; i++) {
		$(".rack-tiles").append(`
			<div class="tile-slot">
				<div class="tile-slot-indicator"></div>
			</div>
		`);
	}
}

function generateBlankOptionsFE() {
	$(".blank-option-container").empty();
	for (let l = 0, ln = Game.tileSet.length - 1; l < ln; l++) {
		let letter = Game.tileSet[l].letter;
		let optionInput = $(`<input type="radio" id="blank-option-${letter}" name="blank-option">`);
		let optionLabel = $(`<label class="btn blank-option" for="blank-option-${letter}" data-letter="${letter}">${letter}</label>`);
		optionLabel.btnify();
		$(".blank-option-container").append(optionInput, optionLabel);
	}
}

function writeMessage(player, type, content) {
	let messageString = "";
	let icon = i_user;
	if (player.type == "bot") icon = i_bot;

	// From the textbox
	if (type == "talk") {
		messageString = `"${content}"`;
	}
	// After a successful play
	else if (type == "play") {
		let wordStrings = content.scoredWords;
		for (let w = 0, wn = wordStrings.length; w < wn; w++) {
			wordStrings[w] = `<b>${wordStrings[w].string}</b>`;
		}

		let wordsString = "";
		if (wordStrings.length == 1) {
			wordsString = wordStrings[0];
		} else if (wordStrings.length == 2) {
			wordsString = `${wordStrings[0]} and ${wordStrings[1]}`;
		} else if (wordStrings.length > 2) {
			let lastWord = wordStrings.pop();
			wordsString = wordStrings.join(", ") + ", and " + lastWord;
		}

		messageString = `${player.name} played ${wordsString} and scored <b>${content.score}</b> points.`;
	}
	// Skip, exchange, error message
	else if (type == "other") {
		messageString = `<i>${content}</i>`;
	}

	$(".play-history-scroll-container").append(`
		<div class="play-history-message" data-player="${player.type}">
			<div class="player-icon">${icon}</div>
			<div class="play-history-text">${messageString}</div>
		</div>
	`);

	let scrollContainer = $(".play-history-scroll-container")[0];
	scrollContainer.scrollTo(0, scrollContainer.scrollHeight);
}

function changePlayer(type) {
	Game.currentPlayer = type;
	$(".play-screen").attr("data-current-player", type);
}

function drawTilesFE(player, numTiles) {
	let tilesContainer = $(".tilebag-tiles-container");

	// Update rack tiles
	for (let t = 0, tn = player.rackTiles.length; t < tn; t++) {
		let correspondingSlot = $(`.${player.type}-rack-tiles .tile-slot`).eq(t);

		if (t < player.rackTiles.length - numTiles) {
			let correspondingTile = $(`.tile[data-player="${player.type}"][data-state="rack"]`).eq(t);
			correspondingTile.attr("data-rack-index", t);
			correspondingTile.moveTo(correspondingSlot, TileElement.moveDur);
		} else {
			let bagIndex = player.rackTiles[t].bagIndex;
			let tile = $(`.tile[data-state="bag"][data-bag-index="${bagIndex}"]`);

			tile.detach().appendTo(".play-screen")
			.attr({
				"data-state": "rack",
				"data-player": player.type
			})
			.css({
				"top": tilesContainer.offset().top,
				"left": tilesContainer.offset().left,
				"transform": "",
				"z-index": 9999
			});
			setTimeout(function() {
				tile.moveTo(".play-history-title", TileElement.moveDur);
				// tile.moveTo(correspondingSlot, TileElement.moveDur)
			}, t * TileElement.moveDelay);
		}
	}
}

function recallTilesFE() {
	$(`.tile[data-player="user"][data-state="placed-rack"]`).each(function() {
		let rackIndex = $(this).attr("data-rack-index");
		let correspondingSlot = $(`.user-rack-tiles .tile-slot`).eq(rackIndex);

		$(this).attr("data-state", "rack");
		$(this).moveTo(correspondingSlot, TileElement.moveDur, TileElement.moveDur);
	});
}

function exchangeTilesFE() {
	$(`.tile[data-player="user"][data-exchange="true"]`).each(function() {
		$(this).moveTo(".tilebag-tiles-container", TileElement.moveDur);
		$(this).attr("data-exchange", "false");
	});
}

function applyPlayFE(player, play) {
	if (player.type == "bot") {
		for (let t = 0; t < play.tilesPlayed.length; t++) {
			let tile = play.tilesPlayed[t];
			let rackIndex = tile.rackIndex;
			let correspondingTile = $(`.tile[data-player="bot"][data-state="rack"][data-rack-index="${rackIndex}"]`);
			let correspondingCell = $(`.cell[data-row="${tile.row}"][data-col="${tile.col}"]`);

			setTimeout(function() {
				correspondingTile.moveTo(correspondingCell, TileElement.moveDur);
			}, t * TileElement.moveDelay);
		}
	}

	$(`.tile[data-player="${player.type}"][data-state="placed-rack"]`).attr("data-state", "placed-board");
	$(`.${player.type}-score-box`).find(".player-score").html(player.score);
}

function showDialog(dialog) {
	Game.currentDialog = dialog;
	$(".play-screen").addClass("show-dialog");
	$(".play-screen").attr("data-dialog", dialog);
	$(`.${dialog}-dialog`).addClass("current-dialog");
}

function hideDialog() {
	Game.currentDialog = null;
	$(".play-screen").removeClass("show-dialog");
	$(".play-screen").attr("data-dialog", "");
	$(".dialog-box").removeClass("current-dialog");
}



//* Button functionality
// Play functions
$(".quit-btn").on("click", function() {
	newScreen("lang");
});
$(".start-over-btn").on("click", function() {
});
$(".resign-btn").on("click", function() {
});

$(".tilebag-icon").on("click", function() {
	let tileBagContainer = $(".tilebag-container");
	let showTime = parseFloat(tileBagContainer.css("--show-duration")) * 1000;

	$(".tilebag-scroll-container").scrollTop(0);
	tileBagContainer.addClass("show-tilebag");
	setTimeout(() => tileBagContainer.removeClass("show-tilebag"), showTime);
});

// Play history
$(".play-history-send-btn").on("click", function() {
	let textboxVal = $(".play-history-textbox").val();
	let messageContainer = $(".play-history-message-container")[0];

	if (textboxVal.length > 0) {
		writeMessage(Game.User, "talk", textboxVal);
		$(".play-history-textbox").val("");

		let botResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
		setTimeout(function() {
			writeMessage(Bot, "talk", botResponse);
		}, 2000);
	}

	messageContainer.scrollTo(0, messageContainer.scrollHeight);
});
$(document).keydown(function(e) {
	if (e.code == "Enter" && $(".play-history-textbox").is(':focus')) {
		$(".play-history-send-btn").on("click", );
	} else if (e.key == "p") {
		let oldPlayer = $(".play-screen").attr("data-current-player");
		let newPlayer = "bot";
		if (oldPlayer == "bot") newPlayer = "user";
		changePlayer(newPlayer);
	}
});

// Rack
$(".shuffle-btn").on("click", function() {
	let shuffleArray = arr => {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}

	shuffleArray(Game.User.rackTiles);

	$(`.tile[data-player="user"][data-state*="rack"]`).each(function(t) {
		let $this = $(this);
		let state = $this.attr("data-state");
		let rackIndex = Game.User.rackTiles[t].rackIndex;
		let correspondingSlot = $(`.user-rack-tiles .tile-slot`).eq(rackIndex);

		Game.User.rackTiles[t].rackIndex = t;
		$this.attr("data-rack-index", rackIndex);
		if (state == "rack") $this.moveTo(correspondingSlot, TileElement.moveDurFast);
	});
});
$(".recall-btn").on("click", function() {
	Game.User.recallTiles();
	recallTilesFE();
});

// Skip
$(".skip-btn").on("click", function() {
	showDialog("skip");
});
$(".confirm-skip-btn").on("click", function() {
	hideDialog();
	Game.User.recallTiles();
	recallTilesFE();
	changePlayer("bot");
	writeMessage(Game.User, "other", `${Game.User.name} has skipped their turn.`);
	BotWorker.postMessage(Game);
});
$(".deny-skip-btn").on("click", function() {
	hideDialog();
});

// Exchange
$(".exchange-btn").on("click", function() {
	Game.User.recallTiles();
	recallTilesFE();
	showDialog("exchange");
});
$(".confirm-exchange-btn").on("click", function() {
	Game.User.exchangeTiles();
	exchangeTilesFE();
	hideDialog();
});
$(".deny-exchange-btn").on("click", function() {
	hideDialog();
	$(`.tile[data-exchange="true"]`).each(function() {
		let rackIndex = $(this).attr("data-rack-index");
		let correspondingSlot = $(".user-rack-tiles .tile-slot").eq(rackIndex);
		$(this).attr("data-exchange", "false");
		$(this).moveTo(correspondingSlot, TileElement.moveDur);
	});
});



//* Play functionality
function newGameFE() {
	$(":root").css({
		"--board-dimension": Game.board.length,
		"--cell-dimension": (standardCellDimension * 15) / Game.board.length + "px"
	});
	$(".play-screen").css("font-family", Game.langFont);
	$(".user-score-box").find(".player-name").html(Game.User.name);
	$(".bot-score-box").find(".player-name").html(Game.Bot.name);
	$(".play-history-textbox").attr("placeholder", `Chat with ${Game.Bot.name}...`);
	$(".tilebag-count").html(Game.tileBag.length);
	$(".blank-option-container").css("--columns", Game.rackSize);

	generateTileBagFE();
	generateBoardFE();
	generateRacksFE();
	generateBlankOptionsFE();
	changePlayer("user");

	let screenTransition = parseFloat($(".screen").css("transition-duration")) * 1000;
	setTimeout(function() {
		drawTilesFE(Game.User, Game.rackSize);
		drawTilesFE(Game.Bot, Game.rackSize);
	}, screenTransition);
}

function userPlay(play) {
	// Backend
	Game.User.applyPlay(play);
	let numTilesDesired = play.tilesPlayed.length;
	let numTilesAllowed = Math.min(numTilesDesired, Game.tileBag.length);
	Game.User.drawTiles(numTilesAllowed);

	// FE
	applyPlayFE(Game.User, play);
	writeMessage(Game.User, "play", play);
	drawTilesFE(Game.User, numTilesAllowed);

	// Change player
	changePlayer("bot");
	BotWorker.postMessage(Game);
}

//! Clunky implementation; needs refactoring to avoid initializing play awkwardly
$(".play-btn").on("click", function() {
	let tilesPlayed = Game.User.rackTiles.filter(tile => tile.state === "placed-rack");
	let firstRow = Math.min(...tilesPlayed.map(tile => tile.row));
	let firstCol = Math.min(...tilesPlayed.map(tile => tile.col));
	let sameRow = tilesPlayed.every(tile => tile.row == firstRow);
	let sameCol = tilesPlayed.every(tile => tile.col == firstCol);
	let play = {
		valid: false,
		error: 0,
		data: null
	}

	if (sameRow || sameCol) {
		if (sameRow) {
			direction = "row";
			perpDirection = "col";
			vectorIndex = firstRow;
			paraVectors = Game.tileMap;
			perpVectors = transpose(Game.tileMap);
		} else {
			direction = "col";
			perpDirection = "row";
			vectorIndex = firstCol;
			paraVectors = transpose(Game.tileMap);
			perpVectors = Game.tileMap;
		}

		let vectorBefore = paraVectors[vectorIndex];
		let vectorAfter = deepCopy(vectorBefore);
		let scoredWords = [];
		let perpConnect = false;

		for (let t = 0, tn = tilesPlayed.length; t < tn; t++) {
			let tile = tilesPlayed[t];
			let indexAlongVector = tile.col;
			if (sameCol) indexAlongVector = tile.row;

			// Apply to parallel vector
			vectorAfter[indexAlongVector] = tile;

			// Perpendicular validity
			let perpVectorBefore = perpVectors[indexAlongVector];
			let perpVectorAfter = deepCopy(perpVectorBefore);
			perpVectorAfter[vectorIndex] = tile;
			if (!perpConnect) perpConnect = Game.User.testConnectivity(perpVectorBefore, perpDirection, [tile]);
			let perpWord = Game.User.findScoredWord(perpVectorBefore, perpVectorAfter);
			if (perpWord.string.length > 1) scoredWords.push(perpWord);
		}

		// Parallel validity
		let paraConnect = Game.User.testConnectivity(vectorBefore, direction, tilesPlayed);
		let paraWord = Game.User.findScoredWord(vectorBefore, vectorAfter);
		if (paraWord.string.length > 1) scoredWords.push(paraWord);

		play = Game.User.testPlay(tilesPlayed, paraConnect, perpConnect, scoredWords);
	}

	if (play.valid) userPlay(play.data);
	else {
		errorMessage = Game.errorMessages[play.error].format(play.data);
		writeMessage(Game.User, "other", errorMessage);
	}
});

var BotWorker = new Worker("../backend/js/bot.js");
BotWorker.onmessage = e => {
	let play = e.data;
	onBotPlay(play.data);
}

function onBotPlay(play) {
	// Backend
	Bot.applyPlay(play);
	let numTilesDesired = play.tilesPlayed.length;
	let numTilesAllowed = Math.min(numTilesDesired, tileBag.length);
	Bot.drawTilesBackend(numTilesAllowed);

	// FE
	applyPlayFE(Bot, play);
	$(".bot-score-box").find(".player-score").html(botScore);
	writeMessage(Bot, "play", play);
	setTimeout(function() {
		drawTilesFE(Bot, numTilesAllowed);
	}, TileElement.moveDur + (numTilesAllowed - 1) * TileElement.moveDelay);

	// Change player
	changePlayer("user");
}