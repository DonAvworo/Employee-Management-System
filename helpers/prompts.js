const inquirer = require('inquirer');

const promptMessages = {
    viewAllRoles: 'View all roles',
    viewAllDepartments: 'View all departments',
    viewAllEmployees: 'View all employees',
    viewAllEmployeesManager: 'View all employees without a manager',
    addRole: 'Add a role',
    addDepartment: 'Add a department',
    addEmployee: 'Add an employee',
    updateEmployeeRole: 'Update an employee role',
    updateEmployeeManager: 'Update an employee manager',
    deleteRole: 'Delete a role',
    deleteDepartment: 'Delete a department',
    deleteEmployee: 'Delete an employee',
    quit: 'Quit'
}

const prompt = async () => {
    const { choice } = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            promptMessages.viewAllRoles,
            promptMessages.viewAllDepartments,
            promptMessages.viewAllEmployees,
            promptMessages.viewAllEmployeesManager,
            promptMessages.addRole,
            promptMessages.addDepartment,
            promptMessages.addEmployee,
            promptMessages.updateEmployeeRole,
            promptMessages.updateEmployeeManager,
            promptMessages.deleteRole,
            promptMessages.deleteDepartment,
            promptMessages.deleteEmployee,
            promptMessages.quit
        ]
    })
    return choice  //return the choice to the main function to be used in the switch statement below(may need to change this to an object with the choice as the key and the value as the value(oop))
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
}

module.exports = prompt;
