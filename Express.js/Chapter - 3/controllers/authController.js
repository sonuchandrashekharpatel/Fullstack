/* Lesson 14: Add Logout functionality */

/*
Challenge:
1. Create a function which logs out the user. 
- You can use the .destroy() method directly on the session.
- .destroy() takes a callback function which you can use to send a confirmation response with this JSON:
  { message: 'Logged out' }

You will need to write code here and in one other place!

Test with:
username: test
password: test
*/

/* 
import validator from 'validator'
import { getDBConnection } from '../db/db.js'

import bcrypt from 'bcryptjs'

export async function registerUser(req, res) {
    let  { name, email, username, password } = req.body

    if(!name || !email || !username || !password) {
        return res.status(400).json({ error: "All fields are required..!!" })
    }

    for( let property in req.body) {
        req.body[property] = req.body[property].trim()
    }

    const regex = /^[a-zA-Z0-9_-]{1,20}$/
    if(!regex.test(username)){
        res.status(400).json({ error: 'Username must be 1-20 character long and contain only letters, numbers, underscore, or hyphens.' })
    }
    if(!validator.isEmail(email)){
        res.status(400).json({ error: 'Email is incorrect.'})
    }
    try {
        const hashed = await bcrypt.hash(password, 10)
      
        const db = await getDBConnection()
        const hasUsernameOrEmail = await db.all(`SELECT username, email FROM users WHERE username = ? OR email = ?`, [username, email])
        if(hasUsernameOrEmail.length > 0) {
            return res.status(409).json({ error: 'Email or username already in use.' })
        }    
        const result = await db.run('INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)', [name, username, email, hashed])
        req.session.userId = result.lastID
        
        console.log("User registered successfully.")   
        res.status(201).json({ message: "User Registered Successfully."})
        
    } catch(err) {

        console.error("Registration Error: ", err)
        res.status(500).json({ error: `Registration failed. Please try again.` })
    }
}

export async function loginUser(req, res) {
    try {
        const db = await getDBConnection()
        console.log(req.body)

        const { username, password } = req.body

        if(!username || !password) {
           return res.status(400).json({ error: "All fields required!"})
        }

        const user = await db.get(`SELECT id, username, password FROM users WHERE username = ?`, [username])
        
        if(!user || !await bcrypt.compare(password, user.password)){
            return res.status(401).json({ error:"Invalid credentials" })            
        }

        req.session.userId = user.id

        res.status(200).json({ message: "Logged In" })

    } catch(err) {
        console.error("loginUser error: ", err)
        res.status(500).json({ error: "Login failed. Please try again."})
    }
}

export async function logoutUser(req, res) {
    try {
        req.session.destroy(() => res.status(200).json({ message: "Logged out"}))
    } catch(err) {
        console.error('logoutUser Error: ', err)
        res.status(500).json({ error: 'Logout failed'})
    }
}

*/

/* Lesson 13: Login */
/*
Challenge:

 1. If the user's login details are incomplete, end the response with this JSON and a suitable code:
    { error: 'All fields are required' } 

 2. If the user's login details are invalid, end the response with this JSON and a suitable code:
    { error: 'Invalid credentials'}. This could be because the user does not exist OR because the password does not match the username.

 3. If the user’s login details are valid, create a session for the user and end the response with this JSON:
    { message: 'Logged in' }

Look at .registerUser() above. Is there anything else you need to do?

Important: lastID is not available to us here, so how can we get the user’s ID to attach it to the session?

You can test it by signing in with the following:
username: test
password: test

hint.md for help.
*/
/* 
import validator from 'validator'
import { getDBConnection } from '../db/db.js'

import bcrypt from 'bcryptjs'

export async function registerUser(req, res) {
    let  { name, email, username, password } = req.body

    if(!name || !email || !username || !password) {
        return res.status(400).json({ error: "All fields are required..!!" })
    }

    for( let property in req.body) {
        req.body[property] = req.body[property].trim()
    }

    const regex = /^[a-zA-Z0-9_-]{1,20}$/
    if(!regex.test(username)){
        res.status(400).json({ error: 'Username must be 1-20 character long and contain only letters, numbers, underscore, or hyphens.' })
    }
    if(!validator.isEmail(email)){
        res.status(400).json({ error: 'Email is incorrect.'})
    }
    try {
        const hashed = await bcrypt.hash(password, 10)
      
        const db = await getDBConnection()
        const hasUsernameOrEmail = await db.all(`SELECT username, email FROM users WHERE username = ? OR email = ?`, [username, email])
        if(hasUsernameOrEmail.length > 0) {
            return res.status(409).json({ error: 'Email or username already in use.' })
        }    
        const result = await db.run('INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)', [name, username, email, hashed])
        req.session.userId = result.lastID
        
        console.log("User registered successfully.")   
        res.status(201).json({ message: "User Registered Successfully."})
        
    } catch(err) {

        console.error("Registration Error: ", err)
        res.status(500).json({ error: `Registration failed. Please try again.` })
    }
}

export async function loginUser(req, res) {
    try {
        const db = await getDBConnection()
        console.log(req.body)

        const { username, password } = req.body

        if(!username || !password) {
           return res.status(400).json({ error: "All fields required!"})
        }

        const user = await db.get(`SELECT id, username, password FROM users WHERE username = ?`, [username])
        
        if(!user || !await bcrypt.compare(password, user.password)){
            return res.status(401).json({ error:"Invalid credentials" })            
        }

        req.session.userId = user.id

        res.status(200).json({ message: "Logged In" })

    } catch(err) {
        console.error("loginUser error: ", err)
        res.status(500).json({ error: "Login failed. Please try again."})
    }
}
 */

/* Lesson 11: Add express-session 👻*/

/*
Challenge:
1. Store the 'lastID' from the database insertion above to the 'userId' property on the 'session' object on the request. This will bind our logged in user to the session.
*/

import validator  from "validator"
import { getDBConnection } from "../db/db.js"
import bcrypt from "bcryptjs"

export async function registerUser(req, res) {
    
    let { name, email, username, password } = req.body

    const regex = /^[a-zA-Z0-9_-]{1,20}$/

    name = name.trim()
    email = email.trim()
    username = username.trim()
    password = await bcrypt.hash(password, 10)

    if(!(name && email && username && password)) {

        return res
            .status(400)
            .send({ error: 'All field are required.' })
    }

    if(!regex.test(username)) {

        return res.status(400).send({ error: "Username contains invalid character" })
    }
    if(!validator.isEmail(email)) {

        return res.status(400).send({ error: "Email is invalid." })
    }

    try {

        const db = await getDBConnection()

        const user = await db.get('SELECT * FROM users WHERE username = ? OR email = ?', [username, email])

        if(user) {
            return res.status(400).json({ error: "Email or username already in use." })
        }

        const result = await db.run(`
            INSERT INTO users (name, username, email, password)
            VALUES (?, ?, ?, ?)`, 
            [name, username, email, password]
        )

        req.session.userId = result.lastID
        
        res.status(201).json({ message: 'User registered' })

    } catch(err) {
        console.log("Error in Registration: ", err)
    }
}

/* Lesson 9: Hash the password 👻*/
/*
Challenge:
  1. Import the bcryptjs package.
  2. Use it to hash the incoming password just before it's stored in the database.
    - Use a cost-factor of 10

To test, sign up a new user and run logTable.js.

hint.md for help!
*/

/* 
import validator  from "validator"
import { getDBConnection } from "../db/db.js"
import bcrypt from "bcryptjs"

export async function registerUser(req, res) {
    
    let { name, email, username, password } = req.body

    const regex = /^[a-zA-Z0-9_-]{1,20}$/

    name = name.trim()
    email = email.trim()
    username = username.trim()
    password = await bcrypt.hash(password, 10)
    console.log(password)

    if(!(name && email && username && password)) {

        return res
            .status(400)
            .send({ error: 'All field are required.' })
    }

    if(!regex.test(username)) {

        return res.status(400).send({ error: "Username contains invalid character" })
    }
    if(!validator.isEmail(email)) {

        return res.status(400).send({ error: "Email is invalid." })
    }

    try {

        const db = await getDBConnection()

        const user = await db.get('SELECT * FROM users WHERE username = ? OR email = ?', [username, email])

        if(user) {
            return res.status(400).json({ error: "Email or username already in use." })
        }

        await db.run(`
            INSERT INTO users (name, username, email, password)
            VALUES (?, ?, ?, ?)`, 
            [name, username, email, password]
        )

        res.status(201).json({ message: 'User registered' })

    } catch(err) {
        console.log("Error in Registration: ", err)
    }
}
 */

/* Lesson 6: Add user to DB 👻*/
    
/*
Challenge:
1. Check if the username or email address has already been used.
    - If it has, end the response with a suitable status code and this object:
      { error: 'Email or username already in use.' }.

    - If the username and email address are unique in the database, add the user to the table and send this JSON { message: 'User registered'}. Which status code should you use?

- When you have been successful, the mini browser will redirect to the homepage.

- Run logTable.js to check you have created a user. 

- You will be able to see the password in the db! We will fix that later!
*/


/* 
import validator  from "validator"
import { getDBConnection } from "../db/db.js"

export async function registerUser(req, res) {
    
    let { name, email, username, password } = req.body

    const regex = /^[a-zA-Z0-9_-]{1,20}$/

    name = name.trim()
    email = email.trim()
    username = username.trim()
    

    if(!(name && email && username && password)) {

        return res
            .status(400)
            .send({ error: 'All field are required.' })
    }

    if(!regex.test(username)) {

        return res.status(400).send({ error: "Username contains invalid character" })
    }
    if(!validator.isEmail(email)) {

        return res.status(400).send({ error: "Email is invalid." })
    }

    try {

        const db = await getDBConnection()

        const user = await db.get('SELECT * FROM users WHERE username = ? OR email = ?', [username, email])

        if(user) {
            return res.status(400).json({ error: "Email or username already in use." })
        }

        await db.run(`

            INSERT INTO users (name, username, email, password)
            VALUES (?, ?, ?, ?)
            
        `, [name, username, email, password])

        res.status(201).json({ message: 'User registered' })

    } catch(err) {
        console.log("Error in Registration: ", err)
    }
}
 */

/* Lesson 5: Validate the User 👻*/

/*
Challenge:
1. Validate the incoming user data.
  - Make sure all fields are present.
  - Remove any whitespace where appropriate.
  - Use regex /^[a-zA-Z0-9_-]{1,20}$/ to check the username contains only the allowed characters.
  - Use the Validator package to check the email format is valid.

If fields are not present, the username uses disallowed characters, or the email address is not of a valid format, end the response with a suitable code and send an error object with a suitable message. For example:
   
   { error: 'All fields are required.' }

  - Test with console.logs.

hint.md for help!
*/

/* 
import validator from 'validator'
export async function registerUser(req, res) {

    console.log("req.body: ", req.body)
    let  { name, email, username, password } = req.body

    // Make sure all fields are present.
    if(!name || !email || !username || !password) {

        return res.status(400).json({ error: "All fields are required..!!" })
    }

    // remove any whitespace where appropriate
    for( let property in req.body) {

        req.body[property] = req.body[property].trim()
    }

    //Use regex /^[a-zA-Z0-9_-]{1,20}$/ to check the username contains only the allowed characters.
    const regex = /^[a-zA-Z0-9_-]{1,20}$/

    if(!regex.test(username)){
        
        res.status(400).json({ error: 'Username must be 1-20 character long and contain only letters, numbers, underscore, or hyphens.' })
    }

    // Use the Validator package to check the email format is valid.
    if(!validator.isEmail(email)){
        res.status(400).json({ error: 'Email is incorrect.'})
    }

    console.log(req.body)
} 

*/
/* 
import validator  from "validator"

export async function registerUser(req, res) {
    
    let { name, email, username, password } = req.body

    const regex = /^[a-zA-Z0-9_-]{1,20}$/

    name = name.trim()
    email = email.trim()
    username = username.trim()
    

    if(!(name && email && username && password)) {

        return res
            .status(400)
            .send({ 
                error: 'All field are required.' 
            })
    }

    if(!regex.test(username)) {

        return res.status(400).send({ error: "Username contains invalid character" })
    }
    
    if(!validator.isEmail(email)) {

        return res.status(400).send({ error: "Email is invalid." })
    }

}
 */

/* Lesson 3: The /register Route 👻*/
/* 
export async function registerUser(req, res) {

    console.log("req.body: ", req.body)
} */