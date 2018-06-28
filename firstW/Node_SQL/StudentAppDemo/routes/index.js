//For Home Page
var express = require('express');
var app = express();
app.get('/',function(req, res){
	res.render('index', {title : "A Student Form Application"});
});
module.exports = app;