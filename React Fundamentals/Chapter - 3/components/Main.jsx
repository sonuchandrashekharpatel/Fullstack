/* Chapter - 3: React State */
/* Lesson 61: Update: "scrollIntoView() iFrame  bug fix" */

import { useState, useRef, useEffect } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromAI } from ".././ai"


export default function Main() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)
    console.log(recipeSection)

    useEffect(() => {
        if(recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
            // const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            // window.scroll({
            //     top: yCoord,
            //     behavior: "smooth"
            // })
        }
    }, [recipe])

    function addIngredients(formData) {

        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        const recipeText = await getRecipeFromAI(ingredients)
        setRecipe(recipeText)

    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredients}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {   ingredients.length > 0 && 
                <IngredientsList
                    ref={recipeSection}
                    ingredients= {ingredients}
                    getRecipe = {getRecipe}
                />
            }

            { recipe && 
                <ClaudeRecipe 
                    recipe={recipe}
                />
            }
        </main>
    )
}


/* Lesson 60: Update: "useEffect practice: scrollIntoView()" */
/**
 * Challenge:
 * Add a new effect that calls `recipeSection.current.scrollIntoView()`
 * only if recipe is not an empty string and recipeSection.current is not null.
 * Think carefully about what value(s) you would want to include in
 * the dependencies array.
 */
/* 
import { useState, useRef, useEffect } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromAI } from ".././ai"


export default function Main() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)
    console.log(recipeSection)

    useEffect(() => {
        recipe && recipeSection.current &&  recipeSection.current.scrollIntoView()
    }, [recipe])

    function addIngredients(formData) {

        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        const recipeText = await getRecipeFromAI(ingredients)
        setRecipe(recipeText)

    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredients}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {   ingredients.length > 0 && 
                <IngredientsList
                    ref={recipeSection}
                    ingredients= {ingredients}
                    getRecipe = {getRecipe}
                />
            }

            { recipe && 
                <ClaudeRecipe 
                    recipe={recipe}
                />
            }
        </main>
    )
}
 */

/* Lesson 59: Update: "Sneak peak: ref" */
/* 
import { useState, useRef } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromAI } from ".././ai"


export default function Main() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)
    console.log(recipeSection)


    function addIngredients(formData) {

        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        const recipeText = await getRecipeFromAI(ingredients)
        setRecipe(recipeText)

    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredients}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {   ingredients.length > 0 && 
                <IngredientsList
                    ref={recipeSection}
                    ingredients= {ingredients}
                    getRecipe = {getRecipe}
                />
            }

            { recipe && 
                <ClaudeRecipe 
                    recipe={recipe}
                />
            }
        </main>
    )
}
 */

/* Lesson 58: Section 3 Outro */


/* Lesson 57: Format recipe response 👻*/


/* Lesson 56: Challenge: Get recipe from the AI chef 🤖👨‍🍳 👻*/
/**
 * Challenge: Get a recipe from the AI!
 * 
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 * 
 * Using either the `getRecipeFromChefClaude` function or the 
 * `getRecipeFromMistral` function, make it so that when the user
 * clicks "Get a recipe", the text response from the AI is displayed
 * in the <ClaudeRecipe> component.
 * 
 * For now, just have it render the raw markdown that the AI returns,
 * don't worry about making it look nice yet. (We're going to use a
 * package that will render the markdown for us soon.)
*/
/* 
import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromAI } from ".././ai"



export default function Main() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipe, setRecipe] = useState("")


    function addIngredients(formData) {

        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        const recipeText = await getRecipeFromAI(ingredients)
        setRecipe(recipeText)

    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredients}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {   ingredients.length > 0 && 
                <IngredientsList
                    ingredients= {ingredients}
                    getRecipe = {getRecipe}
                />
            }

            { recipe && 
                <ClaudeRecipe 
                    recipe={recipe}
                />
            }
        </main>
    )
}
 */

/* Lesson 55: Challenge quiz: prep to get recipe from the AI chef 🤖👨‍🍳 👻*/
/**
 * Challenge: Get a recipe from the AI!
 * 
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 * 
 * We'll start with a mini-quiz:
 * 
 * 1. Think about where the recipe response should live and how you're
 *    going to make sure it doesn't disappear between each state change in
 *    the app. (I don't mean between refreshes of your mini-browser.
 *    You don't need to save this to localStorage or anything more permanent
 *    than in React's memory for now.)
 *  
 * Ans.  The recipe response should live in a React state that will change in each state change.
 * 2. What action from the user should trigger getting the recipe?
 * 
 * Ans. Clicking the "Get a Recipe" button
*/

/* 
import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"


export default function Main() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [ recipeShown, setRecipeShown ] = useState(false)


    function addIngredients(formData) {

        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredients}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {   ingredients.length > 0 && 
                <IngredientsList
                    ingredients= {ingredients}
                    toggleRecipeShown = {toggleRecipeShown}
                />
            }

            { recipeShown && <ClaudeRecipe />}
        </main>
    )
}
 */

/* Lesson 54: Quick AI Update */


/* Lesson 53: AI code walkthrough */


/* Lesson 52: API Sign Ups */


/* Lesson 51: Chef Claude challenge: refactor to separate components 👻👻*/
/* 
import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"


export default function Main() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [ recipeShown, setRecipeShown ] = useState(false)


    function addIngredients(formData) {

        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        console.log(ingredients)
    }

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredients}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {   ingredients.length > 0 && 
                <IngredientsList
                    ingredients= {ingredients}
                    toggleRecipeShown = {toggleRecipeShown}
                />
            }

            { recipeShown && <ClaudeRecipe />}
        </main>
    )
}
 */

/* Lesson 50: Sound pads challenge part 4.3 - updating item in array 👻*/


/* Lesson 49: Sound pads challenge part 4.2 - shared state 👻*/


/* Lesson 48: Sound pads challenge part 4.1 - local state 👻*/


/* Lesson 47: Sound pads challenge, part 3 👻*/


/* Lesson 46: Sound pads challenge, part 2 👻*/


/* Lesson 45: Dynamic styles 👻*/


/* Lesson 44: Sound pads challenge, part 1 👻*/


/* Lesson 43: Passing data around React 👻👻*/


/* Lesson 42: Setting state from child components 👻👻*/


/* Lesson 41: Passing state as props 👻*/


/* Lesson 40: Chef Claude: Get recipe placeholder challenge 👻*/
/**
 * Challenge:
 * 1. Create a boolean state that, for now, will represent whether
 *    we've gotten a recipe back from the "chef". Default to `false`.
 *    Can call it `recipeShown`.
 * 2. Grab the markup in recipeCode.md and paste it below. This will
 *    be a placeholder for the content that will come back from the 
 *    chef once we set up that feature.
 * 3. When the user clicks the "Get a recipe" button, flip the
 *    `recipeShown` state to true.
 * 4. Only display the recipe code content if `recipeShown` is true.
 */
/* 
import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [ recipeShown, setRecipeShown ] = useState(false)

    const ingredientsListItems = ingredients.map(item => <li>{item}</li>)

    function addIngredients(formData) {

        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        console.log(ingredients)
    }

    function togglwRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredients}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            { 
                ingredients.length > 0 && 
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                    { ingredients.length > 3 && 
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={togglwRecipeShown}>Get a recipe</button>
                    </div>}
                </section>
            }

                { recipeShown && 
                    <section>
                        <h2>Chef Claude Recommends:</h2>
                        <article className="suggested-recipe-container" aria-live="polite">
                            <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                            <h3>Beef Bolognese Pasta</h3>
                            <strong>Ingredients:</strong>
                            <ul>
                                <li>1 lb. ground beef</li>
                                <li>1 onion, diced</li>
                                <li>3 cloves garlic, minced</li>
                                <li>2 tablespoons tomato paste</li>
                                <li>1 (28 oz) can crushed tomatoes</li>
                                <li>1 cup beef broth</li>
                                <li>1 teaspoon dried oregano</li>
                                <li>1 teaspoon dried basil</li>
                                <li>Salt and pepper to taste</li>
                                <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                            </ul>
                            <strong>Instructions:</strong>
                            <ol>
                                <li>Bring a large pot of salted water to a boil for the pasta.</li>
                                <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                                <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                                <li>Stir in the tomato paste and cook for 1 minute.</li>
                                <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                                <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                                <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                                <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                                <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                            </ol>
                        </article>
                    </section>
                }
        </main>
    )
}
 */

/* Lesson 34: Conditional rendering practice: && 👻👻*/
/**
 * Challenge:
 * Using conditional rendering, only render the new <section> IF
 * there are ingredients added to the list of ingredients.
*/
/* 
import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map(item => <li>{item}</li>)

    function addIngredients(formData) {

        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        console.log(ingredients)
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredients}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            { 
                ingredients.length > 0 && 
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                    { ingredients.length > 3 && 
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button>Get a recipe</button>
                    </div>}
                </section>
            }
        </main>
    )
}
 */
/* Lesson 25: Chef Claude: Refactor form submission 👻*/

/**
 * Challenge: use form action instead of onSubmit to
 * handle the data from the form
 */

/* 

import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])

    const ingredientsListItems = ingredients.map(item => <li>{item}</li>)

    function addIngredients(formData) {

        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        console.log(ingredients)
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredients}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}
 */

/* Lesson 18: Chef Claude: Refactor array state 👻*/

/**
 * Challenge: Update our app so that when the user enters a
 * new ingredient and submits the form, it adds that new
 * ingredient to our list!
 */

/**
 * Like before, don't worry about this FormData stuff yet.
 * Just use the newIngredient below to help you finish the
 * challenge.
 */

/* 
import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])

    const ingredientsListItems = ingredients.map(item => <li>{item}</li>)

    function handleSubmit(event) {

        event.preventDefault()
        console.log(event.currentTarget)
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        console.log(ingredients)
    }
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}
 */

/* Lesson 6: Chef Claude: Map ingredients list 👻👻👻*/

/**
 * Review Challenge:
 * Map over the list of ingredients and render them as list items
 * 
 * Note: We're doing things a weird way here. Don't worry,
 * we're building up to learning the right way 🙂
 */

/**
 * Challenge:
 * Add an `onSubmit` event listener on the form. Have the function
 * simply console.log("Form submitted!") for now
 */

/**
 * Challenge:
 * Add the new ingredient to the array of ingredients. Also, add a 
 * console.log(ingredients) after adding the ingredient, because 
 * **warning**: you aren't going to see the page update!
 * 
 * Hint: this is a one-liner solution, so don't overthink it 😅
 */

/* 
export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(item => <li>{item}</li>)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.currentTarget)
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get('ingredient')
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
} */

/* Lesson 3: Chef Claude: form */

/* 
export default function Main() {
    return (
        <main>
            <form className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label=""
                />

                <button>Add Ingredient</button>
            </form>
        </main>
    )
} */