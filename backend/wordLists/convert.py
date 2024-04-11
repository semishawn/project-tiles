lang = "english";
txtFile = open("NWL2023.txt", "r")
jsFile = open(lang + ".js", "w")

txtLines = txtFile.read().splitlines()

jsFile.write(f'var {lang}List = [\n')
for line in txtLines:
	caps = (line.split(' ', 1)[0]).upper();
	jsFile.write(f'\t"{caps}",\n')
jsFile.write("];")