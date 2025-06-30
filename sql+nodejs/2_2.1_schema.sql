SHOW TABLES;
-- go to sql CLI 
--  /usr/local/mysql/bin/mysql -u root -p 
--   enter the mysql passwoard : 
-- mysql> use delta_app
-- mysql> source schema.sql 


-- lets run this file for bigger query only 

CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

-- mysql> source schema.sql 
-- mysql> SHOW TABLES