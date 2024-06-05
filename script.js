const form = document.getElementById('form');
const items = document.querySelector('.list-items');
const input = document.querySelector('.enter-item');

// Functions
const createItem = (name, classes) => {
  const item = document.createElement(name);
  item.className = classes;
  return item;
};

const addItem = (e) => {
  e.preventDefault();

  if (input.value.trim() === '') {
    alert('Please, add an item!');
    return;
  }

  const li = createItem('li', 'item');
  li.appendChild(document.createTextNode(input.value));

  const icon = createItem('i', 'fa-solid fa-xmark del-btn');

  li.appendChild(icon);

  items.appendChild(li);

  clearInput();
};

const clearInput = () => {
  input.value = '';
};

// Event Listeners
form.addEventListener('submit', addItem);
