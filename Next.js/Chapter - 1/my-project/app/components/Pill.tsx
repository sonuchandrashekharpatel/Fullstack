/* Chapter - 1: Build a Next.js App */

/* Lesson 26: Section 1 Recap */


/* Lesson 25: Model Detail Page */

import { PillProps } from "@/app/types";

export default function Pill({ children, className = "" }: PillProps) {
    return (
        <span
            className={`inline-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-800 ${className}`}
        >
            {children}
        </span>
    )
}
