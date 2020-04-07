const userData = {
  username: 'Jammy',
  'Join Date': '01/01/2020',
  orders: [
    null,
    {
      "Order Number": '000-000-001',
      date: '02/02/2020',
      total: 126.24
    },
    null,
    {
      "Order Number": '000-000-002',
      date: '02/04/2020',
      total: 109.00
    },
    null
  ],
  rep: 'Hoggy McHogster'
};

function sanitize(data) {

}

function showUserData(data) {
  const ul = document.querySelector('ul');

  for (const key in data) {
    const currentItem = data[key];

    if (typeof currentItem === 'string') {
      const li = document.createElement('li');
      li.textContent = data[key];
      ul.appendChild(li);
    } else {
      for (const order of currentItem) {
        const li = document.createElement('li');
        li.textContent = JSON.stringify(order);
        ul.appendChild(li);
      }
    }
  }
}

showUserData(userData);
