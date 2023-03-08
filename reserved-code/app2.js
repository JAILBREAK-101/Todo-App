// ================== REFACTORED THIS CODE TO MAIN.JS ========================

// // THE VARIABLES.
// // THE MAIN BODY.
// const body_of_contents = document.querySelector('main');
// const main_wrapper = document.querySelector('.wrapper-for-todo');

// const form_for_creation = document.querySelector('form');
// let textfield_for_creation = document.getElementById('to-do-create');
// // let user_todo = textfield_for_creation.;

// const button_for_creation = document.querySelector('.create');
// const button2_for_creation = document.querySelector('.add');
// button2_for_creation.style.display = 'none';

// const container_for_todos = document.getElementById('todo-container');
// const description_header = document.getElementById('header-description');
// description_header.style.display = 'none';

// const stagnant_text = document.querySelector('.view-default');

// // for the buttons and the todo list itself.
// let todo_list_wrapper = document.querySelector('.todo-list');
// todo_list_wrapper.classList.add('each-list-container');



// // // the delete and edit buttons.
// // const the_edit_btn = document.querySelector('.edit');
// // const the_delete_btn = document.querySelector('.delete');

// // THIS TWO AS A GROUP,FOR APPEARING AND DISAPPEARING.
// const button_group = document.getElementById('button-group');

// // // A CONDITION, FOR IF THE USER DOESN'T TYPE ANYTHING IN THE CREATE BAR, BUT PRESSES THE CREATE BUTTON (restrict the user from creating a todo).
// // form_for_creation.action = 

// // THE MANIPULATION.
// button_for_creation.addEventListener('click', (e) => {
//     e.preventDefault();
//     creating_todo();
//     // stagnant_text.style.display = 'none';
//     // let new_todo = document.createElement('li');
//     // container_for_todos.append(new_todo);
//     // new_todo.innerHTML = textfield_for_creation.value;
// })

// button2_for_creation.addEventListener('click', (e) => {
//     e.preventDefault();
//     creating_todo();
// })

// // ASSOCIATING MYSELF, WITH ONE TODO.
// let array_children = Array.from(container_for_todos.children)[2];
// for (i = 0; i < array_children.children.length; i++) {
//     console.log(array_children.children[i]);
// }

// let todo_list_indi = array_children.children;

// // GETTING EACH LIST AT THEIR INDEX.


// // // EACH LIST
// // let each_list_wrapper = Array.from(container_for_todos.children)[2];
// // // to get each element, inside that array.
// // // looping through.
// // for (i = 0; i < each_list_wrapper.children.length; i++) {
//     //     console.log(each_list_wrapper.children[i]);
//     // };
    
//     // let todo_specified = container_for_todos.map( () => {
//         const todo_array = container_for_todos.children[2, 5];
//         // })
        
//         function creating_todo() {
//             // if they refuse to type in anything.
//             if (textfield_for_creation.value === '') {
//                 alert("CAN'T LEAVE SPACE BLANK, ENTER A TODO");
//                 return textfield_for_creation;
//             }
//             // Text should show
//             description_header.style.display = 'block';
//             stagnant_text.style.display = 'none';
            
//             // Buttons should switch
//             button_for_creation.style.display = 'none';
//             button2_for_creation.style.display = 'inline';
//             // the textfield should be empty.
//             todo_list_wrapper.style.display = 'none';
            
//             // console.log(specific_todo.children);
//             // specific_todo.array.forEach(element => {
//                 // // THE FIRST LIST.
//                 //   = new_todo;
                
//                 // for (list in todo_list_indi) {
                    
//                     // the delete and edit buttons.
//                     // for (new_todo of container_for_todos.children) {
//                         let new_todo = document.createElement('p');
//                         // THE TODO.
//                         new_todo.classList.add('text_todo');
//                         new_todo.innerHTML = textfield_for_creation.value;
//                         // THE LIST ITEM.
//                         let list_content = document.createElement('li');
//                         list_content.classList.add('list-content');
                        
//                         // radio button for completion.
//             let radio_complete = document.createElement('input');
//             radio_complete.setAttribute('type', 'checkbox');
//             // class for styling
//             radio_complete.classList.add('check-button');
            
            
            
//             const button_action = document.createElement('section');
//             const the_edit_btn = document.createElement('button');
//             const the_delete_btn = document.createElement('button');
//             the_edit_btn.classList.add('edit');
//             the_delete_btn.classList.add('delete');
//             the_edit_btn.innerHTML = 'Edit';
//             the_delete_btn.innerHTML = 'Delete';
//             // put them inside their wrapper.
//             button_action.append(the_edit_btn, the_delete_btn);
//             // class for styling the action buttons.
//             button_action.classList.add('action-buttons')
//             button_action.style.display = 'none';
            
            
//             list_content.append(radio_complete, new_todo, button_action, edit_box);
//             todo_list_wrapper.append(list_content);
//             todo_list_wrapper.style.display = 'block';
//             container_for_todos.append(todo_list_wrapper);
//             // ADD ALL OF TODO'S FUNCTIONALITY IN LIST CONTENT.
            
//             textfield_for_creation.value = "";
//             // todo_list_wrapper.append(button_action);
            
//             // that particular list item.
//             let to_do_array = [];
            
            
//             // let specific_todo = Array.from(container_for_todos.children)[2];
//             // let specific_todo = Array.from('');
//             count = 0;
//             let forward = count+1;
//             to_do_array.push(`${new_todo} ${forward}`);
//             to_do_array.length;
            
//             // the todo at each index.
//             // let index_list = array_children.children[0];
            
            
            
//             // let dropdown = document.createElement('img');
//             // dropdown.setAttribute('src', 'icon-arrow-down.svg');
            
//             // console.log(to_do_array);
//             // everything in that index.
//             // index_list.append()
//             // container_for_todos.append(list_content);
//         // let buttons be out of view
        
//         // container_for_todos.append(new_todo);
//         // form_for_creation.action = container_for_todos.append(new_todo);
        
//         // The list should be inside their container (not individually).
//         // todo_list_wrapper.append(list_content);
        
        
//         // the value should reset (clear), after you add and create your list.
//         // The edit box.
//         // let edit_box = document.getElementById('edit-box');
        
//         // to_do_array.forEach(function () {
//             the_delete_btn.addEventListener('click', () => {
//                 const delete_box = document.querySelector('#delete-box');
//                 delete_box.open = true;
//                 body_of_contents.style.filter = 'blur(0)';
//                 // edit_box.style.filter = 'blur(0)';
//                 body_of_contents.style.pointerEvents = 'none';
                
//                 // NOW WHATEVER THEY CLICK, REACT TO IT.
//                 const button1_yes = document.querySelector('.btn1');
//                 const button2_no = document.querySelector('.btn2');
                
//                 button1_yes.addEventListener('click', () => {
//                     new_todo.remove();
//                     radio_complete.remove();
//                     // clear the whole list of after deletion.
//                     list_content.remove();
//                     the_edit_btn.style.display = 'none';
//                     the_delete_btn.style.display = 'none';
    
//                     // pickup.remove();
//                     // dropdown.remove();
                    
//                     // AFTER REMOVING (DELETING), CLOSE THE DELETE BOX FOR NORMAL OPERATION OF TODO ACCORDING TO USER.
//                     // if (to_do_array.length < '1') {
//                         stagnant_text.style.display = 'block';
//                         description_header.style.display = 'none';
//                     // }
//                     // else if(to_do_array.length >= 1) {
//                         description_header.style.display = 'block';
//                         delete_box.open = false;
//                         // this instance is for only when we have no lists left
//                         body_of_contents.style.filter = 'none';
//                         // edit_box.style.filter = 'blur(0)';
//                         body_of_contents.style.pointerEvents = 'all';
//                     // }
                    
//                 })
                
//                 button2_no.addEventListener('click', () => {
//                     delete_box.open = false;
//                     body_of_contents.style.filter = 'none';
//                     body_of_contents.style.pointerEvents = 'all';
//                 })
//             })
//             // for getting particular todo.
//             // todo_list_wrapper.addEventListener('click', (e)=> {
//                 // e.target;
//                 // for(sections in todo_list_wrapper) {
//                     // console.dir(e.target);
//                     // console.log(sections);
//                     // if (e.target.nodeName === 'P' ) {
//                         new_todo.addEventListener('click', (e) => {
//                             if (e.target == new_todo) {
//                                 button_action.style.display = 'flex';
//                                 // the edit button.
//                                 the_edit_btn.addEventListener('click', (e) => {
//                                     let text_area = document.querySelector('.edit');
//                                     // e.target.closest('button');
//                                     // console.dir(target);
//                                     // e.preventDefault();
//                                     // Find the particular todo that was selected.
//                                     edit_box.style.display = 'flex';

//                                     console.log(todo_list_wrapper);
//                                     console.log(e.target.nodeName);

//                                     text_area.innerHTML = new_todo.innerHTML;
//                                     // console.log(text_area.);
//                                     // changed_todo = new_todo.innerHTML;
//                                     // list_content[new_todo];
//                                     // blur the background out and disable click events.
//                             body_of_contents.style.filter = 'blur(0)';
//                             // edit_box.style.filter = 'blur(0)';
//                             edit_box.style.pointerEvents = 'all';
//                             body_of_contents.style.pointerEvents = 'none';
                            
//                             const close_button = document.getElementById('close');
//                             close_button.innerHTML = 'X';
//                             close_button.style.fontStyle = 'bold';
//                             // edit_box.append(close_button);
//                             close_button.addEventListener('click', () => {
//                                 edit_box.open = false;
//                                 // text_area.value != text_area.value;
//                                 body_of_contents.style.filter = 'none';
//                                 // edit_box.style.filter = 'blur(0)';
//                                 body_of_contents.style.pointerEvents = 'all';
//                                 // else {
//                                 //     return;
//                                 // }
//                                 // list_content.append(edit_box, delete_box);
                                
                                
//                                 // save-changes button(what happens when we click).
//                                 const save_changes = document.querySelector('.save-changes');
//                                 save_changes.classList.add('save-changes');
//                                 save_changes.innerHTML = 'SAVE CHANGES.';
//                                 edit_box.append(save_changes);
//                                 // WHAT HAPPENS WHEN WE CLICK THE SAVE CHANGES BUTTON?
//                                 save_changes.addEventListener('click', () => {
//                                     console.log('Working');
//                                     // get the editted todo.
//                                     // text_area.value = "";
                                    
//                                     text_area.value = new_todo.innerHTML;
//                                     edit_box.style.display = 'none';
//                                     body_of_contents.style.filter = 'none';
//                                     body_of_contents.style.pointerEvents = 'all';
//                                     // new_todo.innerHTML = changed_todo;
//                                     // Let it clear after it has saved the user's changes.
//                                     // text_area.value = "";
//                                 }, {once: true});
//                             })
//                             }
//                         )}
//                     });
//                 };
//                 // CANCEL BUTTON
//                 //     const close_button = document.getElementById('close');
//                         //     close_button.innerHTML = 'X';
//                         //     close_button.style.fontStyle = 'bold';
//                         //     // edit_box.append(close_button);
//                         //     close_button.addEventListener('click', () => {
//                         //         edit_box.open = false;
//                         //         // text_area.value != text_area.value;
//                         //         body_of_contents.style.filter = 'none';
//                         //         // edit_box.style.filter = 'blur(0)';
//                         //         body_of_contents.style.pointerEvents = 'all';
//                         //     });
//                         // });
//                         //     }
//                         //     else {
//                         //         return;
//                         //     }
//                         //     // list_content.append(edit_box, delete_box);

//                         // })
                        
//                         // console.log(e.target)
                        
//                 //         the_edit_btn.addEventListener('click', (e) => {
//                 //             const edit_box = document.getElementById('edit-box');
//                 //             let text_area = document.getElementById('text-area');
//                 //             // e.target.closest('button');
//                 //             // console.dir(target);
//                 //             // e.preventDefault();
//                 //             // Find the particular todo that was selected.
//                 //             edit_box.open = true;
//                 //             text_area.value = new_todo.innerHTML;
//                 //             // console.log(text_area.);
//                 //             // changed_todo = new_todo.innerHTML;
//                 //             // list_content[new_todo];
//                 //             // blur the background out and disable click events.
//                 //     body_of_contents.style.filter = 'blur(0)';
//                 //     // edit_box.style.filter = 'blur(0)';
//                 //     edit_box.style.pointerEvents = 'all';
//                 //     body_of_contents.style.pointerEvents = 'none';
                    
                    
//                 //     // save-changes button(what happens when we click).
//                 //     const save_changes = document.querySelector('.save-changes');
//                 //     save_changes.classList.add('save-changes');
//                 //     save_changes.innerHTML = 'SAVE CHANGES.';
//                 //     edit_box.append(save_changes);
//                 //     // WHAT HAPPENS WHEN WE CLICK THE SAVE CHANGES BUTTON?
//                 //     save_changes.addEventListener('click', () => {
//                 //         console.log('Working');
//                 //         // get the editted todo.
//                 //         // text_area.value = "";
//                 //         text_area.value = new_todo.innerHTML;
//                 //         edit_box.open = false;
//                 //         body_of_contents.style.filter = 'none';
//                 //         body_of_contents.style.pointerEvents = 'all';
//                 //         // new_todo.innerHTML = changed_todo;
//                 //         // Let it clear after it has saved the user's changes.
//                 //         // text_area.value = "";
//                 //     }, {once: true});
                    
//                 //     // CANCEL BUTTON
//                 //     const close_button = document.getElementById('close');
//                 //     close_button.innerHTML = 'X';
//                 //     close_button.style.fontStyle = 'bold';
//                 //     // edit_box.append(close_button);
//                 //     close_button.addEventListener('click', () => {
//                 //         edit_box.open = false;
//                 //         // text_area.value != text_area.value;
//                 //         body_of_contents.style.filter = 'none';
//                 //         // edit_box.style.filter = 'blur(0)';
//                 //         body_of_contents.style.pointerEvents = 'all';
//                 //     });
//                 // });
//             // }
//         // }
//         // });
//         // });
        
//             // THE DELETE BUTTON.
            
            
//             // for (new_todo of list_content) {
                
//                 // when they click on the radio button
//                 radio_complete.addEventListener('click', () => {
//                     new_todo.style.textDecoration = 'line-through';
//                     new_todo.style.color = 'grey';
//                     new_todo.onmouseover = function hover() {
//                         radio_complete.title = 'Mark as Completed';
//                     }
//                     // let edit and delete be disabled
//                     the_edit_btn.disabled = true;
//                     the_delete_btn.disabled = true;
//                 })
            
            
//             let user_todo = new_todo;
            
            
            
            
//             // THE TODO ITSELF.
//         // user_todo.addEventListener('click', () => {
            
//             // when they click on the dropdown
//             // dropdown.addEventListener('click', () => {
//                 //     let pickup = document.createElement('img');
//                 //     pickup.setAttribute('src', 'icon-arrow-up.svg');
//                 //     list_content.append(pickup);
//                 //     dropdown.style.display = 'none';
//                 //     button_action.style.display = 'flex';
//                 //     button_action.append(the_edit_btn, the_delete_btn);
//                 //     // todo_list_wrapper.append(button_action);
//                 //     button_action.classList.add('action-buttons');
//                 //     // list_content.append(button_action);
                
//                 //     // when they click back.
//                 //     pickup.addEventListener('click', () => {
//                     //         pickup.style.display = 'none';
//                     //         dropdown.style.display = 'inline';
//                     //         button_action.style.display = 'none';
//                     //     })
                    
                    
//                     // })
                    
//                     // form_for_creation.action = container_for_todos.append(new_todo);
//                     // todo_list_wrapper.insertBefore(the_delete_btn, the_edit_btn);
//                 // todo_list_wrapper.append(the_edit_btn, the_delete_btn);
//                 // todo_list_wrapper.insertAdjacentElement('afterend', the_delete_btn);
//                 // the_delete_btn.insertAdjacentElement('beforebegin',the_edit_btn);
//                 // the_delete_btn.style.display = 'inline';
//                 // })
                
//                 // for ( in list_content) {
//                     // THE DELETE BUTTON
//                     // the_delete_btn.addEventListener('click', () => {
//                     //     const delete_box = document.querySelector('#delete-box');
//                     //     delete_box.open = true;
//                     //     body_of_contents.style.filter = 'blur(0)';
//                     //     // edit_box.style.filter = 'blur(0)';
//                     //     body_of_contents.style.pointerEvents = 'none';
                        
//                     //     // NOW WHATEVER THEY CLICK, REACT TO IT.
//                     //     const button1_yes = document.querySelector('.btn1');
//                     //     const button2_no = document.querySelector('.btn2');
                        
//                     //     button1_yes.addEventListener('click', () => {
//                     //         new_todo.remove();
//                     //         // pickup.remove();
//                     //         // dropdown.remove();
//                     //         radio_complete.remove();
                            
//                     //         // AFTER REMOVING (DELETING), CLOSE THE DELETE BOX FOR NORMAL OPERATION OF TODO ACCORDING TO USER.
//                     //         delete_box.open = false;
//                     //         the_edit_btn.style.display = 'none';
//                     //         the_delete_btn.style.display = 'none';
//                     //         // this instance is for only when we have no lists left
//                     //         stagnant_text.style.display = 'block';
//                     //         description_header.style.display = 'none';
//                     //         list_content.style.display = 'none';
//                     //         body_of_contents.style.filter = 'none';
//                     //         // edit_box.style.filter = 'blur(0)';
//                     //         body_of_contents.style.pointerEvents = 'all';
//                     //     })
                        
//                     //     button2_no.addEventListener('click', () => {
//                     //         delete_box.open = false;
//                     //         body_of_contents.style.filter = 'none';
//                     //         body_of_contents.style.pointerEvents = 'all';
//                     //     })
//                     // })
//                     // })
                    
//                     // THE EDIT BUTTON. (what happens when we click).
                    
//             //     the_edit_btn.addEventListener('click', (e) => {
//             //         e.preventDefault();
//             //         const edit_box = document.getElementById('edit-box');
//             //         // Find the particular todo that was selected.
//             //         edit_box.open = true;
//             //         let text_area = document.getElementById('text-area');
//             //         text_area.innerHTML = new_todo.innerHTML;
//             //         // blur the background out and disable click events.
//             //         body_of_contents.style.filter = 'blur(2px)';
//             //         // edit_box.style.filter = 'blur(0)';
//             //         body_of_contents.style.pointerEvents = 'none';

                
//             //     // save-changes button(what happens when we click).
//             //     const save_changes = document.querySelector('.save-changes');
//             //     save_changes.classList.add('save-changes');
//             //     save_changes.innerHTML = 'SAVE CHANGES.'
//             //     edit_box.append(save_changes);
//             //     // WHAT HAPPENS WHEN WE CLICK THE SAVE CHANGES BUTTON?
//             //     save_changes.addEventListener('click', () => {
//             //         console.log('Working');
//             //         // get the editted todo.
//             //         // text_area.value = "";
//             //         new_todo.innerHTML= text_area.value;
//             //         edit_box.open = false;

//             //         // Let it clear after it has saved the user's changes.
//             //         // text_area.value = "";
//             //     })
                
//             //     // CANCEL BUTTON
//             //     const close_button = document.getElementById('close');
//             //     close_button.innerHTML = 'X';
//             //     close_button.style.fontStyle = 'bold'
//             //     // edit_box.append(close_button);
//             //     close_button.addEventListener('click', () => {
//             //         edit_box.open = false;
//             //         body_of_contents.style.filter = 'none';
//             //         // edit_box.style.filter = 'blur(0)';
//             //         body_of_contents.style.pointerEvents = 'all';
//             //     })

                
                
//             // })
//             // }
//             // }
            
//             // user_todo.onmouseenter = mouseEnter();
            
//             // function mouseEnter(){
//                 //     }
//                 // });
//             // }
//         // }
        
//         // HOVER ON TODO.
//         function edit() {
//             creating_todo()
// }


// FOR THE JAVASCRIPT PROMISES.
// THE SYNTAX OF PROMISES.
let my_new_promise = new Promise((success, reject) => {
    // THIS IS WHAT THE ACTUAL PROMISE IS.
    let first_a = 2 + 2;

    // WHAT THIS DOES IS THAT IT ADDS THE TWO NUMBERS ABOVE, AND CHECKS IF BOTH SIDES ARE EQUAL (if it is, accept, if it's not, reject).
    if (first_a == 3) {
        success('This was successful. 👍🏼👍🏼');
    }else {
        reject("This was not successful, please try again later. :(")
    }
    // WHEN YOU HAVE MORE THAN TWO CONDITIONS, THAT IS WHEN YOU SHOULD USE AN ELSE IF.
})

// THE CODE ABOVE REPRESENTS A PROMISE OBJECT WITH A FUNCTION THAT ACCEPTS A RESOLVE AND A REJECT STATE AS THE TWO PARAMETERS (argument).
// THIS IS USED FOR SHOWING IS A REQUEST IS RESOLVED OR IF IT IS FAILED (rejected).



// HOW WE MAKE USE OF THE PROMISE ABOVE.
// WE HAVE TO MAKE USE OF THE .THEN FOR THE RESOLVE, OR SUCCESS STATE.

// A PROMISE
// .THEN PASSESS IN A METHOD.
my_new_promise.then((the_message) => {
    // WHAT THE .THEN DOES, IS THAT IT CONTINUES AND EXECUTES IT'S CODE, IF THE PROMISE IS RESOLVED, OR SUCCESSFUL.
    console.log("THIS WAS WHAT YOU ASKED FOR ", the_message);
}).catch((the_message) => {
    // THIS TAKES IN THE MESSAGE AND EXECUTES IT, IF THE PROMISE WAS NOT SUCCESSFUL, WHICH IS AN ERROR.
    console.log("This was what you asked for, that failed.", the_message)
})

// MORE PROMISE.
// WE ARE TELLING THE USER, THAT HIS OR HER PROMISE WOULD BE ACCEPTED.
let ask_user = new Promise((resolve, reject) => {
    // COLLECT USER'S INFO AND COMPARE WITH ORIGINAL INFO.
    let user_prompt = parseInt(prompt("Please what is your age?"));

    // WE ARE GOING TO CHECK THIS WITH A RANDOM NUMBER, CLOSE TO THE AGE (same as the age the user entered).
    let random_checker = Math.floor(Math.random() * user_prompt) + 1;

    // THE REAL CONDITION THAT MAKES USE OF THE PROMISE STATES.
    if (user_prompt == random_checker) {
        // LET THE PROMISE BE ACCEPTED
        resolve("This is it, your age is the same as what was stored.");

    }
    else {
        reject("This is it, your age is not the same as what was on our server");
    }
})

// MAKING USE OF THIS PROMISE.
ask_user.then((the_message) => {
    alert(the_message);
})
// FOR ERROR STATE.
.catch((the_message) => {
    alert(the_message);
})

// USING CALLBACKS.
function callback_function (success, failure) {
    let a = 1 + 1;

    if (a == 2) {
        success("This is correct");
    }
    else {
        failure("This is not correct");
    }
}

// CALLING THIS CALLBACK FUNCTION, AS A PROMISE.
call_callback (function (message) {
    console.log("HERE YOU GO.", message);
}, 
function ()  {
    console.log("ERROR", message);
})