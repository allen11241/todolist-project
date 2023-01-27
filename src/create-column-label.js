function createColumnLabels() {
    const container = document.createElement('div');
    container.classList.add('todo-label-container');

    const blankFiller = document.createElement('div');
    blankFiller.classList.add('blank');
    container.appendChild(blankFiller);

    const title = document.createElement('div');
    title.classList.add('todo-label');
    title.textContent = 'Title';
    container.appendChild(title);

    /*const description = document.createElement('div');
    description.classList.add('todo-label');
    description.textContent = 'Description';
    container.appendChild(description);*/

    const dueDate = document.createElement('div');
    dueDate.classList.add('todo-label');
    dueDate.textContent = 'Due Date';
    container.appendChild(dueDate);

    const priority = document.createElement('div');
    priority.classList.add('todo-label');
    priority.textContent = 'Priority';
    container.appendChild(priority);

    return container;
  }

  export {createColumnLabels}