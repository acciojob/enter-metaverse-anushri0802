//your JS code here. If required.
// Function to change the status text upon button click
function updateStatus() {
    const statusParagraph = document.getElementById('status');  // Get the status <p> tag by its ID
    const newContent = document.createElement('h1');            // Create an <h1> tag
    newContent.textContent = 'Entered Metaverse';                // Set the new content
    statusParagraph.innerHTML = '';                             // Clear the existing content
    statusParagraph.appendChild(newContent);                    // Append the <h1> tag with the new content
}

// Add an event listener to the button to call updateStatus when clicked
document.getElementById('enterBtn').addEventListener('click', updateStatus);
