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

    const newLI = document.getElementById('list'); // Calls the list from HTML Element
    newLI.textContent = `${Product_QTY.value} ${Product_Name.value}`; // Format the values
    list.appendChild(newLI)

    Product_Name.value = ''
    Product_QTY.value = ''
    
});
