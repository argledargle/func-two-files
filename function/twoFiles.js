import * as fs from 'fs'
import path from 'path'

try {
  // We want to cut out the two arguments, which are node and the file location
  const commandsAfterSlice = process.argv.slice(2)

  // We use readFileSync because it will stop us from advancing our app until
  // it's finished reading the file
  const fileOneContent = fs.readFileSync(
    path.join(process.cwd(), `${commandsAfterSlice[0]}`),
    'utf8'
  )

  // We want to split the content into an array based on spaces between the words
  // We slice the array to so we only have the first two words
  const fileOneWordArray = fileOneContent.split(' ').slice(0, 2)

  const fileTwoContent = fs.readFileSync(
    path.join(process.cwd(), `${commandsAfterSlice[1]}`),
    'utf8'
  )
  const fileTwoWordArray = fileTwoContent.split(' ').slice(0, 2)

  let newArray = []
  for (let i = 0; i < 2; i++) {
    newArray.push(fileOneWordArray[i])
    newArray.push(fileTwoWordArray[i])
  }
  console.log(newArray.join(' '))
} catch (err) {
  console.error(err)
}
