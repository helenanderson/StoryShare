var models = require( '../models');

exports.view = function(req, res){
	models.Story
		.find()
		.sort()
		.exec(renderStories);
	
	function renderStories(err, stories) {
		for (var i = 0; i < stories.length; i++) {
			var story = stories[i];
			story["finished"]=story.sentences > 9;
		}
		res.render('mainpage', {'story': stories});
	}
};