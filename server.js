//import all the required modules for the server
const express = require('express'); //import express module
const mysql = require('mysql');     //import mysql module
const app = express();              //create an instance of express
const PORT = process.env.PORT || 3001; //set the port number


//creat connection for the database
const db = mysql.createConnection({
    host: 'localhost',              //host name of the database server (localhost is the default for system)
    user: 'root',                   //user name for the database
    password: '',                   //password for the database 
    database: 'test'                // temporary name of the database
});

// create connection to the database
db.connect((err) => {
    if(err){                        //if there is an error in the connection
        throw err;                  //throw the error to the console to be displayed
    }
    console.log('MySql Connected...'); //if the connection is successful then display this message
});

//create database table for the database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS test'; //create a database named test if it does not exist
    db.query(sql, (err, result) => {             //query the database with the sql statement and store the result in the result variable
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    }
    );
});  

// listen to the port 3001
app.listen(PORT, () => {
        console.log('Server is running on port: ' + PORT); //display the message to the console
    }
);