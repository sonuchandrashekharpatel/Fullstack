/* Chapter - 3: Routing */

/* Lesson 64: Section wrapup */


/* Lesson 63: Coding the Sad Path - Error handling */


/* Lesson 62: Coding the Sad Path - Loading state (new) */


/* Lesson 61: Quick update to our fetching code */

export default async function getVans() {
    const res = await         fetch("/api/vans")
    const data = await res.json()
    return data.vans
}