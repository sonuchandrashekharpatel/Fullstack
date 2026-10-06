/* Lesson 8: Full join, inner join and drop */
/* 
INNER JOIN
Returns the record that have matching values in both tables

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

/* Lesson 6: Joins */
/* 

	We can retrieve data from multiple tables using JOIN clauses.
	We'll select data from each table, joining tables on 
	columns they have in column.

	Our tables need to have common columns which we can include in our 
	JOIN clause.

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
	Returns all records from the left table (A) plus any matching records 
	in the right table (B)

	RIGHT JOIN:
	Returns all records from the right table (B) any matching records 
	in the table(A)

	FULL JOIN
	Return all records where there's a match in either table.


*/

/* Lesson 3: Creating tables */
/* 
dealerships
Holds data on each dealership and its location - we'll add a
column to card to indicate its dealership.

staff
Everyone employed across dealerships, this table holds name
and roles.

sold_cars
When a car is sold, we'll add a record to sold_cars with the
price, date and seller.


Relationships
Tables relate to one another through different properties. 
Usually, we'll link based on primary keys - the unique id for 
each row.

Table: sold_cars
┌───────────┬──────────┐
│ column    │ type     │
├───────────┼──────────┤
│ 'id'      │ 'serial' │
│ 'cars_id' │ 'int'    │
│ 'seller'  │ 'int'    │
│ 'date'    │ 'date'   │
│ 'price'   │ 'int'    │
└───────────┴──────────┘

Table: staff
┌─────────────────┬──────────┐
│ column          │ type     │
├─────────────────┼──────────┤
│ 'id'            │ 'serial' │
│ 'dealership_id' │ 'int'    │
│ 'name'          │ 'text'   │
│ 'role'          │ 'text'   │
└─────────────────┴──────────┘

Table: cars
┌─────────────────┬───────────┐
│ column          │ type      │
├─────────────────┼───────────┤
│ 'id'            │ 'serial'  │
│ 'dealership_id' │ 'int'     │
│ 'brand'         │ 'text'    │
│ 'model'         │ 'text'    │
│ 'year'          │ 'int'     │
│ 'price'         │ 'int'     │
│ 'color'         │ 'text'    │
│ 'condition'     │ 'int'     │
│ 'sold'          │ 'boolean' │
└─────────────────┴───────────┘

Table: dealerships
┌───────────────┬───────────┐
│ column        │ type      │
├───────────────┼───────────┤
│ 'id'          │ 'serial'  │
│ 'city'        │ 'text'    │
│ 'state'       │ 'varchar' │
│ 'established' │ 'date'    │
└───────────────┴───────────┘

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
