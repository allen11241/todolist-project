import { TodoItemKey} from './todo-item-new';
import { TodoModule } from './todo-module';
import {createDeletePrompt} from './prompt-delete-item';
import { createEditItem } from './prompt-edit-item';

function createTodoListContainer() {
    const container = document.createElement('div');
    container.classList.add('todo-list-container');
    return container;
}

function populateTodoItems(items) {
    const container = document.querySelector('.todo-list-container');
    container.classList.add('todo-list-container');
    for(let i = 0; i< items.numberOfTodoItems; i++) {
      container.appendChild(loadTodoCard(
        items.itemAtIndexTitle(i),
        items.itemAtIndexDescription(i),
        items.itemAtIndexDueDate(i),
        items.itemAtIndexPriority(i),
        items.itemAtIndexKey(i)));
        console.log('POPULATE: ' + items.itemAtIndexKey(i))
    }
    return container;
  }

  function removeAllChildNodes() {
    const container = document.querySelector('.todo-list-container');
    if(container.childNodes.length > 0){
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
  }

  function loadTodoCard(title, description, dueDate, priority, key) {
    const newTodoItem = new TodoItemKey(title, description, dueDate, priority, key);

    console.log('TODO: ' + key)

    const container = document.createElement('div');
    container.classList.add('todo-card-container');

    /*const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';
    checkbox.classList.add('checkbox');
    container.appendChild(checkbox);*/

    const CHECKBOX_CHECKED = '../dist/img/check_box_checked.svg';
    const CHECKBOX_UNCHECKED = '../dist/img/check_box_blank.svg';

    let isChecked = false;

    /*const checkbox = document.createElement('img');
    checkbox.src = CHECKBOX_UNCHECKED;
    checkbox.classList.add('checkbox_unchecked');
    container.appendChild(checkbox);*/

    const checkbox = document.createElement('div');
    checkbox.classList.add('checkbox_unchecked');
    container.appendChild(checkbox);

    const titleCard = document.createElement('div');
    titleCard.classList.add('todo-card-title');
    titleCard.textContent = newTodoItem.title;
    container.appendChild(titleCard);

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');
    descriptionContainer.style.display = 'none';

    const descriptionHeading = document.createElement('div');
    descriptionHeading.classList.add('description-heading');
    descriptionHeading.textContent = 'Description';
    descriptionContainer.appendChild(descriptionHeading)

    const descriptionCard = document.createElement('div');
    descriptionCard.classList.add('todo-card-description');
    descriptionCard.textContent = newTodoItem.description;
    //descriptionCard.style.display = 'none';
    descriptionContainer.appendChild(descriptionCard);

    container.appendChild(descriptionContainer)

    const dueDateCard = document.createElement('div');
    dueDateCard.classList.add('todo-card-duedate');
    dueDateCard.textContent = formatDate(newTodoItem.dueDate);
    container.appendChild(dueDateCard);

    const priorityColor = document.createElement('div');
    priorityColor.classList.add('priority-color');
    priorityColor.style.backgroundColor = getPriorityColor(newTodoItem.priority);
    container.appendChild(priorityColor);

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');

    const editContainer = document.createElement('div');
    editContainer.classList.add('icon-container');
    editContainer.setAttribute('id', 'edit-icon');
    const editToolTip = document.createElement('span');
    editToolTip.textContent = 'Edit';
    editToolTip.classList.add('tooltip-edit');
    editContainer.appendChild(editToolTip);

    const editIcon = document.createElement('img');
    editIcon.src = './img/edit-icon.svg';
    editIcon.classList.add('item-icon');
    editContainer.appendChild(editIcon);
    iconContainer.appendChild(editContainer);

    const deleteContainer = document.createElement('div');
    deleteContainer.classList.add('icon-container');

    const deleteIcon = document.createElement('img');
    deleteIcon.src = './img/delete-icon.svg';
    deleteIcon.classList.add('item-icon');
    deleteContainer.appendChild(deleteIcon);
    iconContainer.appendChild(deleteContainer);

    const content = document.getElementById('content');

    editContainer.addEventListener('click', () => {
        content.appendChild(createEditItem(title, description, dueDate, priority, key));
    })

    container.appendChild(iconContainer);

    container.addEventListener('click', () => {
        if(container.classList.contains('todo-card-selected')){
            deleteIcon.style.display = 'none';
            editIcon.style.display = 'none';
            descriptionContainer.style.display = 'none';
            container.classList.remove('todo-card-selected');
        } else {
            container.classList.add('todo-card-selected')
            deleteIcon.style.display = 'block';
            editIcon.style.display = 'block';
            descriptionContainer.style.display = 'block';
        }
    })

    checkbox.addEventListener('click', () => {
        if(isChecked === false) {
            checkbox.classList.remove('checkbox_unchecked')
            checkbox.classList.add('checkbox_checked')
            isChecked = true;
        } else if(isChecked === true) {
            checkbox.classList.remove('checkbox_checked')
            checkbox.classList.add('checkbox_unchecked')
            isChecked = false;
        }
    })

    deleteContainer.addEventListener('click', () => {
            content.appendChild(createDeletePrompt(key));
        /*let projectName = TodoModule.extractProjectName(key);
            TodoModule.removeItemFromStorage(key, projectName);
            const items = TodoModule.loadProjectItems(projectName);
            removeAllChildNodes();
            const itemContainer = document.querySelector('.main');
            itemContainer.appendChild(populateTodoItems(items));*/
    })

    container.addEventListener('mouseenter', () => {
        /*deleteIcon.style.display = 'block';
        editIcon.style.display = 'block';*/
    })

    container.addEventListener('mouseleave', () => {
        /*deleteIcon.style.display = 'none';
        editIcon.style.display = 'none';*/
    })

    return container;
}

function removeNode(item) {
    item.parentNode.remove();
}

function getPriorityColor(priority) {
    if(priority == 'high priority') {
        return 'red';
    } else if(priority == 'medium priority') {
        return 'yellow';
    } else {
        return 'lightgreen';
    }
}

function formatDate(date) {
    let res = date.split('-');
    let year = res[0];
    let month = res[1];
    let day = res[2];
    return month + '/' + day + '/' + year;
}

export {createTodoListContainer, populateTodoItems, removeAllChildNodes, loadTodoCard}