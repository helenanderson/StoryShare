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

function startWritingClick(e) {
    e.preventDefault();
    ga("send", "event", "LandingButton", "click");
    ga("send", "event", "StartWritingButton", "click", { 'hitCallback':mainLink }  );
}

function addToStoryClick(e) {
    e.preventDefault();
    ga("send", "event", "LandingButton", "click");
    ga("send", "event", "AddToStoryBtn", "click", { 'hitCallback':mainLink } );
}

function mainLink() {
    window.location.replace("/main");
}


function startNewStoryClick(e) {
    e.preventDefault();
    ga("send", "event", "LandingButton", "click");
    ga("send", "event", "StartNewStoryBtn", "click", { 'hitCallback':addLink } );
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