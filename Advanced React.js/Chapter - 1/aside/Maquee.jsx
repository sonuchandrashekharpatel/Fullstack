/* Lesson 4: Aside - React Children */

export default function Marquee(props) {
    console.log("From Marquee")
    return (
        <div className="marquee">
            <h1>{props.children}</h1>
        </div>
    )
}