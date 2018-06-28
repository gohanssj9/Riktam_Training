// GET HOME PAGE
exports.index = function(req,res){
	var message = '';
	res.render('index', {message: message});
};