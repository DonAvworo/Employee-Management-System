// create read updat delete functions for the database
class Crud {
    constructor(connection) {                       //create a constructor function for the crud class and pass the connection as a parameter
        this.connection = connection;               //set the connection to the connection parameter
    }

    //create a method to add a new role to the database
    addRole = (title, salary, department) => {
        return this.connection.promise().query(
            `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);`, [title, salary, department]
        );
    }

    //create a method to add a new department to the database
    addDepartment = (name) => {
        return this.connection.promise().query(
            `INSERT INTO department (name) VALUES (?);`, [name]
        );
    }

    //create a method to add a new employee to the database
    addEmployee = (firstName, lastName, role, manager) => {
        return this.connection.promise().query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`, [firstName, lastName, role, manager]
        );
    }

    //create a method to update an employee's role
    updateEmployeeRole = (id, role) => {
        return this.connection.promise().query(
            `UPDATE employee SET role_id = ? WHERE id = ?;`, [role, id]
        );
    }

    //create a method to update an employee's manager
    updateEmployeeManager = (id, manager) => {
        return this.connection.promise().query(
            `UPDATE employee SET manager_id = ? WHERE id = ?;`, [manager, id]
        );
    }
}


//TODOcreate a method to delete an employee from the database
//TODOcreate a method to delete a role from the database
//TODOcreate a method to delete a department from the database
//TODOcreate a method to view all the employees by department
//TODOcreate a method to view all the employees by manager
//TODOcreate a method to view all the roles by department
//TODOcreate a method to view all the departments by employee

//export the crud class
module.exports = {
    Crud: Crud
}