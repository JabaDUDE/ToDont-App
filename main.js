let inputField = document.getElementById("input");
const addButton = document.getElementById("addTask");
const todoList = document.getElementById("todo-list");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

addButton.addEventListener("click", function (event) {
  const paragraph = document.createElement("h5");
  paragraph.innerText = inputField.value;
  todoList.appendChild(paragraph);

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    todoList.removeChild(paragraph);
  });

  inputField.value = "";
});
