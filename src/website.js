import {createProjectInput} from './create-new-project';
import {ProjectModule} from './project-module';
import {populateProjects} from './project-list-container';
import {createColumnLabels} from './create-column-label';
import {createTodoListContainer} from './todo-list-container';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
  
    const pageName = document.createElement('h1');
    pageName.classList.add('page-name');
    pageName.textContent = 'To Do List';
  
    header.appendChild(pageName);
    return header;
  }

  function createNav() {
    const nav = document.createElement('nav');

    const itemProjects = document.createElement('div');
    itemProjects.classList.add('projects-title');
    itemProjects.textContent = 'Projects';
    nav.appendChild(itemProjects);

    const btnNewProject = document.createElement('button');
    btnNewProject.classList.add('btn-new-project');
    btnNewProject.textContent = 'Create New Project';
    const content = document.getElementById('content');
    btnNewProject.addEventListener('click', () => {
      content.appendChild(createProjectInput());
    })
    nav.appendChild(btnNewProject);

    return nav;
  }

  function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.appendChild(createNewTodo());
    main.appendChild(createColumnLabels());
    main.appendChild(createTodoListContainer());
    return main;
  }

  function createNewTodo() {
    const openTodoInput = document.createElement('div');
    openTodoInput.classList.add('open-todo-input');
    openTodoInput.style.display = 'none';
    openTodoInput.textContent = 'New To-do Task';
    /*openTodoInput.addEventListener('click', () => {
      content.appendChild(createTodoItemInput());
    })*/
    return openTodoInput;
  }

  function createBodyContainer() {
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('body-container');
    bodyContainer.appendChild(createNav());
    bodyContainer.appendChild(createMain());
    return bodyContainer;
  }
  
  function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
  
    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} Allen Daniels`;
  
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/allen11241";
  
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");
  
    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
  
    return footer;
  }

function initWebsite() {
    const content = document.getElementById('content');
  
    content.appendChild(createHeader());
    content.appendChild(createBodyContainer());
    content.appendChild(createFooter());
  }
  
  export default initWebsite;