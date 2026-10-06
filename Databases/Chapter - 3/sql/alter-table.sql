/* Lesson 5: Alter table */
/* 
We can also write this:
ADD CONSTRAINT dealership_fk FOREIGN KEY (dealership_id) REFERENCES dealerships(id);

AS:

ADD FOREIGN KEY (dealershid_id) REFERENCES dealerships(id);

*/

-- 1. Add the column (initially nullable)
ALTER TABLE cars
ADD COLUMN dealership_id INTEGER;

-- 2. Insert data to backfill the dealership_id column

-- Update cars, set the dealership_id to 1
-- Where the dealership_id is 1

UPDATE cars SET dealership_id = 1
    WHERE dealership_id IS NULL;

-- 3. Add the NOT NULL constraint
ALTER TABLE cars
ALTER COLUMN dealership_id SET NOT NULL;

-- 4. Add the foreign Key constraint

ALTER TABLE cars
ADD CONSTRAINT dealership_fk FOREIGN KEY (dealership_id) REFERENCES dealerships(id);

/*
	Alter the cars table
		add a not null constraint to these columns:
			brand
			model
			year
			price
			color
			condition
			sold
*/

ALTER TABLE cars
ALTER COLUMN brand SET NOT NULL,
ALTER COLUMN model SET NOT NULL,
ALTER COLUMN color SET NOT NULL,
ALTER COLUMN price SET NOT NULL,
ALTER COLUMN year SET NOT NULL,
ALTER COLUMN condition SET NOT NULL,
ALTER COLUMN sold SET NOT NULL;