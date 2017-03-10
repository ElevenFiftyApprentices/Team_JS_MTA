var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoppingListSchema = new Schema({
	name: {
		type: String, 
		default: ''
	},
	quantity: {
		type: Number,
		default: ''
	},
	note: {
		type: String,
		default: ''
	}
});
module.exports = mongoose.model('BucketList', BucketListSchema);