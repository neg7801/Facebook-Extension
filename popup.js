document.getElementById("addFriends").addEventListener("click", function() {
    const numFriends = parseInt(document.getElementById("numFriends").value);

    console.log("Number of friends to add: ", numFriends);  // Log the user input

    if (isNaN(numFriends) || numFriends < 1) {
        alert("Please enter a valid number of friends to add.");
        return;
    }

    // Query the active tab and send a message to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "addFriends", numFriends: numFriends });
    });
});

