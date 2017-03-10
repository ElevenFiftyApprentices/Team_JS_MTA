var Auth = require('./controllers/auth');
var User = require('./models/user');

module.exports = function(app){
	app.get('/', function(req, res, next){
		res.send("test");
	})
}
//To finish the users portion go to module 5, 6, 7, 8, and 9.
