/* Lesson 22: Protecting Cart Routes 👻*/

export async function requireAuth(req, res, next) {

    if(req.session.userId) {
        next()
    } else {
        console.log("Access has been blocked.")
        return res.status(401).json({ error: "Unauthorized access"})
    }
}