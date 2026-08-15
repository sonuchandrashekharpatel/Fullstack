/* Chapter - 1: TypeScript Fundamentals */

/* Lesson 30: Conclusion... for now */
/* 
Recap:
1. Basic, Literal, custom types
2. Optional Properties
3. Unions
5. Type Narrowing
6. Utility
7. Generics
*/

/* Lesson 29: Explicitly type generic function calls */
type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza): Pizza {
    menu.push(pizzaObj)
    return pizzaObj
}

function placeOrder(pizza: Pizza): Order | undefined {
    const newOrder: Order = { id: nextOrderId++, pizza: pizza, status: "ordered" }
    orderQueue.push(newOrder)
    cashInRegister += pizza.price
    return newOrder
}






function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

/**
 * Mini-challenge: what should be passed in as the generic type on line 53?
 */

addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" })

console.log(menu)
console.log(orderQueue)


function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}

// addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
// addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 12 })
// addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11 })


/* Lesson 28: Generic functions in the pizza restaurant */
/* type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza): Pizza {
    menu.push(pizzaObj)
    return pizzaObj
}

function placeOrder(pizza: Pizza): Order | undefined {
    const newOrder: Order = { id: nextOrderId++, pizza: pizza, status: "ordered" }
    orderQueue.push(newOrder)
    cashInRegister += pizza.price
    return newOrder
}


//  * Challenge: add types our generic `addToArray` function. It should work
//  * for adding new pizzas to the `menu` and adding new orders to the `orderQueue`


function addToArray <T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

console.log(menu)
console.log(orderQueue)

// example usage:
addToArray(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" })




function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}

// addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
// addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 12 })
// addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11 })
 */

/* Lesson 27: Generics */
/*
// Generics:
// 1. Add flexibility to existing function, types, etc.
// 2. Act like function parameters but for types
// 3. Use angle bracket syntax(<>)

const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

function getLastItem<T>(array: T[]) {
    return array[array.length - 1]
}
//  * Mini-challenge: call `getLas

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))
 */
/* 
const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

//  * Challenge: figure out how to explicitly type the return value
//  * of the function!

function getLastItem<Type>(array: Type[]): Type {
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))
 */
/* Lesson 26: Fix TS warnings with Omit */
/* 
type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

const orderQueue: Order[] = []

//  Challenge:
//  Fix the addNewPizza function using the Omit utility type. This might
//  require more than just changing the "Pizza" typed `pizzaObj` parameter.
//  Return the new pizza object (with the id added) from the function.

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizzaObj = { id: nextPizzaId++, ...pizzaObj }
    menu.push(newPizzaObj)

    return newPizzaObj
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })





function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}


// placeOrder("Chicken Bacon Ranch")
// placeOrder("Pepperoni")
// completeOrder(1)
// placeOrder("Veggie")
// completeOrder(2)

console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)
 */
/* Lesson 25: Omit Utility Type */
/* 
What does the Omit type do?
Omit takes in a type AND a string ( or union of string) property
name(s), and returns a new type with those properties removed.

*/

/* 
type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>

let nextUserId = 1

const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" }
];

function updateUser(id: number, updates: UpdatedUser) {
    const foundUser = users.find(user => user.id === id)
    if (!foundUser) {
        console.error("User not found!")
        return
    }
    Object.assign(foundUser, updates)
}

// updateUser(1, { username: "new_john_doe" });
// updateUser(4, { role: "contributor" });

function addNewUser(newUser: Omit<User, "id">): User {
    // Create a new variable called `user`, add an `id` property to it
    // and spread in all the properties of the `newUser` object. Think
    // about how you should set the type for this `user` object.
    // Push the new object to the `users` array, and return the object
    // from the function at the end
    const user: User = { id: nextUserId++, ...newUser }
    users.push(user)

    return user
}

// example usage:
addNewUser({ username: "joe_schmoe", role: "member" })

console.log(users)
 */
/* Lesson 24: Utility Types & Partial */
/* 
Utility Types
1.  Like a function, they take other types in as  a parameter and 
    return a new type, with some changes made to it.

2.  Built-in to TypeScript; perform commonly-needed modifications to 
    existing types

3. Use "Generics" syntax using angle bracket (<>)

What does the Partial type do?
    This modifies the type you pass in and turns all properties into 
    optional properties.
*/
/* 
type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

// type UpdatedUser = {
//     id?: number
//     username?: string
//     role?: "member" | "contributor" | "admin"
// }

// Alternative and good way of doing
type UpdatedUser = Partial<User>

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
    // Find the user in the array by the id
    const user = users.find(user => user.id === id)
    if(!user) return

    // Use Object.assign to update the found user in place. 
    Object.assign(user, updates)

    // Check MDN if you need help with using Object.assign
    console.log(user)
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)
 */
/* Lesson 23: Add automatic ids to menu items */
/**
 * Challenge part 1: Make it so we can use a global variable to track the nextPizzaId
 * and use the same trick we use with `nextOrderId++` when you're calling addNewPizza.
 * Update the menu items to use this as well so we don't have to manually enter ids 1-4
 * like we're currently doing
 */
/**
 * Challenge part 1.5: Try to move the logic for adding an ID to the pizza objects 
 * inside the addNewPizza function, so that we can call addNewPizza with no id, and
 * the function will handle that part for us.
 * 
 * NOTE: you will run into TS warnings that we'll address soon, but the code should
 * still run.
 */
/* 
type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}
let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []
let nextPizzaId = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]


function addNewPizza(pizzaObj: Pizza): void {
    menu.push(pizzaObj)
}


addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11 })





function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}


// placeOrder("Chicken Bacon Ranch")
// placeOrder("Pepperoni")
// completeOrder(1)
// placeOrder("Veggie")
// completeOrder(2)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
 */
/* 
type Pizza = {
    id?: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}
let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []
let nextPizzaId = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]


function addNewPizza(pizzaObj: Pizza): void {
    const newPizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza)
}


addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })


function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}


// placeOrder("Chicken Bacon Ranch")
// placeOrder("Pepperoni")
// completeOrder(1)
// placeOrder("Veggie")
// completeOrder(2)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
 */
/* Lesson 22: Add return type to getPizzaDetail */
/**
 * Challenge (part 2): explicitly type the return value of this function
 * to tell TypeScript it could either be a Pizza object or undefined
 * as the return value.
 */
/* type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza): void {
    menu.push(pizzaObj)
}


function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(identifier: string | number) {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
} */

/* Lesson 21: TS-specific types: any */
/* 
When should I use any?
in short: DON'T

One legitimate use-case: you're in the process 
of transitioning a code base from JavaScript to
TypeScript and don't immediately haven the time 
to write all your complex types so you just need  
a way  to "get around TypeScript" from now.
*/

/* 
let value: any = 1
value.toUpperCase()
value = "Hi"
value.map()
 */
/* Lesson 20: Void return type */
/**
 * Challenge: add explicit return types to the rest of our functions
 */
/* 
type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza): void {
    menu.push(pizzaObj)
}


function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}
 */

/* Lesson 19: Be explicit whenever you can */
/* 
type Pizza = {
    id: number
    name: string
    price: number
}

type Status = "ordered" | "completed"
type Order = {
    id: number
    pizza: Pizza
    status: Status
}

const menu: Pizza[]  = [
    { id:1, name: "Margherita", price: 8 },
    { id:2, name: "Pepperoni", price: 10 },
    { id:3, name: "Hawaiian", price: 10 },
    { id:4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Array<Order> = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }

    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

function getPizzaDetail(identifier: string | number) {
    let pizzaDetail
    if(typeof(identifier) === "string") {
        pizzaDetail = menu.find(item => item.name === identifier.toLowerCase())
    } else if(typeof(identifier) === "number") {
        pizzaDetail = menu.find(item => item.id === identifier)
    } else {
        throw new Error('TypeError: type of "identfier" does matched with function signature')
    }

    return pizzaDetail

}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
placeOrder("Pepperoni")
completeOrder(1)
placeOrder("Anchovy")
placeOrder("Veggie")
completeOrder(2)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
 */
/* Lesson 18: Type Narrowing */
/**
 * Challenge: create a new utility function called getPizzaDetail. It will take
 * a parameter called `identifier`, but there's a twist: we want this identifier
 * to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
 * OR to be the number ID of the pizza (e.g. 2).
 * 
 * Don't worry about the code inside the function yet, just create the function
 * signature, making sure to teach TS that the `identifier` parameter is allowed
 * to either be a string or a number.
 */
    /**
     * Challenge: write the code to check if the parameter is a string
     * or a number, and use the menu.find() method accordingly
     */
/* type Pizza = {
    id: number
    name: string
    price: number
}

type Status = "ordered" | "completed"
type Order = {
    id: number
    pizza: Pizza
    status: Status
}

const menu: Pizza[]  = [
    { id:1, name: "Margherita", price: 8 },
    { id:2, name: "Pepperoni", price: 10 },
    { id:3, name: "Hawaiian", price: 10 },
    { id:4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Array<Order> = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }

    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

function getPizzaDetail(identifier: string | number) {
    let pizzaDetail
    if(typeof(identifier) === "string") {
        pizzaDetail = menu.find(item => item.name === identifier.toLowerCase())
    }

    if(typeof(identifier) === "number") {
        pizzaDetail = menu.find(item => item.id === identifier)
    }

    return pizzaDetail

}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
placeOrder("Pepperoni")
completeOrder(1)
placeOrder("Anchovy")
placeOrder("Veggie")
completeOrder(2)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
 */
/* Lesson 17: Add ids to pizzas */
/* 
type Pizza = {
    id: number
    name: string
    price: number
}

type Status = "ordered" | "completed"
type Order = {
    id: number
    pizza: Pizza
    status: Status
}

const menu: Pizza[]  = [
    { id:1, name: "Margherita", price: 8 },
    { id:2, name: "Pepperoni", price: 10 },
    { id:3, name: "Hawaiian", price: 10 },
    { id:4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Array<Order> = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }

    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
placeOrder("Pepperoni")
placeOrder(1)
placeOrder("Anchovy")
placeOrder("Veggie")
placeOrder(2)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
 */
/* Lesson 16: Update order status to use literal type unions */
/* 
//  * Challenge: using literal types and unions, update the Order status so that
//  * it can only ever be "ordered" or "completed"

type Pizza = {
    name: string
    price: number
}

type Status = "ordered" | "completed"
type Order = {
    id: number
    pizza: Pizza
    status: Status
}

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Array<Order> = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }

    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}
 */
/* Lesson 15: Unions */
/* type User = {
    username: string
    role: "guest" | "member" | "admin"
}

type UserRole = "guest" | "member" | "admin"

let userRole: UserRole = "member"
 */
/* Lesson 14: Literal types */
/* 
let myName: "Sonu" = "Sonu"
const myName2: "Sonu" = "Sonu"

 */
/* Lesson 13: Type orderQueue */
/* 
type Pizza = {
    name: string
    price: number
}



type Order = {
    id: number
    pizza: Pizza
    status: string
}

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Array<Order> = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}
//  * Challenge: Fix the warning below by handling the "sad path" scenario!

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)

    if(!order) {
        console.log(`Order with the id of ${orderId} does not exist`)
        return
    }

    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
 */

/* Lesson 12: Typing arrays */
/* 
type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
}

//  * Challenge: create an array of people objects and
//  * manually type it as an array of Person types

// Both are correct ways of doing this
let people: Person [] = [ person1, person2]
// let people: Array<Person> = [ person1, person2]
 */

/* Lesson 11: Adding an Order type */
/* type Pizza = {
    name: string
    price: number
}

// *
//  * Challenge: Add an Order type. It should have `id`, `pizza`, and `status` properties.
//  * Look through the code if you need a reminder as to what data types those should be.


type Order = {
    id: number
    pizza: Pizza
    status: string
}

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
 */
/* Lesson 10: Optional properties (6) */
/* 
type Address = {
        street: string
        city: string
        country: string
    }

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,

}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

function displayInfo(person) {

    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person1)
 */
/* Lesson 9: Nested object types (5) */
/* 
// Challenge: try to figure out how to move the nested address object type
// into a separate type definition. When done correctly, there should be no more
// red errors in the editor

type Address = {
        street: string
        city: string
        country: string
    }

type Person = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}
 */

/* Lesson 8: Adding a Pizza type */
/**
 * Challenge: Create a Pizza object type. It should include a `name`
 * and a `price` property.
*/
/* type Pizza = {
    name: string
    price: number
}
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100
const orderQueue = []
let nextOrderId = 1


function addNewPizza(pizza: Pizza) {
    menu.push(pizza)
}

function placeOrder(pizzaName: string) {
  const pizzaObj = menu.find(item => item.name === pizzaName )
  if(!pizzaObj) {
    console.log(`${pizzaName} does not exist in the menu.`)
    return
  }
  cashInRegister += pizzaObj.price

  const newOrder = { id: nextOrderId++, pizza: pizzaObj, status: "ordered" }
  orderQueue.push(newOrder)

  return newOrder
}

function completeOrder(orderId: number) {
  const foundOrder = orderQueue.find(order => order.id === orderId)

  if(!foundOrder) {
    console.log(`Order with the id ${orderId} does not exist.`)
    return
  }

  foundOrder.status = "completed"
  return foundOrder
}
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
 */
/* Lesson 7: Defining Custom Types */
/* 
// Challenge: finish the object type definition

type Person = {
    name: string
    age: number
    isStudent: boolean
    
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false
}
 */
/* Lesson 6: Add type to orderId */
/* 
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100
const orderQueue = []
let nextOrderId = 0


function addNewPizza(pizza) {
    menu.push(pizza)
}

function placeOrder(pizzaName) {
  const pizzaObj = menu.find(item => item.name === pizzaName )
  if(!pizzaObj) {
    console.log(`${pizzaName} does not exist in the menu.`)
    return
  }
  cashInRegister += pizzaObj.price

  const newOrder = { id: nextOrderId++, pizza: pizzaObj, status: "ordered" }
  orderQueue.push(newOrder)

  return newOrder
}

//  * Challenge: Teach TS what data type should be used for the 
//  * orderId in the completeOrder function. Then check for any
//  * additional warnings TS comes up with and fix those.


function completeOrder(orderId: number) {
  const foundOrder = orderQueue.find(order => order.id === orderId)

  if(!foundOrder) {
    console.log(`Order with the id ${orderId} does not exist.`)
    return
  }

  foundOrder.status = "completed"
  return foundOrder
}
addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
 */ 

/* Lesson 5: Obligatory types basics lesson */
/* 
// Primitive Data Types: string, number, boolean
// Challenge: Explicitly type the variables below:

let myName: string = "Sonu"

let numberOfWheels: number = 4
let isStudent: boolean = false
 */

/* Lesson 4: Defensive coding */
/* 
"Happy Path" 
. Assumes everything will work perfectly
. Easiest code to write

"Sad Path"
. Assumes problems may occur
. A more "defensive" way to write code
. Not as easy - have to think of the edge cases

*/

/* 
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100
const orderQueue = []
let nextOrderId = 0


function addNewPizza(pizza) {
    menu.push(pizza)
}

function placeOrder(pizzaName) {
  const pizzaObj = menu.find(item => item.name === pizzaName )
  if(!pizzaObj) {
    console.log(`${pizzaName} does not exist in the menu.`)
    return
  }
  cashInRegister += pizzaObj.price

  const newOrder = { id: nextOrderId++, pizza: pizzaObj, status: "ordered" }
  orderQueue.push(newOrder)

  return newOrder
}

function completeOrder(orderId) {
  const foundOrder = orderQueue.find(order => order.id === orderId)
  foundOrder.status = "completed"
  return foundOrder
}
addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
 */

/* Lesson 3: Move code to TS */
/* 
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100
const orderQueue = []
let nextOrderId = 0


function addNewPizza(pizza) {
    menu.push(pizza)
}

function placeOrder(pizzaName) {
  const pizzaObj = menu.find(item => item.name === pizzaName )
  cashInRegister += pizzaObj.price

  const newOrder = { id: nextOrderId++, pizza: pizzaObj, status: "ordered" }
  orderQueue.push(newOrder)

  return newOrder
}

function completeOrder(orderId) {
  const foundOrder = orderQueue.find(order => order.id === orderId)
  foundOrder.status = "completed"
  return foundOrder
}
addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue) */
