var Cookbook = require('../models/cookbook.js');

exports.addMeal = function(req,res,next){
	//for postman user
	//var title = req.body.title;
	var title = req.body.props.title;
	var category = req.body.props.category;
	var url = req.body.props.url;
	var ingredients = req.body.props.ingredients;
	var directions = req.body.props.directions;
	var specificUser = req.user._id;

	var cookBook = new Cookbook({
		title: title,
		category: category,
		url: url,
		ingredients: ingredients,
		directions: directions,
		specificUser: specificUser
	});

	cookBook.save(function(err){
		if(err) { return next(err); }
		res.json(cookBook);
	});
}

exports.fetchCookBooks = function(req, res) {
	var specificUser = req.user._id;
	Cookbook.find({specificUser: specificUser})
	.then(
		function fetchSuccess(data) {
			res.json(data);
		},
		function fetchError(err) {
			res.send(500, err.message);
		}
	);
}

exports.fetchCookBook = function(req, res){
	var specificCookbook = req.params.id;
	Cookbook.findOne({_id: specificCookbook})
	.then(
		function fetchSuccess(data){
			res.json(data);
		},
		function fetchError(err){
			res.send(500, err.message);
		}
	);
}

exports.deleteCookBook = function(req, res) {
	var specificCookbook = req.params.id;
	Cookbook.remove({_id: specificCookbook})
	.then(
		function deleteSuccess(data){
			res.json(data);
		},
		function deleteError(err){
			res.send(500, err.message);
		}
	);
}