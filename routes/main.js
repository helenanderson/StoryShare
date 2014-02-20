var models = require( '../models');

exports.view = function(req, res){
	models.Story
		.find()
		.sort()
		.exec(renderStories);
	
	function renderStories(err, stories) {
		res.render('mainpage', {'story': stories});
	}
};