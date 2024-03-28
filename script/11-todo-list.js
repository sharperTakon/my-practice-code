 const todoList = [{
  name: 'make dinner', 
  dueDate: '12-22-2022'
}, {
  name: 'wash dishes',
  dueDate: '12-22-2022'
}];


renderTodoList();

function renderTodoList() {

  let todoListHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.duedate;
    const {name, dueDate} = todoObject;

    const html = 
      `<div> ${name}</div>
      <div>${dueDate}</div>
      
      <button onclick ="
      todoList.splice([${i}], 1);
      renderTodoList();
      " class="delete-todo-button">delete</button>
      `;
    todoListHtml += html;
  }


  document.querySelector('.js-todo-list').innerHTML = todoListHtml
};

  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input')
    const dueDate = dateInputElement.value;

    todoList.push({
      //name:name,
      //dueDate: dueDdate
      name,
      dueDate
    });

    inputElement.value = '';

    renderTodoList();
  }
