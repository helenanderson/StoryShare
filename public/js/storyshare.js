'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
}

// function listenerFunction(e){
// 	console.log("Title Clicked");
// 	e.preventDefault();
// 	var name = $(this).title;
// 	console.log(name);
// }

// $(".story").click(listenerFunction);