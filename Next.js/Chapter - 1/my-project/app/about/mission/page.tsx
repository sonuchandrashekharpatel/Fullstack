/* Chapter - 1: Build a Next.js App */

/* Lesson 26: Section 1 Recap */


/* Lesson 25: Model Detail Page */


/* Lesson 24: Dynamic Routes */


/* Lesson 23: Challenge - Create the Models List Page */


/* Lesson 22: Aside: Client vs. Server Components */


/* Lesson 21: Aside: TypeScript Organization in PrintForge */


/* Lesson 20: Challenge - Add Links to Navbar */


/* Lesson 19: Links in Next.js */


/* Lesson 18: Optimizing Images */


/* Lesson 17: Optimizing Fonts */


/* Lesson 16: Challenge - Add Header to PrintForge */


/* Lesson 15: Layouts part 2 */


/* Lesson 14: Layouts part 1 */


/* Lesson 13: Nested Routes */
/* 
File based Routing

Directory Structure             URL path/route      Description                         Full URL
app/page.jsx                    /                   Home Page                           example.com/
app/about/page.jsx              /about              About                               example.com/about
app/about/mission/page.jsx      /about/mission      Nested Route > Mission Page         example.com/about/mission
*/
/* 
Challenge
=========

Create a new nested route for "about/mission".
The new route should just render an `h1` that says "This is our mission at PrintForge..."
(or something along those lines).
*/

export default function  AboutMissionPage() {
    return <h1>This is the mission Page.</h1>
}