/* Lesson 23: The React.Children API 👻👻*/
import Button from "../Button/Button"

export default function MenuButton({ children, toggle }) {
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}

/* Lesson 19: Compound Components in React - Part 2 👻*/
/* 
import Button from "../Button/Button"

export default function MenuButton({ children, onClick }) {
    console.log(onClick)
    return (
        <Button onClick={onClick}>{children}</Button>
    )
} */


/* Lesson 14: Menu Component Intro */
/* 
import Button from "../Button/Button"

export default function MenuButton({ buttonText, onClick }) {
    return (
        <Button onClick={onClick}>{buttonText}</Button>
    )
} */