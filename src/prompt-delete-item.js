import { TodoModule } from './todo-module';
import { populateTodoItems, removeAllChildNodes} from './todo-list-container';

function createDeletePrompt(itemKey) {
    const modal = document.createElement('div');
    modal.classList.add('modal-delete');

    const container = document.createElement('div');
    container.classList.add('prompt-delete-container');

    const topSection = document.createElement('div');
    topSection.textContent = 'Are you sure you want to delete this item?';
    topSection.classList.add('prompt-delete-top');

    const bottomSection = document.createElement('div');
    bottomSection.classList.add('prompt-delete-bottom');

    const btnYes = document.createElement('div');
    btnYes.classList.add('btn-prompt-delete');
    btnYes.textContent = 'YES';
    btnYes.addEventListener('click', () => {
        modal.style.display = 'none';
        let projectName = TodoModule.extractProjectName(itemKey);
            TodoModule.removeItemFromStorage(itemKey, projectName);
            const items = TodoModule.loadProjectItems(projectName);
            removeAllChildNodes();
            const itemContainer = document.querySelector('.main');
            itemContainer.appendChild(populateTodoItems(items));
    })

    const btnNo = document.createElement('div');
    btnNo.classList.add('btn-prompt-delete');
    btnNo.textContent = 'NO';
    btnNo.addEventListener('click', () => {
        modal.style.display = 'none';
    })

    container.appendChild(topSection);
    bottomSection.appendChild(btnYes);
    bottomSection.appendChild(btnNo);
    container.appendChild(bottomSection);
    modal.appendChild(container);
    return modal;
}

export {createDeletePrompt}

