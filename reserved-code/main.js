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

function deleteTodo() {}

function editTodo() {}

function saveChanges() {}

function completeTodo() {}

function checkForButton() {}

function storeTodo() {}

todo_radio_button.addEventListener("click", (e) => {
  // If the user has done the todo (mark as completed).
  if (todo_radio_button.checked == true) {
    alert("STRIKETHROUGH");
    // new_todo_text.style.textDecoration = "line-through";
    // new_todo_wrapper.style.backgroundColor = "hsla(0, 0%, 53%, 0.500)";
    // span_for_date.style.textDecoration = "line-through";
    // the_edit_btn.style.opacity = ".2";
    // the_delete_btn.style.opacity = ".2";
    // // No clicking events for buttons.
    // the_edit_btn.style.pointerEvents = "none";
    // the_delete_btn.style.pointerEvents = "none";
    // new_todo_text.style.pointerEvents = "none";

    new_todo_text.classList.add("strikethrough-completed");
    new_todo_wrapper.classList.add("date-completed");
    span_for_date.classList.add("date-completed");
  }
  // otherwise...
  else if (todo_radio_button.checked == false) {
    // new_todo_text.style.textDecoration = "none";
    // new_todo_wrapper.style.backgroundColor = "hsl(287, 82%, 19%)";
    // span_for_date.style.textDecoration = "none";
    // the_edit_btn.style.opacity = "initial";
    // the_delete_btn.style.opacity = "1";

    // FOR WHEN WE HOVER.
    // the_edit_btn.style.opacity.hover = ".6";
    // CLICKING EVENTS FOR BUTTON (available.).
    // the_edit_btn.style.pointerEvents = "all";
    // the_delete_btn.style.pointerEvents = "all";
    // new_todo_text.style.pointerEvents = "all";
    new_todo_text.classList.remove("strikethrough-completed");
    new_todo_wrapper.classList.remove("date-completed");
    span_for_date.classList.remove("date-completed");
  }
});

// ALL TODO BUTTON (not-needed)

func_buttons[0].addEventListener("toggle", () => {
  console.log("WORKING");
  // all_todos.map((todos) => {
  if (todo_radio_button.checked === false) {
    // console.log("---Incompleted---");
    // console.log(incompleted);
    todo_list_wrapper.append(new_todo_wrapper);
    new_todo_wrapper.classList.remove("filter");
  }
  if (all_todos.length == 0) {
    incompleted = null;
  }
  // });
});
// ======REFACTORED JAVASCRIPT ======
