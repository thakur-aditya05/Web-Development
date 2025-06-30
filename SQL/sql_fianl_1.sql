CREATE DATABASE college;
CREATE DATABASE xyzCompany;

DROP DATABASE xyzCompany;

USE college;


-- Step 1: Create the table
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(50),
    salary DECIMAL(10, 2)
);


INSERT INTO employees (id, name, position, salary) VALUES
(1, 'Alice Johnson', 'Manager', 75000.00),
(2, 'Bob Smith', 'Developer', 65000.00),
(3, 'Carol Lee', 'Designer', 60000.00),
(4, 'David Kim', 'Analyst', 58000.00),
(5, 'Eva Brown', 'Support', 50000.00);

-- to view data
SELECT * FROM employees;

CREATE DATABASE IF NOT EXISTS college;
DROP DATABASE IF EXISTS xyzCompany;

SHOW DATABASES;

USE college;
SHOW TABLES;

CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age >= 18),
    id INT,
    FOREIGN KEY (id) REFERENCES departments(dept_id)
);

INSERT INTO departments (dept_id, dept_name) VALUES
(1, 'Computer Science'),
(2, 'Mathematics'),
(3, 'Physics');


INSERT INTO students (student_id, name, email, age, dept_id) -- this order can be changed but same wrt to data given 
VALUES
(101, 'Alice Johnson', 'alice@example.com', 20, 1),
(102, 'Bob Smith', 'bob@example.com', 22, 1),
(103, 'Carol Lee', 'carol@example.com', 19, 2),
(104, 'David Kim', 'david@example.com', 21, 3),
(105, 'Eva Brown', 'eva@example.com', 23, 2);



-- keys our special column 
-- primary	key makes uniques and not null 
-- sirf ek  column ko hi primary key bana skte hai bs 
--  primary key column_name
--  combination of 2 column ko  primary key bhi bana skte hai   (id,name) 


-- foreign key is primary key of anither table 
-- linming b/w two tables 
-- foreign key (teacher_id) [yani jo foreign key hai wo] referance customer[table ka naam](id)[uss table ki primary key]
-- FOREIGN KEY (user_id) refrenace user(id) 
-- multiple foreign key is also possible  in onne table 

-- ctrl+R ---- > erdiagram  -->entity relation 

SELECT * FROM table_name;      -- Select all columns

SELECT column1, column2 FROM table_name;
SELECT name, age FROM students;

SELECT DISTINCT age  FROM user;




-- SQL PART 2 start from here 























































