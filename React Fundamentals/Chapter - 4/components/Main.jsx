/* Chapter - 4: Side Effect */

/* Lesson 22: Section 4 Outro */


/* Lesson 21: scrollIntoView() iFrame bug fix 🐜 */


/* Lesson 20: useEffect practice: scrollIntoView() 👻👻*/


/* Lesson 19: Sneak peak: refs */


/* Lesson 18: Meme Generator - Get random meme 👻*/
/**
 * Challenge: Get a random image from the array of
 * allMemes when the user clicks the button. Once
 * you've gotten a random image from the array, make
 * sure to write the code that will display that
 * random meme image to the page.
*/

import { useState, useEffect } from "react"

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleClick() {
        const randomImageUrl = allMemes[Math.floor(Math.random() * allMemes.length)].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: randomImageUrl
        }))

    }

    
    function handleChange(event) {
        const {name, value} = event.currentTarget

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl}/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}


/* Lesson 17: useEffect cleanup function */


/* Lesson 16: State and Effect practices 👻👻*/


/* Lesson 15: Meme Generator - Fetch Memes 👻*/

/**
 * Challenge:
 * Get an array of memes from the imgflip API as soon as
 * this component renders for the first time.
 * Check the imgflip documentation for the correct URL.
 * Save the array of memes (not the whole response
 * data) to state. (For this app, we'll randomly choose
 * one of the memes from this array when the user clicks
 * the "Get a new meme image" button, but we'll do that in
 * a separate challenge.)
 * 
 * Hint: for now, don't try to use an async/await function.
 * Instead, use `.then()` to resolve the promises
 * from using `fetch`. We'll learn why after this challenge.
*/
/* 
import { useState, useEffect } from "react"

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    function handleChange(event) {
        const {name, value} = event.currentTarget

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl}/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}
 */
/* Lesson 14: useEffect practice! 👻👻*/


/* Lesson 13: useEffect quiz!👻 */


/* Lesson 12: useEffect empty dependencies array */


/* Lesson 11: useEffect() Dependencies array 👻👻👻*/


/* Lesson 10: useEffect() syntax and default behavior */


/* Lesson 9: Intro to useEffect */


/* Lesson 8: Fetching data in React 👻👻*/



/* Lesson 7: Functional programming in React */


/* Lesson 6: Meme Generator - Planning data fetch 👻*/


/* Lesson 5: Meme Generator - Controlled Components - part 2 */
/* 
import { useState } from "react"
export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const {name, value} = event.currentTarget

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl}/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}
 */

/* Lesson 4: Meme Generator - Controlled Components - part 1 👻*/
/**
 * Challenge: update the topText value in the meme state
 * object every time the topText input box is changed
 * 
 * Note: don't worry about bottomText at this point.
 */

/* 
import { useState } from "react"
export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const {value} = event.currentTarget

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                topText: value
            }
        })
    }
    
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl}/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}
 */

/* Lesson 3: Meme Generator State 👻*/
/**
 * Challenge: move the hardcoded meme info into React
 * state. Use an object with `topText`, `bottomText`,
 * and `imageUrl` properties, and set the initial values to
 * the ones hardcoded below.
*/

/* 
import { useState } from "react"
export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl}/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}
 */

/* Lesson 2: Meme Generator Starting Point 👻*/
/* 
export default function Main() {
    return (
<main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src="http://i.imgflip.com/1bij.jpg" />
                <span className="top">One does not simply</span>
                <span className="bottom">Walk into Mordor</span>
            </div>
        </main>
    )
} */