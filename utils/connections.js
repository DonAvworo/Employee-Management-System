// create a connection to the database
const mysql = require('mysql');
require('dotenv').config();

const connections = mysql.createConnection({       //create a connection to the database
    host: 'localhost',                             //set the host to localhost 
    user: 'root',                                  //set the user to root  
    password: '',                                  //set the password ******** (hidden)
    database: 'test'                               //set the database to 
});

connections.connect((err) => {                     //connect to the database
    if(err) throw err;                             //if there is an error throw it
    console.log('Connected to the database...');   //if there is no error print the message
});

module.exports = connections;                      //export the connection to the server.js file


