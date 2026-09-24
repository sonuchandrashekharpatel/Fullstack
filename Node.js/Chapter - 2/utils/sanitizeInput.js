import sanitizeHtml from "sanitize-html"

export function sanitizeInput(input) {
    const sanitize = {}
    console.log(input)
    for(let key in input) {
        sanitize[key] = sanitizeHtml(input[key], { allowedTags: ["b"], allowedAttributes: {}})
    }
    console.log(sanitize)
    return sanitize
}