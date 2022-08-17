const inquirer = require('inquirer');                                   //import inquirer module
const crud = require ('crud.js');                                       //import the crud class from the crud.js file

//create an instance of the crud class so it can be used in the functions below
const crud = new crud(connection);      

//create an object to store all the messages to be used in the prompts
const promptMessages = {                               
    viewAllRoles: 'View all roles',                                     //create a property for the viewAllRoles message and set it to the message
    viewAllDepartments: 'View all departments',                         //create a property for the viewAllDepartments message and set it to the message
    viewAllEmployees: 'View all employees',                             //create a property for the viewAllEmployees message and set it to the message
    viewAllEmployeesManager: 'View all employees without a manager',    //create a property for the viewAllEmployeesManager message and set it to the message
    addRole: 'Add a role',                                              //create a property for the addRole message and set it to the message
    addDepartment: 'Add a department',                                  //create a property for the addDepartment message and set it to the message
    addEmployee: 'Add an employee',                                     //create a property for the addEmployee message and set it to the message
    updateEmployeeRole: 'Update an employee role',                      //create a property for the updateEmployeeRole message and set it to the message
    updateEmployeeManager: 'Update an employee manager',                //create a property for the updateEmployeeManager message and set it to the message 
    deleteRole: 'Delete a role',                                        //create a property for the deleteRole message and set it to the message 
    deleteDepartment: 'Delete a department',                            //create a property for the deleteDepartment message and set it to the messag
    deleteEmployee: 'Delete an employee',                               //create a property for the deleteEmployee message and set it to the message
    quit: 'Quit'                                                        //create a property for the quit message and set it to the message
}

//create an object to store all the questions to be used in the prompts (menu)
const prompt = async () => {
    const { choice } = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            promptMessages.viewAllRoles,                                //display the viewAllRoles message
            promptMessages.viewAllDepartments,                          //display the viewAllDepartments message
            promptMessages.viewAllEmployees,                            //display the viewAllEmployees message
            promptMessages.viewAllEmployeesManager,                     //display the viewAllEmployeesManager message
            promptMessages.addRole,                                     //display the addRole message
            promptMessages.addDepartment,                               //display the addDepartment message
            promptMessages.addEmployee,                                 //display the addEmployee message
            promptMessages.updateEmployeeRole,                          //display the updateEmployeeRole message
            promptMessages.updateEmployeeManager,                       //display the updateEmployeeManager message
            promptMessages.deleteRole,                                  //display the deleteRole message
            promptMessages.deleteDepartment,                            //display the deleteDepartment message
            promptMessages.deleteEmployee,                              //display the deleteEmployee message
            promptMessages.quit                                         //display the quit message
        ]
    })
    return choice                                       //return the choice to the main function to be used in the switch statement below
    .then(answer => {
        switch (answer) {                               //switch statement to determine which function to call based on the choice made by the user
            case promptMessages.viewAllRoles:
                return viewAllRoles();                  //call the viewAllRoles function and return the result
                // break;                               //break out of the switch statement and return the result can be used instead of return to return the result of the function
                                                        //break is not needed because return will break out of the switch statement
            case promptMessages.viewAllDepartments:
                return viewAllDepartments();
            case promptMessages.viewAllEmployees:
                return viewAllEmployees();
            case promptMessages.viewAllEmployeesManager:
                return viewAllEmployeesManager();
            case promptMessages.addRole:
                return addRole();
            case promptMessages.addDepartment:
                return addDepartment();
            case promptMessages.addEmployee:
                return addEmployee();
            case promptMessages.updateEmployeeRole:
                return updateEmployeeRole();
            case promptMessages.updateEmployeeManager:
                return updateEmployeeManager();
            case promptMessages.deleteRole:
                return deleteRole();
            case promptMessages.deleteDepartment:
                return deleteDepartment();
            case promptMessages.deleteEmployee:
                return deleteEmployee();
            case promptMessages.quit:
                return quit();
        }
    })

    // .catch(err => {
    //     console.log(err);
    // }
    // );
}

//loop through the prompt function until the user chooses to quit
const main = async () => {      
    let choice = await prompt();                    //store the result of the prompt function in the choice variable
    while (choice !== promptMessages.quit) {        //while the choice is not equal to the quit message, keep looping
        choice = await prompt();                    //store the result of the prompt function in the choice variable
    }
}

//call the main function to start the program
main();

module.exports = prompt; 
