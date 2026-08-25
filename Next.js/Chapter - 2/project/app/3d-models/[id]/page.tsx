/* Chapter - 2: Rendering Strategies and More */

/* Lesson 24: Section 2 Recap */


/* Lesson 23: Tiny Library Solo */


/* Lesson 22: PrintForge - Upgrade to Next's Form Component */


/* Lesson 21: NextJS Form Component */


/* Lesson 20: PrintForge - Search Bar using native form */


/* Lesson 19: Cat Facts - searchParams pt. 2 */


/* Lesson 18: CatFacts - searchParams pt. 1 */


/* Lesson 17: HTML Form Submissions are Navigation Events */


/* Lesson 16: CatFacts: Structured Play */


/* Lesson 15: CatFacts - Add Fetch */


/* Lesson 14: Cat Facts - SSG Pt. 1 */


/* Lesson 13: Rendering Strategies Pt. 3 */


/* Lesson 12: Rendering Strategies pt 2 */


/* Lesson 11: Rendering Strategies Intro */


/* Lesson 10: Challenge: Category Pages */


/* Lesson 9: Challenge: Style Categories Link */


/* Lesson 8: Even More on Client Components */


/* Lesson 7: Challenge: Style Active Link */


/* Lesson 6: More about client components */


/* Lesson 5: Quick Link Refactors */


/* Lesson 4: Aside: usePathname */


/* Lesson 3: Add categories Nav Bar */


/* Lesson 2: Challenge: add categories page */


/* Lesson 1: Walking through refactors */


/* Lesson 0: Previous Chapter */
import type { ModelDetailPageProps } from "@/app/types";
import { FaRegHeart } from "react-icons/fa6"
import Pill from "@/app/components/Pill"
import placeholderImg from "@/public/placeholder.png"

import { getModelById } from "@/app/lib/models"
export default async function ModelDetailPage({ params }: ModelDetailPageProps) {
    const { id } = await params
    const model = await getModelById(id)

    return (
<div className="container max-w-6xl px-4 py-8 mx-auto">
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Section */}
        <figure className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
          <img
            src={placeholderImg.src}
            alt={`3D model of ${model.name}`}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </figure>

        {/* Content Section */}
        <section className="flex flex-col justify-center h-full">
          <div
            className="flex items-center mb-2 text-2xl text-gray-600"
            role="status"
            aria-label="Likes count"
          >
            <FaRegHeart
              className="w-5 h-5 mr-2"
              aria-hidden="true"
            />
            <span className="font-light" aria-label={`${model.likes} likes`}>{model.likes}</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold">{model.name}</h1>

          <Pill
            className="mb-6 w-fit"
            role="status"
            aria-label="Category"
          >
            {model.category}
          </Pill>

          <div className="mb-6 prose prose-lg max-w-none">
            <p className="leading-relaxed text-gray-700">
              {model.description}
            </p>
          </div>

          <footer className="text-sm text-gray-500">
            <time dateTime={model.dateAdded}>
              Added on {new Date(model.dateAdded).toLocaleDateString()}
            </time>
          </footer>
        </section>
      </article>
    </div>
    )
}