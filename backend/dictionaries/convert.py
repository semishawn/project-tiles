import random

lang = "spanish"
oldDict = open(lang + ".txt", "r")
newDict = open(lang + ".js", "w")

words = oldDict.read().splitlines()
validWords = [word for word in words if len(word) > 1 and len(word) <= 15]
randomWords = random.sample(validWords, 100000)
sortedWords = sorted(randomWords)

newDict.write(f'var {lang}Dict = [\n')
for word in sortedWords:
	caps = word.upper()
	newDict.write(f'\t"{caps}",\n')
newDict.write("];")