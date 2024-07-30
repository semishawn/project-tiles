lang = "ods8";
txtFile = open("ods8.txt", "r")
jsFile = open(lang + ".js", "w")

txtLines = txtFile.read().splitlines()

jsFile.write(f'wordLists.{lang} = [\n')
for line in txtLines:
	caps = (line.split(' ', 1)[0]).upper();
	jsFile.write(f'\t"{caps}",\n')
jsFile.write("];")