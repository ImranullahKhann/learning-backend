import fs from "fs"

const content = fs.readFileSync("./random.txt").toString();

const newContent = "\nAppend this to the end of the file"

fs.appendFileSync("./random.txt", newContent)

fs.writeFileSync("./newFile.txt", content);

fs.unlinkSync("./newFile.txt")

console.log("Hello World! a single change")
console.log(content)