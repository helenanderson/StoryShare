'use strict';
/* This javascript file is to control the buttons on the StoryPage 
 * where the individual story is displayed. */


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

//Adds click-listeners to the page for the various buttons
function initializePage() {
	console.log("Javascript connected!");
	$('#addBtn').click(addToStoryInit);
	$('#upVote').click(UpVote);
	$('#downVote').click(DownVote);

//This is just a little debugging code to log relevant info about the story.
// 	var story = $("#story1").text();
// 	//var numSentences = $(this.".sentences");
// 	//if (numSentences == 10) console.log("The Story is complete.");
// 	//else if (numSentences == 9) console.log("The Story has " + numSentences + "sentences.");
// 	console.log(story);
// }
}

/* Controls the addToStory button. Replaces the button with a form button and 
 * text box once clicked. Then listens for the form to be submitted, and once submitted
 * call the addToStory function (below).
 */
function addToStoryInit(e) {
	console.log("AddToStory button clicked.");
	$(this).replaceWith("<form id ='textToAddForm'><input type='text'id='textToAdd' placeholder='Type Text Here!'><input type= 'submit' value='Add!'></form>");
	$('#textToAddForm').submit(addToStory);
}

/* Appends the text to the story, and parses it at the first sentence. Does not YET make a persistant
 * change to the story.
 */
function addToStory(e) {
	e.preventDefault();
	console.log("Add To Story Button clicked!");
	var newText = $("#textToAdd").val()
	// console.log(newText);
	if (newText == "") 
		{
			$(this).append("<p>No text entered. Please try again.");
			return;
		}

	var q_index = newText.indexOf("\?");
	var p_index = newText.indexOf(".");
	var e_index = newText.indexOf("!");
	var index = minimum(e_index, minimum(p_index, q_index));

	if (index == -1) {
		$("#text").text($("#text").text() + " " + newText + ".");
		$("#textToAddForm").hide();
		return;
	}
	index++;
	newText = newText.substring(0, index);
	$("#text").text($("#text").text() + " " + newText);
	$("#textToAddForm").hide();
}

function UpVote(e) {
	// console.log("upvote");
	var votes = $("#votes").text();
	votes++;
	$("#votes").text(votes);
	$("#downVote").prop('disabled', false);
	$("#upVote").prop('disabled', true);
}

function DownVote(e) {
	// console.log("downvote");
	var votes = $("#votes").text();
	votes--;
	$("#votes").text(votes);
	$("#downVote").prop('disabled', true);
	$("#upVote").prop('disabled', false);
}

function minimum(num1, num2){
	if (num2 == -1) return num1;
	return (num1 != -1 && num1 < num2) ? num1:num2;

}