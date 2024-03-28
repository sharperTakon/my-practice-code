const todoList = [];

renderTodoList();



function renderTodoList() {
  let todoListHtml = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = 
      `<div> ${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">delete</button>
      <input class="check" type="checkbox">
      `;
    todoListHtml += html
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHtml;


  document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
     renderTodoList();
    })
  })
};


document.querySelector('.js-create-button').addEventListener('click', () => {
  const titleElement = document.querySelector('.js-create-todo');
  document.querySelector('.js-todo-title').innerHTML = titleElement.value
  titleElement.value = '';
});

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});


  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input')

    const name = inputElement.value;
    const dueDate = dateInputElement.value;
    todoList.push({
      //name:name,
      //dueDate: dueDdate
      name,
      dueDate
    });
    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
  };
