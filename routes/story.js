var data = require( '../storyData.json');

exports.view = function(req, res){
	console.log(req.params.title);
	console.log(data);
	res.render("mainpage", data);
	// res.render("StorPage", data);
};