const form = document.getElementById('form');
const items = document.querySelector('.list-items');
const input = document.querySelector('.enter-item');
const clearAllBtn = document.querySelector('.btn-clear');
const filterInput = document.querySelector('.filter-items');

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
  checkUi();
};

const clearInput = () => {
  input.value = '';
};

// Remove Item
const removeItem = (e) => {
  if (e.target.classList.contains('del-btn')) {
    if (confirm('Are you sure ?')) {
      e.target.parentElement.remove();
    }
  }

  checkUi();
};

// Remove Items

const removeAllItems = (e) => {
  const items = document.querySelectorAll('.item');

  if (confirm('Are you sure ?')) {
    items.forEach((item) => item.remove());
  }

  checkUi();

  //   while (items.firstChild) {
  //     items.removeChild(items.firstChild);
  //   }
};

// CheckUi
const checkUi = () => {
  const items = document.querySelectorAll('.item');

  if (items.length === 0) {
    clearAllBtn.style.display = 'none';
    filterInput.style.display = 'none';
  } else {
    clearAllBtn.style.display = 'block';
    filterInput.style.display = 'block';
  }
};

// filter Items
const filterItems = function (e) {
  const li = document.querySelectorAll('.item');
  li.forEach((li) => {
    const item = li.textContent.toLocaleLowerCase();
    const inputValue = e.target.value.toLowerCase();

    item.includes(inputValue)
      ? (li.style.display = 'flex')
      : (li.style.display = 'none');
  });
};

// Event Listeners
form.addEventListener('submit', addItem);
items.addEventListener('click', removeItem);
clearAllBtn.addEventListener('click', removeAllItems);
filterInput.addEventListener('input', filterItems);

checkUi();
