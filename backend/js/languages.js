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
				rackSize: 7,
				alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
				tileSet: [
					{letter: "A", points:  1, freq:  9},
					{letter: "B", points:  3, freq:  2},
					{letter: "C", points:  3, freq:  2},
					{letter: "D", points:  2, freq:  4},
					{letter: "E", points:  1, freq: 12},
					{letter: "F", points:  4, freq:  2},
					{letter: "G", points:  2, freq:  3},
					{letter: "H", points:  4, freq:  2},
					{letter: "I", points:  1, freq:  9},
					{letter: "J", points:  8, freq:  1},
					{letter: "K", points:  5, freq:  1},
					{letter: "L", points:  1, freq:  4},
					{letter: "M", points:  3, freq:  2},
					{letter: "N", points:  1, freq:  6},
					{letter: "O", points:  1, freq:  8},
					{letter: "P", points:  3, freq:  2},
					{letter: "Q", points: 10, freq:  1},
					{letter: "R", points:  1, freq:  6},
					{letter: "S", points:  1, freq:  4},
					{letter: "T", points:  1, freq:  6},
					{letter: "U", points:  1, freq:  4},
					{letter: "V", points:  4, freq:  2},
					{letter: "W", points:  4, freq:  2},
					{letter: "X", points:  8, freq:  1},
					{letter: "Y", points:  4, freq:  2},
					{letter: "Z", points: 10, freq:  1},
					{letter: "?", points:  0, freq:  2}
				],
				premiumCells: [
					{id: 2, abbr: "DL", text: "double letter score"},
					{id: 3, abbr: "DW", text: "double word score"},
					{id: 4, abbr: "TL", text: "triple letter score"},
					{id: 5, abbr: "TW", text: "triple word score"}
				],
				errorMessages: [
					"Invalid tile alignment.",
					"Invalid tile placement.",
					"Insufficient tile placement.",
					"Invalid word: <b>{0}</b>",
					"Unset blank tile."
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
					"A":  {points:  1, freq: 12},
					"B":  {points:  3, freq:  2},
					"C":  {points:  3, freq:  4},
					"CH": {points:  5, freq:  1},
					"D":  {points:  2, freq:  5},
					"E":  {points:  1, freq: 12},
					"F":  {points:  4, freq:  1},
					"G":  {points:  2, freq:  2},
					"H":  {points:  4, freq:  2},
					"I":  {points:  1, freq:  6},
					"J":  {points:  8, freq:  1},
					"L":  {points:  1, freq:  4},
					"LL": {points:  8, freq:  1},
					"M":  {points:  3, freq:  2},
					"N":  {points:  1, freq:  5},
					"O":  {points:  1, freq:  9},
					"P":  {points:  3, freq:  2},
					"Q":  {points:  5, freq:  1},
					"R":  {points:  1, freq:  5},
					"RR": {points:  8, freq:  1},
					"S":  {points:  1, freq:  6},
					"T":  {points:  1, freq:  4},
					"U":  {points:  1, freq:  5},
					"V":  {points:  4, freq:  1},
					"X":  {points:  8, freq:  1},
					"Y":  {points:  4, freq:  1},
					"Z":  {points: 10, freq:  1},
					"Ñ":  {points:  8, freq:  1},
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
					"A":  {points:  1, freq: 11},
					"B":  {points:  3, freq:  3},
					"C":  {points:  2, freq:  4},
					"D":  {points:  2, freq:  4},
					"E":  {points:  1, freq: 11},
					"F":  {points:  4, freq:  2},
					"G":  {points:  2, freq:  2},
					"H":  {points:  4, freq:  2},
					"I":  {points:  1, freq:  6},
					"J":  {points:  6, freq:  2},
					"K":  {points:  8, freq:  1},
					"L":  {points:  1, freq:  4},
					"LL": {points:  8, freq:  1},
					"M":  {points:  3, freq:  3},
					"N":  {points:  1, freq:  5},
					"O":  {points:  1, freq:  8},
					"P":  {points:  3, freq:  2},
					"Q":  {points:  8, freq:  1},
					"R":  {points:  1, freq:  4},
					"RR": {points:  8, freq:  1},
					"S":  {points:  1, freq:  7},
					"T":  {points:  1, freq:  4},
					"U":  {points:  1, freq:  6},
					"V":  {points:  4, freq:  2},
					"W":  {points:  8, freq:  1},
					"X":  {points:  8, freq:  1},
					"Y":  {points:  4, freq:  1},
					"Z":  {points: 10, freq:  1},
					"Ñ":  {points:  8, freq:  1},
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
					"A": {points:  1, freq:  9},
					"B": {points:  2, freq:  2},
					"C": {points:  3, freq:  2},
					"CH": {points:  4, freq:  4},
					"D": {points:  2, freq:  4},
					"E": {points:  1, freq: 12},
					"F": {points:  4, freq:  2},
					"G": {points:  2, freq:  3},
					"H": {points:  4, freq:  2},
					"I": {points:  1, freq:  9},
					"J": {points:  8, freq:  1},
					"K": {points:  5, freq:  1},
					"L": {points:  1, freq:  4},
					"LL": {points:  4, freq:  3},
					"M": {points:  3, freq:  2},
					"N": {points:  1, freq:  6},
					"O": {points:  1, freq:  8},
					"P": {points:  3, freq:  2},
					"Q": {points: 10, freq:  1},
					"R": {points:  1, freq:  6},
					"S": {points:  1, freq:  4},
					"T": {points:  1, freq:  6},
					"U": {points:  1, freq:  4},
					"V": {points:  4, freq:  2},
					"X": {points:  8, freq:  1},
					"Y": {points:  4, freq:  2},
					"Z": {points: 10, freq:  1},
					"Ñ": {points:  1, freq:  3},
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
					"A": {points:  1, freq:  9},
					"B": {points:  3, freq:  2},
					"C": {points:  3, freq:  2},
					"D": {points:  2, freq:  3},
					"E": {points:  1, freq: 15},
					"F": {points:  4, freq:  2},
					"G": {points:  2, freq:  2},
					"H": {points:  4, freq:  2},
					"I": {points:  1, freq:  8},
					"J": {points:  8, freq:  1},
					"K": {points: 10, freq:  1},
					"L": {points:  1, freq:  5},
					"M": {points:  2, freq:  3},
					"N": {points:  1, freq:  6},
					"O": {points:  1, freq:  6},
					"P": {points:  3, freq:  2},
					"Q": {points:  8, freq:  1},
					"R": {points:  1, freq:  6},
					"S": {points:  1, freq:  6},
					"T": {points:  1, freq:  6},
					"U": {points:  1, freq:  6},
					"V": {points:  4, freq:  2},
					"W": {points: 10, freq:  1},
					"X": {points: 10, freq:  1},
					"Y": {points: 10, freq:  1},
					"Z": {points: 10, freq:  1},
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
					"A": {points:  1, freq:  5},
					"B": {points:  3, freq:  2},
					"C": {points:  4, freq:  2},
					"D": {points:  1, freq:  4},
					"E": {points:  1, freq: 15},
					"F": {points:  4, freq:  2},
					"G": {points:  2, freq:  3},
					"H": {points:  2, freq:  4},
					"I": {points:  1, freq:  6},
					"J": {points:  6, freq:  1},
					"K": {points:  4, freq:  2},
					"L": {points:  2, freq:  3},
					"M": {points:  3, freq:  4},
					"N": {points:  1, freq:  9},
					"O": {points:  2, freq:  3},
					"P": {points:  4, freq:  1},
					"Q": {points: 10, freq:  1},
					"R": {points:  1, freq:  6},
					"S": {points:  1, freq:  7},
					"T": {points:  1, freq:  6},
					"U": {points:  1, freq:  6},
					"V": {points:  6, freq:  1},
					"W": {points:  3, freq:  1},
					"X": {points:  8, freq:  1},
					"Y": {points: 10, freq:  1},
					"Z": {points:  3, freq:  1},
					"Ä": {points:  6, freq:  1},
					"Ö": {points:  8, freq:  1},
					"Ü": {points:  6, freq:  1},
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
					"A": {points:  1, freq:  9},
					"B": {points:  8, freq:  1},
					"D": {points:  1, freq:  6},
					"E": {points:  1, freq: 16},
					"F": {points:  8, freq:  1},
					"G": {points:  2, freq:  4},
					"H": {points:  2, freq:  3},
					"I": {points:  1, freq:  8},
					"J": {points: 10, freq:  1},
					"K": {points:  3, freq:  3},
					"L": {points:  2, freq:  3},
					"M": {points:  4, freq:  2},
					"N": {points:  1, freq:  8},
					"O": {points:  1, freq:  6},
					"P": {points:  5, freq:  2},
					"R": {points:  1, freq:  6},
					"S": {points:  1, freq:  6},
					"T": {points:  1, freq:  6},
					"U": {points:  4, freq:  2},
					"V": {points:  5, freq:  2},
					"W": {points:  3, freq:  3},
					"Y": {points:  4, freq:  2},
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
					"ي": {points:  1, freq:  3},
					"ﺀ": {points:  8, freq:  2},
					"ﺃ": {points: 10, freq:  2},
					"ﺅ": {points: 10, freq:  2},
					"ﺉ": {points:  6, freq:  2},
					"ﺍ": {points:  1, freq:  8},
					"ﺏ": {points:  2, freq:  4},
					"ﺕ": {points:  2, freq:  4},
					"ﺙ": {points:  2, freq:  3},
					"ﺝ": {points:  1, freq:  4},
					"ﺡ": {points:  1, freq:  3},
					"ﺥ": {points:  1, freq:  3},
					"ﺩ": {points:  2, freq:  3},
					"ﺫ": {points:  3, freq:  3},
					"ﺭ": {points:  2, freq:  3},
					"ﺯ": {points:  3, freq:  3},
					"ﺱ": {points:  2, freq:  3},
					"ﺵ": {points:  3, freq:  3},
					"ﺹ": {points:  4, freq:  3},
					"ﺽ": {points:  4, freq:  3},
					"ﻁ": {points:  4, freq:  2},
					"ﻅ": {points:  5, freq:  2},
					"ﻉ": {points:  4, freq:  3},
					"ﻍ": {points:  8, freq:  2},
					"ﻑ": {points:  3, freq:  3},
					"ﻕ": {points:  3, freq:  3},
					"ﻙ": {points:  4, freq:  3},
					"ﻝ": {points:  1, freq:  4},
					"ﻡ": {points:  1, freq:  3},
					"ﻥ": {points:  1, freq:  3},
					"ﻩ": {points:  1, freq:  3},
					"ﻭ": {points:  1, freq:  3},
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
					"А": {points:  1, freq:  9},
					"Б": {points:  2, freq:  3},
					"В": {points:  2, freq:  4},
					"Г": {points:  3, freq:  3},
					"Д": {points:  2, freq:  4},
					"Е": {points:  1, freq:  8},
					"Ж": {points:  4, freq:  2},
					"З": {points:  4, freq:  2},
					"И": {points:  1, freq:  8},
					"Й": {points:  5, freq:  1},
					"К": {points:  2, freq:  3},
					"Л": {points:  2, freq:  3},
					"М": {points:  2, freq:  4},
					"Н": {points:  1, freq:  4},
					"О": {points:  1, freq:  9},
					"П": {points:  1, freq:  4},
					"Р": {points:  1, freq:  4},
					"С": {points:  1, freq:  4},
					"Т": {points:  1, freq:  5},
					"У": {points:  5, freq:  3},
					"Ф": {points: 10, freq:  1},
					"Х": {points:  5, freq:  1},
					"Ц": {points:  8, freq:  1},
					"Ч": {points:  5, freq:  2},
					"Ш": {points:  8, freq:  1},
					"Щ": {points: 10, freq:  1},
					"Ъ": {points:  3, freq:  2},
					"Ь": {points: 10, freq:  1},
					"Ю": {points:  8, freq:  1},
					"Я": {points:  5, freq:  2},
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
					"A": {points:  1, freq: 12},
					"B": {points:  3, freq:  2},
					"C": {points:  2, freq:  3},
					"D": {points:  2, freq:  3},
					"E": {points:  1, freq: 13},
					"F": {points:  4, freq:  1},
					"G": {points:  3, freq:  2},
					"H": {points:  8, freq:  1},
					"I": {points:  1, freq:  8},
					"J": {points:  8, freq:  1},
					"L": {points:  1, freq:  4},
					"L·L": {points: 10, freq:  1},
					"M": {points:  2, freq:  3},
					"N": {points:  1, freq:  6},
					"NY": {points: 10, freq:  1},
					"O": {points:  1, freq:  5},
					"P": {points:  3, freq:  2},
					"Q": {points:  8, freq:  1},
					"R": {points:  1, freq:  8},
					"S": {points:  1, freq:  8},
					"T": {points:  1, freq:  5},
					"U": {points:  1, freq:  4},
					"V": {points:  4, freq:  1},
					"X": {points: 10, freq:  1},
					"Z": {points:  8, freq:  1},
					"Ç": {points: 10, freq:  1},
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
					"A": {points:  1, freq: 11},
					"B": {points:  3, freq:  1},
					"C": {points:  4, freq:  1},
					"D": {points:  3, freq:  3},
					"DŽ": {points: 10, freq:  1},
					"E": {points:  1, freq:  9},
					"F": {points:  8, freq:  1},
					"G": {points:  3, freq:  2},
					"H": {points:  4, freq:  1},
					"I": {points:  1, freq: 10},
					"J": {points:  1, freq:  4},
					"K": {points:  2, freq:  3},
					"L": {points:  3, freq:  2},
					"LJ": {points:  4, freq:  1},
					"M": {points:  2, freq:  3},
					"N": {points:  1, freq:  6},
					"NJ": {points:  4, freq:  1},
					"O": {points:  1, freq:  9},
					"P": {points:  2, freq:  3},
					"R": {points:  1, freq:  5},
					"S": {points:  1, freq:  5},
					"T": {points:  1, freq:  5},
					"U": {points:  1, freq:  4},
					"V": {points:  2, freq:  3},
					"Z": {points:  3, freq:  2},
					"Ć": {points:  5, freq:  1},
					"Č": {points:  3, freq:  1},
					"Đ": {points: 10, freq:  1},
					"Š": {points:  4, freq:  1},
					"Ž": {points:  4, freq:  1},
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
					"A": {points:  1, freq:  5},
					"B": {points:  3, freq:  2},
					"C": {points:  2, freq:  3},
					"D": {points:  1, freq:  3},
					"E": {points:  1, freq:  5},
					"F": {points:  5, freq:  1},
					"G": {points:  5, freq:  1},
					"H": {points:  2, freq:  3},
					"I": {points:  1, freq:  4},
					"J": {points:  2, freq:  2},
					"K": {points:  1, freq:  3},
					"L": {points:  1, freq:  3},
					"M": {points:  2, freq:  3},
					"N": {points:  1, freq:  5},
					"O": {points:  1, freq:  6},
					"P": {points:  1, freq:  3},
					"R": {points:  1, freq:  3},
					"S": {points:  1, freq:  4},
					"T": {points:  1, freq:  4},
					"U": {points:  2, freq:  3},
					"V": {points:  1, freq:  4},
					"X": {points: 10, freq:  1},
					"Y": {points:  2, freq:  2},
					"Z": {points:  2, freq:  2},
					"Á": {points:  2, freq:  2},
					"É": {points:  3, freq:  2},
					"Í": {points:  2, freq:  3},
					"Ó": {points:  7, freq:  1},
					"Ú": {points:  5, freq:  1},
					"Ý": {points:  4, freq:  2},
					"Č": {points:  4, freq:  1},
					"Ď": {points:  8, freq:  1},
					"Ě": {points:  3, freq:  2},
					"Ň": {points:  6, freq:  1},
					"Ř": {points:  4, freq:  2},
					"Š": {points:  4, freq:  2},
					"Ť": {points:  7, freq:  1},
					"Ů": {points:  4, freq:  1},
					"Ž": {points:  4, freq:  1},
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
					"A": {points:  1, freq:  7},
					"B": {points:  3, freq:  4},
					"C": {points:  8, freq:  2},
					"D": {points:  2, freq:  5},
					"E": {points:  1, freq:  9},
					"F": {points:  3, freq:  3},
					"G": {points:  3, freq:  3},
					"H": {points:  4, freq:  2},
					"I": {points:  3, freq:  4},
					"J": {points:  4, freq:  2},
					"K": {points:  3, freq:  4},
					"L": {points:  2, freq:  5},
					"M": {points:  3, freq:  3},
					"N": {points:  1, freq:  6},
					"O": {points:  2, freq:  5},
					"P": {points:  4, freq:  2},
					"R": {points:  1, freq:  6},
					"S": {points:  2, freq:  5},
					"T": {points:  2, freq:  5},
					"U": {points:  3, freq:  3},
					"V": {points:  3, freq:  3},
					"X": {points:  8, freq:  1},
					"Y": {points:  4, freq:  2},
					"Z": {points:  8, freq:  1},
					"Å": {points:  4, freq:  2},
					"Æ": {points:  4, freq:  2},
					"Ø": {points:  4, freq:  2},
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
					"A": {points:  1, freq:  6},
					"B": {points:  3, freq:  2},
					"C": {points:  5, freq:  2},
					"D": {points:  2, freq:  5},
					"E": {points:  1, freq: 18},
					"F": {points:  4, freq:  2},
					"G": {points:  3, freq:  3},
					"H": {points:  4, freq:  2},
					"I": {points:  1, freq:  4},
					"J": {points:  4, freq:  2},
					"K": {points:  3, freq:  3},
					"L": {points:  3, freq:  3},
					"M": {points:  3, freq:  3},
					"N": {points:  1, freq: 10},
					"O": {points:  1, freq:  6},
					"P": {points:  3, freq:  2},
					"Q": {points: 10, freq:  1},
					"R": {points:  2, freq:  5},
					"S": {points:  2, freq:  5},
					"T": {points:  2, freq:  5},
					"U": {points:  4, freq:  3},
					"V": {points:  4, freq:  2},
					"W": {points:  5, freq:  2},
					"X": {points:  8, freq:  1},
					"Y": {points:  8, freq:  1},
					"Z": {points:  4, freq:  2},
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
					"A": {points:  1, freq: 10},
					"B": {points:  4, freq:  1},
					"D": {points:  2, freq:  4},
					"E": {points:  1, freq:  9},
					"F": {points:  8, freq:  1},
					"G": {points:  3, freq:  2},
					"H": {points:  4, freq:  2},
					"I": {points:  1, freq:  9},
					"J": {points:  4, freq:  2},
					"K": {points:  1, freq:  5},
					"L": {points:  1, freq:  5},
					"M": {points:  2, freq:  4},
					"N": {points:  2, freq:  4},
					"O": {points:  1, freq:  5},
					"P": {points:  4, freq:  2},
					"R": {points:  2, freq:  2},
					"S": {points:  1, freq:  8},
					"T": {points:  1, freq:  7},
					"U": {points:  1, freq:  5},
					"V": {points:  3, freq:  2},
					"Z": {points: 10, freq:  1},
					"Ä": {points:  5, freq:  2},
					"Õ": {points:  4, freq:  2},
					"Ö": {points:  6, freq:  2},
					"Ü": {points:  5, freq:  2},
					"Š": {points: 10, freq:  1},
					"Ž": {points: 10, freq:  1},
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
					"A": {points:  1, freq: 10},
					"B": {points:  6, freq:  1},
					"D": {points:  4, freq:  2},
					"E": {points:  1, freq:  7},
					"F": {points:  4, freq:  2},
					"G": {points:  2, freq:  4},
					"H": {points:  4, freq:  2},
					"I": {points:  1, freq: 10},
					"J": {points:  6, freq:  1},
					"K": {points:  2, freq:  4},
					"L": {points:  2, freq:  4},
					"M": {points:  3, freq:  3},
					"N": {points:  1, freq:  7},
					"O": {points:  4, freq:  2},
					"P": {points:  8, freq:  1},
					"R": {points:  1, freq:  7},
					"S": {points:  1, freq:  5},
					"T": {points:  1, freq:  7},
					"U": {points:  1, freq:  5},
					"V": {points:  2, freq:  4},
					"Y": {points:  7, freq:  1},
					"Á": {points:  5, freq:  1},
					"Æ": {points:  8, freq:  1},
					"Í": {points:  6, freq:  1},
					"Ð": {points:  2, freq:  4},
					"Ó": {points:  6, freq:  1},
					"Ø": {points:  7, freq:  1},
					"Ú": {points:  6, freq:  1},
					"Ý": {points:  8, freq:  1},
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
					"A": {points:  1, freq: 10},
					"B": {points:  8, freq:  1},
					"C": {points: 10, freq:  1},
					"D": {points:  7, freq:  1},
					"E": {points:  1, freq:  8},
					"F": {points:  8, freq:  1},
					"G": {points:  8, freq:  1},
					"H": {points:  4, freq:  2},
					"I": {points:  1, freq: 10},
					"J": {points:  4, freq:  2},
					"K": {points:  2, freq:  5},
					"L": {points:  2, freq:  5},
					"M": {points:  3, freq:  3},
					"N": {points:  1, freq:  9},
					"O": {points:  2, freq:  5},
					"P": {points:  4, freq:  2},
					"R": {points:  4, freq:  2},
					"S": {points:  1, freq:  7},
					"T": {points:  1, freq:  9},
					"U": {points:  3, freq:  4},
					"V": {points:  4, freq:  2},
					"W": {points:  8, freq:  1},
					"Y": {points:  4, freq:  2},
					"Ä": {points:  2, freq:  5},
					"Ö": {points:  7, freq:  1},
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
					{letter: "Α", points:  1, freq: 12},
					{letter: "Β", points:  8, freq:  1},
					{letter: "Γ", points:  4, freq:  2},
					{letter: "Δ", points:  4, freq:  2},
					{letter: "Ε", points:  1, freq:  8},
					{letter: "Ζ", points: 10, freq:  1},
					{letter: "Η", points:  1, freq:  7},
					{letter: "Θ", points: 10, freq:  1},
					{letter: "Ι", points:  1, freq:  8},
					{letter: "Κ", points:  2, freq:  4},
					{letter: "Λ", points:  3, freq:  3},
					{letter: "Μ", points:  3, freq:  3},
					{letter: "Ν", points:  1, freq:  6},
					{letter: "Ξ", points: 10, freq:  1},
					{letter: "Ο", points:  1, freq:  9},
					{letter: "Π", points:  2, freq:  4},
					{letter: "Ρ", points:  2, freq:  5},
					{letter: "Σ", points:  1, freq:  7},
					{letter: "Τ", points:  1, freq:  8},
					{letter: "Υ", points:  2, freq:  4},
					{letter: "Φ", points:  8, freq:  1},
					{letter: "Χ", points:  8, freq:  1},
					{letter: "Ψ", points: 10, freq:  1},
					{letter: "Ω", points:  3, freq:  3},
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
					"א": {points:  2, freq:  6},
					"ב": {points:  3, freq:  4},
					"ג": {points:  8, freq:  1},
					"ד": {points:  3, freq:  4},
					"ה": {points:  1, freq:  8},
					"ו": {points:  1, freq: 12},
					"ז": {points:  8, freq:  1},
					"ח": {points:  5, freq:  3},
					"ט": {points:  8, freq:  1},
					"י": {points:  1, freq: 10},
					"כ": {points:  5, freq:  2},
					"ל": {points:  2, freq:  6},
					"מ": {points:  2, freq:  6},
					"נ": {points:  4, freq:  3},
					"ס": {points:  8, freq:  1},
					"ע": {points:  8, freq:  2},
					"פ": {points:  4, freq:  3},
					"צ": {points:  8, freq:  1},
					"ק": {points:  5, freq:  2},
					"ר": {points:  1, freq:  8},
					"ש": {points:  2, freq:  6},
					"ת": {points:  1, freq:  8},
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
					"A": {points:  1, freq:  6},
					"B": {points:  2, freq:  3},
					"C": {points:  5, freq:  1},
					"CS": {points:  7, freq:  1},
					"D": {points:  2, freq:  3},
					"E": {points:  1, freq:  6},
					"F": {points:  4, freq:  2},
					"G": {points:  2, freq:  3},
					"GY": {points:  4, freq:  2},
					"H": {points:  3, freq:  2},
					"I": {points:  1, freq:  3},
					"J": {points:  4, freq:  2},
					"K": {points:  1, freq:  6},
					"L": {points:  1, freq:  4},
					"LY": {points:  8, freq:  1},
					"M": {points:  1, freq:  3},
					"N": {points:  1, freq:  4},
					"NY": {points:  5, freq:  1},
					"O": {points:  1, freq:  3},
					"P": {points:  4, freq:  2},
					"R": {points:  1, freq:  4},
					"S": {points:  1, freq:  3},
					"SZ": {points:  3, freq:  2},
					"T": {points:  1, freq:  5},
					"TY": {points: 10, freq:  1},
					"U": {points:  4, freq:  2},
					"V": {points:  3, freq:  2},
					"Z": {points:  4, freq:  2},
					"ZS": {points:  8, freq:  1},
					"Á": {points:  1, freq:  4},
					"É": {points:  3, freq:  3},
					"Í": {points:  5, freq:  1},
					"Ó": {points:  2, freq:  3},
					"Ö": {points:  4, freq:  2},
					"Ú": {points:  7, freq:  1},
					"Ü": {points:  4, freq:  2},
					"Ő": {points:  7, freq:  1},
					"Ű": {points:  7, freq:  1},
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
					"A": {points:  1, freq: 10},
					"B": {points:  6, freq:  1},
					"D": {points:  4, freq:  2},
					"E": {points:  1, freq:  6},
					"F": {points:  3, freq:  3},
					"G": {points:  2, freq:  4},
					"H": {points:  4, freq:  2},
					"I": {points:  1, freq:  7},
					"J": {points:  6, freq:  1},
					"K": {points:  3, freq:  3},
					"L": {points:  2, freq:  4},
					"M": {points:  3, freq:  4},
					"N": {points:  1, freq:  8},
					"O": {points:  4, freq:  2},
					"P": {points:  8, freq:  1},
					"R": {points:  1, freq:  8},
					"S": {points:  1, freq:  6},
					"T": {points:  1, freq:  5},
					"U": {points:  1, freq:  6},
					"V": {points:  4, freq:  2},
					"X": {points: 10, freq:  1},
					"Y": {points:  6, freq:  1},
					"Á": {points:  4, freq:  2},
					"Æ": {points:  6, freq:  1},
					"É": {points:  8, freq:  1},
					"Í": {points:  4, freq:  2},
					"Ð": {points:  2, freq:  4},
					"Ó": {points:  6, freq:  1},
					"Ö": {points:  8, freq:  1},
					"Ú": {points:  8, freq:  1},
					"Ý": {points:  9, freq:  1},
					"Þ": {points:  5, freq:  1},
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
					"A": {points:  1, freq: 19},
					"B": {points:  5, freq:  4},
					"C": {points:  8, freq:  3},
					"D": {points:  3, freq:  4},
					"E": {points:  1, freq:  8},
					"F": {points:  5, freq:  1},
					"G": {points:  3, freq:  3},
					"H": {points:  4, freq:  2},
					"I": {points:  1, freq:  8},
					"J": {points: 10, freq:  1},
					"K": {points:  2, freq:  3},
					"L": {points:  4, freq:  3},
					"M": {points:  2, freq:  3},
					"N": {points:  1, freq:  9},
					"O": {points:  1, freq:  3},
					"P": {points:  4, freq:  2},
					"R": {points:  1, freq:  4},
					"S": {points:  1, freq:  3},
					"T": {points:  1, freq:  5},
					"U": {points:  1, freq:  5},
					"V": {points:  5, freq:  1},
					"W": {points:  8, freq:  1},
					"Y": {points:  5, freq:  2},
					"Z": {points: 10, freq:  1},
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
					"A": {points:  1, freq: 19},
					"B": {points:  3, freq:  3},
					"C": {points:  8, freq:  1},
					"D": {points:  3, freq:  3},
					"E": {points:  1, freq:  7},
					"F": {points: 10, freq:  1},
					"G": {points:  3, freq:  4},
					"H": {points:  4, freq:  2},
					"I": {points:  1, freq:  7},
					"J": {points:  5, freq:  1},
					"K": {points:  1, freq:  6},
					"L": {points:  2, freq:  4},
					"M": {points:  1, freq:  5},
					"N": {points:  1, freq:  8},
					"O": {points:  4, freq:  2},
					"P": {points:  4, freq:  2},
					"R": {points:  1, freq:  5},
					"S": {points:  2, freq:  4},
					"T": {points:  1, freq:  5},
					"U": {points:  1, freq:  6},
					"W": {points:  8, freq:  1},
					"Y": {points:  5, freq:  1},
					"Z": {points: 10, freq:  1},
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
					"A": {points:  1, freq: 13},
					"B": {points: 10, freq:  1},
					"C": {points:  2, freq:  4},
					"D": {points:  2, freq:  4},
					"E": {points:  1, freq:  6},
					"F": {points:  4, freq:  2},
					"G": {points:  2, freq:  3},
					"H": {points:  1, freq: 10},
					"I": {points:  1, freq: 10},
					"L": {points:  2, freq:  4},
					"M": {points:  4, freq:  2},
					"N": {points:  1, freq:  7},
					"O": {points:  2, freq:  4},
					"P": {points: 10, freq:  1},
					"R": {points:  1, freq:  7},
					"S": {points:  1, freq:  6},
					"T": {points:  2, freq:  4},
					"U": {points:  2, freq:  3},
					"Á": {points:  4, freq:  2},
					"É": {points:  8, freq:  1},
					"Í": {points:  4, freq:  2},
					"Ó": {points:  8, freq:  1},
					"Ú": {points:  8, freq:  1},
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
					"A": {points:  1, freq: 14},
					"B": {points:  5, freq:  3},
					"C": {points:  2, freq:  6},
					"D": {points:  5, freq:  3},
					"E": {points:  1, freq: 11},
					"F": {points:  5, freq:  3},
					"G": {points:  8, freq:  2},
					"H": {points:  8, freq:  2},
					"I": {points:  1, freq: 12},
					"L": {points:  3, freq:  5},
					"M": {points:  3, freq:  5},
					"N": {points:  3, freq:  5},
					"O": {points:  1, freq: 15},
					"P": {points:  5, freq:  3},
					"Q": {points: 10, freq:  1},
					"R": {points:  2, freq:  6},
					"S": {points:  2, freq:  6},
					"T": {points:  2, freq:  6},
					"U": {points:  3, freq:  5},
					"V": {points:  5, freq:  3},
					"Z": {points:  8, freq:  2},
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
					"A": {points:  1, freq: 12},
					"B": {points:  4, freq:  4},
					"C": {points:  1, freq:  7},
					"D": {points:  4, freq:  4},
					"E": {points:  1, freq: 12},
					"F": {points:  4, freq:  4},
					"G": {points:  4, freq:  4},
					"H": {points:  8, freq:  2},
					"I": {points:  1, freq: 12},
					"L": {points:  2, freq:  6},
					"M": {points:  2, freq:  6},
					"N": {points:  2, freq:  6},
					"O": {points:  1, freq: 12},
					"P": {points:  3, freq:  4},
					"Q": {points: 10, freq:  2},
					"R": {points:  1, freq:  7},
					"S": {points:  1, freq:  7},
					"T": {points:  1, freq:  7},
					"U": {points:  4, freq:  4},
					"V": {points:  4, freq:  4},
					"Z": {points:  8, freq:  2},
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
					"A": {points:  1, freq:  9},
					"B": {points:  5, freq:  2},
					"C": {points:  2, freq:  4},
					"D": {points:  3, freq:  3},
					"E": {points:  1, freq: 11},
					"F": {points:  6, freq:  1},
					"G": {points:  6, freq:  1},
					"H": {points: 10, freq:  1},
					"I": {points:  1, freq: 11},
					"L": {points:  4, freq:  2},
					"M": {points:  2, freq:  5},
					"N": {points:  1, freq:  6},
					"O": {points:  2, freq:  5},
					"P": {points:  4, freq:  2},
					"Q": {points: 10, freq:  1},
					"R": {points:  1, freq:  9},
					"S": {points:  1, freq:  8},
					"T": {points:  1, freq:  7},
					"U": {points:  1, freq:  7},
					"V": {points:  5, freq:  2},
					"X": {points:  6, freq:  1},
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
					"A": {points:  1, freq: 11},
					"B": {points:  5, freq:  1},
					"C": {points:  5, freq:  1},
					"D": {points:  3, freq:  3},
					"E": {points:  1, freq:  6},
					"F": {points: 10, freq:  1},
					"G": {points:  5, freq:  1},
					"H": {points: 10, freq:  1},
					"I": {points:  1, freq:  9},
					"J": {points:  4, freq:  2},
					"K": {points:  2, freq:  4},
					"L": {points:  2, freq:  3},
					"M": {points:  2, freq:  4},
					"N": {points:  2, freq:  4},
					"O": {points:  3, freq:  3},
					"P": {points:  2, freq:  3},
					"R": {points:  1, freq:  5},
					"S": {points:  1, freq:  8},
					"T": {points:  1, freq:  6},
					"U": {points:  1, freq:  5},
					"V": {points:  3, freq:  3},
					"Z": {points:  3, freq:  2},
					"Ā": {points:  2, freq:  4},
					"Č": {points: 10, freq:  1},
					"Ē": {points:  4, freq:  2},
					"Ģ": {points: 10, freq:  1},
					"Ī": {points:  4, freq:  2},
					"Ķ": {points: 10, freq:  1},
					"Ļ": {points:  8, freq:  1},
					"Ņ": {points:  6, freq:  1},
					"Š": {points:  6, freq:  1},
					"Ū": {points:  6, freq:  1},
					"Ž": {points:  8, freq:  1},
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
					"A": {points:  1, freq: 12},
					"B": {points:  2, freq:  1},
					"C": {points: 10, freq:  1},
					"D": {points:  2, freq:  3},
					"E": {points:  1, freq:  5},
					"F": {points: 10, freq:  1},
					"G": {points:  4, freq:  2},
					"H": {points: 10, freq:  1},
					"I": {points:  1, freq: 13},
					"J": {points:  4, freq:  2},
					"K": {points:  1, freq:  4},
					"L": {points:  2, freq:  3},
					"M": {points:  2, freq:  3},
					"N": {points:  1, freq:  5},
					"O": {points:  1, freq:  6},
					"P": {points:  3, freq:  3},
					"R": {points:  1, freq:  5},
					"S": {points:  1, freq:  8},
					"T": {points:  1, freq:  6},
					"U": {points:  1, freq:  4},
					"V": {points:  4, freq:  2},
					"Y": {points:  5, freq:  1},
					"Z": {points: 10, freq:  1},
					"Ą": {points:  8, freq:  1},
					"Č": {points:  8, freq:  1},
					"Ė": {points:  4, freq:  2},
					"Ę": {points: 10, freq:  1},
					"Į": {points:  8, freq:  1},
					"Š": {points:  5, freq:  1},
					"Ū": {points:  8, freq:  1},
					"Ų": {points:  6, freq:  1},
					"Ž": {points:  6, freq:  1},
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
					"A": {points:  1, freq:  9},
					"B": {points:  2, freq:  2},
					"C": {points:  7, freq:  1},
					"D": {points:  2, freq:  3},
					"E": {points:  1, freq:  6},
					"F": {points: 10, freq:  1},
					"G": {points:  2, freq:  2},
					"H": {points: 10, freq:  1},
					"I": {points:  1, freq: 11},
					"J": {points:  4, freq:  2},
					"K": {points:  2, freq:  4},
					"L": {points:  1, freq:  6},
					"M": {points:  2, freq:  3},
					"N": {points:  1, freq:  4},
					"O": {points:  1, freq:  5},
					"P": {points:  2, freq:  3},
					"R": {points:  1, freq:  9},
					"S": {points:  1, freq:  6},
					"T": {points:  1, freq:  5},
					"U": {points:  1, freq:  5},
					"V": {points:  4, freq:  1},
					"Y": {points:  6, freq:  1},
					"Z": {points:  5, freq:  1},
					"Ą": {points:  1, freq:  1},
					"Č": {points:  7, freq:  1},
					"Ė": {points:  3, freq:  2},
					"Ę": {points:  2, freq:  1},
					"Į": {points:  4, freq:  1},
					"Š": {points:  3, freq:  2},
					"Ū": {points:  5, freq:  1},
					"Ų": {points:  3, freq:  1},
					"Ž": {points:  4, freq:  1},
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
					"A": {points:  1, freq: 20},
					"B": {points:  4, freq:  2},
					"D": {points:  3, freq:  2},
					"E": {points:  1, freq:  4},
					"F": {points:  2, freq:  2},
					"G": {points: 10, freq:  1},
					"H": {points:  6, freq:  1},
					"I": {points:  1, freq: 11},
					"J": {points:  6, freq:  1},
					"K": {points:  1, freq:  5},
					"L": {points:  3, freq:  2},
					"M": {points:  2, freq:  2},
					"N": {points:  1, freq: 13},
					"O": {points:  1, freq: 14},
					"P": {points:  4, freq:  2},
					"R": {points:  6, freq:  1},
					"S": {points:  1, freq:  4},
					"T": {points:  1, freq:  6},
					"V": {points:  2, freq:  2},
					"Y": {points:  1, freq:  4},
					"Z": {points:  6, freq:  1},
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
					"A": {points:  1, freq:  7},
					"B": {points:  4, freq:  3},
					"C": {points: 10, freq:  1},
					"D": {points:  1, freq:  5},
					"E": {points:  1, freq:  9},
					"F": {points:  2, freq:  4},
					"G": {points:  2, freq:  4},
					"H": {points:  3, freq:  3},
					"I": {points:  1, freq:  5},
					"J": {points:  4, freq:  2},
					"K": {points:  2, freq:  4},
					"L": {points:  1, freq:  5},
					"M": {points:  2, freq:  3},
					"N": {points:  1, freq:  6},
					"O": {points:  2, freq:  4},
					"P": {points:  4, freq:  2},
					"R": {points:  1, freq:  6},
					"S": {points:  1, freq:  6},
					"T": {points:  1, freq:  6},
					"U": {points:  4, freq:  3},
					"V": {points:  4, freq:  3},
					"W": {points:  8, freq:  1},
					"Y": {points:  6, freq:  1},
					"Å": {points:  4, freq:  2},
					"Æ": {points:  6, freq:  1},
					"Ø": {points:  5, freq:  2},
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
					"A": {points:  1, freq:  9},
					"B": {points:  3, freq:  2},
					"C": {points:  2, freq:  3},
					"D": {points:  2, freq:  3},
					"E": {points:  1, freq:  7},
					"F": {points:  5, freq:  1},
					"G": {points:  3, freq:  2},
					"H": {points:  3, freq:  2},
					"I": {points:  1, freq:  8},
					"J": {points:  3, freq:  2},
					"K": {points:  2, freq:  3},
					"L": {points:  2, freq:  3},
					"M": {points:  2, freq:  3},
					"N": {points:  1, freq:  5},
					"O": {points:  1, freq:  6},
					"P": {points:  2, freq:  3},
					"R": {points:  1, freq:  4},
					"S": {points:  1, freq:  4},
					"T": {points:  2, freq:  3},
					"U": {points:  3, freq:  2},
					"W": {points:  1, freq:  4},
					"Y": {points:  2, freq:  4},
					"Z": {points:  1, freq:  5},
					"Ó": {points:  5, freq:  1},
					"Ą": {points:  5, freq:  1},
					"Ć": {points:  6, freq:  1},
					"Ę": {points:  5, freq:  1},
					"Ł": {points:  3, freq:  2},
					"Ń": {points:  7, freq:  1},
					"Ś": {points:  5, freq:  1},
					"Ź": {points:  9, freq:  1},
					"Ż": {points:  5, freq:  1},
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
					"A": {points:  1, freq: 14},
					"B": {points:  3, freq:  3},
					"C": {points:  2, freq:  4},
					"D": {points:  2, freq:  5},
					"E": {points:  1, freq: 11},
					"F": {points:  4, freq:  2},
					"G": {points:  4, freq:  2},
					"H": {points:  4, freq:  2},
					"I": {points:  1, freq: 10},
					"J": {points:  5, freq:  2},
					"L": {points:  2, freq:  5},
					"M": {points:  1, freq:  6},
					"N": {points:  3, freq:  4},
					"O": {points:  1, freq: 10},
					"P": {points:  2, freq:  4},
					"Q": {points:  6, freq:  1},
					"R": {points:  1, freq:  6},
					"S": {points:  1, freq:  8},
					"T": {points:  1, freq:  5},
					"U": {points:  1, freq:  7},
					"V": {points:  4, freq:  2},
					"X": {points:  8, freq:  1},
					"Z": {points:  8, freq:  1},
					"Ç": {points:  3, freq:  2},
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
					"A": {points:  1, freq: 10},
					"B": {points:  5, freq:  2},
					"C": {points:  1, freq:  5},
					"D": {points:  3, freq:  4},
					"E": {points:  1, freq:  9},
					"F": {points:  4, freq:  2},
					"G": {points:  6, freq:  2},
					"H": {points:  8, freq:  1},
					"I": {points:  1, freq: 11},
					"J": {points: 10, freq:  1},
					"L": {points:  1, freq:  5},
					"M": {points:  4, freq:  3},
					"N": {points:  1, freq:  6},
					"O": {points:  2, freq:  5},
					"P": {points:  2, freq:  4},
					"R": {points:  1, freq:  6},
					"S": {points:  1, freq:  6},
					"T": {points:  1, freq:  7},
					"U": {points:  1, freq:  5},
					"V": {points:  4, freq:  2},
					"X": {points: 10, freq:  1},
					"Z": {points:  8, freq:  1},
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
					"А": {points:  1, freq:  8},
					"Б": {points:  3, freq:  2},
					"В": {points:  1, freq:  4},
					"Г": {points:  3, freq:  2},
					"Д": {points:  2, freq:  4},
					"Е": {points:  1, freq:  8},
					"Ж": {points:  5, freq:  1},
					"З": {points:  5, freq:  2},
					"Ё": {points:  3, freq:  1},
					"И": {points:  1, freq:  5},
					"Й": {points:  4, freq:  1},
					"К": {points:  2, freq:  4},
					"Л": {points:  2, freq:  4},
					"М": {points:  2, freq:  3},
					"Н": {points:  1, freq:  5},
					"О": {points:  1, freq: 10},
					"П": {points:  2, freq:  4},
					"Р": {points:  1, freq:  5},
					"С": {points:  1, freq:  5},
					"Т": {points:  1, freq:  5},
					"У": {points:  2, freq:  4},
					"Ф": {points: 10, freq:  1},
					"Х": {points:  5, freq:  1},
					"Ц": {points:  5, freq:  1},
					"Ч": {points:  5, freq:  1},
					"Ш": {points:  8, freq:  1},
					"Щ": {points: 10, freq:  1},
					"Ъ": {points: 10, freq:  1},
					"Ы": {points:  4, freq:  2},
					"Ь": {points:  3, freq:  2},
					"Э": {points:  8, freq:  1},
					"Ю": {points:  8, freq:  1},
					"Я": {points:  3, freq:  2},
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
					"A": {points:  1, freq:  9},
					"B": {points:  4, freq:  2},
					"C": {points:  4, freq:  1},
					"D": {points:  2, freq:  3},
					"E": {points:  1, freq:  8},
					"F": {points:  8, freq:  1},
					"G": {points:  8, freq:  1},
					"H": {points:  4, freq:  1},
					"I": {points:  1, freq:  5},
					"J": {points:  3, freq:  2},
					"K": {points:  2, freq:  3},
					"L": {points:  2, freq:  3},
					"M": {points:  2, freq:  4},
					"N": {points:  1, freq:  5},
					"O": {points:  1, freq:  9},
					"P": {points:  2, freq:  3},
					"R": {points:  1, freq:  4},
					"S": {points:  1, freq:  4},
					"T": {points:  1, freq:  4},
					"U": {points:  3, freq:  2},
					"V": {points:  1, freq:  4},
					"X": {points: 10, freq:  1},
					"Y": {points:  4, freq:  1},
					"Z": {points:  4, freq:  1},
					"Á": {points:  4, freq:  1},
					"Ä": {points: 10, freq:  1},
					"É": {points:  7, freq:  1},
					"Í": {points:  5, freq:  1},
					"Ó": {points: 10, freq:  1},
					"Ô": {points:  8, freq:  1},
					"Ú": {points:  7, freq:  1},
					"Ý": {points:  5, freq:  1},
					"Č": {points:  5, freq:  1},
					"Ď": {points:  8, freq:  1},
					"Ĺ": {points: 10, freq:  1},
					"Ľ": {points:  7, freq:  1},
					"Ň": {points:  8, freq:  1},
					"Ŕ": {points: 10, freq:  1},
					"Š": {points:  5, freq:  1},
					"Ť": {points:  7, freq:  1},
					"Ž": {points:  5, freq:  1},
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
					"A": {points:  1, freq: 10},
					"B": {points:  4, freq:  2},
					"C": {points:  8, freq:  1},
					"D": {points:  2, freq:  4},
					"E": {points:  1, freq: 11},
					"F": {points: 10, freq:  1},
					"G": {points:  4, freq:  2},
					"H": {points:  5, freq:  1},
					"I": {points:  1, freq:  9},
					"J": {points:  1, freq:  4},
					"K": {points:  3, freq:  3},
					"L": {points:  1, freq:  4},
					"M": {points:  3, freq:  2},
					"N": {points:  1, freq:  7},
					"O": {points:  1, freq:  8},
					"P": {points:  3, freq:  2},
					"R": {points:  1, freq:  6},
					"S": {points:  1, freq:  6},
					"T": {points:  1, freq:  4},
					"U": {points:  3, freq:  2},
					"V": {points:  2, freq:  4},
					"Z": {points:  4, freq:  2},
					"Č": {points:  5, freq:  1},
					"Š": {points:  6, freq:  1},
					"Ž": {points: 10, freq:  1},
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
					"A": {points:  1, freq:  8},
					"B": {points:  4, freq:  2},
					"C": {points:  8, freq:  1},
					"D": {points:  1, freq:  5},
					"E": {points:  1, freq:  7},
					"F": {points:  3, freq:  2},
					"G": {points:  2, freq:  3},
					"H": {points:  2, freq:  2},
					"I": {points:  1, freq:  5},
					"J": {points:  7, freq:  1},
					"K": {points:  2, freq:  3},
					"L": {points:  1, freq:  5},
					"M": {points:  2, freq:  3},
					"N": {points:  1, freq:  6},
					"O": {points:  2, freq:  5},
					"P": {points:  4, freq:  2},
					"R": {points:  1, freq:  8},
					"S": {points:  1, freq:  8},
					"T": {points:  1, freq:  8},
					"U": {points:  4, freq:  3},
					"V": {points:  3, freq:  2},
					"X": {points:  8, freq:  1},
					"Y": {points:  7, freq:  1},
					"Z": {points: 10, freq:  1},
					"Ä": {points:  3, freq:  2},
					"Å": {points:  4, freq:  2},
					"Ö": {points:  4, freq:  2},
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
					"A": {points:  1, freq:  9},
					"B": {points:  4, freq:  2},
					"C": {points:  8, freq:  2},
					"D": {points:  1, freq:  7},
					"E": {points:  1, freq:  8},
					"F": {points:  4, freq:  2},
					"G": {points:  2, freq:  4},
					"H": {points:  3, freq:  3},
					"I": {points:  1, freq:  6},
					"J": {points:  8, freq:  1},
					"K": {points:  3, freq:  3},
					"L": {points:  1, freq:  7},
					"M": {points:  3, freq:  3},
					"N": {points:  1, freq:  7},
					"O": {points:  2, freq:  5},
					"P": {points:  3, freq:  3},
					"Q": {points: 10, freq:  1},
					"R": {points:  1, freq:  9},
					"S": {points:  1, freq:  8},
					"T": {points:  1, freq:  7},
					"U": {points:  3, freq:  3},
					"V": {points:  4, freq:  2},
					"X": {points: 10, freq:  1},
					"Y": {points:  8, freq:  2},
					"Z": {points: 10, freq:  1},
					"Ä": {points:  4, freq:  2},
					"Å": {points:  4, freq:  2},
					"Ö": {points:  4, freq:  2},
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
					"A": {points:  1, freq: 12},
					"B": {points:  3, freq:  2},
					"C": {points:  4, freq:  2},
					"D": {points:  3, freq:  2},
					"E": {points:  1, freq:  8},
					"F": {points:  7, freq:  1},
					"G": {points:  5, freq:  1},
					"H": {points:  5, freq:  1},
					"I": {points:  2, freq:  4},
					"J": {points: 10, freq:  1},
					"K": {points:  1, freq:  7},
					"L": {points:  1, freq:  7},
					"M": {points:  2, freq:  4},
					"N": {points:  1, freq:  5},
					"O": {points:  2, freq:  3},
					"P": {points:  5, freq:  1},
					"R": {points:  1, freq:  6},
					"S": {points:  2, freq:  3},
					"T": {points:  1, freq:  5},
					"U": {points:  2, freq:  3},
					"V": {points:  7, freq:  1},
					"Y": {points:  3, freq:  2},
					"Z": {points:  4, freq:  2},
					"Ç": {points:  4, freq:  2},
					"Ö": {points:  7, freq:  1},
					"Ü": {points:  3, freq:  2},
					"Ğ": {points:  8, freq:  1},
					"İ": {points:  1, freq:  7},
					"Ş": {points:  4, freq:  2},
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
					"'": {points: 10, freq:  1},
					"Є": {points:  8, freq:  1},
					"І": {points:  1, freq:  5},
					"Ї": {points:  6, freq:  1},
					"А": {points:  1, freq:  8},
					"Б": {points:  4, freq:  2},
					"В": {points:  1, freq:  4},
					"Г": {points:  4, freq:  2},
					"Д": {points:  2, freq:  3},
					"Е": {points:  1, freq:  5},
					"Ж": {points:  6, freq:  1},
					"З": {points:  4, freq:  2},
					"И": {points:  1, freq:  7},
					"Й": {points:  5, freq:  1},
					"К": {points:  2, freq:  4},
					"Л": {points:  2, freq:  3},
					"М": {points:  2, freq:  4},
					"Н": {points:  1, freq:  7},
					"О": {points:  1, freq: 10},
					"П": {points:  2, freq:  3},
					"Р": {points:  1, freq:  5},
					"С": {points:  2, freq:  4},
					"Т": {points:  1, freq:  5},
					"У": {points:  3, freq:  3},
					"Ф": {points:  8, freq:  1},
					"Х": {points:  5, freq:  1},
					"Ц": {points:  6, freq:  1},
					"Ч": {points:  5, freq:  1},
					"Ш": {points:  6, freq:  1},
					"Щ": {points:  8, freq:  1},
					"Ь": {points:  5, freq:  1},
					"Ю": {points:  7, freq:  1},
					"Я": {points:  4, freq:  2},
					"Ґ": {points: 10, freq:  1},
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
					"A": {points:  1, freq: 10},
					"B": {points:  3, freq:  2},
					"C": {points:  4, freq:  2},
					"CH": {points:  5, freq:  1},
					"D": {points:  1, freq:  6},
					"DD": {points:  1, freq:  4},
					"E": {points:  1, freq:  8},
					"F": {points:  2, freq:  3},
					"FF": {points:  4, freq:  2},
					"G": {points:  2, freq:  3},
					"H": {points:  4, freq:  2},
					"I": {points:  1, freq:  7},
					"J": {points:  8, freq:  1},
					"L": {points:  2, freq:  3},
					"LL": {points:  5, freq:  1},
					"M": {points:  3, freq:  2},
					"N": {points:  1, freq:  8},
					"NG": {points: 10, freq:  1},
					"O": {points:  1, freq:  6},
					"P": {points:  5, freq:  1},
					"R": {points:  1, freq:  7},
					"RH": {points: 10, freq:  1},
					"S": {points:  3, freq:  3},
					"T": {points:  3, freq:  2},
					"TH": {points:  4, freq:  2},
					"U": {points:  2, freq:  3},
					"W": {points:  1, freq:  5},
					"Y": {points:  1, freq:  7},
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
					"A": {points:  0, freq: 16},
					"E": {points:  4, freq:  7},
					"I": {points:  1, freq: 15},
					"J": {points: 10, freq:  1},
					"K": {points:  5, freq:  5},
					"L": {points:  3, freq: 10},
					"M": {points:  5, freq:  6},
					"N": {points:  3, freq: 11},
					"O": {points:  4, freq:  8},
					"P": {points:  5, freq:  5},
					"S": {points:  8, freq:  4},
					"T": {points:  5, freq:  5},
					"U": {points:  8, freq:  3},
					"W": {points: 10, freq:  2},
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
					"ஃ": {points: 10, freq:  1},
					"அ": {points:  2, freq: 10},
					"ஆ": {points:  4, freq:  3},
					"இ": {points:  3, freq:  4},
					"ஈ": {points:  9, freq:  1},
					"உ": {points:  3, freq:  4},
					"ஊ": {points:  9, freq:  1},
					"எ": {points:  4, freq:  2},
					"ஏ": {points:  7, freq:  1},
					"ஐ": {points:  8, freq:  1},
					"ஒ": {points:  5, freq:  1},
					"ஓ": {points:  9, freq:  1},
					"க": {points:  1, freq: 57},
					"கி": {points:  2, freq:  7},
					"கீ": {points:  9, freq:  1},
					"கு": {points:  1, freq: 15},
					"கூ": {points:  7, freq:  2},
					"க்": {points:  2, freq: 22},
					"ங்": {points:  3, freq:  8},
					"ச": {points:  1, freq: 29},
					"சி": {points:  2, freq:  9},
					"சீ": {points:  9, freq:  1},
					"சு": {points:  5, freq:  7},
					"சூ": {points:  9, freq:  1},
					"ச்": {points:  4, freq:  7},
					"ஞ": {points: 10, freq:  1},
					"ஞ்": {points:  8, freq:  4},
					"ட": {points:  1, freq: 18},
					"டி": {points:  2, freq: 10},
					"டீ": {points: 10, freq:  1},
					"டு": {points:  1, freq: 15},
					"டூ": {points: 10, freq:  1},
					"ட்": {points:  2, freq: 15},
					"ண": {points:  4, freq:  7},
					"ணி": {points:  6, freq:  3},
					"ணீ": {points: 10, freq:  1},
					"ணு": {points:  9, freq:  1},
					"ணூ": {points: 10, freq:  1},
					"ண்": {points:  3, freq:  9},
					"த": {points:  1, freq: 48},
					"தி": {points:  1, freq: 17},
					"தீ": {points:  9, freq:  1},
					"து": {points:  1, freq: 10},
					"தூ": {points:  9, freq:  1},
					"த்": {points:  2, freq: 23},
					"ந": {points:  2, freq:  9},
					"நி": {points:  5, freq:  3},
					"நீ": {points:  8, freq:  1},
					"நு": {points: 10, freq:  1},
					"நூ": {points:  8, freq:  1},
					"ந்": {points:  3, freq:  8},
					"ன": {points:  1, freq: 12},
					"னி": {points:  5, freq:  3},
					"னீ": {points: 10, freq:  1},
					"னு": {points:  7, freq:  1},
					"னூ": {points: 10, freq:  1},
					"ன்": {points:  1, freq: 17},
					"ப": {points:  1, freq: 36},
					"பி": {points:  2, freq:  7},
					"பீ": {points:  9, freq:  1},
					"பு": {points:  2, freq: 10},
					"பூ": {points:  8, freq:  3},
					"ப்": {points:  2, freq: 15},
					"ம": {points:  1, freq: 25},
					"மி": {points:  4, freq:  3},
					"மீ": {points:  8, freq:  1},
					"மு": {points:  3, freq:  6},
					"மூ": {points:  8, freq:  2},
					"ம்": {points:  1, freq: 41},
					"ய": {points:  1, freq: 18},
					"யி": {points:  3, freq:  3},
					"யீ": {points: 10, freq:  1},
					"யு": {points:  6, freq:  1},
					"யூ": {points:  9, freq:  1},
					"ய்": {points:  5, freq:  5},
					"ர": {points:  1, freq: 28},
					"ரி": {points:  2, freq:  8},
					"ரீ": {points: 10, freq:  1},
					"ரு": {points:  1, freq: 11},
					"ரூ": {points: 10, freq:  1},
					"ர்": {points:  2, freq: 13},
					"ற": {points:  2, freq:  7},
					"றி": {points:  4, freq:  3},
					"றீ": {points: 10, freq:  1},
					"று": {points:  2, freq:  7},
					"றூ": {points: 10, freq:  1},
					"ற்": {points:  3, freq:  7},
					"ல": {points:  1, freq: 17},
					"லி": {points:  5, freq:  4},
					"லீ": {points: 10, freq:  1},
					"லு": {points:  6, freq:  2},
					"லூ": {points: 10, freq:  1},
					"ல்": {points:  1, freq: 26},
					"ள": {points:  2, freq:  8},
					"ளி": {points:  3, freq:  3},
					"ளீ": {points: 10, freq:  1},
					"ளு": {points:  6, freq:  1},
					"ளூ": {points: 10, freq:  1},
					"ள்": {points:  2, freq:  6},
					"ழ": {points:  5, freq:  3},
					"ழி": {points:  6, freq:  2},
					"ழு": {points:  6, freq:  2},
					"ழ்": {points:  5, freq:  1},
					"வ": {points:  1, freq: 31},
					"வி": {points:  2, freq: 10},
					"வீ": {points:  8, freq:  1},
					"வு": {points:  4, freq:  3},
					"வூ": {points: 10, freq:  1},
					"வ்": {points:  8, freq:  1},
					"ா": {points:  1, freq: 85},
					"ெ": {points:  1, freq: 24},
					"ே": {points:  1, freq: 22},
					"ை": {points:  1, freq: 35},
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
					"ஃ": {points: 13, freq:  1},
					"அ": {points:  2, freq: 11},
					"ஆ": {points:  4, freq:  3},
					"இ": {points:  3, freq:  5},
					"ஈ": {points:  9, freq:  1},
					"உ": {points:  3, freq:  5},
					"ஊ": {points:  8, freq:  1},
					"எ": {points:  4, freq:  2},
					"ஏ": {points:  7, freq:  1},
					"ஐ": {points: 10, freq:  1},
					"ஒ": {points:  6, freq:  1},
					"ஓ": {points:  9, freq:  1},
					"ஔ": {points: 14, freq:  1},
					"க": {points:  1, freq: 40},
					"கா": {points:  1, freq: 13},
					"கி": {points:  2, freq:  8},
					"கீ": {points:  9, freq:  1},
					"கு": {points:  1, freq: 17},
					"கூ": {points:  6, freq:  2},
					"கெ": {points:  8, freq:  1},
					"கே": {points:  8, freq:  1},
					"கை": {points:  3, freq:  5},
					"கொ": {points:  3, freq:  5},
					"கோ": {points:  5, freq:  3},
					"கௌ": {points: 11, freq:  1},
					"க்": {points:  2, freq: 26},
					"ங்": {points:  3, freq: 10},
					"ச": {points:  1, freq: 19},
					"சா": {points:  3, freq:  6},
					"சி": {points:  2, freq: 10},
					"சீ": {points:  7, freq:  1},
					"சு": {points:  3, freq:  8},
					"சூ": {points:  9, freq:  1},
					"செ": {points:  4, freq:  3},
					"சே": {points:  7, freq:  1},
					"சை": {points:  6, freq:  2},
					"சொ": {points:  7, freq:  1},
					"சோ": {points:  7, freq:  1},
					"சௌ": {points: 12, freq:  1},
					"ச்": {points:  3, freq:  9},
					"ஞ": {points: 11, freq:  1},
					"ஞா": {points:  9, freq:  1},
					"ஞ்": {points:  6, freq:  4},
					"ட": {points:  1, freq: 12},
					"டா": {points:  5, freq:  2},
					"டி": {points:  2, freq: 12},
					"டீ": {points: 11, freq:  1},
					"டு": {points:  1, freq: 18},
					"டூ": {points: 12, freq:  1},
					"டெ": {points: 16, freq:  1},
					"டே": {points: 14, freq:  1},
					"டை": {points:  3, freq:  6},
					"டொ": {points: 17, freq:  1},
					"டோ": {points: 14, freq:  1},
					"ட்": {points:  2, freq: 18},
					"ண": {points:  4, freq:  6},
					"ணா": {points:  8, freq:  1},
					"ணி": {points:  5, freq:  4},
					"ணீ": {points: 12, freq:  1},
					"ணு": {points:  9, freq:  1},
					"ணூ": {points: 17, freq:  1},
					"ணெ": {points: 17, freq:  1},
					"ணே": {points: 19, freq:  1},
					"ணை": {points:  7, freq:  1},
					"ணோ": {points: 18, freq:  1},
					"ண்": {points:  3, freq: 10},
					"த": {points:  1, freq: 42},
					"தா": {points:  3, freq:  7},
					"தி": {points:  1, freq: 20},
					"தீ": {points:  8, freq:  1},
					"து": {points:  1, freq: 12},
					"தூ": {points:  8, freq:  1},
					"தெ": {points:  7, freq:  1},
					"தே": {points:  6, freq:  2},
					"தை": {points:  6, freq:  2},
					"தொ": {points:  7, freq:  1},
					"தோ": {points:  7, freq:  1},
					"தௌ": {points: 15, freq:  1},
					"த்": {points:  2, freq: 27},
					"ந": {points:  4, freq:  4},
					"நா": {points:  4, freq:  4},
					"நி": {points:  5, freq:  3},
					"நீ": {points:  8, freq:  1},
					"நு": {points: 10, freq:  1},
					"நூ": {points:  9, freq:  1},
					"நெ": {points:  7, freq:  1},
					"நே": {points:  9, freq:  1},
					"நை": {points: 15, freq:  1},
					"நொ": {points: 10, freq:  1},
					"நோ": {points:  9, freq:  1},
					"ந்": {points:  3, freq:  9},
					"ன": {points:  2, freq:  9},
					"னா": {points:  7, freq:  1},
					"னி": {points:  5, freq:  3},
					"னீ": {points: 13, freq:  1},
					"னு": {points:  8, freq:  1},
					"னூ": {points: 16, freq:  1},
					"னெ": {points: 18, freq:  1},
					"னே": {points: 15, freq:  1},
					"னை": {points:  6, freq:  2},
					"னொ": {points: 20, freq:  1},
					"னோ": {points: 11, freq:  1},
					"ன்": {points:  1, freq: 20},
					"ப": {points:  1, freq: 23},
					"பா": {points:  2, freq:  9},
					"பி": {points:  2, freq:  9},
					"பீ": {points:  9, freq:  1},
					"பு": {points:  2, freq: 12},
					"பூ": {points:  6, freq:  3},
					"பெ": {points:  6, freq:  2},
					"பே": {points:  7, freq:  1},
					"பை": {points:  8, freq:  1},
					"பொ": {points:  5, freq:  2},
					"போ": {points:  5, freq:  3},
					"பௌ": {points: 12, freq:  1},
					"ப்": {points:  2, freq: 18},
					"ம": {points:  1, freq: 17},
					"மா": {points:  3, freq:  6},
					"மி": {points:  4, freq:  3},
					"மீ": {points:  8, freq:  1},
					"மு": {points:  3, freq:  7},
					"மூ": {points:  7, freq:  1},
					"மெ": {points:  8, freq:  1},
					"மே": {points:  7, freq:  1},
					"மை": {points:  6, freq:  2},
					"மொ": {points:  8, freq:  1},
					"மோ": {points:  8, freq:  1},
					"மௌ": {points: 13, freq:  1},
					"ம்": {points:  1, freq: 49},
					"ய": {points:  1, freq: 14},
					"யா": {points:  4, freq:  4},
					"யி": {points:  5, freq:  3},
					"யீ": {points: 12, freq:  1},
					"யு": {points:  7, freq:  1},
					"யூ": {points: 10, freq:  1},
					"யெ": {points: 10, freq:  1},
					"யே": {points: 10, freq:  1},
					"யை": {points: 10, freq:  1},
					"யொ": {points: 19, freq:  1},
					"யோ": {points:  9, freq:  1},
					"ய்": {points:  4, freq:  5},
					"ர": {points:  1, freq: 23},
					"ரா": {points:  4, freq:  5},
					"ரி": {points:  2, freq: 10},
					"ரீ": {points: 10, freq:  1},
					"ரு": {points:  1, freq: 13},
					"ரூ": {points: 10, freq:  1},
					"ரெ": {points: 13, freq:  1},
					"ரே": {points: 10, freq:  1},
					"ரை": {points:  5, freq:  3},
					"ரொ": {points: 14, freq:  1},
					"ரோ": {points:  9, freq:  1},
					"ர்": {points:  1, freq: 16},
					"ற": {points:  4, freq:  4},
					"றா": {points: 10, freq:  1},
					"றி": {points:  4, freq:  3},
					"றீ": {points: 19, freq:  1},
					"று": {points:  2, freq:  7},
					"றூ": {points: 18, freq:  1},
					"றெ": {points: 20, freq:  1},
					"றே": {points: 19, freq:  1},
					"றை": {points:  6, freq:  2},
					"றொ": {points: 20, freq:  1},
					"றோ": {points: 17, freq:  1},
					"ற்": {points:  3, freq:  8},
					"ல": {points:  2, freq: 10},
					"லா": {points:  5, freq:  2},
					"லி": {points:  4, freq:  5},
					"லீ": {points: 11, freq:  1},
					"லு": {points:  6, freq:  2},
					"லூ": {points: 14, freq:  1},
					"லெ": {points: 13, freq:  1},
					"லே": {points: 10, freq:  1},
					"லை": {points:  3, freq:  6},
					"லொ": {points: 18, freq:  1},
					"லோ": {points: 10, freq:  1},
					"ல்": {points:  1, freq: 32},
					"ள": {points:  3, freq:  5},
					"ளா": {points:  9, freq:  1},
					"ளி": {points:  4, freq:  4},
					"ளீ": {points: 18, freq:  1},
					"ளு": {points:  6, freq:  1},
					"ளூ": {points: 16, freq:  1},
					"ளெ": {points: 16, freq:  1},
					"ளே": {points: 19, freq:  1},
					"ளை": {points:  5, freq:  2},
					"ளொ": {points: 20, freq:  1},
					"ளோ": {points: 17, freq:  1},
					"ள்": {points:  2, freq:  7},
					"ழ": {points:  6, freq:  2},
					"ழா": {points: 10, freq:  1},
					"ழி": {points:  5, freq:  3},
					"ழு": {points:  5, freq:  3},
					"ழை": {points:  8, freq:  1},
					"ழ்": {points:  6, freq:  1},
					"வ": {points:  1, freq: 20},
					"வா": {points:  2, freq:  8},
					"வி": {points:  2, freq: 12},
					"வீ": {points:  8, freq:  1},
					"வு": {points:  4, freq:  3},
					"வூ": {points: 15, freq:  1},
					"வெ": {points:  4, freq:  3},
					"வே": {points:  5, freq:  2},
					"வை": {points:  5, freq:  2},
					"வொ": {points: 16, freq:  1},
					"வோ": {points: 15, freq:  1},
					"வௌ": {points: 20, freq:  1},
					"வ்": {points:  9, freq:  1},
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
					{letter: "ཀ", points:  8, freq:  3},
					{letter: "ཁ", points:  8, freq:  3},
					{letter: "ག", points:  2, freq: 11},
					{letter: "ང", points:  2, freq: 11},
					{letter: "ཅ", points: 10, freq:  1},
					{letter: "ཆ", points:  5, freq:  5},
					{letter: "ཇ", points:  4, freq:  7},
					{letter: "ཉ", points:  1, freq: 13},
					{letter: "ཏ", points:  4, freq:  7},
					{letter: "ཐ", points:  8, freq:  2},
					{letter: "ད", points:  2, freq: 11},
					{letter: "ན", points:  2, freq: 11},
					{letter: "པ", points:  2, freq: 11},
					{letter: "ཕ", points:  3, freq:  9},
					{letter: "བ", points:  8, freq:  2},
					{letter: "མ", points:  4, freq:  6},
					{letter: "ཙ", points:  4, freq:  7},
					{letter: "ཚ", points:  1, freq: 14},
					{letter: "ཛ", points:  3, freq:  9},
					{letter: "ཝ", points:  2, freq: 11},
					{letter: "ཞ", points:  5, freq:  4},
					{letter: "ཟ", points:  3, freq:  8},
					{letter: "འ", points:  8, freq:  3},
					{letter: "ཡ", points: 10, freq:  1},
					{letter: "ར", points:  8, freq:  3},
					{letter: "ལ", points: 10, freq:  1},
					{letter: "ཤ", points: 10, freq:  1},
					{letter: "ས", points:  1, freq: 13},
					{letter: "ཧ", points:  3, freq:  9},
					{letter: "ཨ", points: 10, freq:  1},
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