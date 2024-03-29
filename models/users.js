var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	profilePicture: { type: String },
});

module.exports = mongoose.model('users', UserSchema);
