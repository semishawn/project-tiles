//* Visual variables
var currentScreen = null;
var inputBorderWidth = parseFloat($(":root").css("--input-border-width"));
var standardCellDimension = parseInt($("html").css("font-size"));
var screenTransition = parseFloat($("main").css("transition-duration")) * 1000;
var inputTransition = parseFloat($(":root").css("--input-transition")) * 1000;
var bigTileDimension = $(".big-tile-sizer").outerWidth();
var tileBagContainer = $(".tilebag-tiles-container");
var historyContainer = $(".play-history-scroll-container");



//* Templates
var TileFE = {
	moveDur: 750,
	moveDurFast: 300,
	moveDelay: 200,
	template: $(`
		<div class="tile">
			<div class="tile-inside">
				<div class="tile-letter"></div>
				<div class="tile-points"></div>
			</div>
		</div>
	`)
}

var editionInputTemplate = $(`<input type="radio" id="" name="edition-option" autocomplete="off">`);
var editionLabelTemplate = $(`
	<label class="btn edition-option" for="" data-sold="false">
		<div class="edition-verified-icon"></div>

		<div class="edition-box">
			<div class="edition-title-isometric">
				<div class="edition-title-rotate">
					<div class="edition-title"></div>
				</div>
			</div>
		</div>

		<div class="edition-globe">
			<div class="edition-title-border">
				<div class="edition-title"></div>
			</div>
		</div>

		<div class="edition-lang">
			<div class="edition-exonym"></div>
			<div class="edition-endonym"></div>
		</div>

		<div class="edition-release"></div>
	</label>
`);



//* Visual
$.fn.maxZ = function(selector) {
	let topZ = 0;

	$(selector).each(function() {
		let thisZ = parseInt($(this).css("z-index"));
		if (thisZ >= topZ) topZ = thisZ;
	});

	$(this).css("z-index", topZ + 1);
}

$.fn.btnify = function() {
	let oldHtml = $(this).html();
	$(this).html(`
		<div class="btn-stalk btn-stalk1"></div>
		<div class="btn-stalk btn-stalk2"></div>
		<div class="btn-inside">${oldHtml}</div>
	`);
}

function generateTileFE(tile) {
	let newTileElement = TileFE.template.clone();

	for (let prop in tile) {
		let kebabProp = camelToKebab(prop);
		let value = (tile[prop] == null) ? "" : tile[prop];
		newTileElement.attr(`data-${kebabProp}`, value);
	}

	if (!tile.blank) {
		newTileElement.attr("data-letter", tile.letter);
		newTileElement.find(".tile-letter").html(tile.letter);
		newTileElement.find(".tile-points").html(tile.points);
	}

	return newTileElement;
}

function newScreen(screen) {
	currentScreen = screen;
	let screenId = $("." + screen + "-screen").index();
	$("main").css("margin-left", -100 * screenId + "vw");
}

$(document).ready(function() {
	$(".btn").each(function() {
		$(this).btnify()
	});

	newScreen("title");
});