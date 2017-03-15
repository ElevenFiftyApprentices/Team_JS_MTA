var Cookbook = require('../models/cookbook.js');

exports.addMeal = function(req,res,next){
	//for postman user
	//var title = req.body.title;
	var title = req.body.props.title;
	var color = req.body.props.color;
	var specificUser = req.user._id;

	var cookBook = new Cookbook({
		title: title,
		color: color,
		specificUser: specificUser
	});

	cookBook.save(function(err){
		if(err) { return next(err); }
		res.json(cookBook);
	});
}

exports.addListItem = function(req, res, next) {
	var contents = require.body.props.contents;
	var shoppingListId = require.body.props.shoppingListId;
	var priority = require.body.props.priority;
	var isChecked = require.body.props.isChecked;
	var notes = require.body.props.notes;

	var item = new items({
		contents: contents,
		shoppingListId: shoppingListId,
		priority: priority,
		isChecked: isChecked,
		notes: notes
	});

	item.push(function(err){
		if(err) { return next(err); }
		res.json(item)
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