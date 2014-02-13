'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
	$('#addBtn').click(addToStory);
// 	var story = $("#story1").text();
// 	//var numSentences = $(this.".sentences");
// 	//if (numSentences == 10) console.log("The Story is complete.");
// 	//else if (numSentences == 9) console.log("The Story has " + numSentences + "sentences.");
// 	console.log(story);
// }
}

function addToStory(e) {
	console.log("AddToStory button clicked.");
	$(this).replaceWith("<div class='row'><div class='col-lg-6'><div class='input-group'><span class='input-group-btn'><button class='btn btn-default' type='button'>Go!</button></span><input type='text' class='form-control'></div></div><div class='col-lg-6'><div class='input-group'><input type='text' class='form-control'><span class='input-group-btn'><button class='btn btn-default' type='button'>Add!</button></span></div></div></div>");

}