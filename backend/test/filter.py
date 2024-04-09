def filterWordList(size):
	oldWordFile = open('../dictionaries/english.txt', 'r')
	newWordFile = open(f'wordList{size}.txt', 'w')

	allWords = oldWordFile.read().splitlines()
	newWords = list(filter(lambda x: len(x) == size, allWords))

	for word in newWords:
		caps = word.upper()
		newWordFile.write(caps + '\n')



filterWordList(7)