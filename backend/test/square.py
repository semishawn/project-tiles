from alive_progress import alive_bar
import copy
import random



class Trie:
	def __init__(self):
		self.children = [None] * 26
		self.values = []

	def insert(self, word, index):
		node = self
		for char in word:
			char_index = ord(char) - ord('A')
			if node.children[char_index] is None:
				node.children[char_index] = Trie()
			node = node.children[char_index]
			node.values.append(index)

	def search(self, prefix):
		node = self
		for char in prefix:
			char_index = ord(char) - ord('A')
			if node.children[char_index] is None:
				return []
			node = node.children[char_index]
		return node.values



class WordSquares:
	def __init__(self):
		self.allSquares = []
		self.playableSquares = []

	def generate(self, words):
		# Depth-first search
		def dfs(square):
			if len(square) == len(words[0]):
				self.allSquares.append(square[:])
				return
			idx = len(square)
			prefix = [word[idx] for word in square]
			indices = trie.search(''.join(prefix))
			for index in indices:
				square.append(words[index])
				dfs(square)
				square.pop()

		trie = Trie()
		for i, word in enumerate(words):
			trie.insert(word, i)

		#* Progress bar
		with alive_bar(len(words), title='dfs       ') as bar:
			for word in words:
				dfs([word])
				bar()
	
	def filter(self, tileSet):
		letterSet = copy.deepcopy(tileSet)

		#* Progress bar
		with alive_bar(len(self.allSquares), title='filtering ') as bar:
			for square in self.allSquares:
				for letterDict in letterSet:
					letterDict['freq'] = 0

				for word in square:
					for letter in word:
						letterDict = list(filter(lambda x: x['letter'] == letter, letterSet))[0]
						letterDict['freq'] += 1

				totalLetterOverflow = 0
				for i in range(len(tileSet)):
					tileFreq = tileSet[i]['freq']
					letterFreq = letterSet[i]['freq']
					letterOverflow = max(0, letterFreq - tileFreq)
					totalLetterOverflow += letterOverflow

				if totalLetterOverflow <= 2:
					self.playableSquares.append(square)
				
				bar()
	


def listToString(lst):
	return '\n'.join([' '.join([str(cell) for cell in row]) for row in lst])



if __name__ == '__main__':
	size = 4
	wordFile = open(f'wordList{size}.txt', 'r')
	wordList = wordFile.read().splitlines()
	tileSet = [
		{'letter': 'A', 'freq':  9},
		{'letter': 'B', 'freq':  2},
		{'letter': 'C', 'freq':  2},
		{'letter': 'D', 'freq':  4},
		{'letter': 'E', 'freq': 12},
		{'letter': 'F', 'freq':  2},
		{'letter': 'G', 'freq':  3},
		{'letter': 'H', 'freq':  2},
		{'letter': 'I', 'freq':  9},
		{'letter': 'J', 'freq':  1},
		{'letter': 'K', 'freq':  1},
		{'letter': 'L', 'freq':  4},
		{'letter': 'M', 'freq':  2},
		{'letter': 'N', 'freq':  6},
		{'letter': 'O', 'freq':  8},
		{'letter': 'P', 'freq':  2},
		{'letter': 'Q', 'freq':  1},
		{'letter': 'R', 'freq':  6},
		{'letter': 'S', 'freq':  4},
		{'letter': 'T', 'freq':  6},
		{'letter': 'U', 'freq':  4},
		{'letter': 'V', 'freq':  2},
		{'letter': 'W', 'freq':  2},
		{'letter': 'X', 'freq':  1},
		{'letter': 'Y', 'freq':  2},
		{'letter': 'Z', 'freq':  1},
		{'letter': '?', 'freq':  2}
	]

	print()

	squares = WordSquares()
	squares.generate(wordList)
	allSquareCount = len(squares.allSquares)
	print(f'{allSquareCount} squares found')

	squares.filter(tileSet)
	playableSquareCount = len(squares.playableSquares)
	print(f'{playableSquareCount} squares filtered with tile set')

	#* Progress bar
	squareSample = random.sample(squares.playableSquares, 1000)
	squareFile = open(f'squares{size}.txt', 'w')
	with alive_bar(len(squareSample), title='writing   ') as bar:
		for square in squareSample:
			squareFile.write(listToString(square) + '\n\n')
			bar()
	
	print()