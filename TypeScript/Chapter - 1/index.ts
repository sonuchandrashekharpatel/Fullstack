/* Chapter - 1: TypeScript Fundamentals */

/* Lesson 30: Conclusion... for now */


/* Lesson 29: Explicitly type generic function calls */


/* Lesson 28: Generic functions in the pizza restaurant */


/* Lesson 27: Generics */


/* Lesson 26: Fix TS warnings with Omit */


/* Lesson 25: Omit Utility Type */


/* Lesson 24: Utility Types & Partial */


/* Lesson 23: Add automatic ids to menu items */


/* Lesson 22: Add return type to getPizzaDetail */


/* Lesson 21: TS-specific types: any */


/* Lesson 20: Void return type */


/* Lesson 19: Be explicit whenever you can */


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
