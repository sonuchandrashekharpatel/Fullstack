/* Chapter - 4: Persistence */

/* Lesson 10: Recap */


/* Lesson 9: Insert new data */


/* Lesson 8: New deal form */


/* Lesson 7: Realtime subscription */


/* Lesson 6: Format data for chart rerec */


/* Lesson 5: Storing the data in state */


/* Lesson 4: Query with aggregate function */


/* Lesson 3: Query the database using supabase-js */


/* Lesson 2: Supabase project setup */

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
