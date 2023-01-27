import { createDeletePrompt } from './prompt-delete-item';
import { TodoItemKey} from './todo-item-new';
import { TodoModule } from './todo-module';

function loadTodoCard(title, description, dueDate, priority, key) {
    const newTodoItem = new TodoItemKey(title, description, dueDate, priority, key);

    const container = document.createElement('div');
    container.classList.add('todo-card-container');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';
    checkbox.classList.add('checkbox');
    container.appendChild(checkbox);

    const titleCard = document.createElement('div');
    titleCard.classList.add('todo-card-title');
    titleCard.textContent = newTodoItem.title;
    container.appendChild(titleCard);

    const descriptionCard = document.createElement('div');
    descriptionCard.classList.add('todo-card-description');
    descriptionCard.textContent = newTodoItem.description;
    container.appendChild(descriptionCard);

    const dueDateCard = document.createElement('div');
    dueDateCard.classList.add('todo-card-duedate');
    dueDateCard.textContent = newTodoItem.dueDate;
    container.appendChild(dueDateCard);

    const priorityColor = document.createElement('div');
    priorityColor.classList.add('priority-color');
    priorityColor.style.backgroundColor = getPriorityColor(newTodoItem.priority);
    container.appendChild(priorityColor);

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');

    const editContainer = document.createElement('div');
    editContainer.classList.add('icon-container');

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

    container.appendChild(iconContainer);

    container.addEventListener('mouseenter', () => {
        deleteIcon.style.display = 'block';
        editIcon.style.display = 'block';
        deleteIcon.addEventListener('click', () => {
            const content = document.getElementById('content');
            content.appendChild(createDeletePrompt(key));
    })

})

    container.addEventListener('mouseleave', () => {
        deleteIcon.style.display = 'none';
        editIcon.style.display = 'none';
    })

    return container;
}

function getPriorityColor(priority) {
    if(priority.value === 'high priority') {
        return 'red';
    } else if(priority.value === 'medium priority') {
        return 'yellow';
    } else {
        return 'lightgreen';
    }
}

export {loadTodoCard};