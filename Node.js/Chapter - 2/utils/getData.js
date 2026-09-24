import path from "node:path"
import fs from "node:fs/promises"
/*
Challenge:
1. getData() should: 
    - read the json in json.data as a string 
    - parse it to JS 
    - return the parsed data. 

   If there’s an error, it should return an empty array (think, why are we doing this?).

hint.md for help
*/

export async function getData() {
    try {
        const  filePath = path.join("data", "data.json")
        
        const content = await fs.readFile(filePath, "utf8")

        return JSON.parse(content)

    } catch(err) {
        console.err(err)
        return []
    }
}

/* 
export async function getData() {
    try {
        const pathToResource = path.join("data", "data.json")
        const dataString = await fs.readFile(pathToResource, "utf8")
        const jsonData = JSON.parse( dataString)
        return jsonData

    } catch(err) {
        console.log(err)
        return []
    }
} */