

exports.view = function(req, res){

		var version = {'showVersionB': false};
		res.render('helppage', version);

};