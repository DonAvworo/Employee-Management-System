//import all the required modules for the server
// const mysql = require('mysql');                     //import mysql module
const app = express();                              //create an instance of express
const PORT = process.env.PORT || 3001;              //set the port number
const inquirer = require('inquirer');               //import inquirer module

//create database table for the database
app.get('/createdb', (req, res) => {                //create a get request for the createdb route and pass a callback function
    let sql = 'CREATE DATABASE IF NOT EXISTS test'; //create a database named test if it does not exist
    db.query(sql, (err, result) => {                //query the database with the sql statement and store the result in the result variable
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    }
    );
});  

// listen to the port 3001 via the .env variable (imported from the .env file (variable) attached to the connections.js file inside utils/connections.js)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});