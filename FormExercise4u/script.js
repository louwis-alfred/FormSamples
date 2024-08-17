// Reference form HTML Elements
const form = document.querySelector('form')
const Product_Name = document.getElementById('product');
const Product_QTY = document.getElementById('qty');
const list = document.getElementById('list')

// Declaration of Arrow Function
// Add a submit event listener to the form
form.addEventListener('submit', (element) => {
    
    element.preventDefault(); // Prevent default behavior of Form submission

    if (!Product_Name.value && !Product_QTY.value) return; // To check if inputs are empty

    const newLI = document.getElementById('list'); // Gets a reference to a list element
    newLI.textContent = `${Product_QTY.value} ${Product_Name.value}`; // Sets the text content of the list item
    list.appendChild(newLI) // Append the new list item to the list

    // Reset the inputs after user inputted
    Product_Name.value = ''
    Product_QTY.value = ''
    
});
