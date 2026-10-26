---
title: "SQL Tutorial: Beginner to Advanced"
description: "Learn SQL from beginner to advanced with database concepts, SELECT queries, filtering, joins, subqueries, aggregations, indexes, transactions, projects, and interview questions."
slug: "sql-tutorial"
date: "2026-10-23"
author: "Yogesh"
image: "/images/sql.png"
category: "Database"
---

# SQL Tutorial: Beginner to Advanced

SQL (Structured Query Language) is used to define, query, and manage data in relational database systems such as PostgreSQL, MySQL, SQL Server, and SQLite. SQL dialects differ in some features and syntax, so check the documentation for your chosen database when adapting examples.

This guide teaches core SQL concepts with practical examples and exercises.

## Table of Contents

1. Database fundamentals
2. Tables, rows, columns, and keys
3. Create a sample database
4. SELECT queries
5. Filtering with WHERE
6. Sorting and limiting results
7. INSERT, UPDATE, and DELETE
8. NULL values
9. Aggregate functions and GROUP BY
10. HAVING
11. Joins
12. Subqueries
13. Common Table Expressions
14. Set operations
15. String, numeric, and date functions
16. CASE expressions
17. Constraints and relationships
18. Views
19. Indexes and query performance
20. Transactions and ACID
21. Window functions
22. Database design and normalization
23. Security and best practices
24. Practice projects
25. Interview questions and answers

## 1. Database Fundamentals

A **database** is an organized collection of data. A relational database stores data in tables and uses relationships to connect records.

Important terms:
- **Database:** an organized collection of data.
- **Table:** a collection of rows with named columns.
- **Row/record:** one entry in a table.
- **Column/field:** an attribute of each row.
- **Schema:** a logical organization of database objects.
- **Primary key:** a column or group of columns that uniquely identifies each row.
- **Foreign key:** a column or group of columns that references a key in another table.
- **Query:** a statement used to read or change data.

SQL is declarative: you specify what result you want, and the database determines an execution plan.

## 2. Tables, Rows, Columns, and Keys

Consider a `students` table:

| id | name | city | marks |
|---:|---|---|---:|
| 1 | Asha | Ahmedabad | 88 |
| 2 | Ravi | Jaipur | 76 |
| 3 | Neha | Ahmedabad | 92 |

The `id` column can serve as a primary key. A primary key must be unique and cannot be `NULL`.

A foreign key enforces a relationship between records. For example, an `orders.customer_id` column can reference `customers.id`.

## 3. Create a Sample Database

The following examples use broadly supported SQL syntax. Identity/auto-increment syntax varies between databases; here, IDs are supplied explicitly for portability.

```sql
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    city VARCHAR(100),
    marks DECIMAL(5, 2) CHECK (marks >= 0 AND marks <= 100)
);

INSERT INTO students (id, name, city, marks)
VALUES
    (1, 'Asha', 'Ahmedabad', 88),
    (2, 'Ravi', 'Jaipur', 76),
    (3, 'Neha', 'Ahmedabad', 92),
    (4, 'Karan', 'Surat', 67);
```

`CREATE TABLE` defines the structure. `INSERT` adds rows.

To inspect the table, run a `SELECT` query.

## 4. SELECT Queries

`SELECT` retrieves data.

```sql
SELECT * FROM students;
```

`*` selects every column. In application code, listing the required columns is usually clearer and avoids fetching unnecessary data.

```sql
SELECT name, marks
FROM students;
```

### DISTINCT

```sql
SELECT DISTINCT city
FROM students;
```

`DISTINCT` removes duplicate result rows for the selected expressions.

### Aliases

```sql
SELECT name AS student_name, marks AS score
FROM students;
```

Aliases can make output easier to understand.

## 5. Filtering with WHERE

`WHERE` keeps rows that satisfy a condition.

```sql
SELECT name, marks
FROM students
WHERE marks >= 80;
```

### Comparison and logical operators

```sql
SELECT *
FROM students
WHERE city = 'Ahmedabad'
  AND marks >= 80;
```

Common operators:
- `=`, `<>` or `!=` (dialect support varies), `<`, `>`, `<=`, `>=`
- `AND`, `OR`, `NOT`
- `IN`, `BETWEEN`, `LIKE`
- `IS NULL`, `IS NOT NULL`

### IN and BETWEEN

```sql
SELECT *
FROM students
WHERE city IN ('Ahmedabad', 'Jaipur');

SELECT *
FROM students
WHERE marks BETWEEN 70 AND 90;
```

`BETWEEN` is inclusive of both bounds.

### LIKE

```sql
SELECT *
FROM students
WHERE name LIKE 'A%';
```

Common patterns:
- `'A%'`: begins with A.
- `'%a'`: ends with a.
- `'%sh%'`: contains `sh`.
- `'A__a'`: A, followed by exactly two characters, then a.

Case sensitivity depends on the database and collation.

## 6. Sorting and Limiting Results

```sql
SELECT name, marks
FROM students
ORDER BY marks DESC;
```

- `ASC`: ascending order (default in many systems).
- `DESC`: descending order.

Use a stable tie-breaker if the order must be deterministic:

```sql
SELECT name, marks
FROM students
ORDER BY marks DESC, name ASC;
```

Limiting syntax differs across databases. Common forms include:

```sql
SELECT *
FROM students
ORDER BY marks DESC
LIMIT 3;
```

PostgreSQL and MySQL support `LIMIT`; SQL Server commonly uses `TOP` or `OFFSET ... FETCH`.

## 7. INSERT, UPDATE, and DELETE

### INSERT

```sql
INSERT INTO students (id, name, city, marks)
VALUES (5, 'Meera', 'Vadodara', 81);
```

### UPDATE

```sql
UPDATE students
SET marks = 85
WHERE id = 5;
```

Always verify the `WHERE` condition before running an update. Without it, every row may be changed.

### DELETE

```sql
DELETE FROM students
WHERE id = 5;
```

Without a `WHERE` clause, `DELETE` removes all rows from the table (while retaining the table structure).

For important changes, use a transaction where supported and verify the affected rows before committing.

## 8. NULL Values

`NULL` represents missing or unknown data. It is not equal to zero, an empty string, or another `NULL`.

Incorrect:

```sql
-- This does not test for NULL correctly:
SELECT * FROM students WHERE city = NULL;
```

Correct:

```sql
SELECT *
FROM students
WHERE city IS NULL;
```

Use `IS NOT NULL` to find present values.

### COALESCE

```sql
SELECT name, COALESCE(city, 'Unknown') AS city
FROM students;
```

`COALESCE` returns the first non-NULL expression. SQL conditions involving `NULL` can evaluate to unknown, so handle missing values intentionally.

## 9. Aggregate Functions and GROUP BY

Aggregate functions calculate a result from multiple rows.

```sql
SELECT
    COUNT(*) AS student_count,
    AVG(marks) AS average_marks,
    MIN(marks) AS lowest_marks,
    MAX(marks) AS highest_marks,
    SUM(marks) AS total_marks
FROM students;
```

Common functions:
- `COUNT(*)`: counts rows.
- `COUNT(column)`: counts non-NULL values in a column.
- `SUM(column)`: adds non-NULL values.
- `AVG(column)`: calculates the average of non-NULL values.
- `MIN()` and `MAX()`: find the minimum and maximum.

Group rows by a category:

```sql
SELECT city, COUNT(*) AS total_students, AVG(marks) AS average_marks
FROM students
GROUP BY city;
```

When using `GROUP BY`, non-aggregated selected expressions generally need to be included in the grouping expressions, subject to database-specific rules.

## 10. HAVING

`WHERE` filters rows before grouping; `HAVING` filters groups after aggregation.

```sql
SELECT city, AVG(marks) AS average_marks
FROM students
GROUP BY city
HAVING AVG(marks) >= 80;
```

Use `WHERE` for row-level filters and `HAVING` for aggregate/group-level filters.

## 11. Joins

Suppose the database has these tables:

```sql
CREATE TABLE departments (
    id INTEGER PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    employee_name VARCHAR(100) NOT NULL,
    department_id INTEGER,
    salary DECIMAL(10, 2),
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

INSERT INTO departments (id, department_name)
VALUES (1, 'Engineering'), (2, 'Marketing'), (3, 'Support');

INSERT INTO employees (id, employee_name, department_id, salary)
VALUES
    (1, 'Asha', 1, 60000),
    (2, 'Ravi', 1, 65000),
    (3, 'Neha', 2, 52000),
    (4, 'Karan', NULL, 45000);
```

### INNER JOIN

Returns rows that match in both tables:

```sql
SELECT e.employee_name, d.department_name
FROM employees AS e
INNER JOIN departments AS d
    ON e.department_id = d.id;
```

### LEFT JOIN

Returns every row from the left table and matching rows from the right. Unmatched right-side columns are `NULL`.

```sql
SELECT e.employee_name, d.department_name
FROM employees AS e
LEFT JOIN departments AS d
    ON e.department_id = d.id;
```

### RIGHT JOIN and FULL OUTER JOIN

`RIGHT JOIN` keeps every row from the right table. `FULL OUTER JOIN` keeps matched and unmatched rows from both sides. Support varies by database; for example, MySQL does not directly support `FULL OUTER JOIN`.

### CROSS JOIN

Produces combinations of every row from one table with every row from another:

```sql
SELECT e.employee_name, d.department_name
FROM employees AS e
CROSS JOIN departments AS d;
```

Use it only when those combinations are intended.

### Self join

A table can join to itself, for example to connect employees to managers when a manager ID references another employee ID.

## 12. Subqueries

A subquery is a query nested inside another query.

### Scalar subquery

```sql
SELECT employee_name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

### IN subquery

```sql
SELECT employee_name
FROM employees
WHERE department_id IN (
    SELECT id
    FROM departments
    WHERE department_name = 'Engineering'
);
```

### EXISTS

```sql
SELECT d.department_name
FROM departments AS d
WHERE EXISTS (
    SELECT 1
    FROM employees AS e
    WHERE e.department_id = d.id
);
```

`EXISTS` tests whether the subquery returns at least one row. Query optimizers can often transform subqueries into efficient plans, so inspect execution plans rather than assuming every subquery is slow.

## 13. Common Table Expressions (CTEs)

A CTE gives a named result to a query, improving readability:

```sql
WITH department_averages AS (
    SELECT department_id, AVG(salary) AS average_salary
    FROM employees
    GROUP BY department_id
)
SELECT d.department_name, a.average_salary
FROM department_averages AS a
JOIN departments AS d
    ON d.id = a.department_id
WHERE a.average_salary > 55000;
```

CTEs are introduced with `WITH`. Recursive CTEs are also supported by many relational databases and can help query hierarchical data. Exact syntax and optimization behavior vary by system.

## 14. Set Operations

Set operations combine results from compatible queries.

```sql
SELECT city FROM students
UNION
SELECT department_name FROM departments;
```

- `UNION`: combines results and removes duplicates.
- `UNION ALL`: combines results and keeps duplicates.
- `INTERSECT`: returns common rows where supported.
- `EXCEPT` or a dialect-specific equivalent: returns rows from the first result that are absent from the second.

The queries generally need the same number of columns with compatible types. Use `UNION ALL` when duplicates are meaningful or duplicate removal is unnecessary.

## 15. String, Numeric, and Date Functions

Function names and behavior can vary between SQL dialects.

### String functions

```sql
SELECT
    UPPER(employee_name) AS upper_name,
    LOWER(employee_name) AS lower_name
FROM employees;
```

Common string functions include `UPPER`, `LOWER`, `LENGTH`/`LEN`, `TRIM`, `SUBSTRING`, and concatenation functions/operators.

### Numeric functions

```sql
SELECT
    ROUND(AVG(salary), 2) AS average_salary
FROM employees;
```

Other common functions include `ABS`, `CEILING`/`CEIL`, and `FLOOR`.

### Date and time

Date functions differ significantly by database. Use the appropriate functions for your engine and store timestamps with a clear timezone policy. Prefer parameterized date filters rather than building SQL strings from user input.

## 16. CASE Expressions

`CASE` creates conditional values in a query:

```sql
SELECT
    employee_name,
    salary,
    CASE
        WHEN salary >= 65000 THEN 'High'
        WHEN salary >= 50000 THEN 'Medium'
        ELSE 'Entry'
    END AS salary_band
FROM employees;
```

`CASE` can be used in `SELECT`, `ORDER BY`, and other supported expressions.

## 17. Constraints and Relationships

Constraints help keep data valid.

```sql
CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER CHECK (age >= 18),
    status VARCHAR(20) DEFAULT 'active'
);
```

Common constraints:
- `PRIMARY KEY`: unique row identifier, not NULL.
- `FOREIGN KEY`: enforces referential relationships.
- `UNIQUE`: prevents duplicate values according to database rules.
- `NOT NULL`: requires a value.
- `CHECK`: enforces a condition when supported and enforced.
- `DEFAULT`: supplies a default when a value is omitted.

### Relationships

- One-to-one: a record corresponds to at most one record on the other side.
- One-to-many: one parent can have multiple children.
- Many-to-many: use a junction table containing foreign keys to both entities.

Design foreign-key behavior carefully, including what should happen when referenced records are deleted or updated.

## 18. Views

A view is a named query that can be selected from like a table in supported contexts.

```sql
CREATE VIEW engineering_employees AS
SELECT employee_name, salary
FROM employees
WHERE department_id = 1;
```

Query it:

```sql
SELECT *
FROM engineering_employees;
```

Views can simplify repeated queries and help expose only selected columns. Ordinary views generally store a query definition, not a precomputed result; materialized views are a separate feature with database-specific refresh behavior.

## 19. Indexes and Query Performance

Indexes can speed up lookups and joins, but they use storage and add overhead to inserts, updates, and deletes.

```sql
CREATE INDEX idx_employees_department
ON employees(department_id);
```

A multi-column index can help queries filtering or sorting by a compatible leading-column pattern:

```sql
CREATE INDEX idx_employees_department_salary
ON employees(department_id, salary);
```

Good practices:
- Index columns used frequently in selective filters and joins when it helps measured workloads.
- Avoid creating an index for every column.
- Inspect execution plans with the database's `EXPLAIN` tools.
- Use realistic data when measuring.
- Keep statistics current according to the database's maintenance model.
- Understand that functions or casts on indexed columns can affect index use, depending on the optimizer and available indexes.

An index does not guarantee a query will use it or run faster.

## 20. Transactions and ACID

A transaction groups operations into a unit of work.

```sql
BEGIN;

UPDATE accounts
SET balance = balance - 500
WHERE id = 1;

UPDATE accounts
SET balance = balance + 500
WHERE id = 2;

COMMIT;
```

If the transfer cannot be completed, use `ROLLBACK` rather than committing partial changes. Transaction syntax and behavior vary by database and client settings.

ACID means:
- **Atomicity:** all transaction operations succeed as a unit or are rolled back.
- **Consistency:** transactions preserve defined database rules.
- **Isolation:** concurrent transactions are controlled according to the selected isolation level.
- **Durability:** committed changes persist according to the database's durability guarantees.

For a money transfer, also validate the source balance and confirm the expected number of rows changed. Use appropriate locking/isolation and constraints for the actual application.

## 21. Window Functions

Window functions calculate values across a related set of rows without collapsing each group to one row.

```sql
SELECT
    employee_name,
    department_id,
    salary,
    AVG(salary) OVER (PARTITION BY department_id) AS department_average
FROM employees;
```

### Ranking

```sql
SELECT
    employee_name,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num,
    RANK() OVER (ORDER BY salary DESC) AS salary_rank,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_salary_rank
FROM employees;
```

- `ROW_NUMBER()` assigns a unique sequential number.
- `RANK()` leaves gaps after ties.
- `DENSE_RANK()` does not leave gaps after ties.
- `PARTITION BY` divides rows into groups.
- `ORDER BY` inside `OVER` defines ordering for the window calculation.

Window functions are useful for top-N queries, running totals, ranking, and comparisons against group-level values.

## 22. Database Design and Normalization

Normalization reduces avoidable duplication and update anomalies.

### First Normal Form (1NF)
Keep each field atomic for the intended data model; avoid storing repeating groups in a single field when they need to be queried independently.

### Second Normal Form (2NF)
Meet 1NF and ensure non-key attributes depend on the whole candidate key, not only part of a composite key.

### Third Normal Form (3NF)
Meet 2NF and avoid inappropriate transitive dependencies of non-key attributes on candidate keys.

Normalization is a design tool, not a goal to apply blindly. Some systems use deliberate denormalization for measured performance or reporting needs, while preserving correctness.

## 23. Security and Best Practices

### Use parameterized queries

Do not build SQL by concatenating untrusted user input.

Unsafe pattern:

```sql
-- Conceptual example of an unsafe pattern:
-- SELECT * FROM users WHERE name = '<user input>';
```

Use prepared/parameterized statements in your programming language and database driver. Example with Python's SQLite API:

```python
import sqlite3

connection = sqlite3.connect("app.db")
name = input("Enter a name: ")

rows = connection.execute(
    "SELECT id, name FROM users WHERE name = ?",
    (name,),
).fetchall()

print(rows)
connection.close()
```

Placeholder syntax depends on the database driver.

### Additional best practices

- Use least-privilege database accounts.
- Never commit database passwords to source control.
- Validate input in the application and enforce important rules in the database.
- Avoid returning sensitive columns unless needed.
- Back up data and test restore procedures.
- Use transactions for multi-step changes.
- Test migrations before production deployment.
- Do not run destructive statements without reviewing the target rows and backup/rollback plan.
- Keep database software and drivers updated.

## 24. Practice Projects

### Project 1: Student Management Database
Tables: `students`, `courses`, and `enrollments`.

Requirements:
- Add and list students.
- Store course enrollments.
- Calculate average marks.
- Search students by name or city.
- Enforce primary and foreign keys.

### Project 2: E-commerce Database
Tables: `customers`, `products`, `orders`, and `order_items`.

Requirements:
- List orders by customer.
- Calculate each order total.
- Find best-selling products.
- Use transactions when creating an order and its items.
- Avoid storing duplicate derived totals unless the design requires them.

### Project 3: Employee Analytics
Tables: `departments` and `employees`.

Requirements:
- Join employees to departments.
- Calculate average salary by department.
- Rank employees by salary.
- Find employees earning above their department average.
- Compare query plans before and after a useful index.

### Project 4: Library Database
Tables: `books`, `members`, and `loans`.

Requirements:
- Record borrowed and returned books.
- Find currently overdue loans.
- Prevent invalid relationships with constraints.
- Create views for common reports.

### Project 5: Expense Tracker Database
Tables: `users`, `categories`, and `expenses`.

Requirements:
- Filter expenses by date range and category.
- Calculate monthly totals.
- Use parameterized queries.
- Design indexes based on the actual filtering patterns.

## 25. SQL Interview Questions and Answers

### Beginner

**1. What is SQL?**  
SQL is a language used to define, query, and manipulate data in relational databases.

**2. What is a primary key?**  
A column or group of columns that uniquely identifies each row and cannot contain NULL values.

**3. What is a foreign key?**  
A constraint that enforces a relationship by referencing a key in another table or the same table.

**4. What is the difference between `WHERE` and `HAVING`?**  
`WHERE` filters rows before grouping; `HAVING` filters groups after aggregation.

**5. What does `DISTINCT` do?**  
It removes duplicate rows from the selected result expressions.

**6. What is `NULL`?**  
A marker representing missing or unknown data, not the same as zero or an empty string.

**7. How do you check for NULL?**  
Use `IS NULL` or `IS NOT NULL`, not `= NULL`.

**8. What does `ORDER BY` do?**  
It sorts query results by one or more expressions.

**9. What is the difference between `DELETE` and `DROP`?**  
`DELETE` removes rows from a table; `DROP` removes a database object such as a table. Exact transactional behavior varies by database.

**10. What is `GROUP BY` used for?**  
It groups rows so aggregate functions can calculate results per group.

### Intermediate

**11. What is an INNER JOIN?**  
It returns rows where the join condition matches between the joined tables.

**12. What is a LEFT JOIN?**  
It returns all rows from the left table plus matching right-table values, using NULLs when there is no match.

**13. What is a subquery?**  
A query nested inside another SQL statement.

**14. What is a CTE?**  
A named query expression introduced with `WITH` that can improve readability and can be referenced by the main query.

**15. What is the difference between `UNION` and `UNION ALL`?**  
`UNION` removes duplicate rows; `UNION ALL` preserves duplicates.

**16. What is an index?**  
A data structure that can help the database find rows efficiently, at the cost of storage and write overhead.

**17. What is a view?**  
A named query that can be queried like a table in supported contexts.

**18. What is normalization?**  
A database design process that reduces avoidable duplication and update anomalies.

**19. What is a transaction?**  
A logical unit of database work that can be committed or rolled back.

**20. What does ACID stand for?**  
Atomicity, Consistency, Isolation, and Durability.

### Advanced

**21. What is a window function?**  
A function that calculates a result over a related set of rows while retaining the individual result rows.

**22. What is the difference between `RANK()` and `DENSE_RANK()`?**  
Both assign equal ranks to ties, but `RANK()` leaves gaps after ties while `DENSE_RANK()` does not.

**23. What is a composite index?**  
An index built from multiple columns; its usefulness depends on column order and the query pattern.

**24. How do you prevent SQL injection?**  
Use parameterized queries, least-privilege database permissions, and careful handling of untrusted input.

**25. Why might a query ignore an index?**  
The optimizer may estimate a scan is cheaper, the predicate may not match the index structure, or the index may not be selective enough.

**26. What is a correlated subquery?**  
A subquery that references columns from an outer query and may be evaluated in relation to each outer row, though optimizers can transform it.

**27. What is a deadlock?**  
A situation where transactions wait on each other's resources so none can proceed until the database detects and resolves the deadlock.

**28. What is isolation level?**  
A setting that controls which effects of concurrent transactions are visible to a transaction; exact behavior depends on the database.

**29. What is the difference between a clustered and nonclustered index?**  
The terms describe different index/storage organization concepts, but exact definitions and availability vary by database engine.

**30. What is a materialized view?**  
A stored result of a query that generally needs refreshing according to the database's rules, unlike a conventional view that stores a query definition.

**31. What is a recursive CTE used for?**  
It can query hierarchical or recursively related data, such as organization charts or category trees.

**32. Why use `EXPLAIN`?**  
It shows the database's planned or actual query execution steps, helping diagnose performance problems.

**33. What is referential integrity?**  
The consistency of relationships between referenced and referencing records, commonly enforced by foreign keys.

**34. What is denormalization?**  
Intentionally introducing some redundancy to meet performance or reporting requirements, while managing the consistency trade-offs.

**35. Why should you avoid `SELECT *` in production queries?**  
It can retrieve unnecessary columns, make code sensitive to schema changes, and increase data transfer.

## Final Learning Roadmap

1. Practice `SELECT`, `WHERE`, `ORDER BY`, and `LIMIT`.
2. Learn `INSERT`, `UPDATE`, `DELETE`, and NULL handling.
3. Master aggregates, `GROUP BY`, and `HAVING`.
4. Practice INNER, LEFT, and self joins.
5. Learn subqueries, CTEs, and window functions.
6. Understand keys, constraints, and normalization.
7. Learn transactions and ACID principles.
8. Add indexes based on query plans and measured workloads.
9. Build one complete database project and document the schema.
10. Practice writing queries from business requirements, not just memorizing syntax.

SQL proficiency comes from querying realistic data. Start with small tables, inspect results carefully, and learn how your chosen database engine handles dialect-specific features.
