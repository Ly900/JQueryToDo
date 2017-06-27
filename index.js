"use strict";

var express = require('express');
var mysql = require('mysql');
var config = require('./config/config.js');

var dbHost = config.dbHost;
var dbUser = config.dbUser;
var dbUserPW = config.dbUserPW;
var dbName = config.dbName;

var con = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbUserPW,
  database: dbName
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


var sql1 = 'SELECT * FROM to_do_table';
var sql2 = 'INSERT INTO to_do_table (to_do_body) VALUES (\"Exercise3.\")';
var sql3 = 'INSERT INTO to_do_table (to_do_body) VALUES (\"Wash dishes.\")';

con.query('TRUNCATE TABLE to_do_table');

con.query(sql1, function(err, rows, fields) {
  if (err) throw err
  console.log("Result beginning: " + rows);
});

con.query(sql2, function(err, rows, fields) {
  if (err) throw err;
});

con.query(sql3, function(err, rows, fields) {
  if (err) throw err;
});

con.query(sql1, function(err, rows, fields) {
  if (err) throw err;

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    console.log("Rows after: " + row.to_do_body);
  }

});


con.end()
