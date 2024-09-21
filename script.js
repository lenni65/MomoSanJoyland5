// Array of dialogue information with corresponding names
const dialogues = [
    { id: 'dialogue-1', name: '...' },
    { id: 'dialogue-2', name: '...' },
    { id: 'dialogue-3', name: 'You' },
    { id: 'dialogue-4', name: '...' },
    { id: 'dialogue-5', name: 'Momo-san' },
    { id: 'dialogue-6', name: 'You' },
    { id: 'dialogue-7', name: 'Momo-san' },
    { id: 'dialogue-8', name: '...' },
    { id: 'dialogue-9', name: '...' },
    { id: 'dialogue-10', name: 'You' },
    { id: 'dialogue-11', name: '...' },
    { id: 'dialogue-12', name: 'Momo-san' },
    { id: 'dialogue-13', name: 'Momo-san' },
    { id: 'dialogue-14', name: '...' }
];

let currentDialogueIndex = 0; // Initialize the current dialogue index

// Function to update dialogue and name box
function updateDialogue() {
    const nameBox = document.getElementById("nameBox");
    const momoImage = document.getElementById("momoImage");
    const dialogueAudio = document.getElementById("dialogueAudio"); // Audio element

    // Hide all dialogue lines
    dialogues.forEach(dialogue => {
        document.getElementById(dialogue.id).style.display = 'none';
    });

    // Show the current dialogue line and update the name box
    const currentDialogue = dialogues[currentDialogueIndex];
    document.getElementById(currentDialogue.id).style.display = 'block';
    nameBox.textContent = currentDialogue.name;

    // Play audio for dialogue ID 7
    if (currentDialogue.id === 'dialogue-7') {
        dialogueAudio.currentTime = 0; // Reset audio to start
        dialogueAudio.play(); // Play audio
    }

    // Check for image transition
    if (currentDialogue.id === 'dialogue-4') {
        momoImage.src = "https://i.imgur.com/0gZa75s.png"; // Initial image
        momoImage.classList.add("visible");
        momoImage.style.opacity = 1; // Ensure it's fully visible
    } else if (currentDialogue.id === 'dialogue-9' || currentDialogue.id === 'dialogue-12') {
        // Fade out the current image
        momoImage.style.opacity = 0;

        // Change the image source after a delay
        setTimeout(() => {
            if (currentDialogue.id === 'dialogue-9') {
                momoImage.src = "https://i.imgur.com/gjK7lFN.png"; // New image for dialogue-9
            } else if (currentDialogue.id === 'dialogue-12') {
                momoImage.src = "https://i.imgur.com/YwOa7XW.png"; // New image for dialogue-12
            }

            // Slight delay before fading in
            setTimeout(() => {
                momoImage.style.opacity = 1; // Fade in the new image
            }, 100); // Wait for 0.1 seconds before starting to fade in
        }, 500); // Wait for 0.5 seconds for the fade out
    } else if (currentDialogue.id === 'dialogue-14') {
        // Set the image to be transparent but not invisible
        momoImage.style.opacity = 0.5; // Make it semi-transparent
    }
}

// Event listener to switch dialogue on click
document.getElementById("dialogueBox").addEventListener("click", function() {
    // Increment dialogue index if we haven't reached the last dialogue
    if (currentDialogueIndex < dialogues.length - 1) {
        currentDialogueIndex++;
        updateDialogue(); // Update dialogue and name box
    }
});

// Initialize the first dialogue when the page loads
window.addEventListener('load', function() {
    updateDialogue();
});