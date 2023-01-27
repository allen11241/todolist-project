import { Project, ProjectList } from "./project";
import { createProjectCard } from "./project-card";
import { storageAvailable } from './local-storage';

const PROJECT_COUNT_KEY = 'projectCount';
const PROJECT_KEY = 'project';
//const projectList = new ProjectList;
//projectList.newProject('Default Project', '9/20/22', 'project1');
let projectCount = setProjectCount();

function setProjectCount(){
  if (!localStorage.getItem(PROJECT_COUNT_KEY)) {
    window.localStorage.setItem(PROJECT_COUNT_KEY, projectCount);
    return 1;
  } else {
    return window.localStorage.getItem(PROJECT_COUNT_KEY);
  }
}

function getProjectCount() {
  return window.localStorage.getItem(PROJECT_COUNT_KEY);
}

function setupDefaultProject(){
  const project = new Project('Default Project', '9/20/22', 'project0');
  window.localStorage.setItem("project0", JSON.stringify(project));
}

function saveProjectToStorage(projectName, projectDate) {
  let projectKey = PROJECT_KEY + getProjectCount();
  const project = new Project(projectName, projectDate, projectKey);
  console.log('PROJECT KEY: ' + projectKey);
  window.localStorage.setItem(projectKey, JSON.stringify(project));
  projectCount++;
  window.localStorage.setItem(PROJECT_COUNT_KEY, projectCount);

  const projectListContainer  = document.querySelector('.project-list-container');
  projectListContainer.appendChild(createProjectCard(projectName));
}

function loadProjectsFromStorage(){
  setupDefaultProject();
  const projects = new ProjectList();
  if (storageAvailable('localStorage')) {

    projectCount = window.localStorage.getItem(PROJECT_COUNT_KEY);
    console.log('project count: ' + projectCount);
    for(let i = 0; i < projectCount; i++) {
      let object = window.localStorage.getItem('project' + i.toString());
      projects.newProject(JSON.parse(object)._name, JSON.parse(object)._date, JSON.parse(object)._key);
    }
  }
  else {
    // Too bad, no localStorage for us
    alert('Not enough storage available. Please clear some space.');
    console.log('bad');
  }
  return projects;
}

function loadLastProject() {
  let jsonObject = window.localStorage.getItem(PROJECT + getProjectCount().toString());
  let lastProject = new Project(JSON.parse(jsonObject)._name, JSON.parse(jsonObject)._date, JSON.parse(jsonObject)._key);
  return lastProject;
}

function populateProjects(projects) {
  const container = document.createElement('div');
  container.classList.add('project-list-container');

  for(let i = 0; i< projects.numberOfProjects; i++) {
    console.log(projects.projectNameAt(i));
    container.appendChild(createProjectCard(
      projects.projectNameAt(i), projects.projectKeyAt(i))).addEventListener('click', () => {
        alert(projects.projectKeyAt(i));
      });
  }
  return container;
}

export {saveProjectToStorage, loadProjectsFromStorage, populateProjects};