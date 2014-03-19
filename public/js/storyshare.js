'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {

console.log("page initialized!");


	$("#startWriting").click(startWritingClick);
	$("#addToStory").click(addToStoryClick);
	$("#startNewStory").click(startNewStoryClick);
	$("#helpLanding").click(helpLandingClick);
	
}



function mainLink() {
    window.location.replace("/main");
}




function addLink() {
    window.location.replace("/new");
}


function helpLandingClick(e) {
    e.preventDefault();
    ga('send', 'event', 'helpLandingBtn', 'click', { 'hitCallback':helpLink } );
}

function helpLink() {
    window.location.replace("/help");
}