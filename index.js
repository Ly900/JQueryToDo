"use strict";

var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'to_do_user',
  password : 'to_do_user',
  database : 'jquery_to_do'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
