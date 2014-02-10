var data = require( '../storyData.json');

exports.view = function(req, res){
	// console.log(req.params.title);
	// console.log(data);
	var name = req.params.title;
	//var storyobj = data.stories
	console.log(name);
	console.log(data.stories[name]);
	// console.log(data.name);
	//console.log(req.params);
	//res.render("mainpage", data.stories.req.params.title);
	 res.render("StoryPage", data);
};