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


/* Lesson 17: Add ids to pizzas */


/* Lesson 16: Update order status to use literal type unions */


/* Lesson 15: Unions */


/* Lesson 14: Literal types */


/* Lesson 13: Type orderQueue */


/* Lesson 12: Typing arrays */


/* Lesson 11: Adding an Order type */


/* Lesson 10: Optional properties (6) */


/* Lesson 9: Nested object types (5) */


/* Lesson 8: Adding a Pizza type */


/* Lesson 7: Defining Custom Types */


/* Lesson 6: Add type to orderId */


/* Lesson 5: Obligatory types basics lesson */


/* Lesson 4: Defensive coding */


/* Lesson 3: Move code to TS */


/* Lesson 2: Intro to Pizza app (1) */
/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */
/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */
/* 
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

const cashInRegister = 100
const orderQueue = []
const nextOrderId = 0


function addNewPizza(pizza) {
    menu.push(pizza)
}

function placeOrder(pizzaName) {
  const pizzaObj = menu.find(item => item.name === pizzaName )
  cashInRegister += pizzaObj.price

  const newOrder = { id: nextOrderId, pizza: pizzaObj, status: "ordered" }
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
/* Lesson 1: Introduction */
/* 
Why learn TypeScript?

1. Confident
2. Productivity
3. Employability

1. Confidence:
  App-crashing run time error are dramatically
  reduced by TypeScript, which checks the code 
  at compile time before it ever gets deployed.

2. Productivity:
  Using TypeScript "turns on" a number of neat
  features that makes your life as developer a
  LOT easier. Autocomplete, refactoring capabilities,
  immediate error checking and more, all greatly
  improve thee developer experience (DX)

3. Employability:
  TypeScript is considered "table stakes" by many 
  companies, even if isn't explicitly listed in job 
  description. Knowing even a little TypeScript can
  set you apart from other junior developer candidates.

*/
/* 
Curriculum overview:
. Basic, literal and custom types
. Optional properties
. Unions
. Type Narrowing
. Utility Types
. Generics

*/

/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = "TypeScript Fundamentals"
const chapterNum = 1
const lesson = [
  "Introduction",
  "Intro to Pizza app (1)",
  "Move code to TS",
  "Defensive coding",
  "Obligatory types basics lesson",
  "Add type to orderId",
  "Defining Custom Types",
  "Adding a Pizza type",
  "Nested object types (5)",
  "Optional properties (6)",
  "Adding an Order type",
  "Typing arrays",
  "Type orderQueue",
  "Literal types",
  "Unions",
  "Update order status to use literal type unions",
  "Add ids to pizzas",
  "Type Narrowing",
  "Be explicit whenever you can",
  "Void return type",
  "TS-specific types: any",
  "Add return type to getPizzaDetail",
  "Add automatic ids to menu items",
  "Utility Types & Partial",
  "Omit Utility Type",
  "Fix TS warnings with Omit",
  "Generics",
  "Generic functions in the pizza restaurant",
  "Explicitly type generic function calls",
  "Conclusion... for now"
]
lessonGenerator(chapterName, lesson, chapterNum)  */