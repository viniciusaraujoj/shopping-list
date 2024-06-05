const form = document.getElementById('form');
const items = document.querySelector('.list-items');
const input = document.querySelector('.enter-item');
const clearAllBtn = document.querySelector('.btn-clear');

// Functions

// AddItem
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

// Remove Item
const removeItem = (e) => {
  if (e.target.classList.contains('del-btn')) {
    e.target.parentElement.remove();
  }
};

// Remove Items

const removeAllItems = (e) => {
  const items = document.querySelectorAll('.item');
  items.forEach((item) => item.remove());

  //   while (items.firstChild) {
  //     items.removeChild(items.firstChild);
  //   }
};

// Event Listeners
form.addEventListener('submit', addItem);
items.addEventListener('click', removeItem);
clearAllBtn.addEventListener('click', removeAllItems);
