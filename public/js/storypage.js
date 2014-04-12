'use strict';
/* This javascript file is to control the buttons on the StoryPage 
 * where the individual story is displayed. */


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	jQuery(function($) {
  $('div.btn-group[data-toggle-name=*]').each(function() {
    var group   = $(this);
    var form    = group.parents('form').eq(0);
    var name    = group.attr('data-toggle-name');
    var hidden  = $('input[name="' + name + '"]', form);
    $('button', group).each(function(){
      var button = $(this);
      button.on('click', function(){
        hidden.val($(this).val());
      });
      if(button.val() == hidden.val()) {
        button.addClass('active');
      }
    });
  });
});
})

//Adds click-listeners to the page for the various buttons
function initializePage() {
	console.log("Javascript connected!");
	$('#addBtn').click(addToStoryInit);
	$('#voteBtn').click(voteInit);
	
	

//This is just a little debugging code to log relevant info about the story.
// 	var story = $("#story1").text();
// 	//var numSentences = $(this.".sentences");
// 	//if (numSentences == 10) console.log("The Story is complete.");
// 	//else if (numSentences == 9) console.log("The Story has " + numSentences + "sentences.");
// 	console.log(story);
// }
}

function voteTest(e) {
	var vote = $('#voteBox').val();
	console.log(vote);
}


/* Controls the addToStory button. Replaces the button with a form button and 
 * text box once clicked. Then listens for the form to be submitted, and once submitted
 * call the addToStory function (below).
 */
function addToStoryInit(e) {
	console.log("AddToStory button clicked.");
	var ID = window.location.pathname.match(/\/story\/(.*)/)[1];
	console.log(ID);
	$(this).replaceWith("<form id ='textToAddForm' method ='post' action = '/story/update/"+ID+"'><div class='form-group'><textarea name = 'text' id='textToAdd' style='width: 100%' rows='5' cols='40' maxlength='150' placeholder='What happens next?'></textarea><span class='count'></span></div><button id = 'submitBtn' class='btn start-button' style = 'margin-top: 10px' type='submit'><h3>Submit</h3></button><button id = 'cancelBtn' class='btn start-button' style = 'margin-top: 10px' value= 'click' onClick='goBack()' type='button'><h3>Cancel</h3></button></form>");
	//The next two lines remove the back button because it is replaced by a cancel  
	//button (see line above) that links to a different page
	var backBtn = document.getElementById('backBtn');
 	backBtn.parentNode.removeChild(backBtn);

	$('#textToAddForm').submit(addToStory);	
}


function voteInit(e) {
	console.log("Vote button clicked.");
	var ID = window.location.pathname.match(/\/story\/(.*)/)[1];
	console.log(ID);
	$('#votingForm').submit(countVote);
}
/*
$("input:radio[name='options']").click(function() {
    var value = $(this).val();
    console.log(value);
});
*/
function countVote(e) {
	
	/*

	var vote = $("#votingForm").val();
	console.log(vote);
	*/
	
}


$(function() {
	    $("#textToAdd").characterCounter({
			counterCssClass: 'count',
			limit: 150,
			counterFormat: '%1 characters remaining.'
		});
 	});

//When Cancel button is clicked, form disappears (returns to Story page)
function goBack(e) {
	console.log("Cancel Button clicked!");
	var ID = window.location.pathname.match(/\/story\/(.*)/)[1];
	console.log(ID);
	window.location=ID;
}



/* Appends the text to the story, and parses it at the first sentence. Does not YET make a persistant
 * change to the story.
 */
function addToStory(e) {
	console.log("Add To Story Button clicked!");
	var newText = $("#textToAdd").val()
	if (newText == "") {
		e.preventDefault();
		$("#storyContainer").append("<h4 class='Error' id='emptyTxt'>Try again. No text entered.</h4>");
		console.log("empty text tried to get entered.");
	}
}