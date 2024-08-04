import json
import unicodedata
from alive_progress import alive_bar
import re



def get_alphabet(iso):
	lang_file = open('lang.json', 'r')
	data = json.load(lang_file)
	result = []
	for lang in data:
		if 'editions' in lang:
			for edition in lang['editions']:
				if edition.get('word_list') == iso:
					result = edition.get('alphabet')
	lang_file.close()
	return set(result)


def normalize(str):
	normalized_text = unicodedata.normalize('NFD', str)
	filtered_text = ''.join(c for c in normalized_text if not unicodedata.combining(c))
	return filtered_text


def uses_valid_letters(alphabet, word):
	i = 0
	while i < len(word):
		if word[i:i+3] in alphabet: i += 3
		elif word[i:i+2] in alphabet: i += 2
		elif word[i] in alphabet: i += 1
		else: return False
	return True


def jsonl_to_js(iso):
	jsonl_file = open(f'word-lists/jsonl/{iso}.jsonl', 'r')
	js_file = open(f'word-lists/js/{iso}.js', 'w')

	alphabet = get_alphabet(iso)
	word_set = set()

	for line in jsonl_file:
		data = json.loads(line)
		word = str(data['word']).upper()
		if (len(word) >= 2) and (len(word) < 15) and (not ' ' in word):
			if not uses_valid_letters(alphabet, word): word = normalize(word)
			if uses_valid_letters(alphabet, word): word_set.add(word)
	jsonl_file.close()

	js_file.write(f'wordLists.{iso} = [\n')
	for word in sorted(word_set):
		js_file.write(f'\t"{word}",\n')
	js_file.write(']')
	js_file.close()


def snake_to_camel(str):
	components = str.split('_')
	return components[0] + ''.join(x.title() for x in components[1:])


def convert_properties(obj):
	if isinstance(obj, list):
		return [convert_properties(item) for item in obj]
	elif isinstance(obj, dict):
		new_obj = {}
		for k, v in obj.items():
			new_key = snake_to_camel(k)
			new_obj[new_key] = convert_properties(v) if isinstance(v, (dict, list)) else v
		return new_obj
	else:
		return obj


def lang_to_js(file_path):
	with open(file_path, 'r') as file:
		json_array = json.load(file)
	camel_array = convert_properties(json_array)
	js_array = 'var languages = ' + json.dumps(camel_array) + ';'
	with open('js/lang.js', 'w') as file:
		file.write(js_array)



lang_to_js('lang.json')
langs = []
pangs = [
	'afr',
	'ara',
	'bul',
	'cat',
	'hrv',
	'cze',
	'dan',
	'dut',
	'est',
	'fao',
	'fin',
	'ger',
	'grc',
	'heb',
	'hun',
	'ice',
	'ind',
	'gle',
	'ita',
	'lat',
	'lav',
	'lit',
	'mlg',
	'may',
	'nob',
	'pol',
	'por',
	'rum',
	'rus',
	'gla',
	'slo',
	'slv',
	'swe',
	'tur',
	'ukr',
	'wel'
]
with alive_bar(len(langs)) as bar:
	for iso in langs:
		jsonl_to_js(iso)
		bar()