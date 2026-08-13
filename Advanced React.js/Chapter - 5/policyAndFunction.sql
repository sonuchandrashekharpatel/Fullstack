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