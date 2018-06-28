var express = require('express');
var app = express();

//Show all Records - showAll
app.get('/', function(req, res, next){
	console.log("Hello, World!");
	var query = "SELECT * FROM student ORDER BY id";
	db.query(query, function(err, result, fields){
		console.log(result);
		res.render('user/list',{title: 'Records: ', data: result});
	});
});

//Show Add Record Form - showAddRecord
app.get('/add', function(req, res, next){
	console.log("Hello, World-2!");
	res.render('user/add', { title: "Add New User", id: '', name: '', age: ''});
});

//Add New Record - addRecord
app.post('/add',function(req, res, next){
	console.log("Hello, World!-3");
	var post = req.body;
	var id = post.id;
	var name = post.name;
	var age = post.age;
	console.log(post);
	var query = "INSERT INTO student (id, name, age) VALUES (" + id + "'" + name + "'," + age + ");";
	db.query(query, function(err, result){
		console.log(result);
		res.render('user/add', {title: 'Add New User', id: id, name: name, age: age});
	});
	//res.redirect('/', {title: "Added New User"});
});

//Show Edit Record Form - showEditRecord
app.get('/edit/(:id)', function(req, res, next){
	console.log("Hello, World!-4");
	var query = "SELECT * FROM student WHERE id = " + req.params.id + ";";
	db.query(query, function(err, result, fields){
		if(err) throw err;
		if(result.length <=0) res.redirect('/users');
		else{
			res.render('user/edit', {title: "Edit User", id: result[0].id, name: result[0].id, age: result[0].id});
		}
		console.log(result);
	});
});

//Edit Record After Updating Records - editRecord
app.put('/edit/(:id)', function(req, res, next){
	console.log("Hello, World!-5");
	var query = "UPDATE student SET name = " + req.body.name + "and age = " + req.body.age + " WHERE id = " + req.body.id + ";";
	db.query(query, function(err, result, fields){
		if(err) throw err;
		else res.render('user/edit', {title: "Edited User", id: req.body.id, name: req.body.name, age: req.body.age});
		console.log(result);
	});
});

// Delete Record - deleteRecord
app.delete('/delete/(:id)', function(req, res, next){
	console.log("Hello, World!-6");
	var query = "DELETE FROM student WHERE id = " + req.params.id + ";";
	db.query(query, function(err, result){
		console.log(result);
		res.redirect('/users');
	});
});

module.exports = app;