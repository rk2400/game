window.addEventListener('load', () => {
  //Taking values from HTML and storing in javascript variables (DOM)
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const input2 = document.querySelector("#new-task-input2");
  const list_el = document.querySelector("#tasks");

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      //Taking two inputs from user
      const task = input.value;
      console.log(task);
      const task2 = input2.value;
      console.log(task2);

      //Create DIV and give it class task
      const task_el = document.createElement('div');
      task_el.classList.add('task');

      //Create DIV and give it class content
      const task_content_el = document.createElement('div');
      task_content_el.classList.add('content');

      //Make div task parent of div content
      task_el.appendChild(task_content_el);

      //Taking title from input
      const task_input_el = document.createElement('input');
      task_input_el.classList.add('text');
      task_input_el.type = 'text';
      task_input_el.value = task;
      task_input_el.setAttribute('readonly', 'readonly');

      //Taking description from input
      const task_input_el2 = document.createElement('input');
      task_input_el2.classList.add('text');
      task_input_el2.type = 'text';
      task_input_el2.value = task2;
      task_input_el2.setAttribute('readonly', 'readonly');

      //Adding input(title) to content
      task_content_el.appendChild(task_input_el);

      //Adding input(description) to content
      task_content_el.appendChild(task_input_el2);

      //Creating a div named actions to place delete and edit button
      const task_actions_el = document.createElement('div');
      task_actions_el.classList.add('actions');

      //Creating edit button
      const task_edit_el = document.createElement('button');
      task_edit_el.classList.add('edit');
      task_edit_el.innerText = 'Edit';

      //Creating delete button
      const task_delete_el = document.createElement('button');
      task_delete_el.classList.add('delete');
      task_delete_el.innerText = 'Delete';

      //Adding delete and edit buttons to action div
      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);

      //Adding action div in task div
      task_el.appendChild(task_actions_el);

      //Adding task div in tasks div
      list_el.appendChild(task_el);

      //Clearing input field after pressing add button
      input.value = '';
      input2.value = '';

      //Edit functionality
      task_edit_el.addEventListener('click', (e) => {
          if (task_edit_el.innerText.toLowerCase() == "edit") {
              task_edit_el.innerText = "Save";
              task_input_el.removeAttribute("readonly");
              task_input_el2.removeAttribute("readonly");
              task_input_el2.focus();
              task_input_el.focus();
          } else {
              task_edit_el.innerText = "Edit";
              task_input_el.setAttribute("readonly", "readonly");
          }
      });

      //Delete Functionality
      task_delete_el.addEventListener('click', (e) => {
          list_el.removeChild(task_el);
      });
  });
});