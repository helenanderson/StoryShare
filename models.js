var Mongoose = require('mongoose');


var StorySchema = new Mongoose.Schema({
	"title": String,
	"sentences": Number,
	"text": String,
	"totalVotes": Number,
	"totalChoices": Number,
	"multipleChoices": [String],
	"votesPerChoice": [Number]
});


exports.Story = Mongoose.model('Story', StorySchema);

