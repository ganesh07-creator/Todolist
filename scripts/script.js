const todolist = JSON.parse(localStorage.getItem('todolist')) || [];

rendertodolist();

function rendertodolist() {
  let todolistHTML = '';

  for (let i = 0; i < todolist.length; i++) {
    const { name, duedate } = todolist[i];

    todolistHTML += `
      <tr>
        <td class="todoname">${name}</td>
        <td class="duedate">${duedate}</td>

        <td>
          <button class="edit-button"
            onclick="edittodo(${i})">
            Edit
          </button>
        </td>

        <td class="remove">
          <button class="buttonin"
            onclick="deletetodo(${i})">
            Delete
          </button>
        </td>
      </tr>
    `;
  }

  document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

function savetolocalstorage() {
  localStorage.setItem(
    'todolist',
    JSON.stringify(todolist)
  );
}

function addtodo() {
  const inputelement =
    document.querySelector('.js-name-input');

  const dateinputelement =
    document.querySelector('.js-due-date');

  const name = inputelement.value;
  const duedate = dateinputelement.value;

  if (!name || !duedate) return;

  todolist.push({
    name,
    duedate
  });

  savetolocalstorage();

  inputelement.value = '';
  dateinputelement.value = '';

  rendertodolist();
}

function deletetodo(index) {
  todolist.splice(index, 1);

  savetolocalstorage();

  rendertodolist();
}

function edittodo(index) {

  const newname = prompt(
    'Edit todo name:',
    todolist[index].name
  );

  const newdate = prompt(
    'Edit due date:',
    todolist[index].duedate
  );

  if (newname && newdate) {

    todolist[index].name = newname;
    todolist[index].duedate = newdate;

    savetolocalstorage();

    rendertodolist();
  }
}