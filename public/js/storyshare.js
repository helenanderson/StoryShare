'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$("#startWriting").click(startWritingClick);
	$("#addToStory").click(addToStoryClick);
	$("#startNewStory").click(startNewStoryClick);
	$("#helpLanding").click(helpLandingClick);
	$("#bookIcon").click(bookIconClick);
	$("#pencilIcon").click(pencilIconClick);
	$("#plusIcon").click(plusIconClick);
	
	
	
	
	
	
	
	//ga("send", "event", "MenuBtn", "click");
	//ga("send", "event", "AboutMenuBtn", "click");
	//ga("send", "event", "HelpMenuBtn", "click");
	//ga("send", "event", "AddToStoryMenuBtn", "click");
	//ga("send", "event", "ArchiveMenuBtn", "click");
	//ga("send", "event", "NewStoryMenuBtn", "click");
	//$('#startWritingBtn').click(startWriting);
	console.log("Javascript connected!");
}

function startWritingClick(e) {
	ga("send", "event", "StartWritingButton", "click");
}

function addToStoryClick(e) {
	ga("send", "event", "AddToStoryBtn", "click");
}

function startNewStoryClick(e) {
	ga("send", "event", "StartNewStoryBtn", "click");
}

function helpLandingClick(e) {
	ga("send", "event", "helpLandingBtn", "click");
}

function bookIconClick(e) {
	ga("send", "event", "bookIconBtn", "click");
}

function pencilIconClick(e) {
	ga("send", "event", "pencilIconBtn", "click");
}

function plusIconClick(e) {
	ga("send", "event", "plusIconBtn", "click");
}

/*function StartWriting(e) {
		ga("send", "event", "button", "click");
		res.render('mainpage', version)
 	});*/

	
// function listenerFunction(e){
// 	console.log("Title Clicked");
// 	e.preventDefault();
// 	var name = $(this).title;
// 	console.log(name);
// }

// $(".story").click(listenerFunction);