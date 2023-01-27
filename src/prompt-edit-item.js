import {TodoModule} from './todo-module';
import {populateTodoItems, removeAllChildNodes} from './todo-list-container';

function createEditItem(title, description, dueDate, priority, itemKey) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const container = document.createElement('div');
    container.classList.add('todo-input-container');

    const heading = document.createElement('div');
    heading.classList.add('modal-heading');
    heading.textContent = 'Edit Task';
    container.appendChild(heading);

    const body = document.createElement('div');
    body.classList.add('modal-body');

    const inputContent = document.createElement('div');
    inputContent.classList.add('todo-modal-input-content');

    const todoTitleLabel = document.createElement('label');
    todoTitleLabel.setAttribute('for', 'todo-item-input-title');
    todoTitleLabel.textContent = 'Title';
    inputContent.appendChild(todoTitleLabel);

    const todoItemTitle = document.createElement('input');
    todoItemTitle.setAttribute('type', 'text');
    todoItemTitle.setAttribute('size', '10');
    todoItemTitle.setAttribute('id', 'todo-item-input');
    todoItemTitle.classList.add('todo-item-input');
    todoItemTitle.value = title;
    inputContent.appendChild(todoItemTitle);

    const todoItemDescriptionLabel = document.createElement('label');
    todoItemDescriptionLabel.setAttribute('for', 'todo-item-input-description');
    todoItemDescriptionLabel.textContent = 'Description';
    inputContent.appendChild(todoItemDescriptionLabel);

    const todoItemDescription = document.createElement('input');
    todoItemDescription.setAttribute('type', 'text');
    todoItemDescription.setAttribute('id', 'todo-description-input');
    todoItemDescription.classList.add('todo-item-input');
    todoItemDescription.value = description;
    inputContent.appendChild(todoItemDescription);

    const todoItemDueDateLabel = document.createElement('label');
    todoItemDueDateLabel.setAttribute('for', 'due-date');
    todoItemDueDateLabel.textContent = 'Due Date';
    inputContent.appendChild(todoItemDueDateLabel);

    const todoItemDueDate = document.createElement('input');
    todoItemDueDate.setAttribute('type', 'text');
    todoItemDueDate.setAttribute('id', 'todo-date-input');
    todoItemDueDate.classList.add('todo-item-input');
    todoItemDueDate.value = dueDate;

    inputContent.appendChild(todoItemDueDate);

    body.appendChild(inputContent);

    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('priority-container');

    const priorityHighLabel = document.createElement('label');
    priorityHighLabel.setAttribute('for', 'priority-high');
    priorityHighLabel.classList.add('priority-label');
    priorityHighLabel.textContent = 'High Priority';
    priorityContainer.appendChild(priorityHighLabel);

    const priorityMediumLabel = document.createElement('label');
    priorityMediumLabel.setAttribute('for', 'priority-medium');
    priorityMediumLabel.classList.add('priority-label');
    priorityMediumLabel.textContent = 'Medium Priority';
    priorityContainer.appendChild(priorityMediumLabel);

    const priorityLowLabel = document.createElement('label');
    priorityLowLabel.setAttribute('for', 'priority-low');
    priorityLowLabel.classList.add('priority-label');
    priorityLowLabel.textContent = 'Low Priority';
    priorityContainer.appendChild(priorityLowLabel);

    const priorityHigh = document.createElement('input');
    priorityHigh.setAttribute('type', 'radio');
    priorityHigh.setAttribute('name', 'priority');
    priorityHigh.setAttribute('id', 'priority-high');
    priorityHigh.setAttribute('value', 'high priority');
    priorityHigh.classList.add('priority-label');
    priorityContainer.appendChild(priorityHigh);

    const priorityMedium = document.createElement('input');
    priorityMedium.setAttribute('type', 'radio');
    priorityMedium.setAttribute('name', 'priority');
    priorityMedium.setAttribute('id', 'priority-medium');
    priorityMedium.setAttribute('value', 'medium priority');
    priorityMedium.classList.add('priority-label');
    priorityContainer.appendChild(priorityMedium);

    const priorityLow = document.createElement('input');
    priorityLow.setAttribute('type', 'radio');
    priorityLow.setAttribute('name', 'priority');
    priorityLow.setAttribute('id', 'priority-low');
    priorityLow.setAttribute('value', 'low priority');
    priorityLow.classList.add('priority-label');
    priorityContainer.appendChild(priorityLow);

    body.appendChild(priorityContainer);

    const btnSubmit = document.createElement('button');
    btnSubmit.setAttribute('id', 'btn-submit');
    btnSubmit.classList.add('modal-btn');
    btnSubmit.textContent = 'Enter';

    const btnCancel = document.createElement('button');
    btnCancel.setAttribute('id', 'btn-cancel');
    btnCancel.classList.add('modal-btn');
    btnCancel.textContent = 'Cancel';

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('modal-btn-container');
    btnContainer.appendChild(btnSubmit);
    btnContainer.appendChild(btnCancel);
    body.appendChild(btnContainer);

    let priorityOptions = document.getElementsByName('priority');

    console.log('priority= ' + priority);
    if(priority === priorityHigh.value) {
        priorityHigh.checked = true;
    } else if(priority === priorityMedium.value) {
        priorityMedium.checked = true;
    } else {
        priorityLow.checked = true;
    }

    btnSubmit.addEventListener('click', function() {
        const content = document.getElementById('content');
        content.removeChild(modal);

      let prioritySelection;

      if(priorityHigh.checked === true) {
        prioritySelection = priorityHigh.value;
     } else if(priorityMedium.checked === true) {
         prioritySelection = priorityMedium.value;
     } else {
         prioritySelection = priorityLow.value;
     }

      TodoModule.editItemToStorage(todoItemTitle.value, todoItemDescription.value, todoItemDueDate.value, prioritySelection, itemKey)
      let projectKey = TodoModule.extractProjectName(itemKey);
      const items = TodoModule.loadProjectItems(projectKey);
      const itemContainer = document.querySelector('.main');
      removeAllChildNodes();
      itemContainer.appendChild(populateTodoItems(items));
    });

    btnCancel.addEventListener('click', function(){
      modal.style.display = 'none';
    })  
   
    container.appendChild(body);
    modal.appendChild(container);
    return modal;
  }

  export {createEditItem}