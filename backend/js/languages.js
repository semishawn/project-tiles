var languages = [
	{
		exonym: "English",
		endonym: "English",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "American English",
				langEndonym: "English",
				mfr: "Hasbro",
				year: 2024,
				region: "North America",
				botName: "Mr. Robot",

				boards: ["15-scr"],
				alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
				tileSet: [
					{letter: "A", pts:  1, freq:  9},
					{letter: "B", pts:  3, freq:  2},
					{letter: "C", pts:  3, freq:  2},
					{letter: "D", pts:  2, freq:  4},
					{letter: "E", pts:  1, freq: 12},
					{letter: "F", pts:  4, freq:  2},
					{letter: "G", pts:  2, freq:  3},
					{letter: "H", pts:  4, freq:  2},
					{letter: "I", pts:  1, freq:  9},
					{letter: "J", pts:  8, freq:  1},
					{letter: "K", pts:  5, freq:  1},
					{letter: "L", pts:  1, freq:  4},
					{letter: "M", pts:  3, freq:  2},
					{letter: "N", pts:  1, freq:  6},
					{letter: "O", pts:  1, freq:  8},
					{letter: "P", pts:  3, freq:  2},
					{letter: "Q", pts: 10, freq:  1},
					{letter: "R", pts:  1, freq:  6},
					{letter: "S", pts:  1, freq:  4},
					{letter: "T", pts:  1, freq:  6},
					{letter: "U", pts:  1, freq:  4},
					{letter: "V", pts:  4, freq:  2},
					{letter: "W", pts:  4, freq:  2},
					{letter: "X", pts:  8, freq:  1},
					{letter: "Y", pts:  4, freq:  2},
					{letter: "Z", pts: 10, freq:  1},
					{letter: "?",          freq:  2}
				],
				premiumCells: [
					{id: 2, abbr: "DL", text: "double letter score"},
					{id: 3, abbr: "DW", text: "double word score"},
					{id: 4, abbr: "TL", text: "triple letter score"},
					{id: 5, abbr: "TW", text: "triple word score"}
				]
			},
			{
				title: "The Old English Scrabble Project",
				langExonym: "Old English",
				langEndonym: "Englisċ",
				mfr: "Wicked Day",
				year: 2010
			},
			{
				title: "International Phonetic Alphabet Edition",
				langExonym: "IPA (English)",
				langEndonym: "/aɪ-pi-eɪ ˈɪŋɡlɪʃ/",
				mfr: "Yale Undergraduate Linguistics Society",
				year: 2015
			}
		]
	},

	{
		exonym: "Spanish",
		endonym: "Español",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Spanish",
				langEndonym: "Español",
				mfr: "Mattel",
				year: 2024,
				region: "Worldwide",

				boards: ["15-scr"],
				alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
				tileSet: {
					"A":  {pts:  1, freq: 12},
					"B":  {pts:  3, freq:  2},
					"C":  {pts:  3, freq:  4},
					"CH": {pts:  5, freq:  1},
					"D":  {pts:  2, freq:  5},
					"E":  {pts:  1, freq: 12},
					"F":  {pts:  4, freq:  1},
					"G":  {pts:  2, freq:  2},
					"H":  {pts:  4, freq:  2},
					"I":  {pts:  1, freq:  6},
					"J":  {pts:  8, freq:  1},
					"L":  {pts:  1, freq:  4},
					"LL": {pts:  8, freq:  1},
					"M":  {pts:  3, freq:  2},
					"N":  {pts:  1, freq:  5},
					"O":  {pts:  1, freq:  9},
					"P":  {pts:  3, freq:  2},
					"Q":  {pts:  5, freq:  1},
					"R":  {pts:  1, freq:  5},
					"RR": {pts:  8, freq:  1},
					"S":  {pts:  1, freq:  6},
					"T":  {pts:  1, freq:  4},
					"U":  {pts:  1, freq:  5},
					"V":  {pts:  4, freq:  1},
					"X":  {pts:  8, freq:  1},
					"Y":  {pts:  4, freq:  1},
					"Z":  {pts: 10, freq:  1},
					"Ñ":  {pts:  8, freq:  1},
					"?":  {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "doble tanto de letra"},
					{id: 3, text: "doble tanto de palabra"},
					{id: 4, text: "triple tanto de letra"},
					{id: 5, text: "triple tanto de palabra"}
				]
			},
			{
				title: "Scrabble – Edición en Español",
				langExonym: "Spanish",
				langEndonym: "Español",
				mfr: "Hasbro",
				year: 2024,
				region: "North America",

				boards: ["15-scr"],
				alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
				tileSet: {
					"A":  {pts:  1, freq: 11},
					"B":  {pts:  3, freq:  3},
					"C":  {pts:  2, freq:  4},
					"D":  {pts:  2, freq:  4},
					"E":  {pts:  1, freq: 11},
					"F":  {pts:  4, freq:  2},
					"G":  {pts:  2, freq:  2},
					"H":  {pts:  4, freq:  2},
					"I":  {pts:  1, freq:  6},
					"J":  {pts:  6, freq:  2},
					"K":  {pts:  8, freq:  1},
					"L":  {pts:  1, freq:  4},
					"LL": {pts:  8, freq:  1},
					"M":  {pts:  3, freq:  3},
					"N":  {pts:  1, freq:  5},
					"O":  {pts:  1, freq:  8},
					"P":  {pts:  3, freq:  2},
					"Q":  {pts:  8, freq:  1},
					"R":  {pts:  1, freq:  4},
					"RR": {pts:  8, freq:  1},
					"S":  {pts:  1, freq:  7},
					"T":  {pts:  1, freq:  4},
					"U":  {pts:  1, freq:  6},
					"V":  {pts:  4, freq:  2},
					"W":  {pts:  8, freq:  1},
					"X":  {pts:  8, freq:  1},
					"Y":  {pts:  4, freq:  1},
					"Z":  {pts: 10, freq:  1},
					"Ñ":  {pts:  8, freq:  1},
					"?":  {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "doble tanto de letra"},
					{id: 3, text: "doble tanto de palabra"},
					{id: 4, text: "triple tanto de letra"},
					{id: 5, text: "triple tanto de palabra"}
				]
			},
			{
				title: "Escarbar",
				langExonym: "Spanish",
				langEndonym: "Español",
				mfr: "Mattel",
				year: 2024,
				region: "Latin America",

				boards: ["15-scr"],
				alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
				tileSet: {
					"A": {pts:  1, freq:  9},
					"B": {pts:  2, freq:  2},
					"C": {pts:  3, freq:  2},
					"CH": {pts:  4, freq:  4},
					"D": {pts:  2, freq:  4},
					"E": {pts:  1, freq: 12},
					"F": {pts:  4, freq:  2},
					"G": {pts:  2, freq:  3},
					"H": {pts:  4, freq:  2},
					"I": {pts:  1, freq:  9},
					"J": {pts:  8, freq:  1},
					"K": {pts:  5, freq:  1},
					"L": {pts:  1, freq:  4},
					"LL": {pts:  4, freq:  3},
					"M": {pts:  3, freq:  2},
					"N": {pts:  1, freq:  6},
					"O": {pts:  1, freq:  8},
					"P": {pts:  3, freq:  2},
					"Q": {pts: 10, freq:  1},
					"R": {pts:  1, freq:  6},
					"S": {pts:  1, freq:  4},
					"T": {pts:  1, freq:  6},
					"U": {pts:  1, freq:  4},
					"V": {pts:  4, freq:  2},
					"X": {pts:  8, freq:  1},
					"Y": {pts:  4, freq:  2},
					"Z": {pts: 10, freq:  1},
					"Ñ": {pts:  1, freq:  3},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "doble tanto de letra"},
					{id: 3, text: "doble tanto de palabra"},
					{id: 4, text: "triple tanto de letra"},
					{id: 5, text: "triple tanto de palabra"}
				]
			}
		]
	},

	{
		exonym: "French",
		endonym: "Français",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "French",
				langEndonym: "Français",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
				tileSet: {
					"A": {pts:  1, freq:  9},
					"B": {pts:  3, freq:  2},
					"C": {pts:  3, freq:  2},
					"D": {pts:  2, freq:  3},
					"E": {pts:  1, freq: 15},
					"F": {pts:  4, freq:  2},
					"G": {pts:  2, freq:  2},
					"H": {pts:  4, freq:  2},
					"I": {pts:  1, freq:  8},
					"J": {pts:  8, freq:  1},
					"K": {pts: 10, freq:  1},
					"L": {pts:  1, freq:  5},
					"M": {pts:  2, freq:  3},
					"N": {pts:  1, freq:  6},
					"O": {pts:  1, freq:  6},
					"P": {pts:  3, freq:  2},
					"Q": {pts:  8, freq:  1},
					"R": {pts:  1, freq:  6},
					"S": {pts:  1, freq:  6},
					"T": {pts:  1, freq:  6},
					"U": {pts:  1, freq:  6},
					"V": {pts:  4, freq:  2},
					"W": {pts: 10, freq:  1},
					"X": {pts: 10, freq:  1},
					"Y": {pts: 10, freq:  1},
					"Z": {pts: 10, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "lettre compte double"},
					{id: 3, text: "mot compte double"},
					{id: 4, text: "lettre compte triple"},
					{id: 5, text: "mot compte triple"}
				]
			}
		]
	},

	{
		exonym: "German",
		endonym: "Deutsch",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "German",
				langEndonym: "Deutsch",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ä", "Ö", "Ü", "ẞ"],
				tileSet: {
					"A": {pts:  1, freq:  5},
					"B": {pts:  3, freq:  2},
					"C": {pts:  4, freq:  2},
					"D": {pts:  1, freq:  4},
					"E": {pts:  1, freq: 15},
					"F": {pts:  4, freq:  2},
					"G": {pts:  2, freq:  3},
					"H": {pts:  2, freq:  4},
					"I": {pts:  1, freq:  6},
					"J": {pts:  6, freq:  1},
					"K": {pts:  4, freq:  2},
					"L": {pts:  2, freq:  3},
					"M": {pts:  3, freq:  4},
					"N": {pts:  1, freq:  9},
					"O": {pts:  2, freq:  3},
					"P": {pts:  4, freq:  1},
					"Q": {pts: 10, freq:  1},
					"R": {pts:  1, freq:  6},
					"S": {pts:  1, freq:  7},
					"T": {pts:  1, freq:  6},
					"U": {pts:  1, freq:  6},
					"V": {pts:  6, freq:  1},
					"W": {pts:  3, freq:  1},
					"X": {pts:  8, freq:  1},
					"Y": {pts: 10, freq:  1},
					"Z": {pts:  3, freq:  1},
					"Ä": {pts:  6, freq:  1},
					"Ö": {pts:  8, freq:  1},
					"Ü": {pts:  6, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "Doppelter Buchstaben Wert"},
					{id: 3, text: "Doppelter Wort Wert"},
					{id: 4, text: "Dreifacher Buchstaben Wert"},
					{id: 5, text: "Dreifacher Wort Wert"}
				]
			}
		]

	},

	{
		exonym: "Afrikaans",
		endonym: "Afrikaans",
		editions: [
			{
				title: "Scrabble Oorspronklike",
				langExonym: "Afrikaans",
				langEndonym: "Afrikaans",
				mfr: "Mattel",
				year: 2024,
				region: "South Africa",
				
				boards: ["15-scr"],
				alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "Y"],
				tileSet: {
					"A": {pts:  1, freq:  9},
					"B": {pts:  8, freq:  1},
					"D": {pts:  1, freq:  6},
					"E": {pts:  1, freq: 16},
					"F": {pts:  8, freq:  1},
					"G": {pts:  2, freq:  4},
					"H": {pts:  2, freq:  3},
					"I": {pts:  1, freq:  8},
					"J": {pts: 10, freq:  1},
					"K": {pts:  3, freq:  3},
					"L": {pts:  2, freq:  3},
					"M": {pts:  4, freq:  2},
					"N": {pts:  1, freq:  8},
					"O": {pts:  1, freq:  6},
					"P": {pts:  5, freq:  2},
					"R": {pts:  1, freq:  6},
					"S": {pts:  1, freq:  6},
					"T": {pts:  1, freq:  6},
					"U": {pts:  4, freq:  2},
					"V": {pts:  5, freq:  2},
					"W": {pts:  3, freq:  3},
					"Y": {pts:  4, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "dubbele letterwaardes"},
					{id: 3, text: "dubbele woordwaardes"},
					{id: 4, text: "drievoudig letterwaardes"},
					{id: 5, text: "drievoudig woordwaardes"}
				]
			},
			{
				title: "Woordkrabbel",
				langExonym: "Afrikaans",
				langEndonym: "Afrikaans",
				mfr: "Leon Toys",
				year: 2024,
				region: "South Africa",
			}
		]
	},

	{
		exonym: "Arabic",
		endonym: "عربي",
		font: "Noto Sans Arabic",
		editions: [
			{
				title: "سكرابل",
				langExonym: "Arabic",
				langEndonym: "عربي",
				mfr: "Mattel",
				year: 2024,
				region: "Middle East",

				boards: ["15-scr"],
				alphabet: ["ﺍ", "ﺏ", "ﺕ", "ﺙ", "ﺝ", "ﺡ", "ﺥ", "ﺩ", "ﺫ", "ﺭ", "ﺯ", "ﺱ", "ﺵ", "ﺹ", "ﺽ", "ﻁ", "ﻅ", "ﻉ", "ﻍ", "ﻑ", "ﻕ", "ﻙ", "ﻝ", "ﻡ", "ﻥ", "ﻩ", "ﻭ", "ي", "ء"],
				tileSet: {
					"ي": {pts:  1, freq:  3},
					"ﺀ": {pts:  8, freq:  2},
					"ﺃ": {pts: 10, freq:  2},
					"ﺅ": {pts: 10, freq:  2},
					"ﺉ": {pts:  6, freq:  2},
					"ﺍ": {pts:  1, freq:  8},
					"ﺏ": {pts:  2, freq:  4},
					"ﺕ": {pts:  2, freq:  4},
					"ﺙ": {pts:  2, freq:  3},
					"ﺝ": {pts:  1, freq:  4},
					"ﺡ": {pts:  1, freq:  3},
					"ﺥ": {pts:  1, freq:  3},
					"ﺩ": {pts:  2, freq:  3},
					"ﺫ": {pts:  3, freq:  3},
					"ﺭ": {pts:  2, freq:  3},
					"ﺯ": {pts:  3, freq:  3},
					"ﺱ": {pts:  2, freq:  3},
					"ﺵ": {pts:  3, freq:  3},
					"ﺹ": {pts:  4, freq:  3},
					"ﺽ": {pts:  4, freq:  3},
					"ﻁ": {pts:  4, freq:  2},
					"ﻅ": {pts:  5, freq:  2},
					"ﻉ": {pts:  4, freq:  3},
					"ﻍ": {pts:  8, freq:  2},
					"ﻑ": {pts:  3, freq:  3},
					"ﻕ": {pts:  3, freq:  3},
					"ﻙ": {pts:  4, freq:  3},
					"ﻝ": {pts:  1, freq:  4},
					"ﻡ": {pts:  1, freq:  3},
					"ﻥ": {pts:  1, freq:  3},
					"ﻩ": {pts:  1, freq:  3},
					"ﻭ": {pts:  1, freq:  3},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "درجة حرف مزدوج"},
					{id: 3, text: "نقاط كلمة مزدوجة"},
					{id: 4, text: "درجة الحروف الثلاثية"},
					{id: 5, text: "نقاط الكلمة الثلاثية"}
				]
			}
		]
	},

	{
		exonym: "Bulgarian",
		endonym: "български език",
		editions: [
			{
				title: "Scrabble Оригинал",
				aka: "Скрабъл",
				langExonym: "Bulgarian",
				langEndonym: "български език",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ь", "Ю", "Я"],
				tileSet: {
					"А": {pts:  1, freq:  9},
					"Б": {pts:  2, freq:  3},
					"В": {pts:  2, freq:  4},
					"Г": {pts:  3, freq:  3},
					"Д": {pts:  2, freq:  4},
					"Е": {pts:  1, freq:  8},
					"Ж": {pts:  4, freq:  2},
					"З": {pts:  4, freq:  2},
					"И": {pts:  1, freq:  8},
					"Й": {pts:  5, freq:  1},
					"К": {pts:  2, freq:  3},
					"Л": {pts:  2, freq:  3},
					"М": {pts:  2, freq:  4},
					"Н": {pts:  1, freq:  4},
					"О": {pts:  1, freq:  9},
					"П": {pts:  1, freq:  4},
					"Р": {pts:  1, freq:  4},
					"С": {pts:  1, freq:  4},
					"Т": {pts:  1, freq:  5},
					"У": {pts:  5, freq:  3},
					"Ф": {pts: 10, freq:  1},
					"Х": {pts:  5, freq:  1},
					"Ц": {pts:  8, freq:  1},
					"Ч": {pts:  5, freq:  2},
					"Ш": {pts:  8, freq:  1},
					"Щ": {pts: 10, freq:  1},
					"Ъ": {pts:  3, freq:  2},
					"Ь": {pts: 10, freq:  1},
					"Ю": {pts:  8, freq:  1},
					"Я": {pts:  5, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "двойна буква резултат"},
					{id: 3, text: "двойна дума резултат"},
					{id: 4, text: "тройна буква резултат"},
					{id: 5, text: "тройна дума резултат"}
				]
			}
		]
	},

	{
		exonym: "Catalan",
		endonym: "català",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Catalan",
				langEndonym: "català",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"],
				tileSet: {
					"A": {pts:  1, freq: 12},
					"B": {pts:  3, freq:  2},
					"C": {pts:  2, freq:  3},
					"D": {pts:  2, freq:  3},
					"E": {pts:  1, freq: 13},
					"F": {pts:  4, freq:  1},
					"G": {pts:  3, freq:  2},
					"H": {pts:  8, freq:  1},
					"I": {pts:  1, freq:  8},
					"J": {pts:  8, freq:  1},
					"L": {pts:  1, freq:  4},
					"L·L": {pts: 10, freq:  1},
					"M": {pts:  2, freq:  3},
					"N": {pts:  1, freq:  6},
					"NY": {pts: 10, freq:  1},
					"O": {pts:  1, freq:  5},
					"P": {pts:  3, freq:  2},
					"Q": {pts:  8, freq:  1},
					"R": {pts:  1, freq:  8},
					"S": {pts:  1, freq:  8},
					"T": {pts:  1, freq:  5},
					"U": {pts:  1, freq:  4},
					"V": {pts:  4, freq:  1},
					"X": {pts: 10, freq:  1},
					"Z": {pts:  8, freq:  1},
					"Ç": {pts: 10, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "puntuació de doble lletra"},
					{id: 3, text: "puntuació de doble paraula"},
					{id: 4, text: "puntuació de tres lletres"},
					{id: 5, text: "puntuació de tres paraules"}
				]
			}
		]
	},

	{
		exonym: "Croatian",
		endonym: "hrvatski",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Croatian",
				langEndonym: "hrvatski",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C", "Ć", "Č", "D", "Dž", "Đ", "E", "F", "G", "H", "I", "J", "K", "L", "Lj", "M", "N", "Nj", "O", "P", "R", "S", "Š", "T", "U", "V", "Z", "Ž"],
				tileSet: {
					"A": {pts:  1, freq: 11},
					"B": {pts:  3, freq:  1},
					"C": {pts:  4, freq:  1},
					"D": {pts:  3, freq:  3},
					"DŽ": {pts: 10, freq:  1},
					"E": {pts:  1, freq:  9},
					"F": {pts:  8, freq:  1},
					"G": {pts:  3, freq:  2},
					"H": {pts:  4, freq:  1},
					"I": {pts:  1, freq: 10},
					"J": {pts:  1, freq:  4},
					"K": {pts:  2, freq:  3},
					"L": {pts:  3, freq:  2},
					"LJ": {pts:  4, freq:  1},
					"M": {pts:  2, freq:  3},
					"N": {pts:  1, freq:  6},
					"NJ": {pts:  4, freq:  1},
					"O": {pts:  1, freq:  9},
					"P": {pts:  2, freq:  3},
					"R": {pts:  1, freq:  5},
					"S": {pts:  1, freq:  5},
					"T": {pts:  1, freq:  5},
					"U": {pts:  1, freq:  4},
					"V": {pts:  2, freq:  3},
					"Z": {pts:  3, freq:  2},
					"Ć": {pts:  5, freq:  1},
					"Č": {pts:  3, freq:  1},
					"Đ": {pts: 10, freq:  1},
					"Š": {pts:  4, freq:  1},
					"Ž": {pts:  4, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "dvostruki slovo rezultat"},
					{id: 3, text: "dvostruki riječ rezultat"},
					{id: 4, text: "trostruki slovo rezultat"},
					{id: 5, text: "trostruki riječ rezultat"}
				]
			}
		]
	},

	{
		exonym: "Czech",
		endonym: "čeština",
		editions: [
			{
				title: "Scrabble Originál",
				langExonym: "Czech",
				langEndonym: "čeština",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","X","Y","Z","Á","É","Í","Ó","Ú","Ý","Č","Ď","Ě","Ň","Ř","Š","Ť","Ů","Ž"],
				tileSet: {
					"A": {pts:  1, freq:  5},
					"B": {pts:  3, freq:  2},
					"C": {pts:  2, freq:  3},
					"D": {pts:  1, freq:  3},
					"E": {pts:  1, freq:  5},
					"F": {pts:  5, freq:  1},
					"G": {pts:  5, freq:  1},
					"H": {pts:  2, freq:  3},
					"I": {pts:  1, freq:  4},
					"J": {pts:  2, freq:  2},
					"K": {pts:  1, freq:  3},
					"L": {pts:  1, freq:  3},
					"M": {pts:  2, freq:  3},
					"N": {pts:  1, freq:  5},
					"O": {pts:  1, freq:  6},
					"P": {pts:  1, freq:  3},
					"R": {pts:  1, freq:  3},
					"S": {pts:  1, freq:  4},
					"T": {pts:  1, freq:  4},
					"U": {pts:  2, freq:  3},
					"V": {pts:  1, freq:  4},
					"X": {pts: 10, freq:  1},
					"Y": {pts:  2, freq:  2},
					"Z": {pts:  2, freq:  2},
					"Á": {pts:  2, freq:  2},
					"É": {pts:  3, freq:  2},
					"Í": {pts:  2, freq:  3},
					"Ó": {pts:  7, freq:  1},
					"Ú": {pts:  5, freq:  1},
					"Ý": {pts:  4, freq:  2},
					"Č": {pts:  4, freq:  1},
					"Ď": {pts:  8, freq:  1},
					"Ě": {pts:  3, freq:  2},
					"Ň": {pts:  6, freq:  1},
					"Ř": {pts:  4, freq:  2},
					"Š": {pts:  4, freq:  2},
					"Ť": {pts:  7, freq:  1},
					"Ů": {pts:  4, freq:  1},
					"Ž": {pts:  4, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "zdvojená hodnota písmene"},
					{id: 3, text: "zdvojená hodnota slova"},
					{id: 4, text: "ztrojená hodnota písmene"},
					{id: 5, text: "ztrojená hodnota slova"}
				]
			}
		]
	},

	{
		exonym: "Danish",
		endonym: "Dansk",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Danish",
				langEndonym: "Dansk",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","X","Y","Z","Å","Æ","Ø"],
				tileSet: {
					"A": {pts:  1, freq:  7},
					"B": {pts:  3, freq:  4},
					"C": {pts:  8, freq:  2},
					"D": {pts:  2, freq:  5},
					"E": {pts:  1, freq:  9},
					"F": {pts:  3, freq:  3},
					"G": {pts:  3, freq:  3},
					"H": {pts:  4, freq:  2},
					"I": {pts:  3, freq:  4},
					"J": {pts:  4, freq:  2},
					"K": {pts:  3, freq:  4},
					"L": {pts:  2, freq:  5},
					"M": {pts:  3, freq:  3},
					"N": {pts:  1, freq:  6},
					"O": {pts:  2, freq:  5},
					"P": {pts:  4, freq:  2},
					"R": {pts:  1, freq:  6},
					"S": {pts:  2, freq:  5},
					"T": {pts:  2, freq:  5},
					"U": {pts:  3, freq:  3},
					"V": {pts:  3, freq:  3},
					"X": {pts:  8, freq:  1},
					"Y": {pts:  4, freq:  2},
					"Z": {pts:  8, freq:  1},
					"Å": {pts:  4, freq:  2},
					"Æ": {pts:  4, freq:  2},
					"Ø": {pts:  4, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "bogstav værdi fordobles"},
					{id: 3, text: "ord værdi fordobles"},
					{id: 4, text: "bogstav værdi tredobles"},
					{id: 5, text: "ord værdi tredobles"}
				]
			}
		]
	},

	{
		exonym: "Dutch",
		endonym: "Nederlands",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Dutch",
				langEndonym: "Nederlands",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
				tileSet: {
					"A": {pts:  1, freq:  6},
					"B": {pts:  3, freq:  2},
					"C": {pts:  5, freq:  2},
					"D": {pts:  2, freq:  5},
					"E": {pts:  1, freq: 18},
					"F": {pts:  4, freq:  2},
					"G": {pts:  3, freq:  3},
					"H": {pts:  4, freq:  2},
					"I": {pts:  1, freq:  4},
					"J": {pts:  4, freq:  2},
					"K": {pts:  3, freq:  3},
					"L": {pts:  3, freq:  3},
					"M": {pts:  3, freq:  3},
					"N": {pts:  1, freq: 10},
					"O": {pts:  1, freq:  6},
					"P": {pts:  3, freq:  2},
					"Q": {pts: 10, freq:  1},
					"R": {pts:  2, freq:  5},
					"S": {pts:  2, freq:  5},
					"T": {pts:  2, freq:  5},
					"U": {pts:  4, freq:  3},
					"V": {pts:  4, freq:  2},
					"W": {pts:  5, freq:  2},
					"X": {pts:  8, freq:  1},
					"Y": {pts:  8, freq:  1},
					"Z": {pts:  4, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "2x letter waarde"},
					{id: 3, text: "2x woord waarde"},
					{id: 4, text: "3x letter waarde"},
					{id: 5, text: "3x woord waarde"}
				]
			}
		]
	},

	{
		exonym: "Estonian",
		endonym: "eesti keel",
		editions: [
			{
				title: "Scrabble Originaal",
				langExonym: "Estonian",
				langEndonym: "eesti keel",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Z","Ä","Õ","Ö","Ü","Š","Ž"],
				tileSet: {
					"A": {pts:  1, freq: 10},
					"B": {pts:  4, freq:  1},
					"D": {pts:  2, freq:  4},
					"E": {pts:  1, freq:  9},
					"F": {pts:  8, freq:  1},
					"G": {pts:  3, freq:  2},
					"H": {pts:  4, freq:  2},
					"I": {pts:  1, freq:  9},
					"J": {pts:  4, freq:  2},
					"K": {pts:  1, freq:  5},
					"L": {pts:  1, freq:  5},
					"M": {pts:  2, freq:  4},
					"N": {pts:  2, freq:  4},
					"O": {pts:  1, freq:  5},
					"P": {pts:  4, freq:  2},
					"R": {pts:  2, freq:  2},
					"S": {pts:  1, freq:  8},
					"T": {pts:  1, freq:  7},
					"U": {pts:  1, freq:  5},
					"V": {pts:  3, freq:  2},
					"Z": {pts: 10, freq:  1},
					"Ä": {pts:  5, freq:  2},
					"Õ": {pts:  4, freq:  2},
					"Ö": {pts:  6, freq:  2},
					"Ü": {pts:  5, freq:  2},
					"Š": {pts: 10, freq:  1},
					"Ž": {pts: 10, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "täht 2x"},
					{id: 3, text: "sõna 2x"},
					{id: 4, text: "täht 3x"},
					{id: 5, text: "sõna 3x"}
				]
			}
		]
	},

	{
		exonym: "Faroese",
		endonym: "Føroyskt",
		editions: [
			{
				title: "Scrabble Original",
				aka: "Krossorðaspæl",
				langExonym: "Faroese",
				langEndonym: "Føroyskt",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Á","Æ","Í","Ð","Ó","Ø","Ú","Ý"],
				tileSet: {
					"A": {pts:  1, freq: 10},
					"B": {pts:  6, freq:  1},
					"D": {pts:  4, freq:  2},
					"E": {pts:  1, freq:  7},
					"F": {pts:  4, freq:  2},
					"G": {pts:  2, freq:  4},
					"H": {pts:  4, freq:  2},
					"I": {pts:  1, freq: 10},
					"J": {pts:  6, freq:  1},
					"K": {pts:  2, freq:  4},
					"L": {pts:  2, freq:  4},
					"M": {pts:  3, freq:  3},
					"N": {pts:  1, freq:  7},
					"O": {pts:  4, freq:  2},
					"P": {pts:  8, freq:  1},
					"R": {pts:  1, freq:  7},
					"S": {pts:  1, freq:  5},
					"T": {pts:  1, freq:  7},
					"U": {pts:  1, freq:  5},
					"V": {pts:  2, freq:  4},
					"Y": {pts:  7, freq:  1},
					"Á": {pts:  5, freq:  1},
					"Æ": {pts:  8, freq:  1},
					"Í": {pts:  6, freq:  1},
					"Ð": {pts:  2, freq:  4},
					"Ó": {pts:  6, freq:  1},
					"Ø": {pts:  7, freq:  1},
					"Ú": {pts:  6, freq:  1},
					"Ý": {pts:  8, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "tvífalt stavvirði"},
					{id: 3, text: "tvífalt orðvirði"},
					{id: 4, text: "trífalt stavvirði"},
					{id: 5, text: "trífalt orðvirði"}
				]
			}
		]
	},

	{
		exonym: "Finnish",
		endonym: "suomi",
		editions: [
			{
				title: "Scrabble Original",
				aka: "Sanapeli",
				langExonym: "Finnish",
				langEndonym: "suomi",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","Y","Ä","Ö"],
				tileSet: {
					"A": {pts:  1, freq: 10},
					"B": {pts:  8, freq:  1},
					"C": {pts: 10, freq:  1},
					"D": {pts:  7, freq:  1},
					"E": {pts:  1, freq:  8},
					"F": {pts:  8, freq:  1},
					"G": {pts:  8, freq:  1},
					"H": {pts:  4, freq:  2},
					"I": {pts:  1, freq: 10},
					"J": {pts:  4, freq:  2},
					"K": {pts:  2, freq:  5},
					"L": {pts:  2, freq:  5},
					"M": {pts:  3, freq:  3},
					"N": {pts:  1, freq:  9},
					"O": {pts:  2, freq:  5},
					"P": {pts:  4, freq:  2},
					"R": {pts:  4, freq:  2},
					"S": {pts:  1, freq:  7},
					"T": {pts:  1, freq:  9},
					"U": {pts:  3, freq:  4},
					"V": {pts:  4, freq:  2},
					"W": {pts:  8, freq:  1},
					"Y": {pts:  4, freq:  2},
					"Ä": {pts:  2, freq:  5},
					"Ö": {pts:  7, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "2x kirjainpisteet"},
					{id: 3, text: "2x sanapisteet"},
					{id: 4, text: "3x kirjainpisteet"},
					{id: 5, text: "3x sanapisteet"}
				]
			}
		]
	},

	{
		exonym: "Greek",
		endonym: "ελληνικά",
		editions: [
			{
				title: "Scrabble Original",
				aka: "Σκραμπλ",
				langExonym: "Greek",
				langEndonym: "ελληνικά",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",
				botName: "Κύριε Ρομπότ",

				boards: ["15-scr"],
				alphabet: ["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω"],
				tileSet: [
					{letter: "Α", pts:  1, freq: 12},
					{letter: "Β", pts:  8, freq:  1},
					{letter: "Γ", pts:  4, freq:  2},
					{letter: "Δ", pts:  4, freq:  2},
					{letter: "Ε", pts:  1, freq:  8},
					{letter: "Ζ", pts: 10, freq:  1},
					{letter: "Η", pts:  1, freq:  7},
					{letter: "Θ", pts: 10, freq:  1},
					{letter: "Ι", pts:  1, freq:  8},
					{letter: "Κ", pts:  2, freq:  4},
					{letter: "Λ", pts:  3, freq:  3},
					{letter: "Μ", pts:  3, freq:  3},
					{letter: "Ν", pts:  1, freq:  6},
					{letter: "Ξ", pts: 10, freq:  1},
					{letter: "Ο", pts:  1, freq:  9},
					{letter: "Π", pts:  2, freq:  4},
					{letter: "Ρ", pts:  2, freq:  5},
					{letter: "Σ", pts:  1, freq:  7},
					{letter: "Τ", pts:  1, freq:  8},
					{letter: "Υ", pts:  2, freq:  4},
					{letter: "Φ", pts:  8, freq:  1},
					{letter: "Χ", pts:  8, freq:  1},
					{letter: "Ψ", pts: 10, freq:  1},
					{letter: "Ω", pts:  3, freq:  3},
					{letter: "?", freq: 2}
				],
				premiumCells: [
					{id: 2, abbr: "ΓΔ", text: "γραμμα διπλης αξιας"},
					{id: 3, abbr: "ΛΔ", text: "λεξη διπλης αξιας"},
					{id: 4, abbr: "ΓΤ", text: "γραμμα τριπλης αξιας"},
					{id: 5, abbr: "ΛΤ", text: "λεξη τριπλης αξιας"}
				]
			}
		]
	},

	{
		exonym: "Hebrew",
		endonym: "עִברִית",
		font: "Noto Sans Hebrew",
		editions: [
			{
				title: "Scrabble Original",
				aka: "שבץ נא",
				langExonym: "Hebrew",
				langEndonym: "עִברִית",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת"],
				tileSet: {
					"א": {pts:  2, freq:  6},
					"ב": {pts:  3, freq:  4},
					"ג": {pts:  8, freq:  1},
					"ד": {pts:  3, freq:  4},
					"ה": {pts:  1, freq:  8},
					"ו": {pts:  1, freq: 12},
					"ז": {pts:  8, freq:  1},
					"ח": {pts:  5, freq:  3},
					"ט": {pts:  8, freq:  1},
					"י": {pts:  1, freq: 10},
					"כ": {pts:  5, freq:  2},
					"ל": {pts:  2, freq:  6},
					"מ": {pts:  2, freq:  6},
					"נ": {pts:  4, freq:  3},
					"ס": {pts:  8, freq:  1},
					"ע": {pts:  8, freq:  2},
					"פ": {pts:  4, freq:  3},
					"צ": {pts:  8, freq:  1},
					"ק": {pts:  5, freq:  2},
					"ר": {pts:  1, freq:  8},
					"ש": {pts:  2, freq:  6},
					"ת": {pts:  1, freq:  8},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "אות כפולה"},
					{id: 3, text: "מילה כפולה"},
					{id: 4, text: "מכתב משולש"},
					{id: 5, text: "מילה משולשת"}
				]
			}
		]
	},

	{
		exonym: "Hungarian",
		endonym: "magyar nyelv",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Hungarian",
				langEndonym: "magyar nyelv",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","CS","D","E","F","G","GY","H","I","J","K","L","LY","M","N","NY","O","P","R","S","SZ","T","TY","U","V","Z","ZS","Á","É","Í","Ó","Ö","Ú","Ü","Ő","Ű"],
				tileSet: {
					"A": {pts:  1, freq:  6},
					"B": {pts:  2, freq:  3},
					"C": {pts:  5, freq:  1},
					"CS": {pts:  7, freq:  1},
					"D": {pts:  2, freq:  3},
					"E": {pts:  1, freq:  6},
					"F": {pts:  4, freq:  2},
					"G": {pts:  2, freq:  3},
					"GY": {pts:  4, freq:  2},
					"H": {pts:  3, freq:  2},
					"I": {pts:  1, freq:  3},
					"J": {pts:  4, freq:  2},
					"K": {pts:  1, freq:  6},
					"L": {pts:  1, freq:  4},
					"LY": {pts:  8, freq:  1},
					"M": {pts:  1, freq:  3},
					"N": {pts:  1, freq:  4},
					"NY": {pts:  5, freq:  1},
					"O": {pts:  1, freq:  3},
					"P": {pts:  4, freq:  2},
					"R": {pts:  1, freq:  4},
					"S": {pts:  1, freq:  3},
					"SZ": {pts:  3, freq:  2},
					"T": {pts:  1, freq:  5},
					"TY": {pts: 10, freq:  1},
					"U": {pts:  4, freq:  2},
					"V": {pts:  3, freq:  2},
					"Z": {pts:  4, freq:  2},
					"ZS": {pts:  8, freq:  1},
					"Á": {pts:  1, freq:  4},
					"É": {pts:  3, freq:  3},
					"Í": {pts:  5, freq:  1},
					"Ó": {pts:  2, freq:  3},
					"Ö": {pts:  4, freq:  2},
					"Ú": {pts:  7, freq:  1},
					"Ü": {pts:  4, freq:  2},
					"Ő": {pts:  7, freq:  1},
					"Ű": {pts:  7, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "kétszeres betűérték"},
					{id: 3, text: "kétszeres szóérték"},
					{id: 4, text: "háromszoros betűérték"},
					{id: 5, text: "háromszoros szóérték"}
				]
			}
		]
	},

	{
		exonym: "Icelandic",
		endonym: "Íslenska",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Icelandic",
				langEndonym: "Íslenska",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","X","Y","Á","Æ","É","Í","Ð","Ó","Ö","Ú","Ý","Þ"],
				tileSet: {
					"A": {pts:  1, freq: 10},
					"B": {pts:  6, freq:  1},
					"D": {pts:  4, freq:  2},
					"E": {pts:  1, freq:  6},
					"F": {pts:  3, freq:  3},
					"G": {pts:  2, freq:  4},
					"H": {pts:  4, freq:  2},
					"I": {pts:  1, freq:  7},
					"J": {pts:  6, freq:  1},
					"K": {pts:  3, freq:  3},
					"L": {pts:  2, freq:  4},
					"M": {pts:  3, freq:  4},
					"N": {pts:  1, freq:  8},
					"O": {pts:  4, freq:  2},
					"P": {pts:  8, freq:  1},
					"R": {pts:  1, freq:  8},
					"S": {pts:  1, freq:  6},
					"T": {pts:  1, freq:  5},
					"U": {pts:  1, freq:  6},
					"V": {pts:  4, freq:  2},
					"X": {pts: 10, freq:  1},
					"Y": {pts:  6, freq:  1},
					"Á": {pts:  4, freq:  2},
					"Æ": {pts:  6, freq:  1},
					"É": {pts:  8, freq:  1},
					"Í": {pts:  4, freq:  2},
					"Ð": {pts:  2, freq:  4},
					"Ó": {pts:  6, freq:  1},
					"Ö": {pts:  8, freq:  1},
					"Ú": {pts:  8, freq:  1},
					"Ý": {pts:  9, freq:  1},
					"Þ": {pts:  5, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "tvöfalt stäfgildi"},
					{id: 3, text: "tvöfalt orðgildi"},
					{id: 4, text: "þrefalt stäfgildi"},
					{id: 5, text: "þrefalt orðgildi"}
				]
			}
		]
	},

	{
		exonym: "Malay",
		endonym: "Bahasa Melayu",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Indonesian",
				langEndonym: "Bahasa Indonesia",
				mfr: "Mattel",
				year: 2024,
				region: "Southeast Asia",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","Y","Z"],
				tileSet: {
					"A": {pts:  1, freq: 19},
					"B": {pts:  5, freq:  4},
					"C": {pts:  8, freq:  3},
					"D": {pts:  3, freq:  4},
					"E": {pts:  1, freq:  8},
					"F": {pts:  5, freq:  1},
					"G": {pts:  3, freq:  3},
					"H": {pts:  4, freq:  2},
					"I": {pts:  1, freq:  8},
					"J": {pts: 10, freq:  1},
					"K": {pts:  2, freq:  3},
					"L": {pts:  4, freq:  3},
					"M": {pts:  2, freq:  3},
					"N": {pts:  1, freq:  9},
					"O": {pts:  1, freq:  3},
					"P": {pts:  4, freq:  2},
					"R": {pts:  1, freq:  4},
					"S": {pts:  1, freq:  3},
					"T": {pts:  1, freq:  5},
					"U": {pts:  1, freq:  5},
					"V": {pts:  5, freq:  1},
					"W": {pts:  8, freq:  1},
					"Y": {pts:  5, freq:  2},
					"Z": {pts: 10, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "nilai huruf ganda"},
					{id: 3, text: "nilai kata ganda"},
					{id: 4, text: "nilai huruf tiga"},
					{id: 5, text: "nilai kata tiga"}
				]
			},
			{
				title: "Scrabble Original",
				langExonym: "Malaysian Malay",
				langEndonym: "Bahasa Melayu Malaysia",
				mfr: "Mattel",
				year: 2024,
				region: "Southeast Asia",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","Y","Z"],
				tileSet: {
					"A": {pts:  1, freq: 19},
					"B": {pts:  3, freq:  3},
					"C": {pts:  8, freq:  1},
					"D": {pts:  3, freq:  3},
					"E": {pts:  1, freq:  7},
					"F": {pts: 10, freq:  1},
					"G": {pts:  3, freq:  4},
					"H": {pts:  4, freq:  2},
					"I": {pts:  1, freq:  7},
					"J": {pts:  5, freq:  1},
					"K": {pts:  1, freq:  6},
					"L": {pts:  2, freq:  4},
					"M": {pts:  1, freq:  5},
					"N": {pts:  1, freq:  8},
					"O": {pts:  4, freq:  2},
					"P": {pts:  4, freq:  2},
					"R": {pts:  1, freq:  5},
					"S": {pts:  2, freq:  4},
					"T": {pts:  1, freq:  5},
					"U": {pts:  1, freq:  6},
					"W": {pts:  8, freq:  1},
					"Y": {pts:  5, freq:  1},
					"Z": {pts: 10, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "nilai huruf ganda"},
					{id: 3, text: "nilai kata ganda"},
					{id: 4, text: "nilai huruf tiga"},
					{id: 5, text: "nilai kata tiga"}
				]
			},
		]
	},

	{
		exonym: "Irish",
		endonym: "Gaeilge",
		editions: [
			{
				title: "Scrabble as Gaeilge",
				langExonym: "Irish",
				langEndonym: "Gaeilge",
				mfr: "Mattel",
				year: 2024,
				region: "Ireland",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","R","S","T","U","Á","É","Í","Ó","Ú"],
				tileSet: {
					"A": {pts:  1, freq: 13},
					"B": {pts: 10, freq:  1},
					"C": {pts:  2, freq:  4},
					"D": {pts:  2, freq:  4},
					"E": {pts:  1, freq:  6},
					"F": {pts:  4, freq:  2},
					"G": {pts:  2, freq:  3},
					"H": {pts:  1, freq: 10},
					"I": {pts:  1, freq: 10},
					"L": {pts:  2, freq:  4},
					"M": {pts:  4, freq:  2},
					"N": {pts:  1, freq:  7},
					"O": {pts:  2, freq:  4},
					"P": {pts: 10, freq:  1},
					"R": {pts:  1, freq:  7},
					"S": {pts:  1, freq:  6},
					"T": {pts:  2, freq:  4},
					"U": {pts:  2, freq:  3},
					"Á": {pts:  4, freq:  2},
					"É": {pts:  8, freq:  1},
					"Í": {pts:  4, freq:  2},
					"Ó": {pts:  8, freq:  1},
					"Ú": {pts:  8, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "luach litreach faoi dhó"},
					{id: 3, text: "luach focail faoi dhó"},
					{id: 4, text: "luach litreach faoi thrí"},
					{id: 5, text: "luach focail faoi thrí"}
				]
			}
		]
	},

	{
		exonym: "Italian",
		endonym: "Italiano",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Italian",
				langEndonym: "Italiano",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","Z"],
				tileSet: {
					"A": {pts:  1, freq: 14},
					"B": {pts:  5, freq:  3},
					"C": {pts:  2, freq:  6},
					"D": {pts:  5, freq:  3},
					"E": {pts:  1, freq: 11},
					"F": {pts:  5, freq:  3},
					"G": {pts:  8, freq:  2},
					"H": {pts:  8, freq:  2},
					"I": {pts:  1, freq: 12},
					"L": {pts:  3, freq:  5},
					"M": {pts:  3, freq:  5},
					"N": {pts:  3, freq:  5},
					"O": {pts:  1, freq: 15},
					"P": {pts:  5, freq:  3},
					"Q": {pts: 10, freq:  1},
					"R": {pts:  2, freq:  6},
					"S": {pts:  2, freq:  6},
					"T": {pts:  2, freq:  6},
					"U": {pts:  3, freq:  5},
					"V": {pts:  5, freq:  3},
					"Z": {pts:  8, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "lettera valore doppio"},
					{id: 3, text: "parola valore doppio"},
					{id: 4, text: "lettera valore triplo"},
					{id: 5, text: "parola valore triplo"}
				]
			},
			{
				title: "Scarabeo",
				langExonym: "Italian",
				langEndonym: "Italiano",
				mfr: "Editrice Giochi",
				year: 2024,
				region: "Italy",

				boards: ["17"],
				alphabet: ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","Z"],
				tileSet: {
					"A": {pts:  1, freq: 12},
					"B": {pts:  4, freq:  4},
					"C": {pts:  1, freq:  7},
					"D": {pts:  4, freq:  4},
					"E": {pts:  1, freq: 12},
					"F": {pts:  4, freq:  4},
					"G": {pts:  4, freq:  4},
					"H": {pts:  8, freq:  2},
					"I": {pts:  1, freq: 12},
					"L": {pts:  2, freq:  6},
					"M": {pts:  2, freq:  6},
					"N": {pts:  2, freq:  6},
					"O": {pts:  1, freq: 12},
					"P": {pts:  3, freq:  4},
					"Q": {pts: 10, freq:  2},
					"R": {pts:  1, freq:  7},
					"S": {pts:  1, freq:  7},
					"T": {pts:  1, freq:  7},
					"U": {pts:  4, freq:  4},
					"V": {pts:  4, freq:  4},
					"Z": {pts:  8, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "lettera valore doppio"},
					{id: 3, text: "parola valore doppio"},
					{id: 4, text: "lettera valore triplo"},
					{id: 5, text: "parola valore triplo"}
				]
			}			
		]
	},

	{
		exonym: "Latin",
		endonym: "Latina",
		editions: [
			{
				title: "Scrabble in Lingua Latina",
				aka: "Scrabularum",
				langExonym: "Latin",
				langEndonym: "Latina",
				mfr: "Mattel",
				year: 2024,
				region: "Worldwide",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","X"],
				tileSet: {
					"A": {pts:  1, freq:  9},
					"B": {pts:  5, freq:  2},
					"C": {pts:  2, freq:  4},
					"D": {pts:  3, freq:  3},
					"E": {pts:  1, freq: 11},
					"F": {pts:  6, freq:  1},
					"G": {pts:  6, freq:  1},
					"H": {pts: 10, freq:  1},
					"I": {pts:  1, freq: 11},
					"L": {pts:  4, freq:  2},
					"M": {pts:  2, freq:  5},
					"N": {pts:  1, freq:  6},
					"O": {pts:  2, freq:  5},
					"P": {pts:  4, freq:  2},
					"Q": {pts: 10, freq:  1},
					"R": {pts:  1, freq:  9},
					"S": {pts:  1, freq:  8},
					"T": {pts:  1, freq:  7},
					"U": {pts:  1, freq:  7},
					"V": {pts:  5, freq:  2},
					"X": {pts:  6, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "pretium duplex litterae"},
					{id: 3, text: "pretium duplex verbi"},
					{id: 4, text: "pretium triplex litterae"},
					{id: 5, text: "pretium triplex verbi"}
				]		
			}
		]
	},

	{
		exonym: "Latvian",
		endonym: "latviešu valoda",
		editions: [
			{
				title: "Scrabble Oriģināls",
				langExonym: "Latvian",
				langEndonym: "latviešu valoda",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Z","Ā","Č","Ē","Ģ","Ī","Ķ","Ļ","Ņ","Š","Ū","Ž"],
				tileSet: {
					"A": {pts:  1, freq: 11},
					"B": {pts:  5, freq:  1},
					"C": {pts:  5, freq:  1},
					"D": {pts:  3, freq:  3},
					"E": {pts:  1, freq:  6},
					"F": {pts: 10, freq:  1},
					"G": {pts:  5, freq:  1},
					"H": {pts: 10, freq:  1},
					"I": {pts:  1, freq:  9},
					"J": {pts:  4, freq:  2},
					"K": {pts:  2, freq:  4},
					"L": {pts:  2, freq:  3},
					"M": {pts:  2, freq:  4},
					"N": {pts:  2, freq:  4},
					"O": {pts:  3, freq:  3},
					"P": {pts:  2, freq:  3},
					"R": {pts:  1, freq:  5},
					"S": {pts:  1, freq:  8},
					"T": {pts:  1, freq:  6},
					"U": {pts:  1, freq:  5},
					"V": {pts:  3, freq:  3},
					"Z": {pts:  3, freq:  2},
					"Ā": {pts:  2, freq:  4},
					"Č": {pts: 10, freq:  1},
					"Ē": {pts:  4, freq:  2},
					"Ģ": {pts: 10, freq:  1},
					"Ī": {pts:  4, freq:  2},
					"Ķ": {pts: 10, freq:  1},
					"Ļ": {pts:  8, freq:  1},
					"Ņ": {pts:  6, freq:  1},
					"Š": {pts:  6, freq:  1},
					"Ū": {pts:  6, freq:  1},
					"Ž": {pts:  8, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "divkārša burta vērtība"},
					{id: 3, text: "divkārša vārda vērtība"},
					{id: 4, text: "trīskārša burta vērtība"},
					{id: 5, text: "trīskārša vārda vērtība"}
				]		
			}
		]
	},

	{
		exonym: "Lithuanian",
		endonym: "lietuvių kalba",
		editions: [
			{
				title: "Scrabble Originalus",
				langExonym: "Lithuanian",
				langEndonym: "lietuvių kalba",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z","Ą","Č","Ė","Ę","Į","Š","Ū","Ų","Ž"],
				tileSet: {
					"A": {pts:  1, freq: 12},
					"B": {pts:  2, freq:  1},
					"C": {pts: 10, freq:  1},
					"D": {pts:  2, freq:  3},
					"E": {pts:  1, freq:  5},
					"F": {pts: 10, freq:  1},
					"G": {pts:  4, freq:  2},
					"H": {pts: 10, freq:  1},
					"I": {pts:  1, freq: 13},
					"J": {pts:  4, freq:  2},
					"K": {pts:  1, freq:  4},
					"L": {pts:  2, freq:  3},
					"M": {pts:  2, freq:  3},
					"N": {pts:  1, freq:  5},
					"O": {pts:  1, freq:  6},
					"P": {pts:  3, freq:  3},
					"R": {pts:  1, freq:  5},
					"S": {pts:  1, freq:  8},
					"T": {pts:  1, freq:  6},
					"U": {pts:  1, freq:  4},
					"V": {pts:  4, freq:  2},
					"Y": {pts:  5, freq:  1},
					"Z": {pts: 10, freq:  1},
					"Ą": {pts:  8, freq:  1},
					"Č": {pts:  8, freq:  1},
					"Ė": {pts:  4, freq:  2},
					"Ę": {pts: 10, freq:  1},
					"Į": {pts:  8, freq:  1},
					"Š": {pts:  5, freq:  1},
					"Ū": {pts:  8, freq:  1},
					"Ų": {pts:  6, freq:  1},
					"Ž": {pts:  6, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "dviguba raidė"},
					{id: 3, text: "dvigubas žodis"},
					{id: 4, text: "triguba raidė"},
					{id: 5, text: "trigubas žodis"}
				]	
			},
			{
				title: "KrisKros Klasik",
				langExonym: "Lithuanian",
				langEndonym: "lietuvių kalba",
				mfr: "Dino",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z","Ą","Č","Ė","Ę","Į","Š","Ū","Ų","Ž"],
				tileSet: {
					"A": {pts:  1, freq:  9},
					"B": {pts:  2, freq:  2},
					"C": {pts:  7, freq:  1},
					"D": {pts:  2, freq:  3},
					"E": {pts:  1, freq:  6},
					"F": {pts: 10, freq:  1},
					"G": {pts:  2, freq:  2},
					"H": {pts: 10, freq:  1},
					"I": {pts:  1, freq: 11},
					"J": {pts:  4, freq:  2},
					"K": {pts:  2, freq:  4},
					"L": {pts:  1, freq:  6},
					"M": {pts:  2, freq:  3},
					"N": {pts:  1, freq:  4},
					"O": {pts:  1, freq:  5},
					"P": {pts:  2, freq:  3},
					"R": {pts:  1, freq:  9},
					"S": {pts:  1, freq:  6},
					"T": {pts:  1, freq:  5},
					"U": {pts:  1, freq:  5},
					"V": {pts:  4, freq:  1},
					"Y": {pts:  6, freq:  1},
					"Z": {pts:  5, freq:  1},
					"Ą": {pts:  1, freq:  1},
					"Č": {pts:  7, freq:  1},
					"Ė": {pts:  3, freq:  2},
					"Ę": {pts:  2, freq:  1},
					"Į": {pts:  4, freq:  1},
					"Š": {pts:  3, freq:  2},
					"Ū": {pts:  5, freq:  1},
					"Ų": {pts:  3, freq:  1},
					"Ž": {pts:  4, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "2x raidė"},
					{id: 3, text: "2x žodis"},
					{id: 4, text: "3x raidė"},
					{id: 5, text: "3x žodis"}
				]
			}
		]
	},

	{
		exonym: "Malagasy",
		endonym: "malagasy",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Malagasy",
				langEndonym: "malagasy",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","V","Y","Z"],
				tileSet: {
					"A": {pts:  1, freq: 20},
					"B": {pts:  4, freq:  2},
					"D": {pts:  3, freq:  2},
					"E": {pts:  1, freq:  4},
					"F": {pts:  2, freq:  2},
					"G": {pts: 10, freq:  1},
					"H": {pts:  6, freq:  1},
					"I": {pts:  1, freq: 11},
					"J": {pts:  6, freq:  1},
					"K": {pts:  1, freq:  5},
					"L": {pts:  3, freq:  2},
					"M": {pts:  2, freq:  2},
					"N": {pts:  1, freq: 13},
					"O": {pts:  1, freq: 14},
					"P": {pts:  4, freq:  2},
					"R": {pts:  6, freq:  1},
					"S": {pts:  1, freq:  4},
					"T": {pts:  1, freq:  6},
					"V": {pts:  2, freq:  2},
					"Y": {pts:  1, freq:  4},
					"Z": {pts:  6, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "sandan'ny roa litera"},
					{id: 3, text: "sandan'ny roa teny"},
					{id: 4, text: "sandan'ny telo litera"},
					{id: 5, text: "sandan'ny telo teny"}
				]
			}
		]
	},

	{
		exonym: "Norwegian",
		endonym: "Norsk",
		version: [
			{
				title: "Scrabble Original",
				langExonym: "Norwegian",
				langEndonym: "Norsk",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","W","Y","Å","Æ","Ø"],
				tileSet: {
					"A": {pts:  1, freq:  7},
					"B": {pts:  4, freq:  3},
					"C": {pts: 10, freq:  1},
					"D": {pts:  1, freq:  5},
					"E": {pts:  1, freq:  9},
					"F": {pts:  2, freq:  4},
					"G": {pts:  2, freq:  4},
					"H": {pts:  3, freq:  3},
					"I": {pts:  1, freq:  5},
					"J": {pts:  4, freq:  2},
					"K": {pts:  2, freq:  4},
					"L": {pts:  1, freq:  5},
					"M": {pts:  2, freq:  3},
					"N": {pts:  1, freq:  6},
					"O": {pts:  2, freq:  4},
					"P": {pts:  4, freq:  2},
					"R": {pts:  1, freq:  6},
					"S": {pts:  1, freq:  6},
					"T": {pts:  1, freq:  6},
					"U": {pts:  4, freq:  3},
					"V": {pts:  4, freq:  3},
					"W": {pts:  8, freq:  1},
					"Y": {pts:  6, freq:  1},
					"Å": {pts:  4, freq:  2},
					"Æ": {pts:  6, freq:  1},
					"Ø": {pts:  5, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "dobbelt bokstavpoeng"},
					{id: 3, text: "dobbelt ordpoeng"},
					{id: 4, text: "tredobbelt bokstavpoeng"},
					{id: 5, text: "tredobbelt ordpoeng"}
				]
			}
		]
	},

	{
		exonym: "Polish",
		endonym: "Polski",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Polish",
				langEndonym: "Polski",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","Y","Z","Ó","Ą","Ć","Ę","Ł","Ń","Ś","Ź","Ż"],
				tileSet: {
					"A": {pts:  1, freq:  9},
					"B": {pts:  3, freq:  2},
					"C": {pts:  2, freq:  3},
					"D": {pts:  2, freq:  3},
					"E": {pts:  1, freq:  7},
					"F": {pts:  5, freq:  1},
					"G": {pts:  3, freq:  2},
					"H": {pts:  3, freq:  2},
					"I": {pts:  1, freq:  8},
					"J": {pts:  3, freq:  2},
					"K": {pts:  2, freq:  3},
					"L": {pts:  2, freq:  3},
					"M": {pts:  2, freq:  3},
					"N": {pts:  1, freq:  5},
					"O": {pts:  1, freq:  6},
					"P": {pts:  2, freq:  3},
					"R": {pts:  1, freq:  4},
					"S": {pts:  1, freq:  4},
					"T": {pts:  2, freq:  3},
					"U": {pts:  3, freq:  2},
					"W": {pts:  1, freq:  4},
					"Y": {pts:  2, freq:  4},
					"Z": {pts:  1, freq:  5},
					"Ó": {pts:  5, freq:  1},
					"Ą": {pts:  5, freq:  1},
					"Ć": {pts:  6, freq:  1},
					"Ę": {pts:  5, freq:  1},
					"Ł": {pts:  3, freq:  2},
					"Ń": {pts:  7, freq:  1},
					"Ś": {pts:  5, freq:  1},
					"Ź": {pts:  9, freq:  1},
					"Ż": {pts:  5, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "podwójną premia literowa"},
					{id: 3, text: "podwójną premia słowna"},
					{id: 4, text: "potrójną premia literowa"},
					{id: 5, text: "potrójną premia słowna"}
				]
			}
		]
	},

	{
		exonym: "Portuguese",
		endonym: "Português",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Portuguese",
				langEndonym: "Português",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","X","Z","Ç"],
				tileSet: {
					"A": {pts:  1, freq: 14},
					"B": {pts:  3, freq:  3},
					"C": {pts:  2, freq:  4},
					"D": {pts:  2, freq:  5},
					"E": {pts:  1, freq: 11},
					"F": {pts:  4, freq:  2},
					"G": {pts:  4, freq:  2},
					"H": {pts:  4, freq:  2},
					"I": {pts:  1, freq: 10},
					"J": {pts:  5, freq:  2},
					"L": {pts:  2, freq:  5},
					"M": {pts:  1, freq:  6},
					"N": {pts:  3, freq:  4},
					"O": {pts:  1, freq: 10},
					"P": {pts:  2, freq:  4},
					"Q": {pts:  6, freq:  1},
					"R": {pts:  1, freq:  6},
					"S": {pts:  1, freq:  8},
					"T": {pts:  1, freq:  5},
					"U": {pts:  1, freq:  7},
					"V": {pts:  4, freq:  2},
					"X": {pts:  8, freq:  1},
					"Z": {pts:  8, freq:  1},
					"Ç": {pts:  3, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "letra dupla"},
					{id: 3, text: "palavra dupla"},
					{id: 4, text: "letra tripla"},
					{id: 5, text: "palavra tripla"}
				]
			}
		]
	},

	{
		exonym: "Romanian",
		endonym: "lìmba romầnă",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Romanian",
				langEndonym: "lìmba romầnă",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","R","S","T","U","V","X","Z"],
				tileSet: {
					"A": {pts:  1, freq: 10},
					"B": {pts:  5, freq:  2},
					"C": {pts:  1, freq:  5},
					"D": {pts:  3, freq:  4},
					"E": {pts:  1, freq:  9},
					"F": {pts:  4, freq:  2},
					"G": {pts:  6, freq:  2},
					"H": {pts:  8, freq:  1},
					"I": {pts:  1, freq: 11},
					"J": {pts: 10, freq:  1},
					"L": {pts:  1, freq:  5},
					"M": {pts:  4, freq:  3},
					"N": {pts:  1, freq:  6},
					"O": {pts:  2, freq:  5},
					"P": {pts:  2, freq:  4},
					"R": {pts:  1, freq:  6},
					"S": {pts:  1, freq:  6},
					"T": {pts:  1, freq:  7},
					"U": {pts:  1, freq:  5},
					"V": {pts:  4, freq:  2},
					"X": {pts: 10, freq:  1},
					"Z": {pts:  8, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "valoare dublă litera"},
					{id: 3, text: "valoare dublă cuvânt"},
					{id: 4, text: "valoare triplă litera"},
					{id: 5, text: "valoare triplă cuvânt"}
				]
			}
		]
	},

	{
		exonym: "Russian",
		endonym: "Pусский",
		editions: [
			{
				title: "Scrabble Original",
				aka: "Скрэббл",
				langExonym: "Russian",
				langEndonym: "Pусский",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"],
				tileSet: {
					"А": {pts:  1, freq:  8},
					"Б": {pts:  3, freq:  2},
					"В": {pts:  1, freq:  4},
					"Г": {pts:  3, freq:  2},
					"Д": {pts:  2, freq:  4},
					"Е": {pts:  1, freq:  8},
					"Ж": {pts:  5, freq:  1},
					"З": {pts:  5, freq:  2},
					"Ё": {pts:  3, freq:  1},
					"И": {pts:  1, freq:  5},
					"Й": {pts:  4, freq:  1},
					"К": {pts:  2, freq:  4},
					"Л": {pts:  2, freq:  4},
					"М": {pts:  2, freq:  3},
					"Н": {pts:  1, freq:  5},
					"О": {pts:  1, freq: 10},
					"П": {pts:  2, freq:  4},
					"Р": {pts:  1, freq:  5},
					"С": {pts:  1, freq:  5},
					"Т": {pts:  1, freq:  5},
					"У": {pts:  2, freq:  4},
					"Ф": {pts: 10, freq:  1},
					"Х": {pts:  5, freq:  1},
					"Ц": {pts:  5, freq:  1},
					"Ч": {pts:  5, freq:  1},
					"Ш": {pts:  8, freq:  1},
					"Щ": {pts: 10, freq:  1},
					"Ъ": {pts: 10, freq:  1},
					"Ы": {pts:  4, freq:  2},
					"Ь": {pts:  3, freq:  2},
					"Э": {pts:  8, freq:  1},
					"Ю": {pts:  8, freq:  1},
					"Я": {pts:  3, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "двойной счет буквы"},
					{id: 3, text: "двойной счет словы"},
					{id: 4, text: "тройной счет буквы"},
					{id: 5, text: "тройной счет словы"}
				]
			},
			{
				title: "Словодел",
				langExonym: "Russian",
				langEndonym: "Pусский",
				mfr: "Десятое королевство",
				year: 2024,
				region: "Russia",
			}
		]
	},

	{
		exonym: "Slovak",
		endonym: "Slovenčina",
		editions: [
			{
				title: "Scrabble Originál",
				langExonym: "Slovak",
				langEndonym: "Slovenčina",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","X","Y","Z","Á","Ä","É","Í","Ó","Ô","Ú","Ý","Č","Ď","Ĺ","Ľ","Ň","Ŕ","Š","Ť","Ž"],
				tileSet: {
					"A": {pts:  1, freq:  9},
					"B": {pts:  4, freq:  2},
					"C": {pts:  4, freq:  1},
					"D": {pts:  2, freq:  3},
					"E": {pts:  1, freq:  8},
					"F": {pts:  8, freq:  1},
					"G": {pts:  8, freq:  1},
					"H": {pts:  4, freq:  1},
					"I": {pts:  1, freq:  5},
					"J": {pts:  3, freq:  2},
					"K": {pts:  2, freq:  3},
					"L": {pts:  2, freq:  3},
					"M": {pts:  2, freq:  4},
					"N": {pts:  1, freq:  5},
					"O": {pts:  1, freq:  9},
					"P": {pts:  2, freq:  3},
					"R": {pts:  1, freq:  4},
					"S": {pts:  1, freq:  4},
					"T": {pts:  1, freq:  4},
					"U": {pts:  3, freq:  2},
					"V": {pts:  1, freq:  4},
					"X": {pts: 10, freq:  1},
					"Y": {pts:  4, freq:  1},
					"Z": {pts:  4, freq:  1},
					"Á": {pts:  4, freq:  1},
					"Ä": {pts: 10, freq:  1},
					"É": {pts:  7, freq:  1},
					"Í": {pts:  5, freq:  1},
					"Ó": {pts: 10, freq:  1},
					"Ô": {pts:  8, freq:  1},
					"Ú": {pts:  7, freq:  1},
					"Ý": {pts:  5, freq:  1},
					"Č": {pts:  5, freq:  1},
					"Ď": {pts:  8, freq:  1},
					"Ĺ": {pts: 10, freq:  1},
					"Ľ": {pts:  7, freq:  1},
					"Ň": {pts:  8, freq:  1},
					"Ŕ": {pts: 10, freq:  1},
					"Š": {pts:  5, freq:  1},
					"Ť": {pts:  7, freq:  1},
					"Ž": {pts:  5, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "dvakrat hodnota písmena"},
					{id: 3, text: "dvakrat hodnota slova"},
					{id: 4, text: "trikrat hodnota písmena"},
					{id: 5, text: "trikrat hodnota slova"}
				]
			}
		]
	},

	{
		exonym: "Slovenian",
		endonym: "Slovenščina",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Slovak",
				langEndonym: "Slovenčina",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Z","Č","Š","Ž"],
				tileSet: {
					"A": {pts:  1, freq: 10},
					"B": {pts:  4, freq:  2},
					"C": {pts:  8, freq:  1},
					"D": {pts:  2, freq:  4},
					"E": {pts:  1, freq: 11},
					"F": {pts: 10, freq:  1},
					"G": {pts:  4, freq:  2},
					"H": {pts:  5, freq:  1},
					"I": {pts:  1, freq:  9},
					"J": {pts:  1, freq:  4},
					"K": {pts:  3, freq:  3},
					"L": {pts:  1, freq:  4},
					"M": {pts:  3, freq:  2},
					"N": {pts:  1, freq:  7},
					"O": {pts:  1, freq:  8},
					"P": {pts:  3, freq:  2},
					"R": {pts:  1, freq:  6},
					"S": {pts:  1, freq:  6},
					"T": {pts:  1, freq:  4},
					"U": {pts:  3, freq:  2},
					"V": {pts:  2, freq:  4},
					"Z": {pts:  4, freq:  2},
					"Č": {pts:  5, freq:  1},
					"Š": {pts:  6, freq:  1},
					"Ž": {pts: 10, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "dvojna črka ocena"},
					{id: 3, text: "dvojna besedna ocena"},
					{id: 4, text: "trojna črka ocena"},
					{id: 5, text: "trojna besedna ocena"}
				]
			}
		]
	},

	{
		exonym: "Swedish",
		endonym: "Svenska",
		editions: [
			{
				title: "Scrabble Original",
				langExonym: "Swedish",
				langEndonym: "Svenska",
				mfr: "Mattel",
				year: 2024,
				region: "Scandinavia",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","X","Y","Z","Ä","Å","Ö"],
				tileSet: {
					"A": {pts:  1, freq:  8},
					"B": {pts:  4, freq:  2},
					"C": {pts:  8, freq:  1},
					"D": {pts:  1, freq:  5},
					"E": {pts:  1, freq:  7},
					"F": {pts:  3, freq:  2},
					"G": {pts:  2, freq:  3},
					"H": {pts:  2, freq:  2},
					"I": {pts:  1, freq:  5},
					"J": {pts:  7, freq:  1},
					"K": {pts:  2, freq:  3},
					"L": {pts:  1, freq:  5},
					"M": {pts:  2, freq:  3},
					"N": {pts:  1, freq:  6},
					"O": {pts:  2, freq:  5},
					"P": {pts:  4, freq:  2},
					"R": {pts:  1, freq:  8},
					"S": {pts:  1, freq:  8},
					"T": {pts:  1, freq:  8},
					"U": {pts:  4, freq:  3},
					"V": {pts:  3, freq:  2},
					"X": {pts:  8, freq:  1},
					"Y": {pts:  7, freq:  1},
					"Z": {pts: 10, freq:  1},
					"Ä": {pts:  3, freq:  2},
					"Å": {pts:  4, freq:  2},
					"Ö": {pts:  4, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "2x bokstav poäng"},
					{id: 3, text: "2x ord poäng"},
					{id: 4, text: "3x bokstav poäng"},
					{id: 5, text: "3x ord poäng"}
				]
			},
			{
				title: "Alfapet",
				langExonym: "Swedish",
				langEndonym: "Svenska",
				mfr: "Alga",
				year: 2024,
				region: "Sweden",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z","Ä","Å","Ö"],
				tileSet: {
					"A": {pts:  1, freq:  9},
					"B": {pts:  4, freq:  2},
					"C": {pts:  8, freq:  2},
					"D": {pts:  1, freq:  7},
					"E": {pts:  1, freq:  8},
					"F": {pts:  4, freq:  2},
					"G": {pts:  2, freq:  4},
					"H": {pts:  3, freq:  3},
					"I": {pts:  1, freq:  6},
					"J": {pts:  8, freq:  1},
					"K": {pts:  3, freq:  3},
					"L": {pts:  1, freq:  7},
					"M": {pts:  3, freq:  3},
					"N": {pts:  1, freq:  7},
					"O": {pts:  2, freq:  5},
					"P": {pts:  3, freq:  3},
					"Q": {pts: 10, freq:  1},
					"R": {pts:  1, freq:  9},
					"S": {pts:  1, freq:  8},
					"T": {pts:  1, freq:  7},
					"U": {pts:  3, freq:  3},
					"V": {pts:  4, freq:  2},
					"X": {pts: 10, freq:  1},
					"Y": {pts:  8, freq:  2},
					"Z": {pts: 10, freq:  1},
					"Ä": {pts:  4, freq:  2},
					"Å": {pts:  4, freq:  2},
					"Ö": {pts:  4, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: ""},
					{id: 3, text: ""},
					{id: 4, text: ""},
					{id: 5, text: ""}
				]
			}
		]
	},

	{
		exonym: "Turkish",
		endonym: "Türkçe",
		editions: [
			{
				title: "Scrabble Orijinal",
				langExonym: "Turkish",
				langEndonym: "Türkçe",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z","Ç","Ö","Ü","Ğ","İ","Ş"],
				tileSet: {
					"A": {pts:  1, freq: 12},
					"B": {pts:  3, freq:  2},
					"C": {pts:  4, freq:  2},
					"D": {pts:  3, freq:  2},
					"E": {pts:  1, freq:  8},
					"F": {pts:  7, freq:  1},
					"G": {pts:  5, freq:  1},
					"H": {pts:  5, freq:  1},
					"I": {pts:  2, freq:  4},
					"J": {pts: 10, freq:  1},
					"K": {pts:  1, freq:  7},
					"L": {pts:  1, freq:  7},
					"M": {pts:  2, freq:  4},
					"N": {pts:  1, freq:  5},
					"O": {pts:  2, freq:  3},
					"P": {pts:  5, freq:  1},
					"R": {pts:  1, freq:  6},
					"S": {pts:  2, freq:  3},
					"T": {pts:  1, freq:  5},
					"U": {pts:  2, freq:  3},
					"V": {pts:  7, freq:  1},
					"Y": {pts:  3, freq:  2},
					"Z": {pts:  4, freq:  2},
					"Ç": {pts:  4, freq:  2},
					"Ö": {pts:  7, freq:  1},
					"Ü": {pts:  3, freq:  2},
					"Ğ": {pts:  8, freq:  1},
					"İ": {pts:  1, freq:  7},
					"Ş": {pts:  4, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "harfin iki katı"},
					{id: 3, text: "kelimenin iki katı"},
					{id: 4, text: "harfin üç katı"},
					{id: 5, text: "kelimenin üç katı"}
				]
			}
		]
	},

	{
		exonym: "Ukrainian",
		endonym: "українська мова",
		editions: [
			{
				title: "Scrabble Оригінальна гра",
				aka: "Скрабл",
				langExonym: "Ukrainian",
				langEndonym: "українська мова",
				mfr: "Mattel",
				year: 2024,
				region: "Europe",

				boards: ["15-scr"],
				alphabet: ["А", "Б", "В", "Г", "Ґ", "Д", "Е", "Є", "Ж", "З", "И", "І", "Ї", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ь", "Ю", "Я"],
				tileSet: {
					"'": {pts: 10, freq:  1},
					"Є": {pts:  8, freq:  1},
					"І": {pts:  1, freq:  5},
					"Ї": {pts:  6, freq:  1},
					"А": {pts:  1, freq:  8},
					"Б": {pts:  4, freq:  2},
					"В": {pts:  1, freq:  4},
					"Г": {pts:  4, freq:  2},
					"Д": {pts:  2, freq:  3},
					"Е": {pts:  1, freq:  5},
					"Ж": {pts:  6, freq:  1},
					"З": {pts:  4, freq:  2},
					"И": {pts:  1, freq:  7},
					"Й": {pts:  5, freq:  1},
					"К": {pts:  2, freq:  4},
					"Л": {pts:  2, freq:  3},
					"М": {pts:  2, freq:  4},
					"Н": {pts:  1, freq:  7},
					"О": {pts:  1, freq: 10},
					"П": {pts:  2, freq:  3},
					"Р": {pts:  1, freq:  5},
					"С": {pts:  2, freq:  4},
					"Т": {pts:  1, freq:  5},
					"У": {pts:  3, freq:  3},
					"Ф": {pts:  8, freq:  1},
					"Х": {pts:  5, freq:  1},
					"Ц": {pts:  6, freq:  1},
					"Ч": {pts:  5, freq:  1},
					"Ш": {pts:  6, freq:  1},
					"Щ": {pts:  8, freq:  1},
					"Ь": {pts:  5, freq:  1},
					"Ю": {pts:  7, freq:  1},
					"Я": {pts:  4, freq:  2},
					"Ґ": {pts: 10, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "подвійний рахунок літери"},
					{id: 3, text: "подвійний рахунок слова"},
					{id: 4, text: "потрійний рахунок літери"},
					{id: 5, text: "потрійний рахунок слова"}
				]
			}
		]
	},

	{
		exonym: "Welsh",
		endonym: "Cymraeg",
		editions: [
			{
				title: "Scrabble yn Gymraeg",
				langExonym: "Welsh",
				langEndonym: "Cymraeg",
				mfr: "Mattel",
				year: 2024,
				region: "United Kingdom",

				boards: ["15-scr"],
				alphabet: ["A","B","C","CH","D","DD","E","F","FF","G","H","I","J","L","LL","M","N","NG","O","P","R","RH","S","T","TH","U","W","Y"],
				tileSet: {
					"A": {pts:  1, freq: 10},
					"B": {pts:  3, freq:  2},
					"C": {pts:  4, freq:  2},
					"CH": {pts:  5, freq:  1},
					"D": {pts:  1, freq:  6},
					"DD": {pts:  1, freq:  4},
					"E": {pts:  1, freq:  8},
					"F": {pts:  2, freq:  3},
					"FF": {pts:  4, freq:  2},
					"G": {pts:  2, freq:  3},
					"H": {pts:  4, freq:  2},
					"I": {pts:  1, freq:  7},
					"J": {pts:  8, freq:  1},
					"L": {pts:  2, freq:  3},
					"LL": {pts:  5, freq:  1},
					"M": {pts:  3, freq:  2},
					"N": {pts:  1, freq:  8},
					"NG": {pts: 10, freq:  1},
					"O": {pts:  1, freq:  6},
					"P": {pts:  5, freq:  1},
					"R": {pts:  1, freq:  7},
					"RH": {pts: 10, freq:  1},
					"S": {pts:  3, freq:  3},
					"T": {pts:  3, freq:  2},
					"TH": {pts:  4, freq:  2},
					"U": {pts:  2, freq:  3},
					"W": {pts:  1, freq:  5},
					"Y": {pts:  1, freq:  7},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "dyblu sgôr y llythyren"},
					{id: 3, text: "dyblu sgôr y gair"},
					{id: 4, text: "treblu sgôr y llythyren"},
					{id: 5, text: "treblu sgôr y gair"}
				]
			}
		]
	},

	// Unofficial
	{
		exonym: "Esperanto",
		endonym: "Esperanto",
		editions: [
			{
				title: "Skrablo",
				langExonym: "Esperanto",
				langEndonym: "Esperanto",
				mfr: "",
				year: 2024,
			}
		]
	},

	{
		exonym: "Toki Pona",
		endonym: "toki pona",
		editions: [
			{
				title: "musi nimi leko",
				langExonym: "Toki Pona",
				langEndonym: "toki pona",
				mfr: "The Guy Who Made This App",
				year: 2024,

				boards: ["15-scr"],
				alphabet: ["A", "E", "I", "J", "K", "L", "M", "N", "O", "P", "S", "T", "U", "W"],
				tileSet: {
					"A": {pts:  0, freq: 16},
					"E": {pts:  4, freq:  7},
					"I": {pts:  1, freq: 15},
					"J": {pts: 10, freq:  1},
					"K": {pts:  5, freq:  5},
					"L": {pts:  3, freq: 10},
					"M": {pts:  5, freq:  6},
					"N": {pts:  3, freq: 11},
					"O": {pts:  4, freq:  8},
					"P": {pts:  5, freq:  5},
					"S": {pts:  8, freq:  4},
					"T": {pts:  5, freq:  5},
					"U": {pts:  8, freq:  3},
					"W": {pts: 10, freq:  2},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "nanpa pi lipu toki tu"},
					{id: 3, text: "nanpa pi nimi tu"},
					{id: 4, text: "nanpa pi lipu toki tu wan"},
					{id: 5, text: "nanpa pi nimi tu wan"}
				]
			}
		]
	},

	{
		exonym: "Armenian",
		endonym: "հայերեն",
		font: "Noto Sans Armenian",
		editions: [
			{
				exonym: "Armenian",
				endonym: "հայերեն",
			}
		]
	},

	{
		exonym: "Bambara",
		endonym: "Bámánánkán",
		editions: [
			{
				exonym: "",
				endonym: "",
			}
		]
	},

	{
		exonym: "Basque",
		endonym: "euskara",
		editions: [
			{
				exonym: "Basque",
				endonym: "euskara",
			}
		]
	},

	{
		exonym: "Bikol",
		endonym: "Bikol",
		editions: [
			{
				exonym: "Bikol",
				endonym: "Bikol",
			}
		]
	},

	{
		exonym: "Breton",
		endonym: "brezhoneg",
		editions: [
			{
				exonym: "Breton",
				endonym: "brezhoneg",
			}
		]
	},

	{
		exonym: "Cornish",
		endonym: "Kernewek",
		editions: [
			{
				exonym: "Cornish",
				endonym: "Kernewek",
			}
		]
	},

	{
		exonym: "Carrier",
		endonym: "Dakelh",
		editions: [
			{
				exonym: "Carrier",
				endonym: "Dakelh",
			}
		]
	},

	{
		exonym: "Dakota",
		endonym: "Dakhód'iapi",
		editions: [
			{
				exonym: "Dakota",
				endonym: "Dakhód'iapi",
			}
		]
	},

	{
		exonym: "Galician",
		endonym: "galego",
		editions: [
			{
				exonym: "Galician",
				endonym: "galego",
			}
		]
	},

	{
		exonym: "Gwichʼin",
		endonym: "Dinju Zhuh Kʼyuu",
		editions: [
			{
				exonym: "Gwichʼin",
				endonym: "Dinju Zhuh Kʼyuu",
			}
		]
	},

	{
		exonym: "Haitian Creole",
		endonym: "kreyòl ayisyen",
		editions: [
			{
				exonym: "Haitian Creole",
				endonym: "kreyòl ayisyen",
			}
		]
	},

	{
		exonym: "Hausa",
		endonym: "Harshen Hausa",
		editions: [
			{
				exonym: "Hausa",
				endonym: "Harshen Hausa",
			}
		]
	},

	{
		exonym: "Hawaiian",
		endonym: "ʻōlelo Hawaiʻi",
		editions: [
			{
				exonym: "Hawaiian",
				endonym: "ʻōlelo Hawaiʻi",
			}
		]
	},

	{
		exonym: "Igbo",
		endonym: "Ásụ̀sụ́ Ìgbò",
		editions: [
			{
				exonym: "Igbo",
				endonym: "Ásụ̀sụ́ Ìgbò",
			}
		]
	},

	{
		exonym: "Japanese",
		endonym: "日本語",
		font: "Noto Sans JP",
		editions: [
			{
				title: "Hiragana Edition",
				langExonym: "Hiragana",
				langEndonym: "ひらがな",
				mfr: "",
				year: 2024,
			},
			{
				title: "Katakana Edition",
				langExonym: "Katakana",
				langEndonym: "カタカナ",
				mfr: "",
				year: 2024,
			},
			{
				title: "Romaji Edition",
				langExonym: "Romaji",
				langEndonym: "Rōmaji",
				mfr: "",
				year: 2024,
			},
		]
	},

	{
		exonym: "Klingon",
		endonym: "tlhIngan Hol",
		editions: [
			{
				exonym: "Klingon",
				endonym: "tlhIngan Hol",
			}
		]
	},

	{
		exonym: "Leet",
		endonym: "1337",
		editions: [
			{
				exonym: "Leet",
				endonym: "1337",
			}
		]
	},

	{
		exonym: "Lojban",
		endonym: "la .lojban.",
		editions: [
			{
				exonym: "Lojban",
				endonym: "la .lojban.",
			}
		]
	},

	{
		exonym: "Māori",
		endonym: "te reo Māori",
		editions: [
			{
				exonym: "Māori",
				endonym: "te reo Māori",
			}
		]
	},

	{
		exonym: "Math",
		endonym: "+-×÷",
		font: "Noto Sans Math",
		editions: [
			{
				exonym: "Math",
				endonym: "+-×÷",
				
			}
		]
	},

	{
		exonym: "Na'vi",
		endonym: "Lìʼfya leNaʼvi",
		editions: [
			{
				exonym: "Na'vi",
				endonym: "Lìʼfya leNaʼvi",
			}
		]
	},

	{
		exonym: "Nuxalk",
		endonym: "ItNuxalkmc",
		editions: [
			{
				exonym: "Nuxalk",
				endonym: "ItNuxalkmc",
			}
		]
	},

	{
		exonym: "Occitan",
		endonym: "occitan",
		editions: [
			{
				exonym: "Occitan",
				endonym: "occitan",
			}
		]
	},

	{
		exonym: "Persian",
		endonym: "فارسی",
		font: "Noto Sans Arabic",
		editions: [
			{
				exonym: "Persian",
				endonym: "فارسی",
			}
		]
	},

	{
		exonym: "Chinese",
		endonym: "中文",
		font: "Noto Sans SC",
		editions: [
			{
				title: "",
				langExonym: "Standard Chinese (Pinyin)",
				langEndonym: "Hànyǔ pīnyīn",
				mfr: "",
				year: 2024,
				region: "",
			},
			{
				title: "",
				langExonym: "Mandarin (Zhuyin)",
				langEndonym: "ㄅㄆㄇㄈ",
				mfr: "",
				year: 2024,
				region: "",
			}
		]
	},

	{
		exonym: "Scottish Gaelic",
		endonym: "Gàidhlig",
		editions: [
			{
				exonym: "Scottish Gaelic",
				endonym: "Gàidhlig",
			}
		]
	},

	{
		exonym: "Serbian",
		endonym: "српски језик",
		editions: [
			{
				exonym: "Serbian",
				endonym: "српски језик",
			}
		]
	},

	{
		exonym: "Tagalog",
		endonym: "Wikang Tagalog",
		editions: [
			{
				exonym: "Tagalog",
				endonym: "Wikang Tagalog",
			}
		]
	},

	{
		exonym: "Tamil",
		endonym: "தமிழ்",
		font: "Noto Sans Tamil",
		editions: [
			{
				title: "Easy Set",
				langExonym: "Tamil",
				langEndonym: "தமிழ்",
				mfr: "",
				year: 2024,
				region: "",

				boards: ["40"],
				alphabet: ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ", "க", "ங", "ச", "ஞ", "ட", "ண", "த", "ந", "ன", "ப", "ம", "ய", "ர", "ற", "ல", "ள", "ழ", "வ"],
				tileSet: {
					"ஃ": {pts: 10, freq:  1},
					"அ": {pts:  2, freq: 10},
					"ஆ": {pts:  4, freq:  3},
					"இ": {pts:  3, freq:  4},
					"ஈ": {pts:  9, freq:  1},
					"உ": {pts:  3, freq:  4},
					"ஊ": {pts:  9, freq:  1},
					"எ": {pts:  4, freq:  2},
					"ஏ": {pts:  7, freq:  1},
					"ஐ": {pts:  8, freq:  1},
					"ஒ": {pts:  5, freq:  1},
					"ஓ": {pts:  9, freq:  1},
					"க": {pts:  1, freq: 57},
					"கி": {pts:  2, freq:  7},
					"கீ": {pts:  9, freq:  1},
					"கு": {pts:  1, freq: 15},
					"கூ": {pts:  7, freq:  2},
					"க்": {pts:  2, freq: 22},
					"ங்": {pts:  3, freq:  8},
					"ச": {pts:  1, freq: 29},
					"சி": {pts:  2, freq:  9},
					"சீ": {pts:  9, freq:  1},
					"சு": {pts:  5, freq:  7},
					"சூ": {pts:  9, freq:  1},
					"ச்": {pts:  4, freq:  7},
					"ஞ": {pts: 10, freq:  1},
					"ஞ்": {pts:  8, freq:  4},
					"ட": {pts:  1, freq: 18},
					"டி": {pts:  2, freq: 10},
					"டீ": {pts: 10, freq:  1},
					"டு": {pts:  1, freq: 15},
					"டூ": {pts: 10, freq:  1},
					"ட்": {pts:  2, freq: 15},
					"ண": {pts:  4, freq:  7},
					"ணி": {pts:  6, freq:  3},
					"ணீ": {pts: 10, freq:  1},
					"ணு": {pts:  9, freq:  1},
					"ணூ": {pts: 10, freq:  1},
					"ண்": {pts:  3, freq:  9},
					"த": {pts:  1, freq: 48},
					"தி": {pts:  1, freq: 17},
					"தீ": {pts:  9, freq:  1},
					"து": {pts:  1, freq: 10},
					"தூ": {pts:  9, freq:  1},
					"த்": {pts:  2, freq: 23},
					"ந": {pts:  2, freq:  9},
					"நி": {pts:  5, freq:  3},
					"நீ": {pts:  8, freq:  1},
					"நு": {pts: 10, freq:  1},
					"நூ": {pts:  8, freq:  1},
					"ந்": {pts:  3, freq:  8},
					"ன": {pts:  1, freq: 12},
					"னி": {pts:  5, freq:  3},
					"னீ": {pts: 10, freq:  1},
					"னு": {pts:  7, freq:  1},
					"னூ": {pts: 10, freq:  1},
					"ன்": {pts:  1, freq: 17},
					"ப": {pts:  1, freq: 36},
					"பி": {pts:  2, freq:  7},
					"பீ": {pts:  9, freq:  1},
					"பு": {pts:  2, freq: 10},
					"பூ": {pts:  8, freq:  3},
					"ப்": {pts:  2, freq: 15},
					"ம": {pts:  1, freq: 25},
					"மி": {pts:  4, freq:  3},
					"மீ": {pts:  8, freq:  1},
					"மு": {pts:  3, freq:  6},
					"மூ": {pts:  8, freq:  2},
					"ம்": {pts:  1, freq: 41},
					"ய": {pts:  1, freq: 18},
					"யி": {pts:  3, freq:  3},
					"யீ": {pts: 10, freq:  1},
					"யு": {pts:  6, freq:  1},
					"யூ": {pts:  9, freq:  1},
					"ய்": {pts:  5, freq:  5},
					"ர": {pts:  1, freq: 28},
					"ரி": {pts:  2, freq:  8},
					"ரீ": {pts: 10, freq:  1},
					"ரு": {pts:  1, freq: 11},
					"ரூ": {pts: 10, freq:  1},
					"ர்": {pts:  2, freq: 13},
					"ற": {pts:  2, freq:  7},
					"றி": {pts:  4, freq:  3},
					"றீ": {pts: 10, freq:  1},
					"று": {pts:  2, freq:  7},
					"றூ": {pts: 10, freq:  1},
					"ற்": {pts:  3, freq:  7},
					"ல": {pts:  1, freq: 17},
					"லி": {pts:  5, freq:  4},
					"லீ": {pts: 10, freq:  1},
					"லு": {pts:  6, freq:  2},
					"லூ": {pts: 10, freq:  1},
					"ல்": {pts:  1, freq: 26},
					"ள": {pts:  2, freq:  8},
					"ளி": {pts:  3, freq:  3},
					"ளீ": {pts: 10, freq:  1},
					"ளு": {pts:  6, freq:  1},
					"ளூ": {pts: 10, freq:  1},
					"ள்": {pts:  2, freq:  6},
					"ழ": {pts:  5, freq:  3},
					"ழி": {pts:  6, freq:  2},
					"ழு": {pts:  6, freq:  2},
					"ழ்": {pts:  5, freq:  1},
					"வ": {pts:  1, freq: 31},
					"வி": {pts:  2, freq: 10},
					"வீ": {pts:  8, freq:  1},
					"வு": {pts:  4, freq:  3},
					"வூ": {pts: 10, freq:  1},
					"வ்": {pts:  8, freq:  1},
					"ா": {pts:  1, freq: 85},
					"ெ": {pts:  1, freq: 24},
					"ே": {pts:  1, freq: 22},
					"ை": {pts:  1, freq: 35},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "2x கடிதம்"},
					{id: 3, text: "2x சொல்"},
					{id: 6, text: "4x கடிதம்"},
					{id: 7, text: "4x சொல்"}
				]
			},
			{
				title: "Hard Set",
				langExonym: "Tamil",
				langEndonym: "தமிழ்",
				mfr: "",
				year: 2024,
				region: "",

				boards: ["40"],
				alphabet: ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ", "க", "ங", "ச", "ஞ", "ட", "ண", "த", "ந", "ன", "ப", "ம", "ய", "ர", "ற", "ல", "ள", "ழ", "வ"],
				tileSet: {
					"ஃ": {pts: 13, freq:  1},
					"அ": {pts:  2, freq: 11},
					"ஆ": {pts:  4, freq:  3},
					"இ": {pts:  3, freq:  5},
					"ஈ": {pts:  9, freq:  1},
					"உ": {pts:  3, freq:  5},
					"ஊ": {pts:  8, freq:  1},
					"எ": {pts:  4, freq:  2},
					"ஏ": {pts:  7, freq:  1},
					"ஐ": {pts: 10, freq:  1},
					"ஒ": {pts:  6, freq:  1},
					"ஓ": {pts:  9, freq:  1},
					"ஔ": {pts: 14, freq:  1},
					"க": {pts:  1, freq: 40},
					"கா": {pts:  1, freq: 13},
					"கி": {pts:  2, freq:  8},
					"கீ": {pts:  9, freq:  1},
					"கு": {pts:  1, freq: 17},
					"கூ": {pts:  6, freq:  2},
					"கெ": {pts:  8, freq:  1},
					"கே": {pts:  8, freq:  1},
					"கை": {pts:  3, freq:  5},
					"கொ": {pts:  3, freq:  5},
					"கோ": {pts:  5, freq:  3},
					"கௌ": {pts: 11, freq:  1},
					"க்": {pts:  2, freq: 26},
					"ங்": {pts:  3, freq: 10},
					"ச": {pts:  1, freq: 19},
					"சா": {pts:  3, freq:  6},
					"சி": {pts:  2, freq: 10},
					"சீ": {pts:  7, freq:  1},
					"சு": {pts:  3, freq:  8},
					"சூ": {pts:  9, freq:  1},
					"செ": {pts:  4, freq:  3},
					"சே": {pts:  7, freq:  1},
					"சை": {pts:  6, freq:  2},
					"சொ": {pts:  7, freq:  1},
					"சோ": {pts:  7, freq:  1},
					"சௌ": {pts: 12, freq:  1},
					"ச்": {pts:  3, freq:  9},
					"ஞ": {pts: 11, freq:  1},
					"ஞா": {pts:  9, freq:  1},
					"ஞ்": {pts:  6, freq:  4},
					"ட": {pts:  1, freq: 12},
					"டா": {pts:  5, freq:  2},
					"டி": {pts:  2, freq: 12},
					"டீ": {pts: 11, freq:  1},
					"டு": {pts:  1, freq: 18},
					"டூ": {pts: 12, freq:  1},
					"டெ": {pts: 16, freq:  1},
					"டே": {pts: 14, freq:  1},
					"டை": {pts:  3, freq:  6},
					"டொ": {pts: 17, freq:  1},
					"டோ": {pts: 14, freq:  1},
					"ட்": {pts:  2, freq: 18},
					"ண": {pts:  4, freq:  6},
					"ணா": {pts:  8, freq:  1},
					"ணி": {pts:  5, freq:  4},
					"ணீ": {pts: 12, freq:  1},
					"ணு": {pts:  9, freq:  1},
					"ணூ": {pts: 17, freq:  1},
					"ணெ": {pts: 17, freq:  1},
					"ணே": {pts: 19, freq:  1},
					"ணை": {pts:  7, freq:  1},
					"ணோ": {pts: 18, freq:  1},
					"ண்": {pts:  3, freq: 10},
					"த": {pts:  1, freq: 42},
					"தா": {pts:  3, freq:  7},
					"தி": {pts:  1, freq: 20},
					"தீ": {pts:  8, freq:  1},
					"து": {pts:  1, freq: 12},
					"தூ": {pts:  8, freq:  1},
					"தெ": {pts:  7, freq:  1},
					"தே": {pts:  6, freq:  2},
					"தை": {pts:  6, freq:  2},
					"தொ": {pts:  7, freq:  1},
					"தோ": {pts:  7, freq:  1},
					"தௌ": {pts: 15, freq:  1},
					"த்": {pts:  2, freq: 27},
					"ந": {pts:  4, freq:  4},
					"நா": {pts:  4, freq:  4},
					"நி": {pts:  5, freq:  3},
					"நீ": {pts:  8, freq:  1},
					"நு": {pts: 10, freq:  1},
					"நூ": {pts:  9, freq:  1},
					"நெ": {pts:  7, freq:  1},
					"நே": {pts:  9, freq:  1},
					"நை": {pts: 15, freq:  1},
					"நொ": {pts: 10, freq:  1},
					"நோ": {pts:  9, freq:  1},
					"ந்": {pts:  3, freq:  9},
					"ன": {pts:  2, freq:  9},
					"னா": {pts:  7, freq:  1},
					"னி": {pts:  5, freq:  3},
					"னீ": {pts: 13, freq:  1},
					"னு": {pts:  8, freq:  1},
					"னூ": {pts: 16, freq:  1},
					"னெ": {pts: 18, freq:  1},
					"னே": {pts: 15, freq:  1},
					"னை": {pts:  6, freq:  2},
					"னொ": {pts: 20, freq:  1},
					"னோ": {pts: 11, freq:  1},
					"ன்": {pts:  1, freq: 20},
					"ப": {pts:  1, freq: 23},
					"பா": {pts:  2, freq:  9},
					"பி": {pts:  2, freq:  9},
					"பீ": {pts:  9, freq:  1},
					"பு": {pts:  2, freq: 12},
					"பூ": {pts:  6, freq:  3},
					"பெ": {pts:  6, freq:  2},
					"பே": {pts:  7, freq:  1},
					"பை": {pts:  8, freq:  1},
					"பொ": {pts:  5, freq:  2},
					"போ": {pts:  5, freq:  3},
					"பௌ": {pts: 12, freq:  1},
					"ப்": {pts:  2, freq: 18},
					"ம": {pts:  1, freq: 17},
					"மா": {pts:  3, freq:  6},
					"மி": {pts:  4, freq:  3},
					"மீ": {pts:  8, freq:  1},
					"மு": {pts:  3, freq:  7},
					"மூ": {pts:  7, freq:  1},
					"மெ": {pts:  8, freq:  1},
					"மே": {pts:  7, freq:  1},
					"மை": {pts:  6, freq:  2},
					"மொ": {pts:  8, freq:  1},
					"மோ": {pts:  8, freq:  1},
					"மௌ": {pts: 13, freq:  1},
					"ம்": {pts:  1, freq: 49},
					"ய": {pts:  1, freq: 14},
					"யா": {pts:  4, freq:  4},
					"யி": {pts:  5, freq:  3},
					"யீ": {pts: 12, freq:  1},
					"யு": {pts:  7, freq:  1},
					"யூ": {pts: 10, freq:  1},
					"யெ": {pts: 10, freq:  1},
					"யே": {pts: 10, freq:  1},
					"யை": {pts: 10, freq:  1},
					"யொ": {pts: 19, freq:  1},
					"யோ": {pts:  9, freq:  1},
					"ய்": {pts:  4, freq:  5},
					"ர": {pts:  1, freq: 23},
					"ரா": {pts:  4, freq:  5},
					"ரி": {pts:  2, freq: 10},
					"ரீ": {pts: 10, freq:  1},
					"ரு": {pts:  1, freq: 13},
					"ரூ": {pts: 10, freq:  1},
					"ரெ": {pts: 13, freq:  1},
					"ரே": {pts: 10, freq:  1},
					"ரை": {pts:  5, freq:  3},
					"ரொ": {pts: 14, freq:  1},
					"ரோ": {pts:  9, freq:  1},
					"ர்": {pts:  1, freq: 16},
					"ற": {pts:  4, freq:  4},
					"றா": {pts: 10, freq:  1},
					"றி": {pts:  4, freq:  3},
					"றீ": {pts: 19, freq:  1},
					"று": {pts:  2, freq:  7},
					"றூ": {pts: 18, freq:  1},
					"றெ": {pts: 20, freq:  1},
					"றே": {pts: 19, freq:  1},
					"றை": {pts:  6, freq:  2},
					"றொ": {pts: 20, freq:  1},
					"றோ": {pts: 17, freq:  1},
					"ற்": {pts:  3, freq:  8},
					"ல": {pts:  2, freq: 10},
					"லா": {pts:  5, freq:  2},
					"லி": {pts:  4, freq:  5},
					"லீ": {pts: 11, freq:  1},
					"லு": {pts:  6, freq:  2},
					"லூ": {pts: 14, freq:  1},
					"லெ": {pts: 13, freq:  1},
					"லே": {pts: 10, freq:  1},
					"லை": {pts:  3, freq:  6},
					"லொ": {pts: 18, freq:  1},
					"லோ": {pts: 10, freq:  1},
					"ல்": {pts:  1, freq: 32},
					"ள": {pts:  3, freq:  5},
					"ளா": {pts:  9, freq:  1},
					"ளி": {pts:  4, freq:  4},
					"ளீ": {pts: 18, freq:  1},
					"ளு": {pts:  6, freq:  1},
					"ளூ": {pts: 16, freq:  1},
					"ளெ": {pts: 16, freq:  1},
					"ளே": {pts: 19, freq:  1},
					"ளை": {pts:  5, freq:  2},
					"ளொ": {pts: 20, freq:  1},
					"ளோ": {pts: 17, freq:  1},
					"ள்": {pts:  2, freq:  7},
					"ழ": {pts:  6, freq:  2},
					"ழா": {pts: 10, freq:  1},
					"ழி": {pts:  5, freq:  3},
					"ழு": {pts:  5, freq:  3},
					"ழை": {pts:  8, freq:  1},
					"ழ்": {pts:  6, freq:  1},
					"வ": {pts:  1, freq: 20},
					"வா": {pts:  2, freq:  8},
					"வி": {pts:  2, freq: 12},
					"வீ": {pts:  8, freq:  1},
					"வு": {pts:  4, freq:  3},
					"வூ": {pts: 15, freq:  1},
					"வெ": {pts:  4, freq:  3},
					"வே": {pts:  5, freq:  2},
					"வை": {pts:  5, freq:  2},
					"வொ": {pts: 16, freq:  1},
					"வோ": {pts: 15, freq:  1},
					"வௌ": {pts: 20, freq:  1},
					"வ்": {pts:  9, freq:  1},
					"?": {freq: 2}
				},
				premiumCells: [
					{id: 2, text: "2x கடிதம்"},
					{id: 3, text: "2x சொல்"},
					{id: 6, text: "4x கடிதம்"},
					{id: 7, text: "4x சொல்"}
				]
			}
		]
	},

	{
		exonym: "Tswana",
		endonym: "Setswana",
		editions: [
			{
				exonym: "Tswana",
				endonym: "Setswana",
			}
		]
	},

	{
		exonym: "Tuvan",
		endonym: "Тыва дыл",
		editions: [
			{
				exonym: "Tuvan",
				endonym: "Тыва дыл",
			}
		]
	},

	{
		exonym: "Vietnamese",
		endonym: "tiếng Việt",
		editions: [
			{
				exonym: "Vietnamese",
				endonym: "tiếng Việt",
			}
		]
	},
	{
		exonym: "Lhasa Tibetan",
		endonym: "བོད་སྐད་",
		font: "Noto Serif Tibetan",
		editions: [
			{
				title: "Lhasa Tibetan Edition",
				langExonym: "Lhasa Tibetan",
				langEndonym: "བོད་སྐད་",
				mfr: "Shawn",
				year: 2024,
				botName: "རིབ་མི་ཀོཔ་ཏིང་པ།",

				boards: ["15-scr"],
				alphabet: ["ཀ", "ཁ", "ག", "ང", "ཅ", "ཆ", "ཇ", "ཉ", "ཏ", "ཐ", "ད", "ན", "པ", "ཕ", "བ", "མ", "ཙ", "ཚ", "ཛ", "ཝ", "ཞ", "ཟ", "འ", "ཡ", "ར", "ལ", "ཤ", "ས", "ཧ", "ཨ"],
				tileSet: [
					{letter: "ཀ", pts:  8, freq:  3},
					{letter: "ཁ", pts:  8, freq:  3},
					{letter: "ག", pts:  2, freq: 11},
					{letter: "ང", pts:  2, freq: 11},
					{letter: "ཅ", pts: 10, freq:  1},
					{letter: "ཆ", pts:  5, freq:  5},
					{letter: "ཇ", pts:  4, freq:  7},
					{letter: "ཉ", pts:  1, freq: 13},
					{letter: "ཏ", pts:  4, freq:  7},
					{letter: "ཐ", pts:  8, freq:  2},
					{letter: "ད", pts:  2, freq: 11},
					{letter: "ན", pts:  2, freq: 11},
					{letter: "པ", pts:  2, freq: 11},
					{letter: "ཕ", pts:  3, freq:  9},
					{letter: "བ", pts:  8, freq:  2},
					{letter: "མ", pts:  4, freq:  6},
					{letter: "ཙ", pts:  4, freq:  7},
					{letter: "ཚ", pts:  1, freq: 14},
					{letter: "ཛ", pts:  3, freq:  9},
					{letter: "ཝ", pts:  2, freq: 11},
					{letter: "ཞ", pts:  5, freq:  4},
					{letter: "ཟ", pts:  3, freq:  8},
					{letter: "འ", pts:  8, freq:  3},
					{letter: "ཡ", pts: 10, freq:  1},
					{letter: "ར", pts:  8, freq:  3},
					{letter: "ལ", pts: 10, freq:  1},
					{letter: "ཤ", pts: 10, freq:  1},
					{letter: "ས", pts:  1, freq: 13},
					{letter: "ཧ", pts:  3, freq:  9},
					{letter: "ཨ", pts: 10, freq:  1},
					{letter: "?", freq: 2}
				],
				premiumCells: [
					{id: 2, abbr: "2ཡི", text: "double letter score"},
					{id: 3, abbr: "2ཚི", text: "double word score"},
					{id: 4, abbr: "3ཡི", text: "triple letter score"},
					{id: 5, abbr: "3ཚི", text: "triple word score"}
				]
			}
		]
	},
];