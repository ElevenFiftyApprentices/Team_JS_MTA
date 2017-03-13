var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemsSchema = new Schema({
	contents: {
		type: String,
		default: ''
	},
	shoppingListId: {
		type: Number,
		default: 0
	},
	priority: {
		type: Number,
		default: 1
	},
	isChecked: {
		type: Boolean,
		default: false
	},
	specificUser: {
		type: String,
		default: ''
	}
});

module.exports = mongoose.model('listitem', ItemsSchema);