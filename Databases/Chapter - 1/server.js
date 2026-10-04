/* Chapter - 1: Intro to Databases */

/* Lesson 4: Managed vs Self Hosted */
/* 
Data Administration: 
Data Administration is the practice of managing a 
production database with regards to creating or 
dropping tables, managing access and otherwise 
controlling data.

Managed Databases:
A managed database is a cloud-based solution provided 
by third-party provider.

This avoids the complexity of managing infrastructure.

Benefits of using a managed service include:
1. Flexibility to scale as the database requirements 
increase.
2. Optimising costs by scaling resources with the 
size of the database.
3. Removing the burden of maintainig database security.

Self-Hosted Databases: 
Self-hosted databases are on infrastructure owned in-house by an Organization.

Usually these will run on a physical server but could 
also be a Virtual or Docker container.

Benefits of using a self-hosted service include:
1. Greater customizability in configuration
2. Custom layers of security for sensitive use cases and industries.
3. No reliance on third-party management.

Manage vs Self-Hosted

Managed                             Self-hosted
1. Quick start-up and lower         For complex set-ups and customization,
overheads are key benifits          self-hosted databases offer higher
for systems which don't             flexibility and security with lower
require complex tables and          costs at scele.
management. 

2. Can be costly at scale           2. For smal set-ups, self-hosting
and relies on external              can be over kill.
management.

*/

/* Lesson 3: Developing with Databases */
/* 
Application usully have three parts

1. Frontent: A web browser
2. Backend: Server and an API
3. Database: Our RDBMS such as a Postgres DB

Libraries
There are a number of libraries for using databases 
in our application, such as SQLite, SQLAlchemy.

Our Project: 
We'll be using a simple Node.js with a PGLite database in our Scrims


Object Relational Mapping is a method of interacting with databases which allows use of an object oriented approach, rather than 
directly using SQL Queries

This means we can write queries in languages like 
JavaScript or Python as part of an application.

ORM translates data between our application code 
(which uses objects) and the database (which stores 
data in tables) 

For example, we might have a Node.js application which 
where we write queries in JavaScript and interact with
a database.

This can be an advantage as developers can avoid learning 
complex SQL. This can be useful for development teams 
where the database has complexity.

For Complex application where developers need fill 
control over a database then they may prefer using an RDBMS.

Prisma is an example of an ORM.
 
Prisma queries look more like calling methods and use 
objects to define what information we'll retrieve.

const user = await prisma.user.findFirst({
    select: {
        email: true,
        name: true
    }
})


*/

/* Lesson 2: SQL vs NoSQL */
/* 
SQL : 
1. These databases are relational which means that data stored is interconnected.
2. There is a strict structure to the data which is organised into tables.

NoSQL:
1. NoSQL databases are non-relational meaning the data defined with a looser structure and less strict relationships.

2. These can be more flexible and allow for less rigid data structure.


Structure Query Language
SQL is short for Structured Query Language

It's used to store, access and manipulate data within a database

We write commands or queries to perform actions on tables within a database.

Why learn SQL?
1. One of the most popular language for development and Data Science
2. Used with many relational databases management systesm
3. fundamental for backend development
4. Having relatively few commands makes it easy to learn the basics


Database tables and relationships are defined by their schema
This is a representation of the columns and types in the table

Connection are shown between the different database tables.

NoSQL:
1. NoSQL databases are less structured than SQL databases.
2. They are more flexible which allows for for looser data shapes
3. A Simple is an Object in  JavaScript.
4. There are many types of NoSQL databases which have different use cases

Types: 
Document Stores (e.g. MongoDB)
1. These store data in documents(e.g. JSON) where each documents represent a record.
2. Documents can vary in structure, each having different set of fields.
3. A Content management system might use this type of database.

Key-Value Stores(e.g Redis)
1. Data is stored as a collection of key-value pairs
2. Values can be anything from a simple string to a more complex data structure (e.g. an array or object)
3. APIs will often use this type of database as they don't rely on relational data.

Column-Family Stores(e.g Cassandra)
1. These are designed for handling large valume of data across distributes systems.
2. Data is stored in columns rather than rows, grouped into "column families"

3. These can be used for time-series data, logging and event tracking.


Graph Databases (e.g. Neo4)
These databases are optimised for representing and querying relationships

Data is stored as nodes(entities) and edges (relationships) with properties on both

This kind of system can be useful for social networking application.


Comparison

Feature           SQL(Relational)                     NoSQL(Non-Relational)
Data Structure    Tables with fixed schemas           Flexible:documents, key-value,graphs, columns
Schema            Rigid, predefined                   Schema-less or dynamic
Scalability       Vertical(scale-up)                  Horizontal(scale-out)
Query Language    SQL                                 Varies (e.g. MongoDB query, cypher,CQL)
Use Cases         Structured data, complex joins      Large-scale, unstructured or semi-structured data

*/

/* Lesson 1: Introduction */
/* 
Databases are used in software applications to store, manage
and retrieve data.

Storage is persistent, meaning it is preserved in between
user visits and across the application.

Different data types can be stored and enforce in a databases.

Databases can offer a structured way to store data
often within tables.

Every database will have a schema which defines
the shape of the data within it.


Retro Rides:
Car dealership that sells vintage autos from the 1900s

Powered by SQL:
The CEO, Rodney, manages his stock of vintage cars using an SQL databases.

Tables
Tables hold data on the cars in stock, staff who are employed, and location of dealerships.


*/
/* 
 Teacher: Gregor Thompson

1. What database are
2. SQL vs NoSQL techniques
3. Developing with databases
4. Managed and self-hosted

And an introduction to our SQL project...

*/


/* 
import lessonGenerator from "../../Aside/index.js"

const chapterName = ""
const chapterNum = 0
const lesson = []
lessonGenerator(chapterName, lesson, chapterNum) 

    1 Intro to Databases

    "Introduction",
    "SQL vs NoSQL",
    "Developing with Databases",
    "Managed vs Self Hosted"
*/
