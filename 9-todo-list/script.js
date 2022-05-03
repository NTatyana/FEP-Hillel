const ul = document.querySelector('#todoList');
const input = document.querySelector('#msgInput');
const button = document.querySelector('#msgButton');

button.addEventListener('click', onButtonClick);

function onButtonClick() {
  const message = todoMessage();

  if(!isValidMessage(message)) {
    alert('Поле сooбщение не должно быть пустым');
    return;
  } 

  addTodoItem(message);
  clearValue();
}

function todoMessage() {
  return input.value;
}

function isValidMessage(value) {
  return value.trim() !== '';
}

function addTodoItem(value) {
  const li = document.createElement('li');
  li.textContent = value;

  ul.append(li);
}

function clearValue() {
  input.value = '';
}