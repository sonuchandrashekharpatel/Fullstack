/* Lesson 12: Congratulations! */


/* Lesson 11: Types of testing */


/* Lesson 10: Accessibility testing with a side of TDD 👻*/


/* Lesson 9: View code coverage */


/* Lesson 8: Mock external services: Test 👻*/


/* Lesson 7: Mock external services: Set up the tooling */


/* Lesson 6: Test user interactions 👻*/


/* Lesson 5: Practice, practice, and practice! 👻*/
/* 
# Challenge:
************

Task: Add another component test for the Main component to cover the rest of the UI of the app. 

Description: Check that the Main component shows the labels "Top Text" and "Bottom Text". In addition, it should show two text input fields with the placeholder texts "One does not simply" and "Walk into Mordor" in the document. Finally, check that it shows a button with the text "Get a new meme image 🖼". Organize all tests in the file in a test suite.

Steps:
1. Add a new test in the file `Main.test.jsx`.
2. Pick a good name that sums up what the test is asserting.
3. Render the component.
4. Add 5 assertions using `expect`. Use the queries `getByText` for querying the labels, `getByPlaceholderText` for querying the text input fields, and `getByRole` for querying the button.
5. What's the accessible role of the button in the DOM? It's `button`. See the list of all available roles here: 
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Techniques#roles
6. See Vitest test runner picking up the new test, running it, and passing, all green.
7. Use `describe` to organize all tests in this file in a test suite. What should the name of the test suite be?

*/

import { test, describe, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import Main from "./Main"

describe("Main Component", () => {
    test("Display input labels with 'Top Text' and 'Bottom Text'", () => {
        render(<Main />)

        expect(screen.getByText("Top Text")).toBeInTheDocument()
        expect(screen.getByText("Bottom Text")).toBeInTheDocument()
    })

    test("Display input placeholder", () => {
        render(<Main />)

        expect(screen.getByPlaceholderText("One does not simply")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Walk into Mordor")).toBeInTheDocument()
    })
    test("Display Button label", () => {
        render(<Main />)

        expect(screen.getByRole("button")).toHaveTextContent("Get a new meme image 🖼")
    }) 
})

/* Lesson 4: Write your first test 👻*/
/* 
# Challenge:
************

Task: Add a component test for the Main component. 

Description: Check that the Main component shows the actual text lines "One does not simply" and "Walk into Mordor" in the document. It should also check that the img with the src "https://i.imgflip.com/1bij.jpg" is in the document.

Steps:
1. Create a new file `Main.test.jsx` next to `Main.jsx`.
2. Import necessary functions from 'vitest' and '@testing-library/react'.
3. Import the component.
4. Add a test for the meme text lines and image. 
  1. Render the component.
  2. Add 3 assertions using `expect`. For the `img`, expect `src` `toBe` "https://i.imgflip.com/1bij.jpg". 
  3. See the tests in `Header.test.jsx` for reference.
5. See Vitest test runner picking the new test, running it, and passing, all green.

*/

/* 
import { test, describe, expect } from "vitest"
import { render, screen} from "@testing-library/react"

import Main from "./Main"

describe("Main", () => {
    test("display the meme text and image", () => {
        render(<Main />)

        expect(screen.getByText("One does not simply")).toBeInTheDocument()
        expect(screen.getByText("Walk into Mordor")).toBeInTheDocument()
        expect(screen.getByRole("img").src).toContain("https://i.imgflip.com/1bij.jpg")

    })
})
 */
