'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function initializePage() {
	console.log("Javascript connected!");
//	$("#submitBtn").submit(errorCheck);
//	$('#submitBtn').click(errorCheck);
	$("#addStoryForm").submit(errorCheck);
}


$(function() {
	    $("#sentence1").characterCounter({
			counterCssClass: 'count',
			limit: 150,
			counterFormat: '%1 characters remaining.'
		});
 	});

function errorCheck(e) {
	console.log("Attempting to submit. Checking whether or not their is a title.");

	var newText = $("#addStoryForm #title").val();
	console.log("Title: " + newText);
	if(newText == ""){
		e.preventDefault();
		console.log("There was no title appended.");
		$("#addStoryForm").append("<h4 class='Error' id='emptyTitle'>Try again. No title provided.</h4>");
	}
}