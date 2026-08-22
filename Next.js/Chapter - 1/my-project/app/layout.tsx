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
/* 
Image Optimization
1. Auto resize & convert to more efficient formats
2. Lazy loading - only load when moving into viewport
3. Prevent Layout Shift
*/
/**
 * Challenge: update the home page and navbar images to use imported
 * static assets like you see above 👆
 
*/
import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import PrintforgeLogoIcon from "@/public/printforge-logo-icon.svg"
import PrintforgeLogo from "@/public/printforge-logo.svg"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
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
            </div>
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
              <a href="/about">About</a>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

/* Lesson 17: Optimizing Fonts */
/* 
Font Optimization
. Eliminates Layout Shifts (Zero CLS)
. Zero External Network Request (Automatic Self-Hosting)
. Subsetting & Minimized Payload
*/
/* 
import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              <img
                src="/printforge-logo.svg"
                alt="PrintForge Logo"
                className="w-50 h-auto hidden md:block"
              />
              <img
                src="/printforge-logo-icon.svg"
                alt="PrintForge Logo"
                className="w-10 h-auto block md:hidden"
              />
            </div>
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
              <p>About</p>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
 */

/* Lesson 16: Challenge - Add Header to PrintForge */
/**
 * Challenge: Add the header to the project
 * 
 * Hint: for the printforge logo(s), use a string src on the `<img />`:
 * src="/printforge-logo.svg" (Desktop logo)
 * src="/printforge-logo-icon.svg" (Mobile logo)
 */

/**
 * Challenge: Add the header to the project
 * 
 * Hint: for the printforge logo(s), use a string src on the `<img />`:
 * src="/printforge-logo.svg" (Desktop logo)
 * src="/printforge-logo-icon.svg" (Mobile logo)
*/
/* 
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
              <img
                src="/printforge-logo.svg"
                alt="PrintForge Logo"
                className="w-50 h-auto hidden md:block"
              />
              <img
                src="/printforge-logo-icon.svg"
                alt="PrintForge Logo"
                className="w-10 h-auto block md:hidden"
              />
            </div>
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
              <p>About</p>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
 */
/* 
import './globals.css'
export default function RootLayout({children}:Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="flex justify-between p-4">

      <img className="w-10 sm:hidden" src="/printforge-logo-icon.svg"/>
      <img className="w-30 hidden sm:inline" src="/printforge-logo.svg"/>
      <nav className="flex gap-5">
        <a href="#">3D Models</a>
        <a href="#">About</a>
      </nav>
    </header>
  )
}
 */
/* Lesson 15: Layouts part 2 */

/* 
import './globals.css'
export default function RootLayout({children}:Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}

function Header() {
  return (
    <header>

      <img src=""/>
      <nav>
        <a href="#">3D Models</a>
        <a href="#">About</a>
      </nav>
    </header>
  )
}
 */
/* Lesson 14: Layouts part 1 */


/* Lesson 13: Nested Routes */


/* Lesson 12: Challenge - PrintForge About Page */


/* Lesson 11: Challenge - PrintForge Home Page */


/* Lesson 10: PrintForge Challenge Setup */
/* import './globals.css'
export default function RootLayout({children}:Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
 */
/* Lesson 9: create-next-app files walkthrough */

/* 
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
 */