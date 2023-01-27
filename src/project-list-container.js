import { populateTodoItems, removeAllChildNodes } from "./todo-list-container";
import { TodoModule} from './todo-module';
import {createTodoItemInput} from './create-todo-item';

function populateProjects(projects) {
    const container = document.createElement('div');
    container.classList.add('project-list-container');
  
    for(let i = 0; i < projects.numberOfProjects; i++) {
        container.appendChild(createProjectCard(projects.projectNameAt(i)))
        .addEventListener('click', () => {
            console.log('clicky')
            selectProjectCard(projects, container, i)});

        if(i === projects.numberOfProjects - 1){
            selectProjectCard(projects, container, i);
        }
    }
    return container;
  }

function createProjectCard(name) {
    const container = document.createElement('div');
    container.classList.add('project-card-container');

    const projectName = document.createElement('div');
    projectName.classList.add('project-card-name');
    projectName.textContent = name;

    container.appendChild(projectName);
    return container;
}

function selectProjectCard(projects, parent, i) {
    const items = TodoModule.loadProjectItems(projects.projectKeyAt(i));
    const itemContainer = document.querySelector('.main');
    removeAllChildNodes();
    const createTodoContainer = document.querySelector('.open-todo-input');
    createTodoContainer.style.display = 'flex';
    createTodoContainer.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.appendChild(createTodoItemInput(projects.projectKeyAt(i)));
      })
    itemContainer.appendChild(populateTodoItems(items));

    let classList = 'classList' in parent;
    for(let j = 0; j < parent.children.length; j++) {
        let child = parent.children[j];
        if(child.tagName == 'DIV') {
            if(classList) {
                child.classList.remove('project-card-container-selected');
            }
        }
        let selectedChild = parent.children[i];
        selectedChild.classList.add('project-card-container-selected');
    }
}

export {populateProjects, createProjectCard, selectProjectCard}