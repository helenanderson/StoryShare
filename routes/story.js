var data = require( '../storyData.json');

exports.view = function(req, res){
	var name = req.params.title;
	console.log(name);
	console.log(data.stories[name]);
	res.render("StoryPage", data.stories[name]);
};