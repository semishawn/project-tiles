//* UI Variables
var backBtnLang = $(".lang-screen .back-btn");
var backBtnEdit = $(".edition-screen .back-btn");
var backBtnPref = $(".pref-screen .back-btn");

var contBtnLang = $(".lang-screen .continue-btn");
var contBtnEdit = $(".edition-screen .continue-btn");
var contBtnPref = $(".pref-screen .continue-btn");

var editionRadioTemplate = $(`input[name="edition-option"]`);
var editionOptionTemplate = $(".edition-option");

var langId = 0;
var editionId = 0;

var botIconOptions = [
	"robot",
	"robot",
	"robot",
	"robot",
	"robot",
	"robot",
];
var userIconOptions = [
	"dragon",
	"dragon",
	"dragon",
	"dragon",
	"dragon",
	"dragon",
];



//* Visuals
languages.sort(function(a, b) {
	return a.exonym.localeCompare(b.exonym);
});

for (let i = 0; i < languages.length; i++) {
	let langExonym = languages[i].exonym;
	let langEndonym = languages[i].endonym;
	let langFont = `"Noto Sans"`;
	if (typeof languages[i].font !== 'undefined') langFont += `, "${languages[i].font}"`;

	let langOption = $(`
		<input type="radio" id="lang-option${i}" name="lang-option" autocomplete="off">
		<label class="lang-option btn" for="lang-option${i}">
			<div class="lang-exonym">${langExonym}</div>
			<div class="lang-endonym">${langEndonym}</div>
		</label>
	`);
	langOption.find(".lang-endonym").css("font-family", langFont);

	$(".lang-container").append(langOption);
}

for (let i = 0, n = botIconOptions.length + userIconOptions.length; i < n; i++) {
	let index = i % (n / 2);
	let player = "bot";
	let icon = botIconOptions[i];
	if ((i + 1) > (n / 2)) {
		player = "user";
		icon = userIconOptions[i];
	}

	$(`.${player}-icon-option-container`).append(`
		<input type="radio" name="${player}-icon" id="${player}-icon-option${index}">
		<label for="${player}-icon-option${index}" class="btn icon-option">
			<div class="player-icon">
				<i class="fa-solid fa-${icon}"></i>
			</div>
		</label>
	`);
}



//* Buttons
/*
let c1 = thisIndex > checkedIndex;
let c2 = continueBtnHotspot(thisOption);
let c3 = continueBtnHotspot(checkedOption);
let btnPrecedence = [];

if      ( c1 &&  c2 &&  c3) btnPrecedence = [checkedOption, thisOption, continueBtn1]; //* A
else if ( c1 &&  c2 && !c3) btnPrecedence = [checkedOption, thisOption, continueBtn1]; //* A
else if ( c1 && !c2 &&  c3) btnPrecedence = [checkedOption, continueBtn1, thisOption];
else if ( c1 &&  c2 && !c3) btnPrecedence = [checkedOption, thisOption, continueBtn1]; //* A
else if ( c1 && !c2 && !c3) btnPrecedence = [continueBtn1, checkedOption, thisOption];
else if (!c1 &&  c2 &&  c3) btnPrecedence = [thisOption, checkedOption, continueBtn1]; //* B
else if (!c1 &&  c2 && !c3) btnPrecedence = [thisOption, continueBtn1, checkedOption];
else if (!c1 && !c2 &&  c3) btnPrecedence = [thisOption, checkedOption, continueBtn1]; //* B
else if (!c1 && !c2 && !c3) btnPrecedence = [continueBtn1, thisOption, checkedOption];
*/


// Title screen
$(".title-play-btn").on("click", function() {
	newScreen("lang");
});

$(".download-btn").on("click", function() {
	newScreen("download");
});


// Language screen
$(".lang-container").on("click", ".lang-option", function() {
	let checkedOption = $("input:checked + .lang-option");
	if (checkedOption.length == 0)
		contBtnLang.removeAttr("disabled");
});

backBtnLang.on("click", function() {
	newScreen("title");
});

contBtnLang.on("click", function() {
	langId = $(`input[name="lang-option"]:checked`).attr("id");
	langId = parseInt(langId.replace("lang-option", ""));
	let langExonym = $(`input[name="lang-option"]:checked + label .lang-exonym`).html();
	let langEndonym = $(`input[name="lang-option"]:checked + label .lang-endonym`).html();
	let langFont = "Noto Sans";
	if (typeof languages[langId].font !== "undefined") langFont = languages[langId].font;

	$(".edition-lang-exonym").html(langExonym);
	$(".edition-lang-endonym").html(langEndonym);
	$(".edition-lang-endonym").css("font-family", langFont);

	$(".edition-options-container").empty();
	let editions = languages[langId].editions;
	for (let i = 0, n = editions.length; i < n; i++) {
		let editionRadio = editionRadioTemplate.clone();
		let editionOption = editionOptionTemplate.clone();

		let editionTitle = editions[i].title;
		let editionExonym = editions[i].langExonym;
		let editionEndonym = editions[i].langEndonym;
		let editionMfr = editions[i].mfr;
		let editionYear = editions[i].year;
		let editionRegion = editions[i].region;
		let editionRelease = `${editionYear} ${editionMfr}`;

		if (editionMfr == "Mattel" || editionMfr == "Hasbro") {
			editionOption.attr("data-verified", true);
			editionRelease = editionRegion + ", " + editionRelease;
		}

		if (typeof editionRegion !== "undefined")
			editionOption.attr("data-sold", true);

		editionOption.find(".edition-title").html(editionTitle).css("font-family", langFont);;
		editionRadio.attr("id", "edition-option" + i);
		editionOption.attr("for", "edition-option" + i);
		editionOption.find(".edition-exonym").html(editionExonym);
		editionOption.find(".edition-endonym").html(editionEndonym);
		editionOption.find(".edition-endonym").css("font-family", langFont);
		editionOption.find(".edition-release").html(editionRelease);

		$(".edition-screen .edition-options-container").append([editionRadio, editionOption]);
	}

	contBtnEdit.attr("disabled", true);
	newScreen("edition");
});


// Edition screen
backBtnEdit.on("click", function() {
	newScreen("lang");
});

contBtnEdit.on("click", function() {
	editionId = $(`input[name="edition-option"]:checked`).attr("id");
	editionId = parseInt(editionId.replace("edition-option", ""));

	newGame(langId, editionId);
	setTimeout(function() {
		newScreen("play");
	}, 500);
});

$("body").on("click", ".edition-option", function() {
	if (!$(`input[name="edition-option"]`).is(":checked"))
		contBtnEdit.removeAttr("disabled");
});


// Preferences screen
/* backBtnPref.on("click", function() {
	newScreen("edition");
});

contBtnPref.on("click", function() {
	editionId = $(`input[name="edition-option"]:checked`).attr("id");
	editionId = parseInt(editionId.replace("edition-option", ""));

	newGame(langId, editionId);
	setTimeout(function() {
		newScreen("play");
	}, 500);
}); */