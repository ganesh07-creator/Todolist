const todolist = [];

function rendertodolist() {
  let todolistHTML = '';

  for (let i = 0; i < todolist.length; i++) {
    const { name, duedate } = todolist[i];

    todolistHTML += `
      <tr>
        <td class="todoname">${name}</td>
        <td class="duedate">${duedate}</td>
        <td class="remove">
          <button class="buttonin"
            onclick="todolist.splice(${i},1); rendertodolist();">
            Delete
          </button>
        </td>
      </tr>
    `;
  }

  document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

function addtodo() {
  const inputelement = document.querySelector('.js-name-input');
  const dateinputelement = document.querySelector('.js-due-date');

  const name = inputelement.value;
  const duedate = dateinputelement.value;

  if (!name || !duedate) return;

  todolist.push({ name, duedate });

  inputelement.value = "";
  dateinputelement.value = "";

  rendertodolist();
}