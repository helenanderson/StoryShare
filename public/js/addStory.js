'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
	//$('#submitBtn').click(NewStory);
}


$(function() {
	    $("#sentence1").characterCounter({
			counterCssClass: 'count',
			limit: 150,
			counterFormat: '%1 characters remaining.'
		});
 	});