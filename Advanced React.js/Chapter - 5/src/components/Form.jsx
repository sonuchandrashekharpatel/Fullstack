/* Chapter - 5: Authentication */

/* Lesson 36: Recap */


/* Lesson 35: Account type in Header */


/* Lesson 34: Update fetchMetrics - part 2 */


/* Lesson 33: Update fetchMetrics - part 1 */

/* Lesson 32: Update new deal form - part 2 */
/**
Challenge:
* 1) Remove the redundant 'metrics' prop being passed to the 'Form' component
* 2) Save and test the form's conditional rendering by logging in as 'admin' and 'rep' users
*/
/* 
Refactor
  - user_profiles table & RLS ✔️
  - signUp component & signUpNewUser ✔️
  - trigger ✔️
  - sales_deals table & RLS ✔️
  - fetch all user_profiles ✔️
  - form component ✔️
  - fetchMetrics
*/
import { useActionState } from 'react';
import supabase from '../supabase-client';
import { useAuth } from "../context/AuthContext"

function Form() {

  const { users, session } = useAuth()

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const submittedName = formData.get('name')
      const user = users.find(u => u.name === submittedName)

      const newDeal = {
        user_id: user.id,
        value: formData.get('value'),
      };
      console.log(newDeal);
      const { error } = await supabase.from('sales_deals').insert(newDeal);
      if (error) {
        console.error('Error adding deal: ', error.message);
        return new Error('Failed to add deal');
      }
      return null;
    },
    null 
  );

  const currentUser = users.find(user => user.id === session?.user?.id)
  console.log(currentUser)
  const generateOptions = () => {
    return users.map((user) => (
      <option key={user.name} value={user.name}>
        {user.name}
      </option>
    ));
  };

  return (
    <div className="add-form-container">
      <form
        action={submitAction}
        aria-label="Add new sales deal"
        aria-describedby="form-description"
      >
        <div id="form-description" className="sr-only">
          Use this form to add a new sales deal. Select a sales rep and enter
          the amount.
        </div>

        { currentUser?.account_type === 'rep' ? (
            
        <label htmlFor="deal-name">
          Name:
          <input
            id="deal-name"
            type="text"
            name="name"
            value={currentUser?.name || '' }
            readOnly
            className='rep-name-input'
            aria-label= 'Sales representative name'
            aria-readonly='true'
          >
          </input>
        </label>
          ) : (
            
        <label htmlFor="deal-name">
          Name:
          <select
            id="deal-name"
            name="name"
            defaultValue={users?.[0]?.name || ''}
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            disabled={isPending}
          >
            {generateOptions()}
          </select>
        </label>
          ) 
        }

        <label htmlFor="deal-value">
          Amount: $
          <input
            id="deal-value"
            type="number"
            name="value"
            defaultValue={0}
            className="amount-input"
            min="0"
            step="10"
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            aria-label="Deal amount in dollars"
            disabled={isPending}
          />
        </label>

        <button
          type="submit"
          disabled={isPending}
          aria-busy={isPending}
        >
          {isPending ? 'Adding...' : "Add Deal"}
        </button>
      </form>

      {error && (
        <div role='alert' className="error-message">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Form;

/* Lesson 31: Update new deal form - part 1 */
/**
  Challenge:
  * 1) Access the fetched user profiles through context in 'Form.jsx'
  * 2) Refactor the 'generateOptions' function to map through the 'users' array
  * 3) Save and test by logging in and using the form dropdown
       Hint: which column from the 'user_profiles' table would make the most 
       reliable unique identifier for the option's key prop?
  */
/**
Challenge:
* 1) Delete all of the records with the old, 'name' and 'value', format in the 
     'sales_deals' table
* 2) Add new deals with the new, 'user_id' and 'value', format by logging in and 
     using the form. Verify the deals are being saved via your Supabase project
* 3) Test that users with account type 'rep' can only add deals for their own 
     name
*/
/* 
import { useActionState } from 'react';
import supabase from '../supabase-client';
import { useAuth } from "../context/AuthContext"

function Form({ metrics }) {

  const { users } = useAuth()

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const submittedName = formData.get('name')
      const user = users.find(u => u.name === submittedName)

      const newDeal = {
        user_id: user.id,
        value: formData.get('value'),
      };
      console.log(newDeal);
      const { error } = await supabase.from('sales_deals').insert(newDeal);
      if (error) {
        console.error('Error adding deal: ', error.message);
        return new Error('Failed to add deal');
      }
      return null;
    },
    null 
  );

  const generateOptions = () => {
    return users.map((user) => (
      <option key={user.name} value={user.name}>
        {user.name}
      </option>
    ));
  };

  return (
    <div className="add-form-container">
      <form
        action={submitAction}
        aria-label="Add new sales deal"
        aria-describedby="form-description"
      >
        <div id="form-description" className="sr-only">
          Use this form to add a new sales deal. Select a sales rep and enter
          the amount.
        </div>

        <label htmlFor="deal-name">
          Name:
          <select
            id="deal-name"
            name="name"
            defaultValue={users?.[0]?.name || ''}
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            disabled={isPending}
          >
            {generateOptions()}
          </select>
        </label>

        <label htmlFor="deal-value">
          Amount: $
          <input
            id="deal-value"
            type="number"
            name="value"
            defaultValue={0}
            className="amount-input"
            min="0"
            step="10"
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            aria-label="Deal amount in dollars"
            disabled={isPending}
          />
        </label>

        <button
          type="submit"
          disabled={isPending}
          aria-busy={isPending}
        >
          {isPending ? 'Adding...' : "Add Deal"}
        </button>
      </form>

      {error && (
        <div role='alert' className="error-message">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Form; */

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
/* import { useActionState } from 'react';
import supabase from '../supabase-client';

function Form({ metrics }) {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const newDeal = {
        name: formData.get('name'),
        value: formData.get('value'),
      };
      console.log(newDeal);
      const { error } = await supabase.from('sales_deals').insert(newDeal);
      if (error) {
        console.error('Error adding deal: ', error.message);
        return new Error('Failed to add deal');
      }

      return null;
    },
    null 
  );

  const generateOptions = () => {
    return metrics.map((metric) => (
      <option key={metric.name} value={metric.name}>
        {metric.name}
      </option>
    ));
  };

  return (
    <div className="add-form-container">
      <form
        action={submitAction}
        aria-label="Add new sales deal"
        aria-describedby="form-description"
      >
        <div id="form-description" className="sr-only">
          Use this form to add a new sales deal. Select a sales rep and enter
          the amount.
        </div>

        <label htmlFor="deal-name">
          Name:
          <select
            id="deal-name"
            name="name"
            defaultValue={metrics?.[0]?.name || ''}
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            disabled={isPending}
          >
            {generateOptions()}
          </select>
        </label>

        <label htmlFor="deal-value">
          Amount: $
          <input
            id="deal-value"
            type="number"
            name="value"
            defaultValue={0}
            className="amount-input"
            min="0"
            step="10"
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            aria-label="Deal amount in dollars"
            disabled={isPending}
          />
        </label>

        <button
          type="submit"
          disabled={isPending}
          aria-busy={isPending}
        >
          {isPending ? 'Adding...' : "Add Deal"}
        </button>
      </form>

      {error && (
        <div role='alert' className="error-message">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Form;
 */