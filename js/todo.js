const todoForm = document.querySelector("#todo form");
const todoInput = document.querySelector("#todo input:first-child");
const todoDiv = document.querySelector("#todo div");
let todoArray = [];

function handleClickBtn(event) {
    event.preventDefault();
    if (localStorage.getItem("todo") === null) {
        todoArray.push(todoInput.value);
    } else {
        todoArray = JSON.parse(localStorage.getItem("todo"));
        todoArray.push(todoInput.value);
    }
    localStorage.setItem("todo", JSON.stringify(todoArray));
    addTodoList(todoArray);
}

function addTodoList(todoList) {
    const todoText = document.createElement("p");
    todoText.innerText = todoList[todoArray.length - 1];
    todoDiv.appendChild(todoText);
}

if (localStorage.getItem("todo") === null) {
} else {
    todoArray = JSON.parse(localStorage.getItem("todo"));
    for (let i = 0; i < todoArray.length; i++) {
        const todoText = document.createElement("p");
        todoText.innerText = todoArray[i];
        todoDiv.appendChild(todoText);
    }
}
todoForm.addEventListener("submit", handleClickBtn);