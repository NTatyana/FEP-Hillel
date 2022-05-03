import TodoApi from "./TodoApi.js";

TodoApi.update(1, {
  title: "XXX",
})
.then((todo) => {
  console.log(todo);
})
  .catch(handleError);


function handleError(e) {
  alert(e.message);
}

function renderTodoList(todoList) {
  console.log(todoList);
}