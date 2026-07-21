


/* Lesson 12: Challenge - Button w/ Variants 👻*/


/* Lesson 11: Button - fix className issue 👻*/


/* Lesson 10: Button - size prop 👻👻*/
/**
 * Challenge: accept the `size` prop and set the `className` of the
 * <button> to:
 * 
 * "button-small" if `size` is "sm"
 * "button-large" if `size` is "lg"
 * 
 * Note: don't try to manually add a `className` to the Button
 * instance in index.js yet. (DO add `className` to this file
 * as part of the challenge, though.)
 */

export default function Button({size, children, ...rest}) {
    const className = size === "sm" ? "button-small" : size === "lg" && "button-large"
    console.log(size, className)

    return <button {...rest} className={className}>{children}</button>
}

/* Lesson 9: Aside - Destructuring props */
/* 
export default function Button({variant, children, ...rest}) {
    console.log(variant)
    console.log(rest)
    
    return <button {...rest}>{children}</button>
} */


/* Lesson 8: Aside - props spreading */
/* 
export default function Button(props) {

    return <button {...props}>{props.children}</button>
}
 */
/* Lesson 7: Challenge - add onClick event listener 👻*/
/* 
export default function Button(props) {
    return <button onClick={props.onClick}>{props.children}</button>
} */

/* Lesson 6: Button - More Complex React Children 👻*/



/* Lesson 5: Challenge - Button w/ Children 👻*/
/* 
export default function Button(props) {
    return <button>{props.children}</button>
} */


/* Lesson 4: Aside - React Children */


/* Lesson 3: Aside - children in HTML */


/* Lesson 2: Button - props review challenge 👻*/
/* 
export default function Button(props) {
    return <button>{props.text}</button>
}
 */