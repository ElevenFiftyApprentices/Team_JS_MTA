var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CookbookSchema = new Schema({
	title: {
		type: String,
		default: ''
	},
	color: {
		type: String,
		default: ''
	},
	items: [
		{
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
		},
		notes: {
			type: String,
			default: ''
		}
	}
],

	specificUser: {
		type: String,
		default: ''
	}
});

module.exports = mongoose.model('cookbook', CookbookSchema);