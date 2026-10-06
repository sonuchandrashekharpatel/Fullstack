/* Lesson 9: Aggregates */
/*
	Select the city and average car price
	Round that car price to a whole number
	
	Only show dealerships which have cars
	
	Group by dealership city and state
*/
-- Solution 1:
/* SELECT 
	city,
	FLOOR(AVG(price)) AS avg_price
FROM 
	dealerships AS d
	LEFT JOIN cars AS c
	ON c.dealership_id = d.id

	GROUP BY city, state
	HAVING COUNT(c.id) > 0; 
*/

/* -- Solution 2:
SELECT 
	city,
	FLOOR(AVG(price)) AS avg_price
FROM 
	dealerships AS d
	INNER JOIN cars AS c
	ON c.dealership_id = d.id

	GROUP BY city, state
	HAVING COUNT(c.id) > 0;
*/

/*
	Select the name and role, alongside a total_sales:
		this is the sum of sales by a member of staff
	
	Use staff as your left table and sold_cars as your right table
	
	Include a where clause to select only staff with the role 'Salesperson'
	
	Group by staff name and role
	Order by the total_sales from high to low
*/

/* 
SELECT
	name, 	
	role,
	SUM(sold_price) AS total_sales
	FROM 
		staff AS S
		INNER JOIN sold_cars AS SC ON S.id = SC.seller
	WHERE
		role = 'Salesperson'
	GROUP BY name, role
	Order BY total_sales DESC;

 */
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
SELECT 
	city, 
	state,
	COUNT(cars.id) AS car_count
	FROM 
	cars RIGHT JOIN dealerships 
	ON dealerships.id = dealership_id

	WHERE sold IS NOT TRUE
	GROUP BY city, state
	ORDER BY car_count;

/* 


Table: sold_cars
┌──────────────────────┐
|		sold_cars      |
├───────────┬──────────┤
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
*/

/* Lesson 8: Full join, inner join and drop */
-- SELECT * FROM dealerships

/* 

Show me all the on data on our staff and our dealerships */

-- SELECT name, role, city, state FROM staff FULL JOIN dealerships ON dealership_id = dealerships.id;

-- SELECT * FROM staff;

/*
	Select name, role, sold_price from staff
	Inner join with sold_cars
		matching seller with staff.id	
*/

-- SELECT name, role, sold_price 
-- FROM staff AS S INNER JOIN sold_cars AS SC ON S.id = SC.seller;

/*
	Use full join to show the name, role and sold_price
		from staff
	Full join with sold_cars
		matching seller with staff.id	
*/

-- SELECT 
-- 	name, 
-- 	role, 
-- 	sold_price
-- FROM 
-- 	staff AS s FULL JOIN sold_cars AS sc 
-- 	ON s.id = seller;


/* Lesson 6: Left and Right Join */


/*
	Select the brand, model, price, sold, sold_price columns
		from sold_cars
	Left join with cars
		matching sold_cars.cars_id to cars.id
*/

-- SELECT brand, model, price, sold, sold_price
-- FROM sold_cars AS SC LEFT JOIN cars AS C ON SC.cars_id = C.id

/*
	Select the brand, model, price, sold, sold_price columns
		from sold_cars
	Right join with cars
		matching sold_cars.cars_id to cars.id
*/

-- SELECT brand, model, price, sold, sold_price
-- FROM sold_cars AS SC RIGHT JOIN cars AS C ON SC.cars_id = C.id

/*
	Select name, role, city, state
		From the staff table
	Left join with the dealerships table where the dealership_id in staff
			matches with the id in dealerships
*/
/* 
SELECT name, role, city, state
	FROM staff AS S LEFT JOIN dealerships AS D 
	ON S.dealership_id = D.id;
 */

/*
	Select name, role, city, state
		From the staff table
	Right join with the dealerships table where the dealership_id in staff
			matches with the id in dealerships
*/

/* 
SELECT name, role, city, state
	FROM staff AS S RIGHT JOIN dealerships AS D 
	ON S.dealership_id = D.id; */
