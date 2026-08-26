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

export type Category = {
    displayName: string
    slug: string
}

export type CategoriesData = {
    categories: Category[]
}

// Page Types
export type LayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type ModelDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

export type CategoryPageProps = {
    params: Promise<{
        categoryName: string
    }>
}

// Components Types
export type ModelCardProps = {
    model: Model
}

export type ModelsGridProps = {
    title: string
    models: Model[]
}

export type PillProps = {
    children: ReactNode
    className?: string
    role?: string
}

export type NavLinkProps = {
    href: string
    children: ReactNode,
    isActive: boolean
}


/* Lesson 6: More about client components */


/* Lesson 5: Quick Link Refactors */
/* import type { ReactNode } from "react"

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

export type Category = {
    displayName: string
    slug: string
}

export type CategoriesData = {
    categories: Category[]
}

// Page Types
export type LayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type ModelDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

export type CategoryPageProps = {
    params: Promise<{
        categoryName: string
    }>
}

// Components Types
export type ModelCardProps = {
    model: Model
}

export type ModelsGridProps = {
    title: string
    models: Model[]
}

export type PillProps = {
    children: ReactNode
    className?: string
    role?: string
}

export type NavLinkProps = {
    href: string
    children: ReactNode
}
 */
/* Lesson 4: Aside: usePathname */


/* Lesson 3: Add categories Nav Bar */


/* Lesson 2: Challenge: add categories page */


/* Lesson 1: Walking through refactors */
/* import type { ReactNode } from "react"

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

export type Category = {
    displayName: string
    slug: string
}

export type CategoriesData = {
    categories: Category[]
}

// Page Types
export type LayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type ModelDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

export type CategoryPageProps = {
    params: Promise<{
        categoryName: string
    }>
}

// Components Types
export type ModelCardProps = {
    model: Model
}

export type ModelsGridProps = {
    title: string
    models: Model[]
}

export type PillProps = {
    children: ReactNode
    className?: string
    role?: string
}
 */
/* Lesson 0: Previous Chapter */

/* 
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
 */