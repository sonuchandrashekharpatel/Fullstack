/* Chapter - 3: Routing */

/* Lesson 64: Section wrapup */


/* Lesson 63: Coding the Sad Path - Error handling */

export default async function getVans() {
    const res = await fetch("/api/vans")
    console.log(res.ok)
    if(!res.ok) {
        console.log("There is an error.")
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

/* Lesson 62: Coding the Sad Path - Loading state (new) */


/* Lesson 61: Quick update to our fetching code */
/* 
export default async function getVans() {
    const res = await fetch("/api/vans")
    const data = await res.json()
    return data.vans
} */