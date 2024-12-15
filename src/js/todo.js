// 요소 가져오기
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let todos = [];

// 로컬 스토리지에서 To-Do 불러오기
function loadTodos() {
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if (savedTodos !== null) {
        todos = JSON.parse(savedTodos);
        todos.forEach(paintTodo);
    }
}

// 할 일을 화면에 그리는 함수
function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

// 할 일 삭제 함수
function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

// 할 일 저장 함수
function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// 폼 제출 이벤트 핸들러
function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

// 이벤트 리스너 설정
todoForm.addEventListener("submit", handleTodoSubmit);

// 로컬 스토리지에서 To-Do 불러오기
loadTodos();