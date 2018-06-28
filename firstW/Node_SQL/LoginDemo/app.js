var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var bodyParser=require("body-parser");

var session = require('express-session');
var app = express();

var mysql = require('mysql');
var con = mysql.createConnection({
	host : "localhost",
	user: "root",
	password: "root",
	database: "loginTest"
});

con.connect();
global.db = con;

app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'twig');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 60000}
}))

app.get('/', routes.index);

app.get('/signup', user.signup);
app.post('/signup', user.signup);

app.get('/login', user.login);
app.post('/login', user.login);

app.get('/home/dashboard', user.dashboard);
app.get('/home/logout', user.logout);
app.get('/home/profile', user.profile);

app.listen(8080);