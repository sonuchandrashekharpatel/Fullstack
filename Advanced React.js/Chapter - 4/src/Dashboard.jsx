/* Chapter - 4: Persistence */

/* Lesson 10: Recap */


/* Lesson 9: Insert new data */


/* Lesson 8: New deal form */

import supabase from './supabase-client.js'
import React from 'react'
import { Chart } from "react-charts"
import Form from './Form'

function Dashboard() {

    const [metrics, setMetrics] = React.useState([])
    React.useEffect(() => {
        fetchMetrics()

        const channel = supabase
        .channel('deal-changes')
        .on(
            'postgres_changes',
            { 
                event: '*', 
                schema: 'public', 
                table: 'sales_deals' 
            },
            (payload) => {
                // Action
                // console.log(payload.new)
                fetchMetrics()
            })
        .subscribe();

        // Clean up subscription
        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    async function fetchMetrics() {
        try {
            const { data, error } = await supabase
            .from('sales_deals')
            .select(
                `
                name,
                value.sum()
                `,
            )
            if(error) {
                throw err
            } else {
                setMetrics(data)
            }
        } catch(err) {
            console.log("ERROR: ", err)
        }
    }

  const chartData = [
    {
      data: metrics.map((m) => ({
        primary: m.name,
        secondary: m.sum,
      })),
    },
  ];

  const primaryAxis = {
    getValue: (d) => d.primary,
    scaleType: 'band',
    padding: 0.2,
    position: 'bottom',
  };

  const secondaryAxes = [
    {
      getValue: (d) => d.secondary,
      scaleType: 'linear',
      min: 0,
      max: y_max(),
      padding: {
        top: 20,
        bottom: 40,
      },
    },
  ];

  function y_max() {
    if (metrics.length > 0) {
      const maxSum = Math.max(...metrics.map((m) => m.sum));
      return maxSum + 2000;
    }
    return 5000; 
  }


    return (
        <div className="dashboard-wrapper">
        <div className="chart-container">
            <h2>Total Sales This Quarter ($)</h2>
            <div style={{ flex: 1 }}>
            <Chart
                options={{
                data: chartData,
                primaryAxis,
                secondaryAxes,
                type: 'bar',
                defaultColors: ['#58d675'],
                tooltip: {
                    show: false,
                },
                }}
            />
            </div>
        </div>
        <Form metrics={metrics} />
        </div>
    );
}

export default Dashboard;


/* Lesson 7: Realtime subscription */
/* 
'Postgres changes' extension
. Listen for events:
    . INSERT
    . UPDATE
    . DELETE
    . *
. Recieve event info
. Trigger action
*/

/**
Challenge:
* 1) Call this new channel 'deal-changes'.
* 2) Listen for all types of event (e.g. INSERT, UPDATE and DELETE).
* 3) Add the schema (Hint: Check your Supabase Table Editor) and table name.
* 4) Log the 'new' property of the 'payload' object to the console and save (Cmd/Ctrl + s).
* 5) Navigate to your Supabase Table Editor and insert another row
*/
/* 
import supabase from './supabase-client.js'
import React from 'react'
import { Chart } from "react-charts"

function Dashboard() {

    const [metrics, setMetrics] = React.useState([])
    React.useEffect(() => {
        fetchMetrics()

        const channel = supabase
        .channel('deal-changes')
        .on(
            'postgres_changes',
            { 
                event: '*', 
                schema: 'public', 
                table: 'sales_deals' 
            },
            (payload) => {
                // Action
                // console.log(payload.new)
                fetchMetrics()
            })
        .subscribe();

        // Clean up subscription
        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    async function fetchMetrics() {
        try {
            const { data, error } = await supabase
            .from('sales_deals')
            .select(
                `
                name,
                value.sum()
                `,
            )
            if(error) {
                throw err
            } else {
                console.log(data)
                setMetrics(data)
            }
        } catch(err) {
            console.log("ERROR: ", err)
        }
    }

  const chartData = [
    {
      data: metrics.map((m) => ({
        primary: m.name,
        secondary: m.sum,
      })),
    },
  ];

  const primaryAxis = {
    getValue: (d) => d.primary,
    scaleType: 'band',
    padding: 0.2,
    position: 'bottom',
  };

  const secondaryAxes = [
    {
      getValue: (d) => d.secondary,
      scaleType: 'linear',
      min: 0,
      max: y_max(),
      padding: {
        top: 20,
        bottom: 40,
      },
    },
  ];

  function y_max() {
    if (metrics.length > 0) {
      const maxSum = Math.max(...metrics.map((m) => m.sum));
      return maxSum + 2000;
    }
    return 5000; 
  }


    return (
        <div className="dashboard-wrapper">
        <div className="chart-container">
            <h2>Total Sales This Quarter ($)</h2>
            <div style={{ flex: 1 }}>
            <Chart
                options={{
                data: chartData,
                primaryAxis,
                secondaryAxes,
                type: 'bar',
                defaultColors: ['#58d675'],
                tooltip: {
                    show: false,
                },
                }}
            />
            </div>
        </div>
        </div>
    );
}

export default Dashboard;
 */
/* Lesson 6: Format data for chart rerec */
/* 
import supabase from './supabase-client.js'
import React from 'react'
import { Chart } from "react-charts"

function Dashboard() {

    const [metrics, setMetrics] = React.useState([])
    React.useEffect(() => {
        fetchMetrics()
    }, [])


    async function fetchMetrics() {
        try {
            const { data, error } = await supabase
            .from('sales_deals')
            .select(
                `
                name,
                value.sum()
                `,
            )
            if(error) {
                throw err
            } else {
                console.log(data)
                setMetrics(data)
            }
        } catch(err) {
            console.log("ERROR: ", err)
        }
    }

  const chartData = [
    {
      data: metrics.map((m) => ({
        primary: m.name,
        secondary: m.sum,
      })),
    },
  ];

  const primaryAxis = {
    getValue: (d) => d.primary,
    scaleType: 'band',
    padding: 0.2,
    position: 'bottom',
  };

  const secondaryAxes = [
    {
      getValue: (d) => d.secondary,
      scaleType: 'linear',
      min: 0,
      max: y_max(),
      padding: {
        top: 20,
        bottom: 40,
      },
    },
  ];

  function y_max() {
    if (metrics.length > 0) {
      const maxSum = Math.max(...metrics.map((m) => m.sum));
      return maxSum + 2000;
    }
    return 5000; 
  }


    return (
        <div className="dashboard-wrapper">
        <div className="chart-container">
            <h2>Total Sales This Quarter ($)</h2>
            <div style={{ flex: 1 }}>
            <Chart
                options={{
                data: chartData,
                primaryAxis,
                secondaryAxes,
                type: 'bar',
                defaultColors: ['#58d675'],
                tooltip: {
                    show: false,
                },
                }}
            />
            </div>
        </div>
        </div>
    );
}

export default Dashboard;

 */

/* Lesson 5: Storing the data in state */
/** 
Challenge: 
* 1. Import useState and create a new state variable, 'metrics', with a
	corresponding setter function, and initialise it as an empty array.
* 2. Use the try...catch syntax in the 'fetchMetrics' function and execute 
	the Supabase request.
* 3. If there's an 'error', throws this error.
* 4. After this if statement, log the 'data' variable to the console and 
	use the setter function to store the 'data' variable in the 'metrics' state.
* 5. Catch the 'error' and log it to the console with a custom message.
* 6. Save (Cmd/Ctrl + s).
*/

/* 
import supabase from './supabase-client.js'
import React from 'react'

function Dashboard() {

    const [metrics, setMetrics] = React.useState([])

    React.useEffect(() => {
        fetchMetrics()
    }, [])

    async function fetchMetrics() {
        try {
            const { data, error } = await supabase
            .from('sales_deals')
            .select(
                `
                name,
                Total_Sales_this_Quarter:value.sum()
                `,
            )
            if(error) {
                throw err
            } else {
                console.log(data)
                setMetrics(data)
            }
        } catch(err) {
            console.log("ERROR: ", err)
        }
    }


  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  );
}

export default Dashboard;
 */
/* Lesson 4: Query with aggregate function */

/** 
Challenge: 
1.  Run the commands below in Supabase SQL editor to allow postgreSQL aggregates:
    ALTER ROLE authenticator SET pgrst.db_aggregates_enabled = 'true';
	NOTIFY pgrst, 'reload config';
	
2.  Write the SQL for the ‘Total Sales this Quarter’ bar chart in the 
	Supabase translator. Hint: SELECT the name, and combined total of each
	employee's deal values. CLUE: GROUP BY name
3.  Copy the Javascript client code into the 'fetchMetrics' function
4.  Log the response to the console and save (Cmd/Ctrl + s).
*/

/* 
import supabase from './supabase-client.js'
import React from 'react'

function Dashboard() {

    React.useEffect(() => {
        fetchMetrics()
    }, [])

    async function fetchMetrics() {
        const res = await supabase
        .from('sales_deals')
        .select(
            `
            name,
            Total_Sales_this_Quarter:value.sum()
            `,
  )
        console.log(res)
    }


  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  );
}

export default Dashboard; */

/* Lesson 3: Query the database using supabase-js */

/** 
	Challenge: 
* 1) Import the supabase client.
* 2) Wrap the Supabase client code in a 'fetchMetrics' asynchronous function.
* 3) Import useEffect and add this hook at the top of the Dashboard component. 
* 4) Call the 'fetchMetrics' function as the effect in this hook and have it run
		 only once after inital render.
* 5) Log the response to the console and save (Cmd/Ctrl + s).
    Hint: What makes useEffect only run on 1st render? Google is your friend.
*/

/* 
import supabase from './supabase-client.js'
import React from 'react'

function Dashboard() {

    React.useEffect(() => {
        fetchMetrics()
    }, [])

    async function fetchMetrics() {
        const res = await supabase
        .from('sales_deals')
        .select(
            `
            name,
            value
            `,
        )
        .order('value', { ascending: false })
        .limit(1)
        console.log(res)
    }


  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  );
}

export default Dashboard; */