// REFACTORED CODE COMES IN HERE.
// =====FUNCTIONS=====

function createTodo() {
  appendTodo();
}

function appendTodo() {
  let all_todos = [];
  // array for all todos, when they are created.

  // if they refuse to type in anything.
  if (textfield_for_creation.value === "") {
    alert("CAN'T LEAVE SPACE BLANK, ENTER A TODO");
    return textfield_for_creation;
  }
  stagnant_text.style.display = "none";
  // Text should show
  todo_indicator.style.display = "block";

  const new_todo_wrapper = document.createElement("li");
  const todo_radio_button = document.createElement("input");
  todo_radio_button.type = "checkbox";
  todo_radio_button.setAttribute("class", "radiobtn-for-todo");

  const new_todo_text = document.createElement("p");
  new_todo_text.innerHTML = textfield_for_creation.value;
  // for backend.
  let created = "true";
  console.log(created);

  var the_edit_btn = document.createElement("button");
  var the_delete_btn = document.createElement("button");

  the_edit_btn.innerHTML = '<img src="../IMAGES/icon-edit.svg"/>';
  the_delete_btn.innerHTML = '<img src="../IMAGES/icon-delete.svg"/>';

  the_edit_btn.classList.add("edit-btn");
  the_delete_btn.classList.add("delete-btn");

  the_edit_btn.style.display = "inline";

  let date_created = new Date().toUTCString();

  console.log(`NEW TODO CREATED: ${todo_counter++}`);
  console.log(date_created);

  // After we create the todo, show the date and time it was created.
  let span_for_date = document.createElement("span");
  span_for_date.classList.add("view-date");
  span_for_date.innerHTML = `<i>Date Todo created</i>: ${date_created}`;

  let save_changes = document.createElement("p");
  save_changes.classList.add("updated-time");

  //  PUT EVERYTHING INSIDE THE LI.
  new_todo_wrapper.append(
    todo_radio_button,
    new_todo_text,
    the_edit_btn,
    the_delete_btn,
    span_for_date,
    save_changes
  );
  todo_list_wrapper.append(new_todo_wrapper);
  all_todos.push(new_todo_wrapper);
}

function deleteTodo() {
    
}

function editTodo() {}

function saveChanges() {}

function completeTodo() {}

function checkForButton() {}

function storeTodo() {}
// ======REFACTORED JAVASCRIPT ======
