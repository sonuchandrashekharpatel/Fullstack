/**
 * Challenge:
 * Raise state up a level and pass it down to both the
 * Header and Body components through props.
 */

import React from "react"
import avatar from ".././images/user.png"

export default function Header(props) {
    

    return (
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}
