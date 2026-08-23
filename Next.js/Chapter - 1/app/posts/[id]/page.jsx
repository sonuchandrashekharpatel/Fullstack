/* Chapter - 1: Build a Next.js App */

/* Lesson 26: Section 1 Recap */


/* Lesson 25: Model Detail Page */
/* 
Dynamic Routes
. Create a folder whose name represents what you want to path to contain
  . e.g. id, slug, category, etc.
  
. Surround the folder name with square brackets (e.g. [id], [slug], [category])
. Use 'params' in the page component to access the dynamic route value
. 
*/

export default async function PostDetail({ params }) {
    const { id } = await params
    console.log(await params)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    console.log(post)
    return <h1>{post.title}</h1>
}