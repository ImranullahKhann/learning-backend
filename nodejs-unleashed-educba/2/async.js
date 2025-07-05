import fs from 'fs'
import { type } from 'os'

const fileName =  'testAsync.txt'

let content = "What a beautiful day \nThis is line 2"

fs.writeFile(fileName, content, err => {
    if (err)
        console.log(err)

    console.log("File Created Successfully")
})

fs.readFile(fileName, (err, data) => {
    if (err)
        console.log(err)

    console.log("File Content: ")
    console.log(data.toString())
})

