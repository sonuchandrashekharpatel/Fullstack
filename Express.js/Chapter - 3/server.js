/* Chapter - 3: Authentication */

/* Lesson 23: Outro */
/* 
We user authentication to:
. Sign up new users
. Log user in 
. Log user out
. Show users specific data as they add items to their cart

We studied:
. express.session middleware
. Validation
. Hashing and bcrypt
. Protecting routes

Strech Goals:
. Improve the frontend
. Add a payment gateway
. Go away and build something with express!

*/

/* Lesson 22: Protecting Cart Routes 👻*/

/* Lesson 21: Aside: Protected Routes */

/* Lesson 20: Cart Page Challenge 3 👻*/

/* Lesson 19: Cart Page Challenge 2 👻*/

/* Lesson 18: Cart Page Challenge 1 👻*/

/* Lesson 17: The Cart Count 👻*/

/* Lesson 16: Adding to cart_table 👻*/
/* 
import { productsRouter } from './routes/products.js'
import { authRouter } from './routes/auth.js'
import { meRouter } from './routes/me.js'
import { cartRouter } from './routes/cart.js'
import session from 'express-session'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 8000
 
const secret = process.env.SPIRAL_SESSION_SECRET

app.use(express.json())

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false,
  cookie : {
    httpOnly: true,
    secure: false,
    sameSite: 'lax'
  }
}))

app.use(express.static('public'))

app.use('/api/products', productsRouter)

app.use('/api/auth/me', meRouter)

app.use('/api/auth', authRouter)

app.use('/api/cart', cartRouter)
 
app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 
 */

/* Lesson 15: Adding cart functionality */
/* 
Tasks
. Create a table cart_items
. Set up routes for endpoints
  . /api/cart GET all cart items for user
  . /api/cart/add POST a newly purchased item
  . /api/cart/all DELETE all user's cart items
  . /api/cart/:itemsId DELETE a specific item

cartController.js
. Write 5 functions to handle routes.
  . getAll
  . addToCart
  . deleteAll
  . deleteItem
  . getCount

*/

/* Lesson 14: Add Logout functionality 👻*/

/* Lesson 13: Login 👻*/

/* Lesson 12: Display a user's name 👻*/


/* Lesson 11: Environment Variables */

/* Add express-session 👻*/
/* 
import { productsRouter } from './routes/products.js'
import { authRouter } from './routes/auth.js'
import { meRouter } from './routes/me.js'
import session from 'express-session'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 8000
 
const secret = process.env.SPIRAL_SESSION_SECRET

app.use(express.json())

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false,
  cookie : {
    httpOnly: true,
    secure: false,
    sameSite: 'lax'
  }
}))

app.use(express.static('public'))

app.use('/api/products', productsRouter)

app.use('/api/auth/me', meRouter)

app.use('/api/auth', authRouter)
 
app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 

 */

/* Lesson 10: Aside: express-session */
/* 
HTTP and epress-session
. HTTP is stateless, meaning each  request from a client to a server
  is independent and contains no knowledge of previous interactions.


. The express-session package provides a way to store user-specific data 
  such as login state, between HTTP requests.


Login flow: 
Step 1: User submits the credentials
Step 2: Server authenticate user 
Step 3: Session is created or updated
Step 4: Session is sent to the cliet
Step 5: Client stores session id and send with all requests.
Step 6: Server restores session on each request
Step 7: User is now logged in

*/

/* Lesson 9: Hash the password 👻*/
/* 
import express from 'express'
import { productsRouter } from './routes/products.js'
import { authRouter } from './routes/auth.js'

const app = express()
const PORT = 8000
 


app.use(express.json())
app.use(express.static('public'))

app.use('/api/products', productsRouter)
app.use('/api/auth', authRouter)
 
app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 
 */
/* Lesson 8: bcryptjs Demo */

/*

Flow: Signup

User Provides            Bcrypt:                                         Hashed and Salted
password       ======>   . Generates the random salt   =========>        password stored in 
.                        . Hash: password + salt                         database
 
Flow: Login

User inputs                   Original password                   Bcrypt:                                                   If they match, user  
password      ============>   hash retrieved      ===========>    . Takes salt from original             ===============>   is signed in. if not
.                             from database                         password, adds it to the                                sign in fails
.                                                                   incoming password and hashed it.  
.                                                                 
.                                                                 . Compares new hash to original hash 
.                                                                   in the database.

*/
/* 
import express from 'express'
import bcrypt from 'bcryptjs'

const password = 'SoniSharma123'
const hashed = await bcrypt.hash(password, 10)

console.log(hashed)

// $2b$
// 10$
// mPEOwhnQK05RLjU9pMluHOwv
// 0aayzkKbfYTBkgGIiDafGZX4XYKu

const userInDb = {
  name: 'Soni Sharma', 
  password: '$2b$10$MQI4eeBiGcv58Om7pBEZh.Au9ew.5Ow3ZHTqzvcBjNP2Sh9D9I7p2'
}


const loginAttempt = {
  name: 'Soni Sharma',
  password: 'SoniSharma123'
}

const userIsValid = await bcrypt.compare(loginAttempt.password, userInDb.password)

console.log(userIsValid)
const app = express()

app.listen(3000, () => console.log("Server is running on 3000...") )
 */

/* Lesson 7: Aside: Hash & bcrypt */
/* 
People often reuse passwords, hackers might get access to:

. Email accounts
. Banking apps
. Social Media
. E-commerce sites

Hashing: Hashing is the process of transforming data into a fixed-length,
irreversible string of character that uniquely represents the original input.

We hash a password into a fixed-length string which can not be 
decoded.

Password: OrangeJuice66
hashed: xYFf3D9bXpAFnJPo7Xy9xNpPOD6UddX

Hackers uses Rainbow table to crack the password.
Rainbow table is table of password and their hash

Salting
  Hash + Salt
  . Create a salt,  a random string like a uuid
  . Compination of salt and password
  . Runs the has algorithm 
  . Outcome: a super unique string!

  Password: OrangeJuice66
  $2b$10$eImiTXuQWVxfM37uY4JANjQyYFf3D9bXjAFnJPI7XyExNpPOD6UnmG

  . Algorithm: $2b
  . Cost factor: 10
  . Salt: elmiTXuWVxfM37uY4JANjQ
  . Stored hash: yYFf3D9bXjAFnJPI7XyExNpPOD6UnmG
*/

/* Lesson 6: Add user to DB 👻*/

/* Lesson 5: Validate the User 👻*/
/* 
import express from 'express'
import { productsRouter } from './routes/products.js'
import { authRouter } from './routes/auth.js'

const app = express()
const PORT = 8000
 


app.use(express.json())
app.use(express.static('public'))

app.use('/api/products', productsRouter)
app.use('/api/auth', authRouter)
 
app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 
 */

/* Lesson 4: Aside: Validation */
/* 
Frontend validation is for UX only. It can easily 
be overriden by a malicious actor!

We have to take care of validation on the backend.

Validation:
1. Check all fields exist
2. Trim the whitespace from start and end
3. Use regex on the username (but not name)
4. Validate the email address

*/

/* 
import express from 'express'
import validator from 'validator'

const app = express()

const newUser = {
    fullName: 'Marcus Aurelius',
    username: 'Marcus1',
    email: 'marcus@holy-roman-empire.org',
    password: 'Gladiators!'
}

const newUser2 = {
    fullName: 'Marcus Smith',
    username: 'Marcus1 ',
    email: 'marcus@average-empire.org',
    password: 'Moggy1'
}

console.log(validator.isEmail(newUser.email))
app.listen(8000, () => console.log('listening 8000'))
 */

/* Lesson 3: The /register Route 👻*/
/* 
The signup steps
1. Create a route for the api/auth/register endpoint

2. Validate and sanitize the incoming data.

3. Add new user data to the users table

4. Think about password security in the database.

5. Create a session for the user

*/

/*
Challenge:
1. What middleware do we need to make this work?
*/

/* 
import express from 'express'
import { productsRouter } from './routes/products.js'
import { authRouter } from './routes/auth.js'

const app = express()
const PORT = 8000
 
app.use(express.json())

app.use(express.static('public'))

app.use('/api/products', productsRouter)
app.use('/api/auth', authRouter)
 
app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 
 */

/* Lesson 2: Create a users table 👻*/
/*
Challenge:

1. Debug this code so a new table 'users' is created.
   Check you have been successful with logTable.js.

*/

/* 
import express from 'express'
import { productsRouter } from './routes/products.js'

const app = express()
const PORT = 8000
 
app.use(express.static('public'))

app.use('/api/products', productsRouter)
 
app.listen(PORT, () => { 
  console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
}) 
*/

/* Lesson 1: Intro */
/* 
Authentication will allow us to:
. Sign up the new users
. Log user in
. Log users out
. Show users specific data as they add items to their cart


We'll be studying:
. express.sesion middleware
. Validation
. Hashing and Bcrypt
. Protecting Routes

And Loads More! Plus challenges.
*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "Authentication"
const chapterNum = 3
const lesson = [
    "Intro",
    "Create a users table",
    "The /register Route",
    "Aside: Validation",
    "Validate the User",
    "Add user to DB",
    "Aside: Hash & bcrypt",
    "bcryptjs Demo",
    "Hash the password",
    "Aside: express-session",
    "Environment Variables",
    "Display a user's name",
    "Login",
    "Add Logout functionality",
    "Adding cart functionality",
    "Adding to cart_table",
    "The Cart Count",
    "Cart Page Challenge 1",
    "Cart Page Challenge 2",
    "Cart Page Challenge 3",
    "Aside: Protected Routes",
    "Protecting Cart Routes",
    "Outro"
]
lessonGenerator(chapterName, lesson, chapterNum) 
 */