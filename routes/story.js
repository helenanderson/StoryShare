var data = require( '../storyData.json');
var model = require('../models.js');

exports.view = function(req, res){
	var name = req.params.title;
	var storyData = data.stories[name];
	//console.log(storyData);
	storyData._finished = storyData.sentences < 10;
	res.render("StoryPage", storyData);
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
		res.send(200);
	}
	// res.redirect('/placeholders/success.html')
}