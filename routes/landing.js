exports.view = function(req, res){

		var version = {'showVersionB': false};
		res.render('landingpage', version);
		

};

exports.viewVersionB = function(req, res){

		var version = {'showVersionB': true};
		res.render('landingpage', version);
};