/* Chapter - 1: Build a Next.js App */

/* Lesson 26: Section 1 Recap */


/* Lesson 25: Model Detail Page */


/* Lesson 24: Dynamic Routes */
/* 
Dynamic Routes
. Create a folder whose name represents what you want to path to contain
  . e.g. id, slug, category, etc.
  
. Surround the folder name with square brackets (e.g. [id], [slug], [category])
. Use 'params' in the page component to access the dynamic route value
. 
*/
  /**
   * Challenge:
   * Add a Link to each blog post (surrounding the `h2` elements) that leads
   * to {`/posts/${post.id}`}
   * 
   * Note: these will lead to non-existing pages. We'll fix that next ⏳
   */
import Link from "next/link"

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  return (
    <div className="posts-container">
      <h1>Blog Posts</h1>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


/* Lesson 23: Challenge - Create the Models List Page */

/* Lesson 22: Aside: Client vs. Server Components */
/* 
Client Component
. Code is only run in the browser.
. Must start fetch request after the component.
. useEffect and useState are needed to manage the async nature of fetching.

Server component
. Code is only run on the server
. Data is fetched before rendering.
. No need for useEffect and useState just await the data and use it in your markup!

*/
/* 
export default async function PostPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return(
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    )
} */