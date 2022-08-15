-- this is where the database schema (the table structure of the database) is defined

-- create the data base if it doesn't exist
DROP DATABASE IF EXISTS EmployeeDB;
CREATE DATABASE IF NOT EXISTS EmployeeDB; -- EmployeeDB is the name of the database that is created
USE EmployeeDB;                           -- use the database that is created above

-- create the table that will hold the department data
CREATE TABLE IF NOT EXISTS department (
  id int(11) NOT NULL AUTO_INCREMENT PTIMARY KEY,  -- primary key is auto incremented and not null and will be the id of the department table 
  name varchar(30) NOT NULL,                       -- name of the department is not null and will be the name of the department table
  PRIMARY KEY (id)                                 -- primary key is the id of the department table
); 

-- create table for the role data
CREATE TABLE IF NOT EXISTS employee_role (
  id NOT NULL AUTO_INCREMENT PRIMARY KEY,         -- primary key is auto incremented and not null and will be the id of the role table
  title varchar(30) NOT NULL,                     -- title of the role is not null and will be the title of the role table
  salary DECIMAL(10,2) NOT NULL,                  -- salary of the role is not null and will be the salary of the role table                      
  department_id int(11) NOT NULL                  -- department id of the role is not null and will be the department id of the role table
  FOREIGN KEY (department_id) REFERENCES department(id) -- foreign key is the department id of the role table and will reference the department table to any changes made to the department table
);


-- create table for the employee data
CREATE TABLE IF NOT EXISTS employee (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, -- primary key is auto incremented and not null and will be the id of the employee table
  first_name varchar(30) NOT NULL,                -- first name of the employee is not null and will be the first name of the employee table
  last_name varchar(30) NOT NULL,                 -- last name of the employee is not null and will be the last name of the employee table
  role_id int(11) NOT NULL,                       -- role id of the employee is not null and will be the role id of the employee table
  manager_id int(11) NOT NULL REFERENCES employee(id) -- manager id hols the reference to the employee table and will be the manager of the employee table
);



