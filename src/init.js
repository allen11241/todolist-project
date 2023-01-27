import { populateProjects } from "./project-list-container";
import { ProjectModule } from "./project-module";


function initProjects() {
    //window.localStorage.clear();
    let projects = ProjectModule.loadProjectsFromStorage();
    const nav = document.querySelector('nav');
    nav.appendChild(populateProjects(projects));
}

function removeProjectContainer() {
    const listContainer = document.querySelector('.project-list-container');
    const container = document.querySelector('nav');
    container.removeChild(listContainer);
  }

export {initProjects, removeProjectContainer}