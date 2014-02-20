var data = require( '../storyData.json');
var models = require('../models.js');

exports.view = function(req, res){
	var storyID = req.params.id;
	console.log(storyID);
	models.Story
		.find({"_id": storyID})
		.exec(afterStoryQuery)
	

	function afterStoryQuery(err, stories) {
		if(err) console.log(err);
		console.log(stories[0]);
		// var story = JSON.stringify(stories[0]);
		var story = stories[0];
		story["finished"]=story.sentences < 10;
		console.log(story.finished);
		res.render("StoryPage", story);
	}
	// storyData._finished = storyData.sentences < 10;
	// res.render("StoryPage", Story);
};

exports.add = function (req, res){
	console.log("We're trying to add...");
	story_data = req.body;
	var newStory = new model.Story({
		"title":story_data.title,
		"sentences":1,
		"text":story_data.sentence1,
		"votes":0
	});
	newStory.save(afterSave);
	function afterSave(err){
		if(err){console.log(err); res.send(500);}
		console.log("Save Success?");
		res.redirect("/");
	}
	// res.redirect('/placeholders/success.html')
}