

exports.view = function(req, res){

		var version = {'showVersionB': false};
		res.render('helppage', version);

};

exports.viewVersionB = function(req, res){

		var version = {'showVersionB': true};
		res.render('helppage', version);

};