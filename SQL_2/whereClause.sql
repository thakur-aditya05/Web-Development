-- kuch conditions le ke 

SELECT * FROM  user WHERE followers >=200;
SELECT name, followers FROM  user WHERE followers >=200;
SELECT name, age FROM  user WHERE age < 16 ;

-- where clause operatu operature 
SELECT name, age FROM user WHERE age+1=18


SELECT name followers,email, FROM user WHERE age IN (14,16);
SELECT name followers,email, FROM user WHERE age NOT IN (14,16);


-- limit clause 
SELECT name, age FROM  user WHERE age < 16 LIMIT 2;
SELECT name, age FROM  user LIMIT 2;


-- order by clause 
-- to sort in ASC or DESC
SELECT * FROM ORDER BY followers ASC

-- aggregate function 
-- aggregate function perform a calculation on set of avlue and return single value 
COUNT()
MAX()
MIN()
SUM()
AVG()

SELECT max(followers) FROM user;

SELECT count(age) FROM user WHERE age=14;

SELECT avg(age) FROM user ; 

-- grp by clause  
-- grp the rows that have same values into summary rows 
-- it collects data from multiple records and grps the result by one or more column 

-- 14 15 16 18 ka kya count kya hai ?
SELECT age, count(id) FROM user GROUP BY age;
-- max folower wala bnda find kr ke de do hrr grp me 
-- issko chat gpt me se dekhna ki isski kya condition hoti hai 
SELECT age, max(followers) FROM user GROUP BY age;



-- HAVING CLAUSE (conditoon on grp similar to where in condition)
-- Similar to the Where i.e applies some condition on rows 
-- But it it used when we want to apply any condition after grouping 

--  followers having greater then 200
SELECT age, max(followers) FROM user GROUP BY age HAVING max(followers)>200;

-- genreal order for writing multiple queries 
SELECT column(s)
FROM table_name
WHERE condition
GROUP BY column(s)
HAVING conditions
ORDER BY column(s) ASC; 
--  
SELECT age, max(followers) FROM user GROUP BY age HAVING max(followers)>200 ORDER BY age DESC;



-- table queries

-- upadte 
SET SQL_SAFE_UPDATES=0;  -- by default isski value 1 hoti hai and koi update nahi krne det hai 
UPDATE user SET followers =600 WHERE age=16 
SELECT * FROM  user ;

-- delete (to delete existing rows )
DELETE FROM user 
WHERE age =14   -- (if nahi likha to sb delete ho jayega )


-- table queries for changing schemas 
-- add column 
ALTER TABLE user --(tables_name) 
ADD COLUMN city VARCHAR(25) DEFAULT  "deklhi "; 

-- DROP column;
ALTER TABLE user 
DROP COLUMN age;


-- Rename 
ALTER TABLE user 
RENAME TO instaUser

-- just to rename schema 
ALTER TABLE user 
CHANGE COLUMN followers subs INT DEFAULT 0; 


-- MODIFY SCHEMA (modify datatype constarins )
ALTER TABLE table_name
MODIFY subs INT DEFAULT 5;




-- 
-- 
-- TRUNCATING KE kuch basic rules 
-- if primary key and foreign key ke beech relation exists krta hai to 
-- to phle ye relation destroy karo 
-- or either foreign key ke existing data ko hata do ya to PK-FK ke relations ko hata do 








DROP TABLE post;
TRUNCATE TABLE user; 


-- DROP me puri table hi gayab ho jati hai 
-- TRANCATE se puri table ka data khali ho jata hai Pr table fir bhi hoti hai 
-- but baad me jake uss table me add kr skte hai 












-- DOOING some question 
-- Practice Qs
-- Qs: Create a database for your college.
-- Create a table named Teacher to store (id, name, subject, salary)
-- Insert following data in the table:
-- 23, "ajay", "math", 50,000
-- 47, "bharat", "english", 60,000
-- 18, "chetan", "chemistry", 45,000
-- 9, "divya", "physics", 75,000


CREATE DATABASE IF NOT EXISTS college
USE college;

CREATE TABLE teacher (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    subject VARCHAR(50),
    salary INT
);

INSERT INTO teacher
(id, name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * FROM teacher1;

-- Practice Qs
-- Select teachers whose salary is more than 55K
-- Rename the salary column of teacher table to ctc
-- Update salary of all teachers by giving them an increment of 25%
-- Add a new column for teachers called city. The default city should be “Gurgaon”
-- Delete the salary column for teacher table

SELECT * FROM teacher WHERE salary > 5000;

ALTER TABLE teacher CHANGE COLUMN salary ctc INT; 

UPDATE teacher SET ctc = ctc + ctc*0.25

ALTER TABLE teacher ADD COLUMN city VARCHAR(50) DEFAULT "GURGAON";

ALTER TABLE teacher DROP COLUMN ctc;


-- Practice Qs
-- Qs: Create a table to store student info (roll_no, name, city, marks).
-- Insert following data in the table:
-- 110, "adam", "Delhi", 76
-- 108, "bob", "Mumbai", 65
-- 124, "casey", "Pune", 94
-- 112, "duke", "Pune", 80
CREATE TABLE student (
    rollno INT PRIMARY KEY,
    name VARCHAR(30),
    city VARCHAR(30),
    marks INT
);

INSERT INTO student
(rollno, name, city, marks)
VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT * FROM student;
Select all students who scored 75+


-- PRACTICE question 
-- Find names of all cities where students are from
-- Find the maximum marks of students from each city
-- Find the average of the class
-- Add a new column grade, assign grade such that:
-- marks > 80, grade = O
-- marks 70–80, grade = A
-- marks < 70, grade = B

SELECT * FROM student WHERE marks > 75;

SELECT DISTINCT city FROM student;
-- or
SELECT city FROM student GROUP BY city;


SELECT city, max(marks) FROM student GROUP BY city;

SELECT avg(marks) FROM student;

ALTER TABLE student 
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade="O"
WHERE marks >=80;

UPDATE student
SET grade="A"
WHERE marks >=70 AND marks < 80;

UPDATE student
SET grade="B"
WHERE marks >= 60 AND marks < 70;

SELECT * FROM student; 