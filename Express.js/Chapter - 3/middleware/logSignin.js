/* Lesson 21: Aside: Protected Routes */

export function logSignIn (req, res, next) {

    console.log("Login attempted")

    next()
}