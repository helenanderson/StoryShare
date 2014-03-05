'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	ga("send", "event", "button", "click");
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