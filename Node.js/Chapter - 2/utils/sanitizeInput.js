import sanitizeHtml from "sanitize-html"

export function sanitizeInput(input) {
    const sanitize = {}
    for(let key in input) {
        sanitize[key] = sanitizeHtml(input[key], { allowedTags: ["b"], allowedAttributes: {}})
    }
    
    return sanitize
}