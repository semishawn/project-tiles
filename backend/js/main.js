//*
String.prototype.format = function() {
	var args = arguments;
	return this.replace(/{(\d+)}/g, function(match, number) {
		return typeof args[number] != "undefined" ? args[number] : match;
	});
};

//* Tailored deep copy function
//* Works for 2D arrays, object arrays, and mixed-type arrays
function deepCopy(arr) {
	return structuredClone(arr);
}

//* JSON string mapping method to remove duplicate elements from array
//* Works for 2D arrays, object arrays, and mixed-type arrays
function uniquify(arr) {
	let uniques = [];
	let itemsFound = {};
	for(let i = 0, n = arr.length; i < n; i++) {
		let stringified = JSON.stringify(arr[i]);
		if (itemsFound[stringified]) continue;
		uniques.push(arr[i]);
		itemsFound[stringified] = true;
	}
	return uniques;
}

function camelToKebab(camel) {
	let kebab = camel.replace(/([a-zà-žα-ωά-ώ])([A-ZÀ-ŽΑ-Ω])/g, '$1-$2')
					 .replace(/([0-9])([A-ZÀ-ŽΑ-Ωa-zà-žα-ωά-ώ])/g, '$1-$2')
					 .replace(/([A-ZÀ-ŽΑ-Ω])([A-ZÀ-ŽΑ-Ω][a-zà-žα-ωά-ώ])/g, '$1-$2')
					 .toLowerCase();
	return kebab;
}

//* Tile map operations
function newTileMap(dimension) {
	return Array(dimension).fill().map(() => Array(dimension).fill(null));
}

function transpose(arr) {
	return arr[0].map((col, i) => arr.map(row => row[i]));
}