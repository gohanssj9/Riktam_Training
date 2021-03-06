var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mysql = require('mysql');
var fs = require('fs');

var app = express();
app.use(methodOverride('_method'));
app.use(express.static(__dirname ));

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'loginTest'
});

con.connect(function(err){
	if(err) console.log("An Error occurred!")
	console.log("Connected!");
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//rest api to get all results
app.get('/student', function (req, res) {
   	con.query('select * from student;', function (error, results, fields) {
	  if (error) console.log("An Error occurred !");;
	  var data = JSON.stringify(results, null, 2);
	  res.send(data);
	});
});

// Fetch single record
app.get('/student/:id', function (req, res){
	con.query('select * from student where id = ?', [req.params.id], function (error, results, fields){
		if(error) console.log("An Error occurred !");
		var data = JSON.stringify(results, null, 2);
	  	res.send(data);
	});
});

// Single request, multiple outlets
app.post('/student', function (req, res){
	var postData = req.body;
	console.log(postData);
	if(postData._method == 'delete'){
		con.query('DELETE FROM student WHERE id=?', [postData.id], function (error, results, fields) {
 	  		if (error) console.log("An Error occurred !");
 	  		res.send('Record has been deleted!');
 		});
	}
	else if(postData._method == 'put'){
		con.query('UPDATE student SET name = ?, age = ? where id = ?', [postData.name, postData.age, postData.id], function (error, results, fields) {
			if (error) console.log("An Error occurred !");;
			res.send('Updated record!');
		});
	}
	else{
		con.query('INSERT INTO student SET ?', postData, function (error, results, fields) {
			if (error) console.log("An Error occurred !");;
			res.send('Successful entry!');
		});
	}
})
app.listen(8000);
