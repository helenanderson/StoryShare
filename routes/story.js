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
	//console.log(req.params.title);
	console.log("We're trying to add...");
	res.json({});
	// res.redirect('/placeholders/success.html')
}