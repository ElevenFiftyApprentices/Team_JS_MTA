var mongoose = mongoose.Schema;
var Schema = mongoose.Schema;
var userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	password: String
});
var model = mongoose.model('user', userSchema);
module.export = model;