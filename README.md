# func-two-files

A function for displaying content from text files

## overview

This command line function takes two arguments, both are strings containing the location of .txt files

## examples

```npm
node function/twoFiles.js function/fileOne.txt function/fileTwo.txt
```

Expected output: `Apple Red Banana Green`

```npm
node function/twoFiles.js function/fileTwo.txt function/fileOne.txt
```

Expected output: `Red Apple Green Banana`

## how it works

1. Convert the text file in to an array of words
2. Slice the first 2 words from index 0
3. Using a loop, we cycle through the files and push them to the array
4. Finally, we convert the results of the array to a string and log it to our console

## future improvements

- Convert to using a CLI tool similar to Execa. This would allow us to have multiple improvements to the user experience by asking questions if the user hasn't input a file location or if they only put one in.
- The ability to handle more than two files
- Include the ability to include words separated by line breaks
- The ability to select how many words get added to the mix
