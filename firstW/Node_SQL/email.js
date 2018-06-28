var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'majinvegito111@gmail.com',
		pass: 'pythont)p@r'
	}
});

var mailOptions = {
	from: 'majinvegito111@gmail.com',
	to: 'majinvegito01@gmail.com',
	subject: 'Sending email using NodeJS',
	text: 'That was cool!'
};

transporter.sendMail(mailOptions, function(error, info){
	if(error) console.log(error);
	else console.log('Email sent: ' + info.response);
});

//Failed due to non access to less secure apps by Google.