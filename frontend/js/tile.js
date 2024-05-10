//* Hover event
$("body").on("mouseenter", `.tile[data-state="rack"]`, function() {
	$(this).maxZ(`.tile[data-state="rack"]`);
})



//* Drag events
var dragging = false;
var draggingTile;

$("body").on("mousedown", `.tile[data-state*="rack"]`, function() {
	dragging = true;
	draggingTile = $(this);
	draggingTile.maxZ(`.tile[data-state="rack"]`);
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
		let rackIndex = draggingTile.attr("data-rack-index");

		//* Success
		if ($(".cell:hover").length > 0) {
			let hoveredCell = $(".cell:hover");
			let cellRow = hoveredCell.attr("data-row");
			let cellCol = hoveredCell.attr("data-col");
			let cellOffsetLeft = hoveredCell.offset().left;
			let cellOffsetTop = hoveredCell.offset().top;

			// Backend
			userRackTiles[rackIndex].state = "placed-rack";
			userRackTiles[rackIndex].row = cellRow;
			userRackTiles[rackIndex].col = cellCol;

			// Frontend
			draggingTile.attr({
				"data-state": "placed-rack",
				"data-row": cellRow,
				"data-col": cellCol
			}).css({
				"left": cellOffsetLeft,
				"top": cellOffsetTop
			});
		}

		//! Fail
		else {
			let correspondingSlot = $(`.user-rack-tiles .tile-slot`).eq(rackIndex);

			// Backend
			userRackTiles[rackIndex].state = "rack";
			userRackTiles[rackIndex].row = null;
			userRackTiles[rackIndex].col = null;

			// Frontend
			draggingTile.attr({
				"data-state": "rack",
				"data-row": "",
				"data-col": ""
			}).animate({
				"top": correspondingSlot.offset().top,
				"left": correspondingSlot.offset().left
			}, tileMoveDurationQuick);
		}

		// Play button toggling
		if ($(`.tile[data-player="user"][data-state="placed-rack"]`).length > 0) {
			$(".play-btn").attr("disabled", false);
		} else {
			$(".play-btn").attr("disabled", true);
		}

		// Global
		$("body").css("cursor", "default");
		dragging = false;
	}
});