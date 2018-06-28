// signup call
exports.signup = function(req,res){
	message = '';
	if(req.method == "POST"){
		var post = req.body;
		console.log(req.body);
		var name = post.user_name;
		var pass = post.password;
		var fname = post.first_name;
		var lname = post.last_name;
		var mob = post.mob_no;

		var sql = "INSERT INTO users (first_name, last_name, mob_no, user_name, password) VALUES ('" + fname + "', '" + lname + "','" + mob + "', '" + name + "', '" + pass + "');";
		console.log(sql);
		db.query(sql, function(err,result){
			console.log(err);
			console.log(result);
			message = "Successful creation of Account !";
			res.render('index.twig', {message: message});
		});
		}
		else{
			res.render('signup');
		}
};

//login call
exports.login = function(req,res){
	message = '';
	if(req.method == "POST"){
		var post = req.body;
		var name = post.user_name;
		var pass = post.password;

		var sql = "SELECT id, first_name, last_name, user_name FROM users WHERE user_name = '" + name + "' and password = '" + pass + "';";
		console.log(sql);
		db.query(sql, function(err,result){
			if(result.length){
				req.session.userId = result[0].id;
				req.session.user = result[0];
				console.log(result[0].id);
				res.redirect('/home/dashboard');
			}
			else{
				message: 'Wrong Credentails';
				res.render('index.twig', {message: message});
			}
		});
	}
	else res.render('index.twig', {message: message});
};

//dashboard functionality
exports.dashboard = function(req, res, next){
	var user = req.session.user;
	userId = req.session.userId;
	console.log("dashboard userId: " +userId);

	if(userId == null){
		res.redirect("/login");
		return;
	}

	var sql = "SELECT * FROM users WHERE id = '" + userId + "';";
	db.query(sql, function(err, result){
		res.render('dashboard.twig', {user: user});
	});
};

//logout functionality
exports.logout = function(req, res){
	req.session.destroy(function(err){
		res.redirect("/login");
	})
};

//after login user details
exports.profile = function(req, res){
	var userId = req.session.userId;
	if(userId == null){
		res.redirect("/login");
		return;
	}

	var sql = "SELECT * FROM users WHERE id = '" + userId + "';";
	db.query(sql, function(err, result){
		res.render('profile.twig', {data: result});
	});
};

//edit profile
exports.editprofile = function(req, res){
	var userId = req.session.userId;
	if(userId == null){
		res.redirect("/login");
		return;
	}

	var sql = "SELECT * FROM users WHERE id = '" + userId + "';";
	db.query(sql, function(err, result){
		res.render('edit_profile.twig', {data: result});
	});
};