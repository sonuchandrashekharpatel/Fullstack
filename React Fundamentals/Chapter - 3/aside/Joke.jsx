import { useState } from "react"
export default function Joke(props) {
    const [ isShown, setIsShown ] = useState(false)
    return (
        <>
            <p>Setup: {props.setup}</p>
            { isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick={() => {setIsShown(prevIsShown => !prevIsShown)}}>{isShown ? "Hide Punchline" : "Show Punchline" }</button>
            <hr />
        </>
    )
}