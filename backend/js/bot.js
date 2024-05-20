importScripts("classes.js");
importScripts("main.js");

onmessage = e => {
	Game = e.data;

	// Bot.__proto__ = Player.prototype;
	// WordTrie.__proto__ = Trie.prototype;
	Object.assign(Game.Bot, Player.prototype);
	Object.assign(Game.WordTrie, Trie.prototype);
	


	// Generating plays
	Game.Bot.unscrambleRack();
	let rackString = "";
	for (let t = 0, tn = Game.Bot.rackTiles.length; t < tn; t++) {
		rackString += Game.Bot.rackTiles[t].letter;
		if (t < tn - 1) rackString += ",";
	}
	console.log(`${rackString} → Generated ${Game.Bot.tilePerms.length.toLocaleString()} tile permutations...`);

	Game.Bot.generatePlays();
	var secondsElapsed = Game.Bot.msElapsed / 1000;
	console.log(`Tested ${Game.Bot.playsTested.toLocaleString()} plays in ${secondsElapsed} seconds...`);
	console.log(`Found ${Game.Bot.validPlays.length.toLocaleString()} valid plays...`);

	var play = Game.Bot.choosePlay();
	console.log(play);



	// Send play back to main thread
	postMessage(play);
};