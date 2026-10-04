/* Chapter - 2: Introduction Multiple Tables */

/* Lesson 12: Recap */


/* Lesson 11: A primer on SQL Injection */


/* Lesson 10: Joining multiple tables */
/* 
	List:
	- the brand and the model of cars
	- include the name of the seller,
	- the city they work in
	- the date of the sale

	Format the sold_date as DD-MM-YYYY using TO_CHAR()

	Use sold_cars as the left table and join other tables
	slow sold_cars show sold_cars when we have no record of the seller.
*/
/* 
SELECT C.brand, 
	C.model, 
	S.name AS seller_name, 
	D.city, 
	TO_CHAR(SC.sold_date, 'DD-MM-YYYY') AS date_of_sale
FROM sold_cars SC 
	INNER JOIN cars C ON C.id = SC.cars_id
	LEFT JOIN staff S ON SC.seller = S.id
	LEFT JOIN dealerships D ON SC.id = D.id;
	 */

/*
	Select the name, role and city from sold_cars
	
	Join with the staff and dealerships tables
		use appropriate joins to show staff who have no dealership_id
		
	Include a where clause to find
		- null values in sold_cars
		- staff who have the role 'Salesperson'
*/

/* SELECT S.name,
	S.role,
	D.city
FROM sold_cars SC
	RIGHT JOIN staff S ON SC.seller = S.id
	LEFT JOIN dealerships D ON S.dealership_id = D.id
	WHERE 
	SC.sold_price IS NULL
	AND S.role = 'Salesperson';  */

/*
	Show the city and state of dealerships
		with a count of the cars sold
		aliased as cars_sold
		
	Select from sold_cars
		join with the relevant tables
		
	Include dealerships which have no sold cars
	
	Order the count in descending order
		
	Hint: you may need to join using a table not included in our columns
*/

/* 
SELECT 
	D.city,
	D.state,
	COUNT(SC.id)
	FROM sold_cars SC
	LEFT JOIN cars C ON SC.cars_id = C.id
	RIGHT JOIN dealerships D ON C.dealership_id = D.id
	GROUP BY D.city, D.state
	ORDER BY COUNT(SC.id);	 */

/* Lesson 9: Aggregates */
/*
	Select the city and average car price
	Round that car price to a whole number
	
	Only show dealerships which have cars
	
	Group by dealership city and state
*/

/* SELECT city, state,  ROUND(AVG(price), 2) AS avg_price FROM cars
	INNER JOIN dealerships ON dealerships.id = cars.dealership_id
	GROUP BY city, state; 
*/
/* 
	Select the name and role, alongside a total_sales:
		this is the sum of sales by a member of staff
	
	Use staff as your left table and sold_cars as your right table
	
	Include a where clause to select only staff with the role 'Salesperson'
	
	Group by staff name and role
	Order by the total_sales from high to low
 */

/* SELECT name, role, SUM(sold_price) AS total_sales FROM staff
	INNER JOIN sold_cars ON staff.id = sold_cars.seller
	GROUP BY staff.name, staff.role
	ORDER BY total_sales DESC; */

/* 	
Select the city, state and
		count the total number of cars in each dealership
		alias the count as car_count
	
	Use cars as the left table, and dealerships as the right table
		choosing a join which will show every dealership
		
	Include a condition to count unsold cars
	
	Group by dealership city and state
	Order by the car_count

 */

/* 
SELECT city, state, COUNT(cars.id) AS cars_count FROM cars
	RIGHT JOIN dealerships ON cars.dealership_id = dealerships.id
	WHERE cars.sold IS NOT TRUE
	GROUP BY city, state
	ORDER BY cars_count; 
*/



/* Lesson 8: Full join, inner join and drop */
/* 
INNER JOIN
Returns the record that have maching values in both tables

Full JOIN
Returns records where there's a match in either table.

Drop allows us to remove tables, columns and constraints from the database.
We'll need to drop a constraint to demonstrate our FULL JOIN example.

As before, staff references dealerships

However, we can have null values in dealership_id
Dealership has not changed

We can have a dealership with no matches in staff.

Some members of staff are assigned to a dealership.

Not all dealership have hired staff


The seller column in sold_cars references id records from
staff.

Since we dropper the not null constraint, we can have 
records with null in the seller column of sold_cars.

Not all employees sell cars and some salespeople
haven't made sale.

staff records don't always match a record in sold_cars.

*/

-- SELECT * FROM dealerships;

/* 
Select name, role from staff and city, state from 
dealerships Join the staff table to dealership using
Full join match the staff.dealership_id to dealership.id
*/

-- SELECT * FROM sold_cars;

/*
	Select name, role, sold_price from staff
	Inner join with sold_cars
		matching seller with staff.id	
*/

-- SELECT name, role, sold_price FROM staff
--     INNER JOIN sold_cars
--         ON sold_cars.seller = staff.id;

/*
	Use full join to show the name, role and sold_price
		from staff
	Full join with sold_cars
		matching seller with staff.id	
*/
/* 
SELECT name, role, sold_price FROM staff
    FULL JOIN sold_cars
        ON sold_cars.seller = staff.id; */

/*  */
/* Lesson 7: Left and Right Join */
/* 
Select name, role, city, state
    From the staff table


Understanding the links between our tables  will help
us to understand the different tyes of JOIN we use in SQL

CARS and SOLD_CARS 
cars_id in sold_cars references an id in the cars table

We created this link when defining the sold_cars table.

Not every row in cars has a match in sold_cars

All records in sold_cars have a match in cars

Using LEFT JOIN will return all the results in the 
left table and any matches in the right table.

Using RIGHT JOIN will return all the results in the right table
and any matches in the left table

Not every row in cars has a match to sold_cars

All records in sold_cars have a match in cars
*/
/*
	Select the brand, model, price, sold, sold_price columns
		from sold_cars
	Right join with cars
		matching sold_cars.cars_id to cars.id
*/
/* 
-- SELECT brand, model,price, sold, sold_price
--     FROM sold_cars SC
--     RIGHT JOIN cars C ON SC.cars_id = C.id;

-- SELECT name,  role, city, state
-- 	FROM staff S
-- 	LEFT JOIN  dealerships  D ON S.dealership_id = D.id;
 */


    
-- SELECT * FROM sold_cars;

-- SELECT * FROM cars;

/* Lesson 6: Joins */
/* 
We can retrieve data from multiple tables using JOIN clauses.
We'll select data from each table, joining tables on 
columns they have in column.

Our tables need to have common columns which we can include in our JOIN clause.

There are four main types of JOIN in SQL:
1. INNER JOIN
2. LEFT JOIN
3. RIGHT JOIN
4. FULL JOIN

Each will return a different set of results, depending
what matches.

SQL JOIN clauses have two sides:
    LEFT is the table we select from.
    Right is the table we join with

These sides influence the data we'll retrive.

INNER JOIN:
Return records that have matching values in both tables.

LEFT JOIN:
Returns all records from the left table (A) plus any matching records in the right table (B)

RIGHT JOIN:
Returns all records from the right table (B) any matching records in the table(A)

FULL JOIN
Return all records where there's a match in either table.


*/

/* Lesson 5: Alter table */
-- SELECT * FROM cars;

/* Lesson 4: Populating tables */


/* Lesson 3: Creating tables */
/* 
dealerships
Holds data on each dealership and its location - we'll add a column to card to indicate its dealership

staff
Everyone employed across dealerships, this table holds name and roles

sold_cars
When a car is sold, we'll add a record to sold_cars with the price, date and seller.


Relationships
Tables relate to one another through different properties. 
Usually, we'll link based on primary keys - the unique id for each row.

These are different type of relationship:
    - One to one
    - One to many
    - Many to many

One to One:
Table cars and sold_cars will have one to one relationship. 
Each car in either table can only relate to one car in sold_cars.

Also, each sold car will relate to one member of 
staff who sold that car.

One to many
We have multiple of these in our database
    - One dealership relates to many cars
    - One dealership relates to many staff

Many to many
We don't have many to many relationships in this set 
of tables.

We might have a table of cars parts. Every car has 
many parts and each part could relate to many cars.

Primary Keys :
A primary is a column with unique identifiers for each 
row.

Foreign Keys :
A Foreign key is unique identifier which references 
another table.

For example dealership_id in the cars table will 
reference the primary key in the dealerships table.

Types:
Each column will have a type which defines what kind of
data we can insert to that column.

Constraints:
Columns can be given constraints which further restrict 
what we can add to the column, for example that column 
can not be NULL.

Column        Type                  Description
id            primary key           A serialised identifier for each row.

city          text                  City the leadership is located in

state         char(2)               Two Character code for the state where the dealership is located (e.g. PA, CA)

established   date                  The dealership is opened

*/



