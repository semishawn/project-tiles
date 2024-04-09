//* Hover event
$("body").on("mouseenter", `.tile[data-state="hand"]`, function() {
	$(this).maxZ(`.tile[data-state="hand"]`);
})



//* Drag events
var dragging = false;

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
		let tileLetter = draggingTile.attr("letter");

		//* Success
		if ($(".cell:hover").length != 0) {
			let hoveredCell = $(".cell:hover");
			let cellOffsetLeft = hoveredCell.offset().left;
			let cellOffsetTop = hoveredCell.offset().top;

			// State change
			draggingTile.attr("data-state", "placed-hand");
			draggingTile.css({
				"left": cellOffsetLeft + "px",
				"top": cellOffsetTop + "px"
			});

			//? Backend
			let cellIndex = hoveredCell.index();
			chosenCellRow = Math.ceil(cellIndex / board.length);
			chosenCellCol = cellIndex % board.length;
			playTileMap[chosenCellRow][chosenCellCol] = tileLetter;
		}

		//! Fail
		else {
			// State change
			draggingTile.attr("data-state", "hand");
			draggingTile.css({
				"left": 0,
				"top": 0
			});

			//? Backend
			playTileMap[chosenCellRow][chosenCellCol] = " ";
		}

		$("body").css("cursor", "default");
		dragging = false;
	}
});