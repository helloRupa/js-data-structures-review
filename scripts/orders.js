// Code for converting orders to a data structure goes in here
// Don't forget to display the result in the result div
// Hint: You may need JSON.stringify(object)

function convertOrders() {
  const orders = document.querySelectorAll('.orders ul');
  const ordersArray = Array.from(orders);

  return ordersArray;
}

function displayDataStructure(data) {
  const resultDiv = document.querySelector('.result');

  resultDiv.textContent = data;
}

// Uncomment the line below when you're ready to test your code
displayDataStructure(convertOrders());
