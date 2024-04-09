//* Global variables
var standardCellDimension = parseInt($("html").css("font-size"));
var inputBorderWidth = parseFloat($(":root").css("--input-border-width"));
var bigTileDimension = $(".big-tile-sizer").outerWidth();



//* Global functions
function slugify(str) {
	return String(str)
		.normalize("NFKD") // split accented characters into their base characters and diacritical marks
		.replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
		.trim() // trim leading or trailing whitespace
		.toLowerCase() // convert to lowercase
		.replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
		.replace(/\s+/g, "-") // replace spaces with hyphens
		.replace(/-+/g, "-"); // remove consecutive hyphens
}

function camelize(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
		return index === 0 ? word.toLowerCase() : word.toUpperCase();
	}).replace(/\s+/g, "");
}

$.fn.maxZ = function(selector) {
	var topZ = 0;

	$(selector).each(function() {
		var thisZ = parseInt($(this).css("z-index"));
		if (thisZ > topZ) topZ = thisZ;
	});

	$(this).css("z-index", topZ + 1);
}

function tileMapToString(arr) {
	return JSON.stringify(arr)
		.replaceAll("[[", "[")
		.replaceAll("]]", "]")
		.replaceAll("],", "],\n");
}

function newScreen(screen) {
	let screenId = $("." + screen + "-screen").index();
	$("main").css("margin-left", -100 * screenId + "vw");
}



//* On load
$.fn.btn = function() {
	var oldHtml = this.html();
	this.html(`
		<div class="btn-stalk btn-stalk1"></div>
		<div class="btn-stalk btn-stalk2"></div>
		<div class="btn-inside">${oldHtml}</div>
	`);
}

$(document).ready(function() {
	$(".btn").each(function() {
		$(this).btn();
	});

	// newScreen("title");
	newGame(17, 0);
	newScreen("play");
});