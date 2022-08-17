// create read updatE delete functions for the database

//TODO create a method to add to the database
class CREATE {
    constructor(connection) {                       //create a constructor function for the crud class and pass the connection as a parameter
        this.connection = connection;               //set the connection to the connection parameter
    }

    //create a method to add a new role to the database
    addRole = (title, salary, department) => {
        return this.connection.promise().query(
            `INSERT INTO role (title, salary, department_id) 
            VALUES (?, ?, ?);`, [title, salary, department]         //THE ? IS THE PLACEHOLDER FOR THE VALUE
        );
    }

    //create a method to add a new department to the database
    addDepartment = (name) => {
        return this.connection.promise().query(
            `INSERT INTO department (name) VALUES (?);`, [name]                                         //THE ? IS THE PLACEHOLDER FOR THE VALUE
        );
    }

    //create a method to add a new employee to the database
    addEmployee = (firstName, lastName, role, manager) => {
        return this.connection.promise().query(
            `INSERT INTO employee (first_name, last_name, 
            role_id, manager_id) VALUES (?, ?, ?, ?);`, 
            [firstName, lastName, role, manager]                    //THE ? IS THE PLACEHOLDER FOR THE VALUE
        );
    }
}

//TODO create a method to view the database
class READ {
    constructor(connection) {                       //create a constructor function for the view class and pass the connection as a parameter
        this.connection = connection;               //set the connection to the connection parameter
    }

    //create a method to view all the employees by department
    viewEmployeesByDepartment = () => {
        return this.connection.promise().query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, 
            department.name AS department, role.salary FROM employee LEFT JOIN role ON 
            employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;`
        );
    }

     //create a method to view all the employees by manager
     viewEmployeesByManager = () => {
        return this.connection.promise().query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, 
            department.name AS department, role.salary FROM employee LEFT JOIN role ON 
            employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;`
        );
    }

     //create a method to view all the roles by department
     viewRolesByDepartment = () => {
        return this.connection.promise().query(
            `SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON 
            role.department_id = department.id;`
        );
    }

     //create a method to view all the departments by employee
     viewDepartmentsByEmployee = () => {
        return this.connection.promise().query(
            `SELECT department.id, department.name AS department, employee.first_name, 
            employee.last_name FROM department LEFT JOIN employee ON department.id = employee.department_id;`
        );
    }

     //create a method to view all the employees by role
     viewEmployeesByRole = () => {
        return this.connection.promise().query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, 
            department.name AS department, role.salary FROM employee LEFT JOIN role ON 
            employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;`
        );
    }

     //create a method to view all the employees by manager
     viewEmployeesByManager = () => {
        return this.connection.promise().query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, 
            department.name AS department, role.salary FROM employee LEFT JOIN role ON 
            employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;`
        );
    }
}

//TODO create a method to update the database
class UPDATE {
    constructor(connection) {                       //create a constructor function for the crud class and pass the connection as a parameter
        this.connection = connection;               //set the connection to the connection parameter
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

//TODO create a method to delete from the database
class DELETE {
    constructor(connection) {                       //create a constructor function for the crud class and pass the connection as a parameter
        this.connection = connection;               //set the connection to the connection parameter
    }
    
    //create a method to delete an employee from the database
    deleteEmployee = (id) => {
        return this.connection.promise().query(
            `DELETE FROM employee WHERE id = ?;`, [id]
        );
    }

    //create a method to delete a role from the database
    deleteRole = (id) => {
        return this.connection.promise().query(
            `DELETE FROM role WHERE id = ?;`, [id]
        );
    }

    //create a method to delete a department from the database
    deleteDepartment = (id) => {
        return this.connection.promise().query(
            `DELETE FROM department WHERE id = ?;`, [id]
        );
    }
}

module.exports = {
    CREATE,
    READ,
    UPDATE,
    DELETE
}

  