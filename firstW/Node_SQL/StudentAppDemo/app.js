var express = require('express');
var app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "loginTest"
});

con.connect();
global.db = con;

app.set('view engine', 'twig');

var index = require('./routes/index');
var users = require('./routes/user');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', index);
app.use('/users', users);

app.listen(8000);