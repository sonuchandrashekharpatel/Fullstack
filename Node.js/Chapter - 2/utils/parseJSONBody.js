/* Lesson 16: parseJSONBody */
/*
Challenge 1:
  1. Create a function parseJSONBody which:
    - gathers the incoming chunks into a string 'body'.
    - parses 'body'
    - returns 'body'
    - throws an error if 'body' can't be parsed:
        `Invalid JSON format: ${err}`
*/

export async function parseJSONBody(req) {

    try {
        let body = ''
    
        for await (let chunk of req) {
            body += chunk
        }
    
        const content = JSON.parse(body)
    
        return content

    } catch(err) {
        console.error(`Invalid JSON format: ${err}`)
    }
}


/* 
export async function parseJSONBody(req) {
    try {
        let body = ''
        for await (let chunk of req) {
            body += chunk
        }
        return JSON.parse(body)
    } catch (err) {
        throw new Error(`Invalid JSON format: ${err}`)
    }
} */