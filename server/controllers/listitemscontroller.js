var ListItem = require('../models/listitem.js');

exports.addListItem = function(req,res,next){
	//for postman user
	//var title = req.body.title;
	var contents = req.body.props.contents;
	var shoppingListId = req.body.cookbook._id;
	var priority = req.body.props.priority;
	var isChecked = req.body.props.isChecked;
	var specificUser = req.user._id;

	var listItem = new ListItem({
		contents: contents,
		shoppingListId: shoppingListId,
		priority: priority,
		isChecked: isChecked,
		specificUser: specificUser
	});

	listItem.save(function(err){
		if(err) { return next(err); }
		res.json(cookBook);
	});
}

exports.fetchListItems = function(req, res) {
	var specificUser = req.user._id;
	ListItem.find({shoppingListId: shoppingListId})
	.then(
		function fetchSuccess(data) {
			res.json(data);
		},
		function fetchError(err) {
			res.send(500, err.message);
		}
	);
}

// exports.fetchCookBook = function(req, res){
// 	var specificCookbook = req.params.id;
// 	Cookbook.findOne({_id: specificCookbook})
// 	.then(
// 		function fetchSuccess(data){
// 			res.json(data);
// 		},
// 		function fetchError(err){
// 			res.send(500, err.message);
// 		}
// 	);
// }

// exports.deleteCookBook = function(req, res) {
// 	var specificCookbook = req.params.id;
// 	Cookbook.remove({_id: specificCookbook})
// 	.then(
// 		function deleteSuccess(data){
// 			res.json(data);
// 		},
// 		function deleteError(err){
// 			res.send(500, err.message);
// 		}
// 	);
// }