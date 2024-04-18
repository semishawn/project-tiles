//* Hover event
$("body").on("mouseenter", `.tile[data-state="hand"]`, function() {
	$(this).maxZ(`.tile[data-state="hand"]`);
})



//* Drag events
var dragging = false;
var draggingTile;

$("body").on("mousedown", `.tile[data-state*="hand"]`, function() {
	dragging = true;
	draggingTile = $(this);
	draggingTile.maxZ(`.tile[data-state="hand"]`);
	$("body").css("cursor", "grabbing");
});

$("body").on("mousemove", function(e) {
	if (dragging) {
		// State change
		draggingTile.attr("data-state", "dragging");
		draggingTile.css({
			"left": e.pageX - (bigTileDimension / 2) + "px",
			"top": e.pageY - (bigTileDimension / 4) + "px"
		});
	}
})
.on("mouseup", function() {
	if (dragging) {
		//* Success
		if ($(".cell:hover").length > 0) {
			let tileLetter = draggingTile.attr("data-letter");
			let hoveredCell = $(".cell:hover");
			let cellOffsetLeft = hoveredCell.offset().left;
			let cellOffsetTop = hoveredCell.offset().top;
			let cellRow = hoveredCell.attr("data-row");
			let cellCol = hoveredCell.attr("data-col");

			// Backend
			playTileMap[cellRow][cellCol] = tileLetter;

			// Frontend
			draggingTile.attr("data-state", "placed-hand");
			draggingTile.css({
				"left": cellOffsetLeft,
				"top": cellOffsetTop
			});
		}

		//! Fail
		else {
			let handIndex = draggingTile.attr("data-hand-index");
			let correspondingSlot = $(".user-hand-tiles .tile-slot").eq(handIndex);

			// Backend
			// playTileMap[cellRow][cellCol] = " ";

			// Frontend
			draggingTile.attr("data-state", "hand");
			draggingTile.css({
				"left": correspondingSlot.offset().top,
				"top": correspondingSlot.offset().top
			});
		}

		$("body").css("cursor", "default");
		dragging = false;
	}
});