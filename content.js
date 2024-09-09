chrome.runtime.onMessage.addListener(function(message) {
    if (message.action === "addFriends") {
        const numFriends = parseInt(message.numFriends);
        let addedCount = 0;

        // Select all "Add Friend" buttons from the page (adjust the selector as needed for Facebook's DOM)
        const friendButtons = document.querySelectorAll("button[data-testid='friend_request_button']");

        if (friendButtons.length === 0) {
            alert("No 'Add Friend' buttons found. Make sure you're on the friends list page.");
            return;
        }

        for (let i = 0; i < friendButtons.length && addedCount < numFriends; i++) {
            try {
                friendButtons[i].click();
                addedCount++;
            } catch (error) {
                console.error("Error sending friend request to button at index " + i + ": " + error);
            }
        }

        alert(`${addedCount} friend requests sent.`);
    }
});


