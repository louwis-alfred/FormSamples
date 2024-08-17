const form = document.querySelector('form')
const Product_Name = document.getElementById('product');
const Product_QTY = document.getElementById('qty');
const list = document.getElementById('list')


form.addEventListener('submit', (element) => {
    element.preventDefault();

    if (!Product_Name.value && !Product_QTY.value) return;

    const newLI = document.getElementById('list');
    newLI.textContent = `${Product_QTY.value} ${Product_Name.value}`;
    list.appendChild(newLI)

    Product_Name.value = ''
    Product_QTY.value = ''
    
});