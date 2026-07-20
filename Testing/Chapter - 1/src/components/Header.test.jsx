/* Lesson 12: Congratulations! */


/* Lesson 11: Types of testing */


/* Lesson 10: Accessibility testing with a side of TDD 👻*/


/* Lesson 9: View code coverage */


/* Lesson 8: Mock external services: Test 👻*/


/* Lesson 7: Mock external services: Set up the tooling */


/* Lesson 6: Test user interactions 👻*/


/* Lesson 5: Practice, practice, and practice! 👻*/


/* Lesson 4: Write your first test 👻*/

import { test, expect, describe } from "vitest"
import { render, screen } from "@testing-library/react"

import Header from "./Header"

describe("Header", () => {
    
    test("display the app name", () => {
        render(<Header />)
    
        expect(screen.getByText("Meme Generator")).toBeInTheDocument()
    })
    
    test("display the troll face", () => {
        render(<Header />)
    
        expect(screen.getByRole("img").src).toContain("troll-face.png")
    })
})