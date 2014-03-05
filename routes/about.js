

exports.view = function(req, res){

		var version = {'showVersionB': false};
		res.render('aboutpage', version);
		

};

exports.viewVersionB = function(req, res){

		var version = {'showVersionB': true};
		res.render('aboutpage', version);

}