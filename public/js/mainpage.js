'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.story').click(function(e) {
		var projectID = $(this).attr('id');
		console.log(projectID);
		$.get('/story/'+projectID);
	});
}