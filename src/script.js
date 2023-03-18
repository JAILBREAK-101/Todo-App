// THE LOGIC, CREATION, AND STORAGE OF THIS TODOS
// variables
const createTodoInput = document.querySelector("#todo-create");
const createTodoButton = document.querySelector(".create-todo");

const todoContainer = document.querySelector(".todo-container");
const todoLists = document.querySelector(".todo-list");
let count = 0;

const activeFuncButton = document.querySelector(".active");
const completedFuncButton = document.querySelector(".completed");
const clearFuncButton = document.querySelector(".clear");
const viewFuncButton = document.querySelector(".view-all");

const signUpLoginModal = document.querySelector(".sign-up-log-in");
const confirmEditModal = document.querySelector(".confirm-edit");
const confirmDeleteModal = document.querySelector(".confirm-delete");

// functions
let createTodo = () => {
  let todoContent = createTodoInput.value;
  let newTodo = document.createElement("li");
  newTodo.innerText = todoContent;
  newTodo.classList.add("new-todo");
  todoLists.append(newTodo);
  createTodoInput.value = null;

  addEditDelete(newTodo);
  increaseCount(count);
  //   storeToStorage(newTodo);
};

let addEditDelete = (todo) => {
  const editButton = document.createElement("img");
  editButton.src = "../assets/images-icon/icon-edit.svg";
  editButton.classList.add("edit-button");
  const deleteButton = document.createElement("img");
  deleteButton.src = "../assets/images-icon/icon-delete.svg";
  deleteButton.classList.add("delete-button");
  todo.append(editButton, deleteButton);
};

let increaseCount = (count) => {
  count++;
};

// eventListeners
createTodoButton.addEventListener("click", createTodo);
// Local-Storage
