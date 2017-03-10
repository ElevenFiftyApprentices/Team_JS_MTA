var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config');

function createUserToken(user){
	var timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

exports.signup = function(req, res, next){
	//test
	// res.send('authorization is happening, yo');
	// console.log(req.body);
	// take in the request, get & store the incoming request data in a variable
	var email = req.body.email;
	var password = req.body.password;
	if(!email || !password){
		return res.status(418).send({error: 'You must provide email and pw.'})
	}
	//check if a user with email exsis

	User.findOne({ email: email }, function(err, existingUser){
		if(err){
			return next(err);
		}//handle search error

		if(existingUser){
			return res.status(418).send(err);
			//alternative: return res.status(418).send('Email is in use');
		}//handles existing errors
	
	//create a user if that user doesnt exsist already
		var user = new User({
			email: email,
			password: password
		});
		//show a response to the user
			//save to db
		user.save(function(err){
			if(err){ return next(err); }
			res.json({ token: createUserToken(user)});
		});
			//respond to request indicating the user was created

	});	
}

exports.signin = function(req, res, next){
	res.send({ token: createUserToken(req.user) });
}