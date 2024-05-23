//* Visual functionality
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

var tileBagContainer = $(".tilebag-tiles-container");

$.fn.moveTo = function(element, duration = TileElement.moveDur) {
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

$.fn.stripFE = function() {
	let $this = $(this);
	let blank = JSON.parse($this.attr("data-blank"));

	$this.attr("data-state", "bag");
	if (blank) $this.attr("data-letter", "");
	$this.attr("data-rack-index", "");
	$this.attr("data-row", "");
	$this.attr("data-col", "");
	$this.attr("data-exchange", "false");
}

function generateTileBagFE() {
	$(".tilebag-count").html(Game.tileBag.length);

	tileBagContainer.empty();
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
		tileBagContainer.append(newTileElement);
	}
}

function sortTileBagFE() {
	let tileElements = tileBagContainer.children(".tile").get();
	tileElements.sort((a, b) => $(a).attr("data-bag-index") - $(b).attr("data-bag-index"));
	$.each(tileElements, function(i, tile) {
		tileBagContainer.append(tile);
	});
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

function changePlayerTo(player) {
	Game.currentPlayer = player;
	$(".play-screen").attr("data-current-player", player.type);
}

function drawTilesFE(player, numTiles) {
	let numTilesLeft = player.rackTiles.length - numTiles;

	for (let t = 0, tn = player.rackTiles.length; t < tn; t++) {
		let correspondingSlot = $(`.${player.type}-rack-tiles .tile-slot`).eq(t);

		if (t < numTilesLeft) {
			let tile = $(`.tile[data-player="${player.type}"][data-state="rack"]`).eq(t);
			tile.attr("data-rack-index", t);
			tile.moveTo(correspondingSlot, TileElement.moveDurFast);
		} else {
			let bagIndex = player.rackTiles[t].bagIndex;
			let tile = $(`.tile[data-state="bag"][data-bag-index="${bagIndex}"]`);
			
			tile.detach().appendTo(".play-screen")
			.attr({
				"data-state": "rack",
				"data-rack-index": t,
				"data-player": player.type
			})
			.css({
				"left": tileBagContainer.offset().left,
				"top": tileBagContainer.offset().top,
				"transform": ""
			});
			setTimeout(function() {
				tile.moveTo(correspondingSlot);
			}, (t - numTilesLeft) * TileElement.moveDelay);
		}
	}

	$(".tilebag-count").html(Game.tileBag.length);
}

function recallTilesFE(player) {
	$(`.tile[data-player="${player.type}"][data-state="placed-rack"]`).each(function() {
		let rackIndex = $(this).attr("data-rack-index");
		let correspondingSlot = $(`.${player.type}-rack-tiles .tile-slot`).eq(rackIndex);

		$(this).attr("data-state", "rack");
		$(this).moveTo(correspondingSlot);
	});
}

function exchangeTilesFE(player) {
	$(`.tile[data-player="${player.type}"][data-exchange="true"]`).each(function() {
		$(this).stripFE();
		$(this).detach().appendTo(tileBagContainer);
	});
	sortTileBagFE();
}

function applyPlayFE(player, play) {
	if (player.type == "bot") {
		for (let t = 0; t < play.tilesPlayed.length; t++) {
			let tile = play.tilesPlayed[t];
			let rackIndex = tile.rackIndex;
			let correspondingTile = $(`.tile[data-player="bot"][data-state="rack"][data-rack-index="${rackIndex}"]`);
			let correspondingCell = $(`.cell[data-row="${tile.row}"][data-col="${tile.col}"]`);

			setTimeout(function() {
				correspondingTile.attr("data-state", "placed-board");
				correspondingTile.moveTo(correspondingCell);
			}, t * TileElement.moveDelay);
		}
	}

	$(`.tile[data-player="${player.type}"][data-state="placed-rack"]`).attr("data-state", "placed-board");
	$(`.${player.type}-score-box`).find(".player-score").html(player.score);
}

function addToHistory(player, type, content = "") {
	let messageString = "";
	let icon = i_user;
	if (player.type == "bot") icon = i_bot;

	switch(type) {
		case "talk":
			messageString = `"${content}"`;
			break;
		case "play":
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
			break;
		case "skip":
			messageString = `${player.name} skipped their turn.`;
			break;
		case "exchange":
			let plural = (content > 1 ? "s" : "");
			messageString = `${player.name} has exchanged <b>${content}</b> tile${plural}.`;
			break;
		case "other":
			messageString = `<i>${content}</i>`;
			break;
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



//* Play functionality
function newGameFE() {
	$(":root").css({
		"--board-dimension": Game.board.length,
		"--cell-dimension": (standardCellDimension * 15) / Game.board.length + "px"
	});
	$(".play-screen").css("font-family", Game.langFont);
	$(".user-score-box").find(".player-name").html(Game.User.name);
	$(".bot-score-box").find(".player-name").html(Game.Bot.name);
	$(".tilebag-count").html(Game.tileBag.length);
	$(".play-history-textbox").attr("placeholder", `Chat with ${Game.Bot.name}...`);
	$(".blank-option-container").css("--columns", Game.rackSize);

	generateTileBagFE();
	generateBoardFE();
	generateRacksFE();
	generateBlankOptionsFE();

	changePlayerTo(Game.User);
}

function onValidPlay(player, play) {
	// Backend
	player.applyPlay(play);
	let numTilesDesired = play.tilesPlayed.length;
	let numTilesAllowed = Math.min(numTilesDesired, Game.tileBag.length);
	player.drawTiles(numTilesAllowed);

	// Frontend
	applyPlayFE(player, play);
	addToHistory(player, "play", play);
	drawTilesFE(player, numTilesAllowed);
	$(`.${player.type}-score-box`).find(".player-score").html(player.score);
}

var BotWorker = new Worker("../backend/js/bot.js");

function postBotPlay() {
	BotWorker.postMessage(JSON.stringify(Game));
}

BotWorker.onmessage = e => {
	let move = e.data;
	console.log(move);

	switch(move.type) {
		case "play":
			onValidPlay(Game.Bot, move.data);
			break;
		case "skip":
			addToHistory(Game.Bot, "skip");
			break;
	}

	changePlayerTo(Game.User);
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
	// let messageContainer = $(".play-history-scroll-container")[0];

	if (textboxVal.length > 0) {
		addToHistory(Game.User, "talk", textboxVal);
		$(".play-history-textbox").val("");

		setTimeout(function() {
			addToHistory(Game.Bot, "talk", Game.botResponse);
		}, 2000);
	}

	// messageContainer.scrollTo(0, messageContainer.scrollHeight);
});
$(document).keydown(function(e) {
	if (e.code == "Enter" && $(".play-history-textbox").is(":focus")) {
		$(".play-history-send-btn").click();
	} else if (e.key == "p") {
		let oldPlayerType = Game.currentPlayer.type;
		let newPlayer = Game.Bot;
		if (oldPlayerType == "bot") newPlayer = Game.User;
		changePlayerTo(newPlayer);
	}
});

// Rack
$(".shuffle-btn").on("click", function() {
	// Backend
	let randomRackIndexes = [...Array(Game.User.rackTiles.length).keys()];
	for (let t = 0, tn = Game.User.rackTiles.length; t < tn; t++) {
		let tile = Game.User.rackTiles[t];
		let oldRackIndex = tile.rackIndex;
		let randomRackIndexesIndex = Math.floor(Math.random() * randomRackIndexes.length);
		let newRackIndex = randomRackIndexes.splice(randomRackIndexesIndex, 1)[0];
		let correspondingTile = $(`.tile[data-player="user"][data-state*="rack"]`).eq(oldRackIndex);

		tile.rackIndex = newRackIndex;
		correspondingTile.attr("data-rack-index", newRackIndex);
	}
	Game.User.rackTiles.sort((a, b) => a.rackIndex - b.rackIndex);

	// Frontend
	let tileElements = $(".play-screen").children(`.tile[data-player="user"][data-state*="rack"]`).get();
	tileElements.sort((a, b) => $(a).attr("data-rack-index") - $(b).attr("data-rack-index"));
	$.each(tileElements, function(i, tile) {
		let rackIndex = $(tile).attr("data-rack-index");
		let state = $(tile).attr("data-state");
		let correspondingSlot = $(".user-rack-tiles .tile-slot").eq(rackIndex);

		$(".play-screen").append(tile);
		if (state == "rack") $(tile).moveTo(correspondingSlot, TileElement.moveDurFast);
	});
});
$(".recall-btn").on("click", function() {
	Game.User.recallTiles();
	recallTilesFE(Game.User);
});

// Skip
$(".skip-btn").on("click", function() {
	showDialog("skip");
});
$(".confirm-skip-btn").on("click", function() {
	Game.User.recallTiles();
	recallTilesFE(Game.User);

	hideDialog();
	addToHistory(Game.User, "skip");
	changePlayerTo(Game.Bot);
	postBotPlay();
});
$(".deny-skip-btn").on("click", function() {
	hideDialog();
});

// Exchange
$(".exchange-btn").on("click", function() {
	// Game.User.recallTiles();
	// recallTilesFE(Game.User);
	showDialog("exchange");
});
$(".confirm-exchange-btn").on("click", function() {
	let numTilesExchanged = Game.User.rackTiles.filter(tile => tile.exchange === true).length;

	Game.User.exchangeTiles();
	exchangeTilesFE(Game.User);
	Game.User.drawTiles(numTilesExchanged);
	drawTilesFE(Game.User, numTilesExchanged);

	hideDialog();
	addToHistory(Game.User, "exchange", numTilesExchanged);
	changePlayerTo(Game.Bot);
	postBotPlay();
});
$(".deny-exchange-btn").on("click", function() {
	hideDialog();
	$(`.tile[data-exchange="true"]`).each(function() {
		let rackIndex = $(this).attr("data-rack-index");
		let correspondingSlot = $(".user-rack-tiles .tile-slot").eq(rackIndex);
		$(this).attr("data-exchange", "false");
		$(this).moveTo(correspondingSlot);
	});
});

// Play
$(".play-btn").on("click", function() {
	onValidPlay(Game.User, Game.User.currentPlay.data);
	Game.User.currentPlay = null;
	$(".play-btn").attr("disabled", true);

	changePlayerTo(Game.Bot);
	postBotPlay();
});