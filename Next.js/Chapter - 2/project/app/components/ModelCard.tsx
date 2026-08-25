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


import Link from "next/link"
import { FaRegHeart } from "react-icons/fa6"
import Pill from "./Pill"
import { ModelCardProps } from "@/app/types"
import placeholderImg from "@/public/placeholder.png"

export default function ModelCard({ model }: ModelCardProps) {
    return (
        <Link
            href={`/3d-models/${model.id}`}
            className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.75 transition-all"
            aria-labelledby={`model-${model.id}-title`}
        >
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg" role="article">
                <div className="relative aspect-square">
                    <img
                        src={placeholderImg.src}
                        alt={model.name}
                        className="absolute inset-0 object-cover w-full h-full"
                    />
                </div>
                <div className="p-4">
                    <div className="flex justify-between mb-2 min-h-14">
                        <h2 id={`model-${model.id}-title`} className="text-xl font-semibold text-gray-800 line-clamp-2">
                            {model.name}
                        </h2>
                    </div>
                    <p className="text-gray-800 text-sm line-clamp-2 min-h-10 leading-5">
                        {model.description}
                    </p>
                    <div className="mt-2">
                        <Pill>{model.category}</Pill>
                    </div>
                    <div className="flex items-center mt-2 text-gray-600" aria-label={`${model.likes} likes`}>
                        <FaRegHeart className="w-5 h-5 mr-1 text-gray-400" aria-hidden="true" />
                        <span>{model.likes}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
