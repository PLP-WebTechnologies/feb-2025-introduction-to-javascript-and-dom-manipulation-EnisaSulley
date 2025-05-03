// Function to change text content dynamically
document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("text").textContent = "The text has been changed!";
});

// Function to modify CSS styles via JavaScript
document.getElementById("changeStyleButton").addEventListener("click", function() {
    const paragraph = document.getElementById("styledParagraph");
    paragraph.style.color = "white";
    paragraph.style.backgroundColor = "#007BFF";
    paragraph.style.padding = "10px";
    paragraph.style.borderRadius = "5px";
});

// Function to add or remove an element on button click
document.getElementById("toggleButton").addEventListener("click", function() {
    const container = document.getElementById("container");
    const newElement = document.createElement("p");
    newElement.textContent = "New dynamic element added!";
    
    // Check if the element already exists
    if (container.contains(newElement)) {
        container.removeChild(newElement);
    } else {
        container.appendChild(newElement);
    }
});
