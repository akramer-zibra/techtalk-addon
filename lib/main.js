// Required libs 
var { ActionButton } = require("sdk/ui/button/action");
var { Panel } = require("sdk/panel");
var addon = require("sdk/self");
var tabs = require("sdk/tabs");
var prefs = require("sdk/preferences/service");


/*
 * Panel with submit form and special content script
 */
var panel = Panel({
	contentURL: addon.data.url("panel.html"),
	contentScriptFile: addon.data.url("panel.js")
});

/*
 * Add event listener to "submitted" event   
 */
panel.on("submitted", function () {
  
	panel.hide();
});

/*
 * Button which shows the submit form panel 
 */
var button = ActionButton({
    id: "techtalk-pin",
    label: "TechTalk-Pin",
    icon: {
      "16": "./speech-bubble-dots-outline-16.png",
      "32": "./speech-bubble-dots-outline-32.png",
	  "48": "./speech-bubble-dots-outline-64.png"
    },
	
	/*
     * Defined onClick event handler
     */	 
    onClick: function(state) {
	
		// Attach get data content script to active tab
		var worker = tabs.activeTab.attach({
			contentScript: "self.port.on('get-data', function() {" +
							"console.log('Event [ContentScript]: get-data fired');" +
							"self.port.emit('give-data', {title: document.title," +
														"url: document.URL," +
														"selection: window.getSelection().toString()});" +
					"}); "
		});
		
		// Define give data event handler
		worker.port.on("give-data", function(data) {
			
			console.log("Event [AddonScript]: give-data cought");		
			
                        // Get the "configured techtalk email" branch
                        data["email"] = prefs.get("techtalk.email");
                                                                        
			// Give data to panel script
			panel.port.emit("give-data", data);
		});
		
		// Fire get data event
		worker.port.emit("get-data");
			
	
		// show panel attached to action button 
		panel.show({position: button});
    }
});
	
