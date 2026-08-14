/* Chapter - 5: Authentication */

/* Lesson 36: Recap */


/* Lesson 35: Account type in Header */


/* Lesson 34: Update fetchMetrics - part 2 */

-- Challenge:
-- 1) Write an updated SQL query below
-- 2) Start by selecting FROM the 'sales_deals' table since we need to sum the 
--    values
-- 3) Join with 'user_profiles' to get the names
-- 4) Your query should show each rep's name and their total sales value
-- 5) Be explicit (table_name.column)

SELECT
    SUM(sales_deals.value),
    user_profiles.name
FROM 
    sales_deals
INNER JOIN user_profiles ON sales_deals.user_id = user_profiles.id
GROUP BY user_profiles.name

/* Lesson 33: Update fetchMetrics - part 1 */
/* 
Update SQL query
- SELECT
  - SUM of value from sales_table
    ( GROUP by...)
  - name from user_profiles
  - INNER JOIN sales_deals.user_id with user_profiles.id
*/

-- I wanted to join "courses" table (teacher) with "teachers" table (name)
-- We don't need to specify which table if it's unique column name

SELECT
    title,
    location
FROM courses
INNER JOIN teachers ON courses.teacher = teachers.name

-- previous query
SELECT
    name
    SUM(value)
FROM 
    sales_deals
GROUP BY 
    name;
/* Lesson 32: Update new deal form - part 2 */


/* Lesson 31: Update new deal form - part 1 */


/* Lesson 30: Fetch all profiles - part 2 */


/* Lesson 29: Fetch all profiles - part 1 */


/* Lesson 28: Refactor deals table - part 3 */

CREATE policy "Admin to add anyone's deals"
ON public.sales_deals
FOR INSERT
TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1 FROM user_profiles
        WHERE user_profiles.id = auth.uid() 
        AND user_profiles.account_type = 'admin'
    )
)

/* Lesson 27: Refactor deals table - part 2 */
-- How to check if a row exists

EXISTS (
    SELECT 1 FROM extended_family
    WHERE extended_family.shoe_size = 10
    AND extended_family.fav_color = "red"
)

-- Policy for reps to only add their own deals
CREATE policy "Reps can only add their own deals"
ON public.sales_deals
FOR insert
TO authenticated 
WITH CHECK (
    auth.uid = user_id
    AND EXISTS (
        SELECT 1 FROM user_profiles
        WHERE user_profiles.id = auth.uid()
        AND user_profiles.account_type = 'rep'
    )
)

/* Lesson 26: Refactor deals table - part 1 */


/* Lesson 25: Trigger */

-- trigger function
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    insert into public.user_profiles(id, name, account_type)
    values (
        new.id,
        new.raw_user_meta_data ->> 'name'
        new.raw_user_meta_data ->> 'account_type'
    );
    return new;
end;
$$;

-- trigger object
create trigger on_auth_user_created
    after insert on auth.users
    for each row
    execute procedure public.handle_new_user();