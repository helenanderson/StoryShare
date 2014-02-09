var data = require( '../storyData.json');

exports.view = function(req, res){
	console.log(data);
	res.render("mainpage", data);
};