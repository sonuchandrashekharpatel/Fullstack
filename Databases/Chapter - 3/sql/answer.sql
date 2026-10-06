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


/* Lesson 5: Alter table */
-- SELECT * FROM cars;

/* Lesson 4: Populating tables */
-- SELECT * FROM staff;

/* Lesson 3: Creating tables */

-- SELECT * FROM dealerships;


