var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CookbookSchema = new Schema({
	title: {
		type: String,
		default: ''
	},
	category: {
		type: String,
		default: ''
	},
	url: {
		type: String,
		default: ''
	},
	ingredients: {
		type: String,
		default: ''
	},
	directions: {
		type: String,
		default: ''
	},
	specificUser: {
		type: String,
		default: ''
	}
});

module.exports = mongoose.model('cookbook', CookbookSchema);