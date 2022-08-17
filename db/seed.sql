-- the seed file is used to create the database structure  and seed the database with some data eg the departments and the employees
-- All departments are seeded with the following data: (viewAllDepartments)
INSERT INTO department (name) VALUES
('Front End Team'),                      -- this will be inserted into the department table and will be the name of the department
('Back End Team'),                       -- this will be inserted into the department table and will be the name of the department
('QA Team'),                             -- this will be inserted into the department table and will be the name of the department
('DevOps Team'),                         -- this will be inserted into the department table and will be the name of the department
('Management');                          -- this will be inserted into the department table and will be the name of the department

INSERT INTO role (title, salary, department_id) VALUES
('Junior Software Engineer', 100000, 1), -- this will be inserted into the role table and will be the title of the role
('Software Engineer', 200000, 5),        -- this will be inserted into the role table and will be the title of the role
('Senior Software Engineer', 300000, 5), -- this will be inserted into the role table and will be the title of the role
('QA Engineer', 400000, 4),              -- this will be inserted into the role table and will be the title of the role
('DevOps Engineer', 500000, 4),          -- this will be inserted into the role table and will be the title of the role
('Manager', 600000, 3);                  -- this will be inserted into the role table and will be the title of the role

INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES
('Moe', 'Doe', 1, 1),                    -- this will be inserted into the employee table and will be the first name of the employee
('Plain T', 'Moonie', 2, 1),             -- this will be inserted into the employee table and will be the first name of the employee
('Joe', 'Doe', 3, 1),                    -- this will be inserted into the employee table and will be the first name of the employee
('Jill', 'Bills', 4, 1),                 -- this will be inserted into the employee table and will be the first name of the employee
('Ten', 'Mil', 5, 1),                    -- this will be inserted into the employee table and will be the first name of the employee
('Payy', 'Mei', 6, 1);                   -- this will be inserted into the employee table and will be the first name of the employee