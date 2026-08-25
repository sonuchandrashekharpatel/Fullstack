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

import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import PrintforgeLogoIcon from "@/public/printforge-logo-icon.svg"
import PrintforgeLogo from "@/public/printforge-logo.svg"
import  Link from "next/link"
import { RootLayoutProps } from "./types";


const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({ children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative cursor-pointer">
              <Link href="/">
                <img
                  src={PrintforgeLogo.src}
                  alt="PrintForge Logo"
                  className="w-50 h-auto hidden md:block"
                />
                <img
                  src={PrintforgeLogoIcon.src}
                  alt="PrintForge Logo"
                  className="w-10 h-auto block md:hidden"
                />
              </Link>
            </div>
            <ul className="flex items-center gap-2.5">
              <Link href="/3d-models">3D Models</Link>
              <Link href="/about">About</Link>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
