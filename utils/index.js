const connections = require('./connections');       //import the connections file from the utils folder and store it in the connections variable
const prompts = require('./helpers/prompts');       //import the prompts file from the utils folder and store it in the prompts variable

//run the prompts function and pass the result to the main function
prompts()                                           //run the prompts function and pass the result to the main function
.then(result => {                                   //when the result is returned from the prompts function ...
    main(result);                                   //...run the main function and pass the result to it
}).catch(err => {                                   //if there is an error ...
    console.log(err);                                //...log the error to the console
}
);


//create a class for the database connection using a constructor function
class Database {
    constructor(connection) {                       //create a constructor function for the database class and pass the connection as a parameter
        this.connection = connection;               //set the connection to the connection parameter
    }
    
    //create a method to view all the roles in the database
    viewAllRoles = () => {
        return this.connection.promise().query(
            `SELECT role.title, employee.first_name, employee.last_name, employee.id, department.name AS department
            FROM employee LEFT JOIN role ON employee.role_id = role.id 
            LEFT JOIN department ON role.department_id = department.id;
            ORDER BY employee.id;` 
        );
    }

    //create a method to view all the departments in the database
    viewAllDepartments = () => {
        return this.connection.promise().query(
            `SELECT department.name As department, employee.id, employee.first_name, employee.last_name, role.title
            FROM employee LEFT JOIN role ON employee.role_id = role.id 
            LEFT JOIN department ON role.department_id = department.id
            GROUP BY department.name, department.id;
            ORDER BY department.id;` 
        );
    }

    //create a method to view all the employees in the database
    viewAllEmployees = () => {
        return this.connection.promise().query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department
            FROM employee LEFT JOIN role ON employee.role_id = role.id 
            LEFT JOIN department ON role.department_id = department.id
            ORDER BY employee.id;` 
        );
    }
        
    //create a method for the manager view to view all the employees in the database
    viewAllEmployeesManager = () => {
        return this.connection.promise().query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department
            FROM employee LEFT JOIN role ON employee.role_id = role.id 
            LEFT JOIN department ON role.department_id = department.id
            WHERE employee.manager_id IS NULL
            ORDER BY employee.id;` 
        );
    }
}

//export the database class
module.exports = new Database(connections);       //export the database class and pass the connection as a parameter to the constructor function
