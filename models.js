var Mongoose = require('mongoose');


var StorySchema = new Mongoose.Schema({
	"title": String,
	"sentences": Number,
	"text": String,
	"votes": Number
});

exports.Story = Mongoose.model('Story', StorySchema);

