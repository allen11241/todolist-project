import { initProjects, removeProjectContainer } from './init';
import {createProjectCard} from './project-card';
import { addProject, saveProjectToStorage } from './project-list';
import { ProjectModule } from './project-module';
import { ExceptionModule} from './exception-module';
import { datepicker } from 'js-datepicker';

function createProjectInput(){
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const container = document.createElement('div');
    container.classList.add('project-input-content');

    const heading = document.createElement('div');
    heading.classList.add('modal-heading');
    heading.textContent = 'Create a New Project';
    container.appendChild(heading);

    const body = document.createElement('div');
    body.classList.add('modal-body');

    const inputContent = document.createElement('div');
    inputContent.classList.add('modal-input-content');

    const projectNameLabel = document.createElement('label');
    projectNameLabel.setAttribute('for', 'project-name-input');
    projectNameLabel.classList.add('modal-label');
    projectNameLabel.textContent = 'Project name';
    inputContent.appendChild(projectNameLabel);

    const projectName = document.createElement('input');
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('size', '10');
    projectName.setAttribute('id', 'project-name-input');
    projectName.classList.add('project-input');
    inputContent.appendChild(projectName);

    const projectDateLabel = document.createElement('label');
    projectDateLabel.setAttribute('for', 'project-date-input');
    projectDateLabel.setAttribute('id', 'project-date-label');
    projectDateLabel.classList.add('modal-label');
    projectDateLabel.textContent = 'Due Date';
    inputContent.appendChild(projectDateLabel);

    const projectDate = document.createElement('input');
    projectDate.setAttribute('type', 'date');
    projectDate.setAttribute('id', 'project-date-input');
    projectDate.classList.add('project-input');
    inputContent.appendChild(projectDate);

    body.appendChild(inputContent);

    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent ='Cannot leave text field(s) empty';
    errorMessage.style.display = 'none';
    body.appendChild(errorMessage);

    const btnSubmit = document.createElement('button');
    btnSubmit.setAttribute('id', 'btn-submit-project');
    btnSubmit.classList.add('modal-btn');
    btnSubmit.textContent = 'Enter';

    const btnCancel = document.createElement('button');
    btnCancel.setAttribute('id', 'btn-cancel-project');
    btnCancel.classList.add('modal-btn');
    btnCancel.textContent = 'Cancel';

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('modal-btn-container');
    btnContainer.appendChild(btnSubmit);
    btnContainer.appendChild(btnCancel);
    body.appendChild(btnContainer);

    btnSubmit.addEventListener('click', function() {
        if(ExceptionModule.isEmpty(projectName.value) ||
        ExceptionModule.isEmpty(projectDate.value)){
            errorMessage.style.display = 'block';
            setTimeout( () => {
                errorMessage.style.display = 'none';
            }, 4000);

        } else {
            const content = document.getElementById('content');
            content.removeChild(modal);
            //modal.style.display = 'none';
            ProjectModule.saveProjectToStorage(projectName.value, projectDate.value);
            removeProjectContainer();
            initProjects();
        }
    })
 
    btnCancel.addEventListener('click', function(){
      modal.style.display = 'none';
      clearModalInputs();
    })

    function clearModalInputs(){
        const inputs = document.querySelectorAll('.modal-input');
        for(let i=0; i < inputs.length; i++) {
            inputs[i].textContent = '';
        }
    }
    container.appendChild(body);

    container.appendChild(body);
    modal.appendChild(container);

    return modal;
}

export {createProjectInput};