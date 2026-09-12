/* Chapter - 3: Making Data Flow */


/* Lesson 71: Section 3 Outro */


/* Lesson 70: Final Pagination Challenge */


/* Lesson 69: Final UX Polish Challenge Pack */


/* Lesson 68: Applying Edge Case Handling to Category Pages */


/* Lesson 67: Debug the Redirect Bug */


/* Lesson 66: Handling Invalid Sort Params */
/*
CHALLENGE - Handle invalid sort params

1. In `lib/utils`, store the raw sort value from `searchParams.sort`
   - Make sure it is lowercased if it exists

2. Set the final `sort` value so that:
   - if no sort param was provided, sort defaults to an empty string
   - if the sort param is one of the valid options, use that value
   - otherwise, sort becomes null

3. The valid sort options are:
   - alpha
   - popular
   - recent

4. Back in `3d-models/page.tsx`, update the existing redirect check
   so that invalid sort values also redirect back to:
   /3d-models

5. Test the URL:
   /3d-models?sort=banana
*/ 

export async function getQueryParams(searchParams: Promise<{
    search?: string
    sort?: string
    page?: string
}>) {
    const rawPage = (await searchParams).page
    let page
    if(rawPage === undefined) page = 1
    else if(isNaN(Number(rawPage))) page = 0
    else page = Number(rawPage)
    
    const rawSort = (await searchParams).sort?.toLowerCase()
    let sort
    if(!rawSort) sort = ''
    else if(rawSort === 'alpha' || rawSort === 'recent' || rawSort === 'popular') sort = rawSort
    else sort = null

    return {
        search: (await searchParams).search?.toLowerCase().trim() || '',
        sort,
        page
    }

}


/* Lesson 65: Handling Invalid Page Params */
/* 
export async function getQueryParams(searchParams: Promise<{
    search?: string
    sort?: string
    page?: string
}>) {
    const page = (await searchParams).page
    
    return {
        search: (await searchParams).search?.toLowerCase().trim() || '',
        sort: (await searchParams).sort?.toLowerCase() || '',
        page: page === undefined ? 1 : isNaN(Number(page)) ? 0 : Number(page)
    }

}
 */
/* Lesson 64: Handling Out-of-Bounds Page Params */


/* Lesson 63: Polishing Edge Cases and UX */


/* Lesson 62: Refactoring Query Param Logic */

/*
CHALLENGE - Refactor our query param logic
1. The `getQueryParams()` function should accept an object with:
   - search
   - sort
   - page

2. Inside the function, clean up those values:
   - search should default to an empty string
   - sort should default to an empty string
   - page should become a number and default to 1

3. Return search, sort, and page as an object.

4. Back in both page files:
   - import getQueryParams
   - await searchParams once
   - pass the result into getQueryParams()
   - destructure search, sort, and page from the result

A lot of this is just copying and pasting code from both page.tsx files!
*/

/* 
export async function getQueryParams(searchParams: Promise<{
    search?: string
    sort?: string
    page?: string
}>) {
    
    return {
        search: (await searchParams).search?.toLowerCase().trim() || '',
        sort: (await searchParams).sort?.toLowerCase() || '',
        page: Number((await searchParams).page) || 1
    }

} */