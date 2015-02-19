// Short variables for DOM elements
var subjectInput = document.getElementById("subject");
var urlInput = document.getElementById("url");
var commentInput = document.getElementById("comment");


// Use give data event for input prefill
self.port.on("give-data", function(data) {

	// DEBUG
	console.log("Event [PanelScript]: give-data cought");
	
        
	// Fill input elements
	subjectInput.value = data.title;
	urlInput.value = data.url;
	commentInput.value = data.selection;
	
	
	// Attach onClick event handler 
	document.getElementById("submit").onclick = function() {
		
		// Generate E-Mail content
		window.location.href = "mailto:"+ data.email +"?subject=[TechTalk] " + subjectInput.value + "&body=" + urlInput.value + "%0D%0A%0D%0A" + commentInput.value;
		
		// trigger "submitted" event
		self.port.emit("submitted");
	}; 
});

// Set the focus to the text area so the user can
// just start typing.
self.port.on("show", function onShow() {

	// set focus on "kommentar" textarea input
	document.getElementById("comment").focus();
});