'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	ga("send", "event", "StartWritingButton", "click");
	ga("send", "event", "HelpLandingBtn", "click");
	ga("send", "event", "AddToAStoryBtn", "click");
	ga("send", "event", "CreateANewStoryBtn", "click");
	ga("send", "event", "BookIconBtn", "click");
	ga("send", "event", "PencilIconBtn", "click");
	ga("send", "event", "PlusIconBtn", "click");
	ga("send", "event", "MenuBtn", "click");
	ga("send", "event", "AboutMenuBtn", "click");
	ga("send", "event", "HelpMenuBtn", "click");
	ga("send", "event", "AddToStoryMenuBtn", "click");
	ga("send", "event", "ArchiveMenuBtn", "click");
	ga("send", "event", "NewStoryMenuBtn", "click");
	//$('#startWritingBtn').click(startWriting);
	console.log("Javascript connected!");
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