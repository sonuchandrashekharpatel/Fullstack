import { getDBConnection } from '../db/db.js'

export async function getCurrentUser(req, res) {
    try {
        const db = await getDBConnection()

        /*
        Challenge:
        1. If no userId is attached to the session, end the response with the following JSON:
        { isLoggedIn: false }
        2. If the session has a userId, connect to the DB and get the user's name.
        3. End the response with the following JSON:
        { isLoggedIn: true, name: <user's name here> }
        */
       if(!req.session.userId) {
            return res.json({ isLoggedIn: false})
       } else {
            const user = await db.get(`SELECT name from users WHERE id = ?`, [req.session.userId])
            console.log(user)
            return res.json({ isLoggedIn: true, name: user.name })
       }

    } catch (err) {
        console.error('getCurrentUserError: ', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}