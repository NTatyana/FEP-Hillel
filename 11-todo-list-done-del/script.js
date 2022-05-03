const REMOVE_BTN_CLASS = 'remove-button';
const DONE_CLASS = 'done';
const TODO_ITEM_CLASS = 'todo-item';

const list = document.querySelector('.todo-list');
const input = document.querySelector('.message-input');
const todoForm = document.querySelector('#todoForm');
const todoHTML = document.querySelector('#newTaskTemplate').innerHTML;

todoForm.addEventListener('submit', onTodoFormSubmit);
list.addEventListener('click', onTodoListClick);

addTodo('XXX');
addTodo('YYY');
addTodo('ZZZ');

function onTodoFormSubmit(e) {
  e.preventDefault();

  if (!isValid(input.value)) {
    alert('Поле сообщение не должно быть пустым');
    return;
  }

  addTodo(input.value)
  clear();
}

function onTodoListClick(e) {
  const todoEl = getTodoElement(e.target);
  const classList = e.target.classList;

  if (todoEl) {
    if (classList.contains(REMOVE_BTN_CLASS)) {
      removeTodo(todoEl);
    }
    if (classList.contains(TODO_ITEM_CLASS)) {
      toggleDone(todoEl);
    }
  }
}

function getTodoElement(target) {
  return target.closest('.' + TODO_ITEM_CLASS);
}

function isValid(message) {
  return message !== '';
}

function addTodo(message) {
  list.insertAdjacentHTML('beforeend', todoHTML.replace('{{message}}', message));
}

function removeTodo(el) {
  el.remove();
}

function toggleDone(el) {
  el.classList.toggle(DONE_CLASS);
}

function clear() {
  input.value = '';
}