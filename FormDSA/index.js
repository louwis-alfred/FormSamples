// Get references to the form, input, and list elements
const form = document.getElementById('serverForm');
const input = document.getElementById('names');
const list = document.getElementById('userInputNames');

// Create an object to store duplicate names and timestamps
const nameWithTime = {};

// Add an event listener for the 'submit' event on the form
const form = document.getElementById('serverForm');
const input = document.getElementById('names');
const list = document.getElementById('userInputNames');

const nameWithTime = {};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userInput = input.value.trim();
  const currentTime = new Date().toLocaleDateString();
  if (!userInput) return;
  if (nameWithTime[userInput]) {
    nameWithTime[userInput] += `(${currentTime})`;
  } else {
    nameWithTime[userInput] = currentTime;
    const newLI = document.createElement('li');
    newLI.textContent = `User: ${userInput} | Current Time ${currentTime}`;
    list.appendChild(newLI);
  }
  input.value = '';
});


// With comments


form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the user input, trimmed for consistency
  const userInput = input.value.trim();
  // Get the current date and time in a formatted string
  const currentTime = new Date().toLocaleDateString();

  // Check if the input is empty and return if it is
  if (!userInput) return; // Ignore empty inputs

  // Check if the user input is already in the nameWithTime object
  if (nameWithTime[userInput]) {
    // If the name exists, append the current time to its value
    nameWithTime[userInput] += `(${currentTime})`;
  } else {
    // If the name is new, add it to the nameWithTime object with the current time
    nameWithTime[userInput] = currentTime;
    // Create a new list item element
    const newLI = document.createElement('li');
    // Set the text content of the list item
    newLI.textContent = `User: ${userInput} | Current Time ${currentTime}`;
    // Append the new list item to the list
    list.appendChild(newLI);
  }

  // Clear the input field
  input.value = '';
});