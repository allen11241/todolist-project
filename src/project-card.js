import {loadProjectItems, populateTodoItems} from './todo-item-list';

function createProjectCard(name, key) {
    const container = document.createElement('div');
    container.classList.add('project-card-container');

    const projectName = document.createElement('div');
    projectName.classList.add('project-card-name');
    projectName.textContent = name;

    container.appendChild(projectName);
    //container.addEventListener('click', loadProjectItems(key));
    container.addEventListener('click', () => {
        const items = loadProjectItems(key);
        populateTodoItems(items);
        //alert('CLICK!' + key);
    });
    return container;
}

export {createProjectCard};