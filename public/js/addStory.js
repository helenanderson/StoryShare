'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
	$('#submitBtn').click(NewStory);
}

// function listenerFunction(e){
// 	console.log("Title Clicked");
// 	e.preventDefault();
// 	var name = $(this).title;
// 	console.log(name);
// }

function NewStory(e) {
	console.log("add button clicked.");
	var title = $('#title').val();
	var sentence = $('#sentence1');
	var json = {
		'title':title,
		'sentences': 1,
		'text':sentence,
		'votes':0,
	};
	console.log(json);
	// $.post('/story', json);
}