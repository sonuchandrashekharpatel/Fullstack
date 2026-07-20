/* Chapter - 1: Testing */

/* Lesson 12: Congratulations! */


/* Lesson 11: Types of testing */


/* Lesson 10: Accessibility testing with a side of TDD 👻*/


/* Lesson 9: View code coverage */
/* 
Code coverage is a metric for test runners that guages how much 
of a program's source code is executed during testing.

*/

/* Lesson 8: Mock external services: Test 👻*/
/* 
Recap: 
    . Testing while mocking external services
    . Testing full functionality
    . 
*/
/* 
# Challenge:
************

Task: Add a test for getting a new meme image.

Description: The test should check that after the user click the "Get a new meme image 🖼" button, a new image is displayed. Use the Arrange-Act-Assert pattern. Only finish the first two parts of the pattern.

Optional for Extra Credit: Add the Assert part as well. What is the `src` of the meme image that the mock service will return?

Steps:
1. Add a new test in the file `App.test.jsx`.
2. Pick a good name that sums up what the test is asserting.
3. Add the Arrange-Act-Assert pattern skeleton.
4. Create a user using `userEvent.setup()`.
5. Render the component.
6. Query the button, using `getByRole`, and the role `button`.
7. In the Act part, have the user `click` on the button. What does that return? Does the test function need to be `async`? 
8. See Vitest test runner picking up the new test, running it, and passing, all green.

*/

import { test, expect, describe} from "vitest"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"

import App from "./App"

describe("App", () => {
    test("Getting a new meme image", async() => {

        // Arrange
        const user = userEvent.setup()
        render(<App />)

        const  getMemeBtn = screen.getByRole("button")

        // Act
        await user.click(getMemeBtn)

        // Assert
        const images = screen.getAllByRole("img")

        expect(images[1].src).toBe("https://i.imgflip.com/1c1uej.jpg")
    })

})

/* Lesson 7: Mock external services: Set up the tooling */


/* Lesson 6: Test user interactions 👻*/
/* 
Recap:
. Using the Arrange-Act-Assert pattern

. Testing user interactions with @testing-library/user-event

. Querying multiple nodes using getAllByRole

*/

/* 
# Challenge:
************

Task: Add a test for updating the bottom text. Use the Arrange-Act-Assert pattern.

Description: Check that after the user clears the second textbox and types "Code without coffee" in it, the App component will display the new bottom text in the document.

Steps:
1. Add a new test in the file `App.test.jsx`.
2. Pick a good name that sums up what the test is asserting.
3. Apply the Arrange-Act-Assert pattern.
4. Create a user using `userEvent.setup()`.
5. Render the component.
6. Query the second textbox, using `getAllByRole`, and the role `textbox`.
7. `await` the user `clear`ing the textbox. Make the function `async`.
8. `await` the user `type`ing the text `Code without coffee`.
9. Assert, using `expect` that the text is displayed in the document.
10. See Vitest test runner picking up the new test, running it, and passing, all green.
11. Use `describe` to organize all tests in this file in a test suite. What should the name of the test suite be?
*/

/* 
import { test, expect, describe } from "vitest"
import { userEvent } from "@testing-library/user-event"
import { render, screen } from "@testing-library/react"

import App from "./App"

describe("App", () => {
    test("Update the top text", async() => {
        // Arrange
        const user = userEvent.setup()
        render(<App />)

        const topTextBox = screen.getAllByRole("textbox")[0]

        // Act
        await user.clear(topTextBox)
        await user.type(topTextBox, "A coder does not simply")

        // Assert
        expect(screen.getByText("A coder does not simply")).toBeInTheDocument()
    })

    test("Update bottom text", async() => {
    
        //Arrange
        const user = userEvent.setup()
    
        render(<App />)
        const bottomTextBox = screen.getAllByRole("textbox")[1]
    
        // Act
        await user.clear(bottomTextBox)
        await user.type(bottomTextBox, "Code without coffee")
    
        // Assert
        expect(screen.getByText("Code without coffee")).toBeInTheDocument()
    })
})
 */

/* 
import { test, expect, describe } from "vitest"
import { userEvent } from "@testing-library/user-event"
import { render, screen } from "@testing-library/react"


import App from "./App"

test("Update the top text", async() => {
    // Arrange
    const user = userEvent.setup()
    render(<App />)

    const topTextBox = screen.getAllByRole("textbox")[0]

    // Act
    await user.clear(topTextBox)
    await user.type(topTextBox, "A coder does not simply")

    // Assert
    expect(screen.getByText("A coder does not simply")).toBeInTheDocument()
})
 */