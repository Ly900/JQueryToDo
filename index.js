"use strict";

var mysql = require('mysql');
var config = require('./config/config.js');

var dbHost = config.dbHost;
var dbUser = config.dbUser;
var dbUserPW = config.dbUserPW;
var dbName = config.dbName;

var connection = mysql.createConnection({
  host     : dbHost,
  user     : dbUser,
  password : dbUserPW,
  database : dbName
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
