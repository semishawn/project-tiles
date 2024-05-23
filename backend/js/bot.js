importScripts("classes.js");
importScripts("main.js");

onmessage = e => {
	Game = JSON.parse(e.data);
	Game.Bot.__proto__ = Player.prototype;
	Game.WordTrie.__proto__ = Trie.prototype;



	// Generating what move the bot will make; assume skip
	var move = {
		type: "skip",
		data: null
	}

	Game.Bot.unscrambleRack();
	var rackString = "";
	for (let t = 0, tn = Game.Bot.rackTiles.length; t < tn; t++) {
		let letter = Game.Bot.rackTiles[t].letter;
		if (letter == null) letter = "?";
		rackString += letter;
		if (t < tn - 1) rackString += ",";
	}
	console.log(`${rackString} → Generated ${Game.Bot.botTilePerms.length.toLocaleString()} tile permutations...`);

	Game.Bot.generateBotPlays();
	var secondsElapsed = Game.Bot.msElapsed / 1000;
	console.log(`Tested ${Game.Bot.botPlaysTested.toLocaleString()} plays in ${secondsElapsed} seconds...`);
	console.log(`Found ${Game.Bot.botValidPlays.length.toLocaleString()} valid plays...`);

	if (Game.Bot.botValidPlays.length > 0) {
		move.type = "play";
		move.data = Game.Bot.chooseBotPlay();
	}



	// Send move back to main thread
	postMessage(move);
};