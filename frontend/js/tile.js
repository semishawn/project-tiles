//* Hover event
$("body").on("mouseenter", `.tile[data-state*="rack"]`, function() {
	$(this).maxZ(".tile");
})
.on("mouseleave", `.tile[data-state*="rack"]`, function() {
	let zTile = parseInt($(".play-screen").css("--z-tile"));
	$(this).css("z-index", zTile);
});



//* Drag events
var Drag = {
	mousedown: false,
	active: false,
	tile: null,
	startX: 0,
	startY: 0,
	distance: 0,

	reset: function() {
		this.mousedown = false;
		this.active = false;
		this.tile = null;
		this.startX = 0;
		this.startY = 0;
		this.distance = 0;
	}
}

$("body").on("mousedown", `.tile[data-state*="rack"]`, function(e) {
	Drag.mousedown = true;
	Drag.tile = $(this);
	Drag.startX = e.clientX;
	Drag.startY = e.clientY;
	$("body").css("cursor", "grabbing");
});

$("body").on("mousemove", function(e) {
	if (Drag.mousedown) {
		Drag.distance = Math.round(Math.sqrt(Math.pow(Drag.startY - e.clientY, 2) + Math.pow(Drag.startX - e.clientX, 2)));
		Drag.active = (Drag.distance > 10);

		if (Drag.active) {
			// State change
			Drag.tile.attr("data-state", "dragging");
			Drag.tile.css({
				"left": e.clientX - (bigTileDimension / 2) + "px",
				"top": e.clientY - (bigTileDimension / 4) + "px"
			});
		}
	}
})
.on("mouseup", function() {
	if (Drag.active) {
		let rackIndex = Drag.tile.attr("data-rack-index");
		let tile = Game.User.rackTiles[rackIndex];

		//* Success
		if ($(".cell:hover").length > 0) {
			let hoveredCell = $(".cell:hover");
			let cellRow = parseInt(hoveredCell.attr("data-row"));
			let cellCol = parseInt(hoveredCell.attr("data-col"));
			let cellOffsetLeft = hoveredCell.offset().left;
			let cellOffsetTop = hoveredCell.offset().top;

			// Backend
			tile.state = "placed-rack";
			tile.row = cellRow;
			tile.col = cellCol;

			// Frontend
			Drag.tile.attr({
				"data-state": "placed-rack",
				"data-row": cellRow,
				"data-col": cellCol
			}).css({
				"left": cellOffsetLeft,
				"top": cellOffsetTop
			});

			if (tile.letter == null) Drag.tile.changeLetter();
		}

		//! Fail
		else {
			let correspondingSlot = $(`.user-rack-tiles .tile-slot`).eq(rackIndex);

			// Backend
			tile.state = "rack";
			tile.row = null;
			tile.col = null;

			// Frontend
			Drag.tile.attr({
				"data-state": "rack",
				"data-row": "",
				"data-col": ""
			});
			Drag.tile.moveTo(correspondingSlot);
		}

		let tilesPlayed = Game.User.rackTiles.filter(tile => tile.state === "placed-rack");
		Game.User.testPlay(tilesPlayed);
		$(".play-btn").attr("disabled", !Game.User.currentPlay.valid);
		
		console.log(Game.User.currentPlay);
	}

	Drag.reset();
	$("body").css("cursor", "default");
});



//* Dialogs
// Blank
$("body").on("click", `.tile[data-player="user"][data-state*="rack"][data-blank="true"]`, function() {
	let $this = $(this);
	if (Game.currentDialog == null) $this.changeLetter();
});
$("body").on("click", ".blank-option", function() {
	let letter = $(this).attr("data-letter");
	let correspondingTile = $(`.tile[data-player="user"][data-rack-index="${Game.currentBlankIndex}"]`);

	Game.User.rackTiles[Game.currentBlankIndex].letter = letter;
	correspondingTile.attr("data-letter", letter);
	correspondingTile.find(".tile-letter").html(letter);
	Game.currentBlankIndex = null;

	hideDialog();
});

// Exchange
$("body").on("click", `.tile[data-player="user"][data-state*="rack"]`, function() {
	let $this = $(this);

	if (Game.currentDialog == "exchange") {
		let rackIndex = $this.attr("data-rack-index");
		let tile = Game.User.rackTiles[rackIndex];
		let exchange = tile.exchange;

		if (exchange == false) {
			correspondingSlot = $(".exchange-dialog .tile-slot").eq(rackIndex);
			tile.exchange = true;
			$this.attr("data-exchange", "true");
		} else {
			correspondingSlot = $(`.user-rack-tiles .tile-slot`).eq(rackIndex);
			tile.exchange = false;
			$this.attr("data-exchange", "false");
		}

		$this.moveTo(correspondingSlot, TileElement.moveDurFast);
	}
});