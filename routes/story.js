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
		var story = stories[0];
		story["viewVersionB"] = false;
		story["not-finished"] = story.sentences < 10;
		story["finished"] = story.sentences >= 10;
		console.log("Story finished: " + story.finished);
		console.log("Story not finished: " + story["not-finished"]);
		res.render("StoryPage", story);
	}

};


exports.add = function (req, res){
	console.log("We're trying to add...");
	var story_data = req.body;
	var newStory = new models.Story({
		"title":story_data.title,
		"sentences":1,
		"text":story_data.sentence1,
		"votes":0
	});
	newStory.save(afterSave);
	function afterSave(err){
		if(err){console.log(err); res.send(500);}
		console.log("Save Success?");
		res.redirect("/main");
	}
};

exports.update = function(req, res){
	var newText = req.body.text;
	console.log(newText);
	var ID = req.params.id;
	console.log(ID);
	models.Story.find({"_id" : ID}).exec(afterFinding);

	function afterFinding(err, stories)	{
		if(err) console.log(err);
		console.log(stories[0]);
		var story = stories[0];
		var oldText = story["text"];
		console.log("New Text: " + newText);
		console.log("Old Text: " + oldText);
		var conditions = {"_id":story["_id"]};
		var options = {multi: false};
		var update = {"text" : oldText + " " + newText, $inc:{"sentences":1}};
		models.Story.update(conditions, update, options, afterUpdating);
		function afterUpdating(err, doc) {
		if(err) {console.log(err); res.send(500);}
		res.redirect('/story/'+ID);
	 }
	 }
};