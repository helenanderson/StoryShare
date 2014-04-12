var data = require( '../storyData.json');
var models = require('../models.js');

exports.view = function(req, res){
	var storyID = req.params.id;
	console.log(storyID);
	models.Story
		.find({"_id": storyID})
		.exec(afterStoryQuery)
	

	function afterStoryQuery(err, stories) {
		console.log("AFTER STORY QUERY");
		if(err) console.log(err);
		console.log(stories[0]);
		var story = stories[0];
		story["not-finished"] = story.sentences < 10;
		story["finished"] = story.sentences >= 10;
		console.log("Story finished: " + story.finished);
		console.log("Story not finished: " + story["not-finished"]);
		story["in-voting"] = story.totalChoices == 4;
		
		
		if(story["in-voting"]){


			if(story["totalVotes"] >= 5) {
				console.log("Total Votes: " + story["totalVotes"]);
				var votesArray = story["votesPerChoice"];

				var warningFlag = false;
				var max = 0;
				var maxindex = -1;
				for (i = 0; i < 4; i++) {
					console.log("Max: " + max);
					console.log(votesArray[i]);

					if (votesArray[i] >= max) {
						if (votesArray[i] === max) {
							warningFlag = true;
						}
						max = votesArray[i];
						maxindex = i;
					}
					console.log("Warning Flag: " + warningFlag);
				}
				
				if (warningFlag == false) {
					var choiceArray = story["multipleChoices"];
					var newText = choiceArray[maxindex];
					var oldText = story["text"];
					console.log("New Text: " + newText);
					console.log("Old Text: " + oldText);


			
					var conditions = {"_id":story["_id"]};
					var options = {multi: false};
					var update = {"text" : oldText + " " + newText, $inc:{"sentences":1}, "in-voting" : false, "totalVotes" : 0, "totalChoices" : 0, "votesPerChoice": [0, 0, 0, 0], "multipleChoices" : []};
					models.Story.update(conditions, update, options, afterUpdating);
					function afterUpdating(err, doc) {
						if(err) {console.log(err); res.send(500);}
						res.redirect("/story/" + storyID);	
					}
				}
			}
		}

		res.render("StoryPage", story);
		console.log("RENDERED");
	}

};


exports.add = function (req, res){
	console.log("We're trying to add...");
	var story_data = req.body;
	var newStory = new models.Story({
		"title":story_data.title,
		"sentences":1,
		"text":story_data.sentence1,
		"totalVotes":0,
		"votesPerChoice":[0, 0, 0, 0]
	});
	newStory.save(afterSave);
	function afterSave(err){
		if(err){console.log(err); res.send(500);}
		console.log("Save Success?");
		res.redirect("/main");
	}
};



exports.voteupdate = function(req, res){
	
	var vote = req.body.voteoptions;
	var ID = req.params.id;
	console.log(ID);
	models.Story.find({"_id" : ID}).exec(afterVoteFinding);

	function afterVoteFinding(err, stories)	{
		if(err) console.log(err);
		//console.log(stories[0]);
		var story = stories[0];
		var conditions = {"_id":story["_id"]};
		var options = {multi: false};
		
		var update = {$inc:{"totalVotes":1}};
		
		models.Story.update(conditions, update, options, afterVoteUpdating);
		function afterVoteUpdating(err, doc) {
		if(err) {console.log(err); res.send(500);}
	 }

		var update2 = {};
		update2["votesPerChoice." + vote] = 1;
		models.Story.update(conditions, {$inc: update2}, options, afterVoteUpdating2);
		function afterVoteUpdating2(err, doc) {
		if(err) {console.log(err); res.send(500);}
		res.redirect('/votesuccess');
	 }
  }
};

exports.update = function(req, res){
	var newText = req.body.text;
	console.log(newText);
	var ID = req.params.id;
	console.log(ID);
	models.Story.find({"_id" : ID}).exec(afterFinding);

	function afterFinding(err, stories)	{
		if(err) console.log(err);
		console.log(stories[0]);
		var story = stories[0];
		var conditions = {"_id":story["_id"]};
		var options = {multi: false};
		var update = {$push:{"multipleChoices": newText}, $push:{"votesPerChoice":1}, $inc:{"totalChoices":1}};
		models.Story.update(conditions, update, options, afterUpdating);
		function afterUpdating(err, doc) {
		if(err) {console.log(err); res.send(500);}
		res.redirect('/writesuccess');
	 }
	 }
	};
/*
	 function afterFinding(err, stories)	{
		if(err) console.log(err);
		console.log(stories[0]);
		var story = stories[0];
		var optionBucket = story["multipleChoices"].push(newText);
		var oldText = story["text"];
		console.log("New Text: " + newText);
		console.log("Old Text: " + oldText);
		var conditions = {"_id":story["_id"]};
		var options = {multi: false};
		var update = {"text" : oldText + " " + newText, $inc:{"sentences":1}};
		models.Story.update(conditions, update, options, afterUpdating);
		function afterUpdating(err, doc) {
		if(err) {console.log(err); res.send(500);}
		res.redirect('/story/'+ID);
	 }
	 }*/

