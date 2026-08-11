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
import supabase from '../supabase-client';
import { useEffect, useState } from 'react';
import { Chart } from 'react-charts';
import Form from '../components/Form';

function Dashboard() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetchMetrics();


    const channel = supabase
      .channel('deal-changes')
      .on(
        'postgres_changes',
        { 
          event: '*', 
          schema: 'public', 
          table: 'sales_deals' 
        },
        payload => {
          console.log(payload);
          fetchMetrics();
        })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);


  async function fetchMetrics() {
    try {
      const { data, error } = await supabase.from('sales_deals').select(
        `
          name,
          value.sum()
          `
      );
      if (error) {
        throw error;
      }
      setMetrics(data);
    } catch (error) {
      console.error('Error fetching metrics:', error);
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

  function y_max() {
    if (metrics.length > 0) {
      const maxSum = Math.max(...metrics.map((m) => m.sum));
      return maxSum + 2000;
    };
    return 5000;
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

  return (
    <div
      className="dashboard-wrapper"
      role="region"
      aria-label="Sales dashboard"
    >
      <div
        className="chart-container"
        role="region"
        aria-label="Sales chart and data"
      >
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
};

export default Dashboard;