// ADD TIMESTAMPS, AND MAKE THE USER ABLE TO LOGIN AND ALSO SAVE HIS OR HER TODOS.
// ADD NOTIFICATION FOR THE TODO, FOR IT TO BE CONNECTED TO THE USER'S GOOGLE ACCOUNT.
// LET USER PUT DUE DATE FOR THE TODO TO BE DONE.
// MAKE USER ABLE TO DRAG AND DROP TODOS, TO REORDER TODOS.

// THE VARIABLES.
console.log("BACKEND FOR TODO.");
console.log("=================");
// THE MAIN BODY.
const body_of_contents = document.querySelector("main");
const contents_wrapper = document.querySelector(".wrapper-for-todo");

const form_for_creation = document.querySelector("form");
let textfield_for_creation = document.getElementById("to-do-create");

const button_for_creation = document.querySelector(".create");

const container_for_todo_area = document.getElementById("todo-container");

// amount notificator.
const stagnant_text = document.querySelector(".view-default");
let total_number_of_todos = 0;

// Todos Indicator
const todo_indicator = document.querySelector("h3");
todo_indicator.classList.add("description-header");
todo_indicator.style.display = "none";

// for the buttons and the todo list itself.
let todo_list_wrapper = document.querySelector(".todo-list");
todo_list_wrapper.style.display = "none";
todo_list_wrapper.classList.add("each-list-container");

const todo_radio_button = document.querySelector("input");

// SHOW DATE OPTION.
// // the delete and edit buttons.
// const the_edit_btn = document.querySelector('.edit');
// const the_delete_btn = document.querySelector('.delete');

// THIS TWO AS A GROUP,FOR APPEARING AND DISAPPEARING.
// for the delete interface.
const button_group = document.getElementById("button-group");

// const button_set = document.querySelector(".set-buttons");
// const func_buttons = document.getElementsByClassName("btn");
// let func_buttons2 = Array.from(func_buttons);

// for the todo counter (of number of todos.)
count = 0;
// For the date and time on the server.
let todo_counter = 0;

// The value display screen.
const todos_display_count = document.querySelector(".value");
button_for_creation.addEventListener("click", (e) => {
  e.preventDefault();
  creating_todo();
});

// function reset_all() {
//   total_number = 0;

// }

function creating_todo() {
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
  // the_edit_btn.innerHTML = "<i class= 'fa fa-brands fa-facebook'></i>"
  // the_edit_btn.innerHTML = 'Edit';
  // the_delete_btn.innerHTML = 'Delete';
  let date_created = new Date().toUTCString();
  // let hours = date_created.getHours();
  // let minutes = date_created.getMinutes();
  // let time = `${hours}:${minutes}`;

  // Server value
  console.log(`NEW TODO CREATED: ${todo_counter++}`);
  console.log(date_created);
  // console.log

  // After we create the todo, show the date and time it was created.
  let span_for_date = document.createElement("span");
  span_for_date.classList.add("view-date");
  span_for_date.innerHTML = `<i>Date Todo created</i>: ${date_created}`;

  let save_changes = document.createElement("p");
  save_changes.classList.add("updated-time");

  // Get the Day, Month and Year the Todo was created.

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
  // console.log(all_todos);

  // STORE TO LOCAL STORAGE, TO BE RETRIEVED.
  let STORAGE_KEY = new_todo_text.innerText;
  window.localStorage.setItem(`id ${STORAGE_KEY}`, new_todo_text.innerText);

  // DISPLAY BASED ON FUNC BUTTONS CLICK.
  // button_set.addEventListener("click", (e) => {
  //   let target = e.target.closest("button");
  //   console.log(target);

  //   if (target == func_buttons[0]) {
  //     all_todos.filter((incompleted) => {
  //       if (todo_radio_button.checked === false) {
  //         // console.log("---Incompleted---");
  //         // console.log(incompleted);
  //         todo_list_wrapper.append(incompleted);
  //       }
  //       if (all_todos.length == 0) {
  //         incompleted = null;
  //       }
  //     });
  //   }
  //   if (target == func_buttons[1]) {
  //     all_todos.filter((completed) => {
  //       if (todo_radio_button.checked === true) {
  //         // if (todo_radio_button.checked === false) {
  //         // }
  //         // console.log("---Completed---");
  //         // console.log(completed);
  //         todo_list_wrapper.append(completed);
  //       }
  //       if (all_todos.length == 0) {
  //         completed = null;
  //       }
  //     });
  //   }
  // });

  // function clear_all_todos() {
  //   for (let todos of Array.from(todo_list_wrapper.children)) {
  //     todos.remove();
  //     total_number_of_todos = 0;
  //     todos_display_count.innerText = total_number_of_todos;
  //     todo_list_wrapper.style.display = "none";
  //   }
  //   for (let todo of all_todos) {
  //     all_todos.pop(todo);
  //   }
  //   stagnant_text.style.display = "block";
  //   todo_indicator.style.display = "none";
  // }

  // GETTING TODOS BASED ON FUNC BUTTON
  // func_buttons[0].addEventListener("click", () => {
  // return all_todos.filter((incompleted) => {
  //   if (todo_radio_button.checked === false) {
  //     // console.log("---Incompleted---");
  //     // console.log(incompleted);
  //     todo_list_wrapper.append(incompleted);
  //   }
  //   if (all_todos.length == 0) {
  //     incompleted = null;
  //   }
  // });
  // });

  // func_buttons[1].addEventListener("click", () => {});

  // func_buttons[2].onclick = function () {
  //   clear_all_todos();
  // };
  // class for styling each components.
  new_todo_wrapper.classList.add("list-content");
  new_todo_text.classList.add("new_todo");
  todo_list_wrapper.style.display = "flex";

  textfield_for_creation.value = "";

  // For the total number of Todos created.
  let total_number = () => {
    total_number_of_todos = todo_list_wrapper.children.length;
    // TO COUNT THE TOTAL NUMBER OF OUR TODOS.
    let incrementing = count + total_number_of_todos;
    todos_display_count.innerText = incrementing;

    let decreased_number = (incrementing) => {
      let deleted_value = incrementing - 1;
      console.log(deleted_value);
    };
    decreased_number();
  };

  total_number();

  // FUNCTIONAL BUTTONS - DELETE TODO
  the_delete_btn.addEventListener("click", () => {
    const delete_box = document.querySelector("#delete-box");
    delete_box.open = true;
    body_of_contents.style.filter = "blur(0)";
    body_of_contents.style.pointerEvents = "none";

    const button1_yes = document.querySelector(".btn1");
    const button2_no = document.querySelector(".btn2");
    button1_yes.addEventListener("click", () => {
      // logic for deletion
      new_todo_wrapper.remove();
      // let deleted_value = renewed_value--;
      // let show_value = deleted_value-1;4
      total_number();

      // let decrementing = incrementing - 1;
      // todos_display_count.innerText = deleted_value;
      the_edit_btn.style.display = "none";
      the_delete_btn.style.display = "none";
      delete_box.open = false;
      body_of_contents.style.pointerEvents = "all";
      body_of_contents.style.filter = "none";
      if (todo_list_wrapper.children.length === 0) {
        stagnant_text.style.display = "block";
        todo_list_wrapper.style.display = "none";
        todo_indicator.remove();
      } else {
        stagnant_text.style.display = "none";
      }
    });

    button2_no.addEventListener("click", () => {
      delete_box.open = false;
      body_of_contents.style.filter = "none";
      body_of_contents.style.pointerEvents = "all";
    });
  });

  // EDIT TODO
  the_edit_btn.addEventListener("click", () => {
    // e.preventDefault();
    const edit_box = document.querySelector(".todo-edit");
    // let actual = new_todo_text.innerHTML;
    edit_box.style.display = "block";
    const edit_box_field = document.querySelector(".text-area-for-edit");
    edit_box_field.value = new_todo_text.innerHTML;

    body_of_contents.style.filter = "blur(0)";
    // edit_box.style.filter = 'blur(0)';
    edit_box.style.pointerEvents = "all";
    body_of_contents.style.pointerEvents = "none";

    const close_button = document.getElementById("close");
    close_button.innerHTML = "X";
    close_button.style.fontStyle = "bold";
    // edit_box.append(close_button);

    close_button.addEventListener("click", () => {
      edit_box.style.display = "none";
      // text_area.value != text_area.value;
      body_of_contents.style.filter = "none";
      // edit_box.style.filter = 'blur(0)';
      body_of_contents.style.pointerEvents = "all";
    });

    // SAVE CHNAGES TO EDITTED TODO
    const save_changes = document.querySelector(".save-changes");
    // edit_box_field.required = true;
    save_changes.classList.add("save-changes");
    save_changes.innerHTML = "SAVE CHANGES.";
    edit_box.append(save_changes);
    // WHAT HAPPENS WHEN WE CLICK THE SAVE CHANGES BUTTON?
    save_changes.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        console.log("Working");
        // get the editted todo.
        // text_area.value = "";

        new_todo_text.innerHTML = edit_box_field.value;
        edit_box.style.display = "none";
        body_of_contents.style.filter = "none";
        body_of_contents.style.pointerEvents = "all";
        // new_todo.innerHTML = changed_todo;
        // Let it clear after it has saved the user's changes.
        // text_area.value = "";

        // after you save the changes, get the time the change was saved.
        if (new_todo_text.innerHTML == edit_box_field.value) {
          let hour_updated = new Date().getHours();
          let minute_updated = new Date().getMinutes();

          let time_updated = `${hour_updated}:${minute_updated}`;
          save_changes.innerHTML = `<i>Editted at: ${time_updated}</i>`;
        }
      },
      { once: true }
    );
  });

  // RADIO BUTTON
  // THE RADIO.
  todo_radio_button.addEventListener("click", (e) => {
    // If the user has done the todo (mark as completed).
    if (todo_radio_button.checked == true) {
      new_todo_text.style.textDecoration = "line-through";
      new_todo_wrapper.style.backgroundColor = "hsla(0, 0%, 53%, 0.500)";
      span_for_date.style.textDecoration = "line-through";
      the_edit_btn.style.opacity = ".2";
      the_delete_btn.style.opacity = ".2";
      // No clicking events for buttons.
      the_edit_btn.style.pointerEvents = "none";
      the_delete_btn.style.pointerEvents = "none";
      new_todo_text.style.pointerEvents = "none";
    }
    // otherwise...
    else if (todo_radio_button.checked == false) {
      new_todo_text.style.textDecoration = "none";
      new_todo_wrapper.style.backgroundColor = "hsl(287, 82%, 19%)";
      span_for_date.style.textDecoration = "none";
      the_edit_btn.style.opacity = "initial";
      the_delete_btn.style.opacity = "1";

      // FOR WHEN WE HOVER.
      the_edit_btn.style.opacity.hover = ".6";
      // CLICKING EVENTS FOR BUTTON (available.).
      the_edit_btn.style.pointerEvents = "all";
      the_delete_btn.style.pointerEvents = "all";
      new_todo_text.style.pointerEvents = "all";
    }
  });

  // RETRIEVE TODOS, WHEN WE COME BACK.
  document.onload = function () {
    for (let each_todo of todo_list_wrapper) {
      for (let object of localStorage) {
        new_todo_text.innerText = object;
      }
    }
  };
}

// ======REFACTORED JAVASCRIPT ======
