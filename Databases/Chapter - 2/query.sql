/* Chapter - 2: Writing SQL Queries */

/* Lesson 25: Recap */
/* 
Recap:
    SELECT and FROM 
    to get records from out table

    WHERE
    So we can write conditions to filter rows.

    CONDITIONS
    Within our where clause

    EQUALITY and COMPARISON
    How to match values, compare numbers and strings, partial matching LIKE

    COMBINING Conditions 
    Using AND and OR to combine conditons

    BETEEN and IN
    finding results within subsets of numbers and strings

    ORDER 
    Sorting our table output

    AGGREGATING
    Reducing columns to single values using 
    aggregate function and grouping columns

    INSERT
    Adding rows to our table 

    UPDATE
    Changing data within the table

    DELETE
    Removing records from our table
 */

/* Lesson 24: DELETE */
/*
	Delete from the cars table, any record where
		condition is 0
*/

-- DELETE FROM cars
-- 	WHERE condition = 0

/*
	Delete any record from the cars table where sold is TRUE
*/

/* 
DELETE FROM cars 
	WHERE 
	sold = TRUE
 */

/* Lesson 23: UPDATE */
/*
	Update the record for the Aston Martin DB4 with ID 14
		set the condition to 5
		and the price to 465000
*/
/* 
UPDATE cars SET
    condition = 5,
    price = 465000
    WHERE 
    brand = 'Aston Martin'
    AND
    model = 'DB4'
    AND
    id = 14; */

/* UPDATE cars SET
    condition = 1,
    price = 10000
    WHERE 
    brand = 'Porsche'
    AND 
    sold = false; */

-- UPDATE cars SET

/* Lesson 22: INSERT INTO */
/* 

*/
/* 
INSERT INTO cars (
 brand, model, year, price, color, condition, sold
) VALUES (
    'Chevrolet', 'Bel Air', 1955, 50000, 'purple', 5, false
), (
    'Porsche', '944 Turbo', 1986, 48000, 'white', 4, false
) */

/* Lesson 21: Manipulating data */
/* 
Databases are dynamic resources

We can add modify, and delete data
In this section, we'll learn new keywords to perform these operations

These operation are known as Data Manipulation Language(DML) or CRUD Commands

CRUD stands for Create, Read,  Update, Delete

These are four main commands for data manipulation language.

Returning data
DML commands don't return data from databases.

Data Persistence


*/

/* Lesson 20: Challenges 2 */
/* Select brand, model, and year from cars
		only show the oldest 5 cars in the database
		show cars which haven't been sold */
/* 

Select color and count how many cars have each color
    find cars which have not been sold
    order by count in descending order
    only show results where the count is greater than 2

Sfw ghol

 */
/* 
SELECT brand, model, year FROM cars
    WHERE sold IS FALSE
    ORDER by year
    LIMIT 5;
     */
/* 
SELECT color, COUNT(color) AS count FROM cars
    WHERE sold IS FALSE
    GROUP BY color
    HAVING COUNT(color) > 2
    ORDER BY count DESC;
 */
    


/* Lesson 19: HAVING */
/*
	Select:
		* year
		* a count of cars from that year, aliased as car_count
		* the maximum price
		* the minimum price
	from the table cars
		where the car has been sold
	group by year
		only show years where more than one car has been sold from that year
	order the result by car_count
*/

/* 
SELECT year, COUNT(year) AS car_count, MAX(price), MIN(price) FROM cars
    WHERE sold IS TRUE
    GROUP BY year
    HAVING COUNT(year) > 1
    ORDER BY car_count;
 */

/* Lesson 18: GROUP BY */
/*
	Select the condition, and a count of the condition from cars
		group by the condition column
*/

/* 
SELECT condition,
    COUNT(condition) FROM cars
    GROUP BY condition; */

-- SELECT brand,
--     COUNT(brand),
--     FLOOR(AVG(price)) AS AVG
--     FROM cars 
--     WHERE sold IS FALSE
--     GROUP BY brand;

-- SELECT brand, COUNT(brand) FLOOR(AVG(price)) AS 'AVG',
--     FROM cars 
--     WHERE sold IS FALSE
--     GROUP BY brand;

/* Lesson 17: MAX, MIN, AVG */

/* 	
-- Use the AVG aggregate function to find the average price
-- 	where the brand is Bentley
    
-- 	We can use FLOOR and CEIL to round the average down or up
-- 		to the nearest whole number

	We can use FLOOR and CEIL to round the average down or up
		to the nearest whole number

*/

/* 
SELECT FLOOR(AVG(price)) AS average_price FROM cars
    where brand = 'Bentley';
     */
/*      
SELECT CEIL(AVG(price)) AS avg,
    MAX(price),
    MIN(price)
FROM cars
    WHERE sold IS TRUE; */
    
/* 
┌─────────┬────────────────┬───────┬──────────┐
│ (index) │ brand          │ count │ avg      │
├─────────┼────────────────┼───────┼──────────┤
│ 0       │ 'Ford'         │ 4     │ '25000'  │
│ 1       │ 'Ferrari'      │ 1     │ '150000' │
│ 2       │ 'Chevrolet'    │ 1     │ '48000'  │
│ 3       │ 'Porsche'      │ 4     │ '111750' │
│ 4       │ 'Jaguar'       │ 1     │ '450000' │
│ 5       │ 'Bentley'      │ 4     │ '62500'  │
│ 6       │ 'Aston Martin' │ 5     │ '446600' │
│ 7       │ 'Lotus'        │ 1     │ '62000'  │
│ 8       │ 'Lamborghini'  │ 1     │ '320000' │
│ 9       │ 'Nissan'       │ 1     │ '95000'  │
└─────────┴────────────────┴───────┴──────────┘
 */

/* Lesson 16: COUNT and SUM */
/* 
Sum the price of cars
    where sold is true
Use the alias total_earnings in your output
*/

/* 
-- SELECT SUM(price) AS total_earnings FROM cars
--     WHERE sold IS TRUE;
 */

/* Lesson 15: LIMIT */
/* 
shade of color is 'red'
not sold 
obder by price
limit 5
*/

/* 
-- SELECT brand, model, color, price FROM cars
--     WHERE color LIKE '%red%'
--     AND sold IS FALSE
--     ORDER BY price
--     LIMIT 5;
 */
/* Lesson 14: ORDER BY */
/* 
Select the brand, model, condition and price from cars
    order the table by condition in descending order
    and by price in ascending order
*/

/* -- SELECT brand, model, condition, price FROM cars
--     ORDER BY condition DESC, price;

SELECT brand, model, condition, price FROM cars
    WHERE sold IS FALSE
    AND condition != 5
    ORDER BY condition DESC, price; */

/* Lesson 13: Challenges 1 */
/* 
CHALLENGES 1

Select brand, model, and color from cars
    where the color is 'red'
    and the brand is not 'Ferrari'
    and the car has not been sold

	Select brand, model, and color from cars
		where the color is not red, blue, or white
		and the brand is none of: Aston Martin, Bentley or Jaguar
		and sold is false

    Select brand, model, year, sold from cars
    where the brand is 'Dodge' and year is in the 60s
    or the brand is either 'Ford' or 'Triumph' and the car is from the 70s
    only select cars where sold is not true

 */

/* 
-- SELECT brand, model, color FROM cars
--     WHERE  color = 'red'
--     AND brand != 'Ferrari'
--     AND sold IS FALSE;


-- SELECT brand, model, color FROM cars
--     WHERE color NOT IN ('red', 'blue', 'white')
--     AND brand NOT IN ('Aston Martin', 'Bentley', 'Jaguar')
--     AND sold IS FALSE;

SELECT brand, model, year, sold FROM cars
    WHERE ((
        brand = 'Dodge'
        AND year BETWEEN 1960 AND 1969
    ) 
    OR (
        brand IN ('Ford', 'Triumph')
        AND year BETWEEN 1970 AND 1979
    ))
    AND
    sold IS FALSE;
 */

/* Lesson 12: IN operator */
/*
	Select the brand, model, condition and year from cars
		Where the year is 1961, 1963, 1965, 1967 or 1969
		and the condition is 3 or higher
		and sold is false
*/
/*
	Select brand, model, price and sold from cars
		filter out any cars which are sold
		show cars where the brand is none of ('Ford', 'Triumph', 'Chevrolet', 'Dodge')
		or the price is less than $50000
*/

/* 
-- SELECT brand, model, condition, year FROM cars
--     WHERE year IN (1961, 1963, 1965, 1967, 1969)
--     AND condition >= 3 
--     AND sold IS false;

SELECT brand, model, price, sold FROM cars
    WHERE sold IS  FALSE
    AND (brand NOT IN ('Ford', 'Triumph', 'Chevrolet', 'Dodge')
    OR price < 50000); */


/* Lesson 11: OR */

/* 

SELECT brand, model, year, price FROM cars
WHERE price < 25000
OR brand = 'Porsche';


*/

/* 
    SELECT brand, model,color, year, price, sold FROM cars
    -- WHERE color LIKE '%red%'
    -- OR year BETWEEN 1960 AND 1969;

    WHERE (color LIKE '%red%'
    OR year BETWEEN 1960 AND 1969)
    AND sold IS false;
 */


/* Lesson 10: BETWEEN */
/*
Select cars made between 1980 and 1989
    show the brand, model, year and price

SELECT brand, model, year, price FROM cars
    WHERE year >= 1980
    AND year < 1990;

Select brand, model, condition, color and price from cars
    where the price is between $20,000 and $60,000
    and the condition is between 1 and 3
    and the color contains red

*/
/* 
SELECT brand, model, condition, color, price FROM cars
    WHERE price BETWEEN 20000 AND 60000
    AND condition BETWEEN 1 AND 3
    AND color LIKE '%red%'; */

/* Lesson 9: AND */
/*
	Select the brand, model, year, condition and price from cars
		where the condition is 3 or higher
		and the year is before 1970
		and the price is below 100,000
*/
/* SELECT brand, model, year, condition, price FROM cars
    WHERE condition >= 3 
    AND year < 1970
    AND price < 100000;
 */
/* Lesson 8: NOT and LIKE */
/* 
% => any number of any character
- => one number of any character

% = any number of any character
e.g. '%green%' matches
    - 'light green'
    - 'greenish-yellow'
    - 'dark-green'

- one of any character

e.g. '_-Type'
    - 'X-Type'
    - 'S-Type'
    - 'E-Type'
*/

/*
	Select the brand, model, color and year
		find any car where the color includes 'green'
*/
/* 

*/
/*  SELECT brand, model, color, year FROM  cars
    WHERE model LIKE 'DB_'; */


/* Lesson 7: Not equal */
/* 
"" is used for column
'' is used from string values like color = 'yellow' in this case

 */
/*
	Filter out cars from 1965
		Select the brand, model, year and price

	Find cars which are not yellow
		Select the brand, model, price and color

SELECT  brand, model, year, price FROM cars
    WHERE year != 1965;
 */
/* 
SELECT brand, model, price, color FROM cars
    WHERE color <> 'yellow'; 
*/

/* Lesson 6: Numerical Filtering */
/*
	Select the brand, model, condition and price from cars
		find results where the price is less than $50,000
*/

/* SELECT brand, model, condition, price FROM cars
    WHERE price < 50000
 */

/* Lesson 5: WHERE clause */
/*
	Select the brand, model, condition and price from cars
		where the condition equals 0
*/
/* 
SELECT brand, model, condition, price FROM cars 
    WHERE condition = 0
 */
/* Lesson 4: Selecting Columns */
/* 
"Show me the brand model prices of cars"
Select the brand, model, condition and year from the cars table
*/
/* 
-- SELECT brand, model, condition, year FROM cars
 */
/* 
Writing in all caps is not necessary but to get used to of syntax.
 */

/* Lesson 3: SELECT all */
/* 
SELECT * FROM cars
*/

-- SELECT * FROM cars

SELECT price, brand  FROM cars

