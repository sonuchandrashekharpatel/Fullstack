/* Chapter - 4: Persistence */

/* Lesson 10: Recap */


/* Lesson 9: Insert new data */
/**
Challenge:
* 1) Import the supabase client
* 2) Write the client code to insert the 'newDeal' object into the table. Only 
		 destructure 'error' and use .insert(), passing in our newDeal object
* 3) Below this, use an if statement to check if there's an error back from 
		 supabase. Log any error to the console and use the Error() constructor
		 to return an error object with an appropriate message
* 4) Save and use the form to add a new deal
		 Hint: Check the supabase-js docs for "Insert Data"
*/
import { useActionState } from "react"
import supabase from "./supabase-client.js"

function Form({ metrics }) {
  const [error, submitAction, isPending] = useActionState( 
    async (prevState, formData) => {

      // Action logic
      const newDeal = {
        name: formData.get('name'),
        value: formData.get('value')
      }
      console.log(newDeal)

      // Async Operation
      const { error } = await supabase
        .from("sales_deals")
        .insert(newDeal)

      if(error) {
        console.error("Failed to insert the deal", error)
        return new Error("Failed to insert  the new deal")
      }
      // Return error state
      return null
    }
    , null // initial State
  )

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
            aria-invalid= {error ? "true" : "false"}
            disabled= {isPending}
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
            aria-invalid= { error ? "true" : "false" }
            aria-label="Deal amount in dollars"
            disabled = {isPending}
          />
        </label>

        <button 
          type="submit" 
          disabled={isPending}
          aria-busy= {isPending}
        >
          { isPending ? "Adding..." : "Add Deal" }
        </button>
      </form>

      { error && (
        <div role="alert" className="error-message">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Form;


/* Lesson 8: New deal form */
/* import { useActionState } from "react"

function Form({ metrics }) {
  const [error, submitAction, isPending] = useActionState( 
    async (prevState, formData) => {
      // Action logic
      const newDeal = {
        name: formData.get('name'),
        value: formData.get('value')
      }
      console.log(newDeal)
      // Async Operation

      // Return error state
      return null
    }
    , null // initial State
  )

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
            aria-invalid= {error ? "true" : "false"}
            disabled= {isPending}
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
            aria-invalid= { error ? "true" : "false" }
            aria-label="Deal amount in dollars"
            disabled = {isPending}
          />
        </label>

        <button 
          type="submit" 
          disabled={isPending}
          aria-busy= {isPending}
        >
          { isPending ? "Adding..." : "Add Deal" }
        </button>
      </form>

      { error && (
        <div role="alert" className="error-message">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Form;
 */