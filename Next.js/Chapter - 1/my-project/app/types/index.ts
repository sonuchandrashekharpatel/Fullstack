/* Chapter - 1: Build a Next.js App */

/* Lesson 26: Section 1 Recap */


/* Lesson 25: Model Detail Page */
import type { ReactNode } from "react"

// Data Types
export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

// Page Types
export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type ModelDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

// Components Types
export type ModelCardProps = {
    model: Model
}

export type PillProps = {
    children: ReactNode
    className?: string
    role?: string
}

/* Lesson 24: Dynamic Routes */


/* Lesson 23: Challenge - Create the Models List Page */
/* export type RootLayoutProps = Readonly<{
    children: React.ReactNode
}>

export type Model = {
    id: number
    name: string
    description: string
    likes: number
    image: string
    category: string
    dateAdded: string
}
 */
/* Lesson 22: Aside: Client vs. Server Components */


/* Lesson 21: Aside: TypeScript Organization in PrintForge */
/* export type RootLayoutProps = Readonly<{
    children: React.ReactNode
}> */