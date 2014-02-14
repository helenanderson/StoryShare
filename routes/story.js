var data = require( '../storyData.json');

exports.view = function(req, res){
	var name = req.params.title;
	var storyData = data.stories[name];
	//console.log(storyData);
	storyData._finished = storyData.sentences < 10;
	res.render("StoryPage", storyData);
};