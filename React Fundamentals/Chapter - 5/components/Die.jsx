/* Lesson 17: Tenzies: Accessibility Improvements */
export default function Die(props) {
    const styles = props.isHeld ? { backgroundColor: '#59E391'} : null
    return (
        <button 
            aria-pressed={props.isHeld}
            aria-label={`Die with the value ${props.value}, #{props.isHeld ? "held": "not held"}`}
            onClick={props.hold} 
            style={styles}
        >{props.value}
        </button>
    )
}

/* Lesson 8: Tenzies: Styling held dice 👻*/
/* 
export default function Die(props) {
    const styles = props.isHeld ? { backgroundColor: '#59E391'} : null
    return (
        <button onClick={props.hold} style={styles}>{props.value}</button>
    )
}
 */
/* Lesson 5: Tenzies: Map array to Die components 👻*/
/* 
export default function Die(props) {
    return (
        <button>{props.value}</button>
    )
}
*/

/* Lesson 3: Tenzies: Die component 👻*/

/* 
export default function Die(props) {
    return (
        <button>1</button>
    )
} */