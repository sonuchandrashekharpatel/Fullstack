/* Chapter - 1: Build a Next.js App */

/* Lesson 26: Section 1 Recap */


/* Lesson 25: Model Detail Page */


/* Lesson 24: Dynamic Routes */


/* Lesson 23: Challenge - Create the Models List Page */


/* Lesson 22: Aside: Client vs. Server Components */
/* 
Client components 
. Code is only ru
*/

/* Lesson 21: Aside: TypeScript Organization in PrintForge */


/* Lesson 20: Challenge - Add Links to Navbar */


/* Lesson 19: Links in Next.js */
/* 
Link component
. Enables client-side navigation
. Prefetches when link preview
. Maintain React State between navigations

*/

/* Lesson 18: Optimizing Images */
import HeroImage from "@/public/hero-image.png"

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
        <div className="flex-1 space-y-6">
          <p className="hidden text-sm text-gray-600 uppercase md:block">
            Your go-to platform for 3D printing files
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Discover what's possible with 3D Printing
          </h1>
          <p className="text-lg text-gray-600">
            Join our community of creators and explore a vast
            library of user-submitted models.
          </p>
 
          <div className="flex gap-4">
            <a
              href="/3d-models"
              className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
            >
              Browse Models
            </a>
          </div>
        </div>
        <img src={HeroImage.src} width={350} />
      </section>
    </main>
  )
}


/* Lesson 17: Optimizing Fonts */


/* Lesson 16: Challenge - Add Header to PrintForge */


/* Lesson 15: Layouts part 2 */


/* Lesson 14: Layouts part 1 */
/* 
Layouts and Pages
. Pages - UI that is specific to a single route
. Layout - UI that is shared between multiple routes/paths
*/

/* Lesson 13: Nested Routes */


/* Lesson 12: Challenge - PrintForge About Page */


/* Lesson 11: Challenge - PrintForge Home Page */
/* export default function Home() {
  return (
    <main>
      <h1>Discover what's possible with 3D printing</h1>
      <p>Join our community of creators and explore a vast library of user-submitted models.</p>
      <button>Browse Models</button>
      <img src="/hero-image.png" alt="" />
    </main>
  )
} */

/* Lesson 10: PrintForge Challenge Setup */


/* Lesson 9: create-next-app files walkthrough */
/* export default function Home() {
  return <h1>This is the Home Page.</h1>
} */

/* Lesson 8: Scrimba's "Runner" */
/* 
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Launch my site! 🚀
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
 */