

exports.view = function(req, res){
		var version = {'showVersionB': false};
		res.render('newpage', version);

};

exports.viewVersionB = function(req, res){
		var version = {'showVersionB': true};
		res.render('newpage', version);

};