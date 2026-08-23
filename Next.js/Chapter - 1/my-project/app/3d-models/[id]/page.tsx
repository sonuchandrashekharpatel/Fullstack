/* Chapter - 1: Build a Next.js App */

/* Lesson 26: Section 1 Recap */


/* Lesson 25: Model Detail Page */
/**
 * Challenge: 
 * Import and use the `getModelById()` function from 
 * "@/app/lib/models" and use it to get the details for
 * this specific dynamic page's 3d model.
 * 
 * Note that `getModelById()` is an async function.
 * 
 * Then display the relevant information about the model,
 * using the Figma design as a guide if you'd like.
*/

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