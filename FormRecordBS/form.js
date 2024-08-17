const form = document.getElementById('form');
const userEmail = document.getElementById('email');
const userPass = document.getElementById('password');
const userAddress = document.getElementById('address');
const userZipCode = document.getElementById('zipcode');
const list = document.getElementById('list');
const city = document.getElementById('city');
let selectedState = '';

const stateSelect = document.getElementById('state');

stateSelect.addEventListener('change', () => {
  selectedState = stateSelect.value;
});

form.addEventListener('submit', (element) => {
  element.preventDefault();

  // Basic validation
  if (!userEmail.value || !userPass.value || !userAddress.value || !userZipCode.value || !city.value || !selectedState) {
    alert('Please fill in all fields.');
    return;
  }

  const newINFO = document.createElement('li');
  newINFO.classList.add('list-group-item');
  newINFO.textContent = `Email: ${userEmail.value} Password: [hashed password] Address: ${userAddress.value} Zip code: ${userZipCode.value} City: ${city.value} State: ${selectedState}`;

  list.appendChild(newINFO);

  userEmail.value = '';
  userPass.value = '';
  userAddress.value = '';
  userZipCode.value = '';
  city.value = ''; 
  selectedState = '';
  stateSelect.selectedIndex = 0;
});