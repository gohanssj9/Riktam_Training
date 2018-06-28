/* Working on databases
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected !");
	con.query("drop database toBeDeleted", function(err,result){
		if(err) throw err;
		console.log("Result: " + result);
	});
});
*/

/* Working on queries now
var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "testing"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");

	var sqlQ = "INSERT INTO SqlTest(name, existing) values('Naruto', 1),('Sasuke', 0)";
	con.query(sqlQ, function(err, result){
		if(err) throw err;
		console.log("Records Inserted");
	});
});

// AllQueries
var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "testing"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");

	var sqlQ = "SELECT * FROM SqlTest";
	con.query(sqlQ, function(err, result, fields){
		if(err) throw err;
		console.log(result);
	});
});
*/

var mysql = require('mysql');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "testing"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");

	var sqlQ = "DELETE FROM SqlTest WHERE id = 3 or id = 4";
	con.query(sqlQ, function(err, result){
		if(err) throw err;
		console.log("Records Deleted");
		console.log("Number of records deleted: " + result.affectedRows);
	});
});
