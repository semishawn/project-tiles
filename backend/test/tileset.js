var freqTotal = 0;
var tileCount = 198;
var flooredTileTotal = 0;

var frequencyTable = [
	{letter: "ཀ", freq: 179712},
	{letter: "ཁ", freq: 184778},
	{letter: "ག", freq: 746496},
	{letter: "ང", freq: 758283},
	{letter: "ཅ", freq: 46842},
	{letter: "ཆ", freq: 307367},
	{letter: "ཇ", freq: 475749},
	{letter: "ཉ", freq: 881788},
	{letter: "ཏ", freq: 426146},
	{letter: "ཐ", freq: 101914},
	{letter: "ད", freq: 782729},
	{letter: "ན", freq: 713789},
	{letter: "པ", freq: 798998},
	{letter: "ཕ", freq: 602650},
	{letter: "བ", freq: 70529},
	{letter: "མ", freq: 390048},
	{letter: "ཙ", freq: 477374},
	{letter: "ཚ", freq: 988308},
	{letter: "ཛ", freq: 692713},
	{letter: "ཝ", freq: 775505},
	{letter: "ཞ", freq: 305519},
	{letter: "ཟ", freq: 559942},
	{letter: "འ", freq: 265997},
	{letter: "ཡ", freq: 132075},
	{letter: "ར", freq: 253699},
	{letter: "ལ", freq: 128110},
	{letter: "ཤ", freq: 31827},
	{letter: "ས", freq: 957881},
	{letter: "ཧ", freq: 670009},
	{letter: "ཨ", freq: 60491},
];

for (let i = 0; i < frequencyTable.length; i++) {
	freqTotal += frequencyTable[i].freq;
}

for (let i = 0; i < frequencyTable.length; i++) {
	frequencyTable[i].prop = frequencyTable[i].freq / freqTotal;
	frequencyTable[i].part = frequencyTable[i].prop * tileCount;
	frequencyTable[i].tiles = Math.floor(frequencyTable[i].part);
}

for (let i = 0; i < frequencyTable.length; i++) {
	flooredTileTotal += frequencyTable[i].tiles;
}

for (let i = 0; i < (tileCount - flooredTileTotal); i++) {
	frequencyTable[i].tiles += 1;
}

var maxTileCount = Math.max(...frequencyTable.map(o => o.tiles));
for (let i = 0; i < frequencyTable.length; i++) {
	frequencyTable[i].pts = Math.ceil((1 - (frequencyTable[i].tiles / maxTileCount)) * 7);
	if      (frequencyTable[i].pts == 6) frequencyTable[i].pts = 8;
	else if (frequencyTable[i].pts == 7) frequencyTable[i].pts = 10;
}

var tileSetString = "";
for (let i = 0; i < frequencyTable.length; i++) {
	tileSetString += `{letter: "${frequencyTable[i].letter}", pts: ${frequencyTable[i].pts}, freq: ${frequencyTable[i].tiles}},\n`;
}
tileSetString += `{letter: "?", freq: 2}`;
console.log(tileSetString);



// Functions
function copy(data) {
	$(".textarea2").val(data);
	$(".textarea2").select();
}

function sortObject(o) {
	var sorted = {},
	key, a = [];

	for (key in o) {
		if (o.hasOwnProperty(key)) {
			a.push(key);
		}
	}

	a.sort();

	for (key = 0; key < a.length; key++) {
		sorted[a[key]] = o[a[key]];
	}
	return sorted;
}

function input2scrabble(input) {
	var lines = input.replaceAll("\t", "").split("\n");
	var alphabet = [];
	var tileSet = {}

	for (let i = 0; i < lines.length; i++) {
		var pts = parseInt(lines[i].split(":")[0]);
		var letterArray = (lines[i].split(":")[1]).split(",");
		for (let j = 0; j < letterArray.length; j++) {
			var letter = letterArray[j].replaceAll(" ", "").replaceAll("×", "").replace(/[0-9]/g, "").replace(/\u200e/g, "");
			var freq = letterArray[j].replace(/\D/g, "");
			alphabet.push(letter);
			tileSet[letter] = {pts: pts, freq: freq};
		}
	}

	var boardString = "board: 0,\n";

	var alphabetArrayString = JSON.stringify(alphabet.sort());
	var alphabetString = `alphabet: ${alphabetArrayString},\n`;

	tileSet = sortObject(tileSet);

	var tileSetString = "tileSet: {\n";
	for (letter in tileSet) {
		var pts = (" " + tileSet[letter].pts).slice(-2);
		var freq = (" " + tileSet[letter].freq).slice(-2);
		tileSetString += `{letter: "${letter}", pts: ${pts}, freq: ${freq}},\n`
	}
	tileSetString += `{letter: "?", freq: 2}\n},`;

	return `gameExonym: "",\n` + `gameEndonym: "",\n` + boardString + alphabetString + tileSetString;
}



// Interacting with tileset.html
$("button").click(function() {
	var input = $(".textarea1").val();
	var text = input2scrabble(input);
	copy(text);
});