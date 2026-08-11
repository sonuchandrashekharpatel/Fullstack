/* Chapter - 5: Authentication */

/* Lesson 36: Recap */


/* Lesson 35: Account type in Header */


/* Lesson 34: Update fetchMetrics - part 2 */


/* Lesson 33: Update fetchMetrics - part 1 */


/* Lesson 32: Update new deal form - part 2 */


/* Lesson 31: Update new deal form - part 1 */


/* Lesson 30: Fetch all profiles - part 2 */


/* Lesson 29: Fetch all profiles - part 1 */


/* Lesson 28: Refactor deals table - part 3 */


/* Lesson 27: Refactor deals table - part 2 */


/* Lesson 26: Refactor deals table - part 1 */


/* Lesson 25: Trigger */


/* Lesson 24: Sign up expansion */


/* Lesson 23: User profiles table */


/* Lesson 22: Database refactor - part 2 */


/* Lesson 21: Database refactor - part 1 */


/* Lesson 20: Sign up */


/* Lesson 19: Protected Route */


/* Lesson 18: Home redirect */


/* Lesson 17: RLS: Authenticated users only */


/* Lesson 16: Row Level Security */


/* Lesson 15: Navigate after sign out */


/* Lesson 14: Sign out */


/* Lesson 13: Navigate & Link */


/* Lesson 12: Sign in auth function - part 2 */


/* Lesson 11: Sign in auth function - part 1 */


/* Lesson 10: Sign in component - part 2 */


/* Lesson 9: Sign in component - part 1 */


/* Lesson 8: Add user to Auth.Users */


/* Lesson 7: JWTs (authenticated) */


/* Lesson 6: JSON Web Tokens (anon) */


/* Lesson 5: Auth Session state - part 2 */


/* Lesson 4: Auth Session state - part 1 */


/* Lesson 3: Context API */


/* Lesson 2: Router setup */

function Header() {
  return (
    <>
      <header role="banner" aria-label="Dashboard header">
        <h1>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '8px' }}
            aria-hidden="true"
            role="img"
            aria-label="Dashboard icon"
          >
            <path
              d="M12 2v8M12 14v8M4.93 4.93l5.66 5.66M13.41 13.41l5.66 5.66M2 12h8M14 12h8M4.93 19.07l5.66-5.66M13.41 10.59l5.66-5.66"
              stroke="#29d952"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span>Sales Team Dashboard</span>
        </h1>
      </header>
    </>
  );
};

export default Header;