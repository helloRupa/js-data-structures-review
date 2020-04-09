// Code for converting orders to a data structure goes in here
// Don't forget to display the result in the result div
// Hint: You may need JSON.stringify(object)

const convertOrders = function() {
  const orders = document.querySelectorAll('.orders ul');
  const ordersArray = Array.from(orders);
  const ordersDataStructure = [];

  for (const ul of ordersArray) {
    const orderData = {};
    const orderNumber = ul.querySelector('.order-number span');
    const total = ul.querySelector('.total span');

    orderData['Order Number'] = orderNumber.textContent;
    orderData.Total = total.textContent;
    orderData.Items = convertTableToArray(ul);
    ordersDataStructure.push(orderData);
  }

  return ordersDataStructure;
}

const convertTableToArray = function(ul) {
  const table = ul.querySelector('.items table');
  const headings = table.querySelectorAll('th');
  const rows = table.querySelectorAll('tr:not(:first-child)');
  const itemsArray = [];

   for (const row of rows) {
      const cells = row.querySelectorAll('td');
      const rowObject = {};
      
      for (let hIndex = 0; hIndex < headings.length; hIndex++) {
        const key = headings[hIndex].textContent;

        rowObject[key] = cells[hIndex].textContent;
      }

      itemsArray.push(rowObject);
    }

    return itemsArray;
}

const displayDataStructure = data => {
  const resultDiv = document.querySelector('.result');

  resultDiv.textContent = JSON.stringify(data);
}

// Uncomment the line below when you're ready to test your code
displayDataStructure(convertOrders());



const sayWow = (saying, number) => `${saying} wow ${number} times`;

console.log(sayWow('such', 5));
