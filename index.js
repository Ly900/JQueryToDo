"use strict";

var mysql = require('mysql')

<<<<<<< HEAD
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'to_do_user',
  password : 'to_do_user',
  database : 'jquery_to_do'
});

connection.connect()
=======
connection.connect();
>>>>>>> 5f73ebf9cae9e49de223d8526187db38a14157d9

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

<<<<<<< HEAD
connection.end()
=======
connection.end();
>>>>>>> 5f73ebf9cae9e49de223d8526187db38a14157d9
