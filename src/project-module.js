import { Project, ProjectList } from "./project";
import { createProjectCard } from "./project-card";
import { storageAvailable } from './local-storage';
import { TodoModule } from "./todo-module";
import { populateTodoItems, removeAllChildNodes } from "./todo-list-container";
import {createTodoItemInput} from './create-todo-item';

const ProjectModule = (function() {
    const PROJECT_COUNT_KEY = 'projectCount';
    const PROJECT_KEY = 'project';
    let projectCount = 1;

    const getProjectCount = () => {
        return window.localStorage.getItem(PROJECT_COUNT_KEY);
    }

      const initDefaultProject = () => {
        if (!localStorage.getItem(PROJECT_COUNT_KEY)) {
          window.localStorage.setItem(PROJECT_COUNT_KEY, projectCount);
          const project = new Project('Default Project', '09/20/22', 'project0', 2);
          window.localStorage.setItem("project0", JSON.stringify(project));
        } else {
        }
      }

    const saveProjectToStorage = (projectName, projectDate) => {
        let projectKey = PROJECT_KEY + getProjectCount();
        const INITIAL_ITEM_COUNT = 0;
        const project = new Project(projectName, projectDate, projectKey, INITIAL_ITEM_COUNT);
        window.localStorage.setItem(projectKey, JSON.stringify(project));
        projectCount++;
        window.localStorage.setItem(PROJECT_COUNT_KEY, projectCount);

        console.log('project saved: ' + projectKey);
    }

    const loadProjectsFromStorage = () => {
        const projects = new ProjectList();
        if (storageAvailable('localStorage')) {
          initDefaultProject();
          TodoModule.initDefaultItems();
          projectCount = getProjectCount();
          console.log('project count: ' + projectCount);
          for(let i = 0; i < projectCount; i++) {
            let object = window.localStorage.getItem(PROJECT_KEY + i.toString());
            console.log('project' + i.toString());
            projects.newProject(JSON.parse(object)._name, JSON.parse(object)._date, JSON.parse(object)._key, JSON.parse(object)._itemCount);
          }
        }
        else {
          alert('Not enough storage available. Please clear some space.');
          console.log('bad');
        }

        return projects;
      }
  
    return {
        saveProjectToStorage, 
        loadProjectsFromStorage,
    }
  })();

  export {ProjectModule}