/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-column-label.js":
/*!************************************!*\
  !*** ./src/create-column-label.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createColumnLabels": () => (/* binding */ createColumnLabels)
/* harmony export */ });
function createColumnLabels() {
  var container = document.createElement('div');
  container.classList.add('todo-label-container');
  var blankFiller = document.createElement('div');
  blankFiller.classList.add('blank');
  container.appendChild(blankFiller);
  var title = document.createElement('div');
  title.classList.add('todo-label');
  title.textContent = 'Title';
  container.appendChild(title);
  /*const description = document.createElement('div');
  description.classList.add('todo-label');
  description.textContent = 'Description';
  container.appendChild(description);*/

  var dueDate = document.createElement('div');
  dueDate.classList.add('todo-label');
  dueDate.textContent = 'Due Date';
  container.appendChild(dueDate);
  var priority = document.createElement('div');
  priority.classList.add('todo-label');
  priority.textContent = 'Priority';
  container.appendChild(priority);
  return container;
}



/***/ }),

/***/ "./src/create-new-project.js":
/*!***********************************!*\
  !*** ./src/create-new-project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectInput": () => (/* binding */ createProjectInput)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _project_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-card */ "./src/project-card.js");
/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-list */ "./src/project-list.js");
/* harmony import */ var _project_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-module */ "./src/project-module.js");
/* harmony import */ var _exception_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exception-module */ "./src/exception-module.js");
/* harmony import */ var js_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-datepicker */ "./node_modules/js-datepicker/dist/datepicker.min.js");
/* harmony import */ var js_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_datepicker__WEBPACK_IMPORTED_MODULE_5__);







function createProjectInput() {
  var modal = document.createElement('div');
  modal.classList.add('modal');
  var container = document.createElement('div');
  container.classList.add('project-input-content');
  var heading = document.createElement('div');
  heading.classList.add('modal-heading');
  heading.textContent = 'Create a New Project';
  container.appendChild(heading);
  var body = document.createElement('div');
  body.classList.add('modal-body');
  var inputContent = document.createElement('div');
  inputContent.classList.add('modal-input-content');
  var projectNameLabel = document.createElement('label');
  projectNameLabel.setAttribute('for', 'project-name-input');
  projectNameLabel.classList.add('modal-label');
  projectNameLabel.textContent = 'Project name';
  inputContent.appendChild(projectNameLabel);
  var projectName = document.createElement('input');
  projectName.setAttribute('type', 'text');
  projectName.setAttribute('size', '10');
  projectName.setAttribute('id', 'project-name-input');
  projectName.classList.add('project-input');
  inputContent.appendChild(projectName);
  var projectDateLabel = document.createElement('label');
  projectDateLabel.setAttribute('for', 'project-date-input');
  projectDateLabel.setAttribute('id', 'project-date-label');
  projectDateLabel.classList.add('modal-label');
  projectDateLabel.textContent = 'Due Date';
  inputContent.appendChild(projectDateLabel);
  var projectDate = document.createElement('input');
  projectDate.setAttribute('type', 'date');
  projectDate.setAttribute('id', 'project-date-input');
  projectDate.classList.add('project-input');
  inputContent.appendChild(projectDate);
  body.appendChild(inputContent);
  var errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = 'Cannot leave text field(s) empty';
  errorMessage.style.display = 'none';
  body.appendChild(errorMessage);
  var btnSubmit = document.createElement('button');
  btnSubmit.setAttribute('id', 'btn-submit-project');
  btnSubmit.classList.add('modal-btn');
  btnSubmit.textContent = 'Enter';
  var btnCancel = document.createElement('button');
  btnCancel.setAttribute('id', 'btn-cancel-project');
  btnCancel.classList.add('modal-btn');
  btnCancel.textContent = 'Cancel';
  var btnContainer = document.createElement('div');
  btnContainer.classList.add('modal-btn-container');
  btnContainer.appendChild(btnSubmit);
  btnContainer.appendChild(btnCancel);
  body.appendChild(btnContainer);
  btnSubmit.addEventListener('click', function () {
    if (_exception_module__WEBPACK_IMPORTED_MODULE_4__.ExceptionModule.isEmpty(projectName.value) || _exception_module__WEBPACK_IMPORTED_MODULE_4__.ExceptionModule.isEmpty(projectDate.value)) {
      errorMessage.style.display = 'block';
      setTimeout(function () {
        errorMessage.style.display = 'none';
      }, 4000);
    } else {
      var content = document.getElementById('content');
      content.removeChild(modal); //modal.style.display = 'none';

      _project_module__WEBPACK_IMPORTED_MODULE_3__.ProjectModule.saveProjectToStorage(projectName.value, projectDate.value);
      (0,_init__WEBPACK_IMPORTED_MODULE_0__.removeProjectContainer)();
      (0,_init__WEBPACK_IMPORTED_MODULE_0__.initProjects)();
    }
  });
  btnCancel.addEventListener('click', function () {
    modal.style.display = 'none';
    clearModalInputs();
  });

  function clearModalInputs() {
    var inputs = document.querySelectorAll('.modal-input');

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].textContent = '';
    }
  }

  container.appendChild(body);
  container.appendChild(body);
  modal.appendChild(container);
  return modal;
}



/***/ }),

/***/ "./src/create-todo-item.js":
/*!*********************************!*\
  !*** ./src/create-todo-item.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodoItemInput": () => (/* binding */ createTodoItemInput)
/* harmony export */ });
/* harmony import */ var _todo_list_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list-container */ "./src/todo-list-container.js");
/* harmony import */ var _todo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-module */ "./src/todo-module.js");




function createTodoItemInput(projectKey) {
  var modal = document.createElement('div');
  modal.classList.add('modal');
  var container = document.createElement('div');
  container.classList.add('todo-input-container');
  var heading = document.createElement('div');
  heading.classList.add('modal-heading');
  heading.textContent = 'Create a New Task';
  container.appendChild(heading);
  var body = document.createElement('div');
  body.classList.add('modal-body');
  var inputContent = document.createElement('div');
  inputContent.classList.add('todo-modal-input-content');
  var todoTitleLabel = document.createElement('label');
  todoTitleLabel.setAttribute('for', 'todo-item-input-title');
  todoTitleLabel.textContent = 'Title';
  inputContent.appendChild(todoTitleLabel);
  var todoItemTitle = document.createElement('input');
  todoItemTitle.setAttribute('type', 'text');
  todoItemTitle.setAttribute('size', '10');
  todoItemTitle.setAttribute('id', 'todo-item-input');
  todoItemTitle.classList.add('todo-item-input');
  inputContent.appendChild(todoItemTitle);
  var todoItemDescriptionLabel = document.createElement('label');
  todoItemDescriptionLabel.setAttribute('for', 'todo-item-input-description');
  todoItemDescriptionLabel.textContent = 'Description';
  inputContent.appendChild(todoItemDescriptionLabel);
  var todoItemDescription = document.createElement('input');
  todoItemDescription.setAttribute('type', 'text');
  todoItemDescription.setAttribute('id', 'todo-description-input');
  todoItemDescription.classList.add('todo-item-input');
  inputContent.appendChild(todoItemDescription);
  var todoItemDueDateLabel = document.createElement('label');
  todoItemDueDateLabel.setAttribute('for', 'due-date');
  todoItemDueDateLabel.textContent = 'Due Date';
  inputContent.appendChild(todoItemDueDateLabel);
  var todoItemDueDate = document.createElement('input');
  todoItemDueDate.setAttribute('type', 'date');
  todoItemDueDate.setAttribute('id', 'todo-date-input');
  todoItemDescription.classList.add('todo-item-input');
  inputContent.appendChild(todoItemDueDate);
  body.appendChild(inputContent);
  var priorityContainer = document.createElement('div');
  priorityContainer.classList.add('priority-container');
  var priorityHighLabel = document.createElement('label');
  priorityHighLabel.setAttribute('for', 'priority-high');
  priorityHighLabel.classList.add('priority-label');
  priorityHighLabel.textContent = 'High Priority';
  priorityContainer.appendChild(priorityHighLabel);
  var priorityMediumLabel = document.createElement('label');
  priorityMediumLabel.setAttribute('for', 'priority-medium');
  priorityMediumLabel.classList.add('priority-label');
  priorityMediumLabel.textContent = 'Medium Priority';
  priorityContainer.appendChild(priorityMediumLabel);
  var priorityLowLabel = document.createElement('label');
  priorityLowLabel.setAttribute('for', 'priority-low');
  priorityLowLabel.classList.add('priority-label');
  priorityLowLabel.textContent = 'Low Priority';
  priorityContainer.appendChild(priorityLowLabel);
  var priorityHigh = document.createElement('input');
  priorityHigh.setAttribute('type', 'radio');
  priorityHigh.setAttribute('name', 'priority');
  priorityHigh.setAttribute('id', 'priority-high');
  priorityHigh.setAttribute('value', 'high priority');
  priorityHigh.classList.add('priority-label');
  priorityContainer.appendChild(priorityHigh);
  var priorityMedium = document.createElement('input');
  priorityMedium.setAttribute('type', 'radio');
  priorityMedium.setAttribute('name', 'priority');
  priorityMedium.setAttribute('id', 'priority-medium');
  priorityMedium.setAttribute('value', 'medium priority');
  priorityMedium.classList.add('priority-label');
  priorityContainer.appendChild(priorityMedium);
  var priorityLow = document.createElement('input');
  priorityLow.setAttribute('type', 'radio');
  priorityLow.setAttribute('name', 'priority');
  priorityLow.setAttribute('id', 'priority-low');
  priorityLow.setAttribute('value', 'low priority');
  priorityLow.classList.add('priority-label');
  priorityContainer.appendChild(priorityLow);
  body.appendChild(priorityContainer);
  var btnSubmit = document.createElement('button');
  btnSubmit.setAttribute('id', 'btn-submit');
  btnSubmit.classList.add('modal-btn');
  btnSubmit.textContent = 'Enter';
  var btnCancel = document.createElement('button');
  btnCancel.setAttribute('id', 'btn-cancel');
  btnCancel.classList.add('modal-btn');
  btnCancel.textContent = 'Cancel';
  var btnContainer = document.createElement('div');
  btnContainer.classList.add('modal-btn-container');
  btnContainer.appendChild(btnSubmit);
  btnContainer.appendChild(btnCancel);
  body.appendChild(btnContainer);
  btnSubmit.addEventListener('click', function () {
    var content = document.getElementById('content');
    content.removeChild(modal); //modal.style.display = 'none';

    var prioritySelection;
    var priorityOptions = document.getElementsByName('priority');

    if (priorityHigh.checked === true) {
      prioritySelection = priorityHigh.value;
    } else if (priorityMedium.checked === true) {
      prioritySelection = priorityMedium.value;
    } else {
      prioritySelection = priorityLow.value;
    }

    _todo_module__WEBPACK_IMPORTED_MODULE_1__.TodoModule.saveItemToStorage(todoItemTitle.value, todoItemDescription.value, todoItemDueDate.value, prioritySelection, projectKey); //const itemContainer = document.querySelector('.todo-list-container');
    //itemContainer.appendChild(loadTodoCard(todoItemTitle.value, todoItemDescription.value, todoItemDueDate.value, prioritySelection, projectKey))

    var items = _todo_module__WEBPACK_IMPORTED_MODULE_1__.TodoModule.loadProjectItems(projectKey);
    var itemContainer = document.querySelector('.main');
    (0,_todo_list_container__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)();
    itemContainer.appendChild((0,_todo_list_container__WEBPACK_IMPORTED_MODULE_0__.populateTodoItems)(items));
  });
  btnCancel.addEventListener('click', function () {
    var parent = document.getElementById('content');
    parent.removeChild(modal); //modal.style.display = 'none';
  });
  container.appendChild(body);
  modal.appendChild(container);
  return modal;
}



/***/ }),

/***/ "./src/exception-module.js":
/*!*********************************!*\
  !*** ./src/exception-module.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExceptionModule": () => (/* binding */ ExceptionModule)
/* harmony export */ });
var ExceptionModule = function () {
  var isEmpty = function isEmpty(input) {
    return input === null || input.match(/^ *$/) !== null;
  };

  return {
    isEmpty: isEmpty
  };
}();



/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initProjects": () => (/* binding */ initProjects),
/* harmony export */   "removeProjectContainer": () => (/* binding */ removeProjectContainer)
/* harmony export */ });
/* harmony import */ var _project_list_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-list-container */ "./src/project-list-container.js");
/* harmony import */ var _project_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-module */ "./src/project-module.js");



function initProjects() {
  //window.localStorage.clear();
  var projects = _project_module__WEBPACK_IMPORTED_MODULE_1__.ProjectModule.loadProjectsFromStorage();
  var nav = document.querySelector('nav');
  nav.appendChild((0,_project_list_container__WEBPACK_IMPORTED_MODULE_0__.populateProjects)(projects));
}

function removeProjectContainer() {
  var listContainer = document.querySelector('.project-list-container');
  var container = document.querySelector('nav');
  container.removeChild(listContainer);
}



/***/ }),

/***/ "./src/item-list.js":
/*!**************************!*\
  !*** ./src/item-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoItemList": () => (/* binding */ TodoItemList)
/* harmony export */ });
/* harmony import */ var _todo_item_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item-new */ "./src/todo-item-new.js");
/* harmony import */ var _todoitem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoitem */ "./src/todoitem.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var TodoItemList = /*#__PURE__*/function () {
  function TodoItemList() {
    _classCallCheck(this, TodoItemList);

    this.todoItems = [];
  }

  _createClass(TodoItemList, [{
    key: "newTodoItem",
    value: function newTodoItem(title, description, dueDate, priority, key) {
      var todo = new _todo_item_new__WEBPACK_IMPORTED_MODULE_0__.TodoItemKey(title, description, dueDate, priority, key);
      this.todoItems.push(todo);
      return todo;
    }
  }, {
    key: "allTodoItems",
    get: function get() {
      return this.todoItems;
    }
  }, {
    key: "lastItemTitle",
    get: function get() {
      return this.todoItems.at(this.todoItems.length - 1).title;
    }
  }, {
    key: "lastItemDescription",
    get: function get() {
      return this.todoItems.at(this.todoItems.length - 1).description;
    }
  }, {
    key: "lastItemDueDate",
    get: function get() {
      return this.todoItems.at(this.todoItems.length - 1).dueDate;
    }
  }, {
    key: "lastItemPriority",
    get: function get() {
      return this.todoItems.at(this.todoItems.length - 1).priority;
    }
  }, {
    key: "lastItemKey",
    get: function get() {
      return this.todoItems.at(this.todoItems.length - 1).key;
    }
  }, {
    key: "itemAtIndex",
    value: function itemAtIndex(index) {
      return this.todoItems.at(index);
    }
  }, {
    key: "itemAtIndexTitle",
    value: function itemAtIndexTitle(index) {
      return this.todoItems.at(index).title;
    }
  }, {
    key: "itemAtIndexDescription",
    value: function itemAtIndexDescription(index) {
      return this.todoItems.at(index).description;
    }
  }, {
    key: "itemAtIndexDueDate",
    value: function itemAtIndexDueDate(index) {
      return this.todoItems.at(index).dueDate;
    }
  }, {
    key: "itemAtIndexPriority",
    value: function itemAtIndexPriority(index) {
      return this.todoItems.at(index).priority;
    }
  }, {
    key: "itemAtIndexKey",
    value: function itemAtIndexKey(index) {
      return this.todoItems.at(index).itemKey;
    }
  }, {
    key: "numberOfTodoItems",
    get: function get() {
      return this.todoItems.length;
    }
  }, {
    key: "removeItemAt",
    value: function removeItemAt(index) {
      if (index > -1) {
        this.todoItems.splice(index, 1);
      }
    }
  }, {
    key: "removeItemByKey",
    value: function removeItemByKey(key) {
      for (var i = 0; i < this.todoItems.length; i++) {
        if (this.todoItems[i].itemId == key) {
          console.log('item removed');
          this.removeItemAt(i);
        }
      }
    }
  }]);

  return TodoItemList;
}();



/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
function storageAvailable(type) {
  var storage;

  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && ( // everything except Firefox
    e.code === 22 || // Firefox
    e.code === 1014 || // test name field too, because code might not be present
    // everything except Firefox
    e.name === 'QuotaExceededError' || // Firefox
    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && // acknowledge QuotaExceededError only if there's something already stored
    storage && storage.length !== 0;
  }
}



/***/ }),

/***/ "./src/project-card.js":
/*!*****************************!*\
  !*** ./src/project-card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectCard": () => (/* binding */ createProjectCard)
/* harmony export */ });
/* harmony import */ var _todo_item_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item-list */ "./src/todo-item-list.js");


function createProjectCard(name, key) {
  var container = document.createElement('div');
  container.classList.add('project-card-container');
  var projectName = document.createElement('div');
  projectName.classList.add('project-card-name');
  projectName.textContent = name;
  container.appendChild(projectName); //container.addEventListener('click', loadProjectItems(key));

  container.addEventListener('click', function () {
    var items = (0,_todo_item_list__WEBPACK_IMPORTED_MODULE_0__.loadProjectItems)(key);
    (0,_todo_item_list__WEBPACK_IMPORTED_MODULE_0__.populateTodoItems)(items); //alert('CLICK!' + key);
  });
  return container;
}



/***/ }),

/***/ "./src/project-list-container.js":
/*!***************************************!*\
  !*** ./src/project-list-container.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectCard": () => (/* binding */ createProjectCard),
/* harmony export */   "populateProjects": () => (/* binding */ populateProjects),
/* harmony export */   "selectProjectCard": () => (/* binding */ selectProjectCard)
/* harmony export */ });
/* harmony import */ var _todo_list_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list-container */ "./src/todo-list-container.js");
/* harmony import */ var _todo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-module */ "./src/todo-module.js");
/* harmony import */ var _create_todo_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-todo-item */ "./src/create-todo-item.js");




function populateProjects(projects) {
  var container = document.createElement('div');
  container.classList.add('project-list-container');

  var _loop = function _loop(i) {
    container.appendChild(createProjectCard(projects.projectNameAt(i))).addEventListener('click', function () {
      console.log('clicky');
      selectProjectCard(projects, container, i);
    });

    if (i === projects.numberOfProjects - 1) {
      selectProjectCard(projects, container, i);
    }
  };

  for (var i = 0; i < projects.numberOfProjects; i++) {
    _loop(i);
  }

  return container;
}

function createProjectCard(name) {
  var container = document.createElement('div');
  container.classList.add('project-card-container');
  var projectName = document.createElement('div');
  projectName.classList.add('project-card-name');
  projectName.textContent = name;
  container.appendChild(projectName);
  return container;
}

function selectProjectCard(projects, parent, i) {
  var items = _todo_module__WEBPACK_IMPORTED_MODULE_1__.TodoModule.loadProjectItems(projects.projectKeyAt(i));
  var itemContainer = document.querySelector('.main');
  (0,_todo_list_container__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)();
  var createTodoContainer = document.querySelector('.open-todo-input');
  createTodoContainer.style.display = 'flex';
  createTodoContainer.addEventListener('click', function () {
    var content = document.getElementById('content');
    content.appendChild((0,_create_todo_item__WEBPACK_IMPORTED_MODULE_2__.createTodoItemInput)(projects.projectKeyAt(i)));
  });
  itemContainer.appendChild((0,_todo_list_container__WEBPACK_IMPORTED_MODULE_0__.populateTodoItems)(items));
  var classList = ('classList' in parent);

  for (var j = 0; j < parent.children.length; j++) {
    var child = parent.children[j];

    if (child.tagName == 'DIV') {
      if (classList) {
        child.classList.remove('project-card-container-selected');
      }
    }

    var selectedChild = parent.children[i];
    selectedChild.classList.add('project-card-container-selected');
  }
}



/***/ }),

/***/ "./src/project-list.js":
/*!*****************************!*\
  !*** ./src/project-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadProjectsFromStorage": () => (/* binding */ loadProjectsFromStorage),
/* harmony export */   "populateProjects": () => (/* binding */ populateProjects),
/* harmony export */   "saveProjectToStorage": () => (/* binding */ saveProjectToStorage)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _project_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-card */ "./src/project-card.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");



var PROJECT_COUNT_KEY = 'projectCount';
var PROJECT_KEY = 'project'; //const projectList = new ProjectList;
//projectList.newProject('Default Project', '9/20/22', 'project1');

var projectCount = setProjectCount();

function setProjectCount() {
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

function setupDefaultProject() {
  var project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Default Project', '9/20/22', 'project0');
  window.localStorage.setItem("project0", JSON.stringify(project));
}

function saveProjectToStorage(projectName, projectDate) {
  var projectKey = PROJECT_KEY + getProjectCount();
  var project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(projectName, projectDate, projectKey);
  console.log('PROJECT KEY: ' + projectKey);
  window.localStorage.setItem(projectKey, JSON.stringify(project));
  projectCount++;
  window.localStorage.setItem(PROJECT_COUNT_KEY, projectCount);
  var projectListContainer = document.querySelector('.project-list-container');
  projectListContainer.appendChild((0,_project_card__WEBPACK_IMPORTED_MODULE_1__.createProjectCard)(projectName));
}

function loadProjectsFromStorage() {
  setupDefaultProject();
  var projects = new _project__WEBPACK_IMPORTED_MODULE_0__.ProjectList();

  if ((0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)('localStorage')) {
    projectCount = window.localStorage.getItem(PROJECT_COUNT_KEY);
    console.log('project count: ' + projectCount);

    for (var i = 0; i < projectCount; i++) {
      var object = window.localStorage.getItem('project' + i.toString());
      projects.newProject(JSON.parse(object)._name, JSON.parse(object)._date, JSON.parse(object)._key);
    }
  } else {
    // Too bad, no localStorage for us
    alert('Not enough storage available. Please clear some space.');
    console.log('bad');
  }

  return projects;
}

function loadLastProject() {
  var jsonObject = window.localStorage.getItem(PROJECT + getProjectCount().toString());
  var lastProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(JSON.parse(jsonObject)._name, JSON.parse(jsonObject)._date, JSON.parse(jsonObject)._key);
  return lastProject;
}

function populateProjects(projects) {
  var container = document.createElement('div');
  container.classList.add('project-list-container');

  var _loop = function _loop(i) {
    console.log(projects.projectNameAt(i));
    container.appendChild((0,_project_card__WEBPACK_IMPORTED_MODULE_1__.createProjectCard)(projects.projectNameAt(i), projects.projectKeyAt(i))).addEventListener('click', function () {
      alert(projects.projectKeyAt(i));
    });
  };

  for (var i = 0; i < projects.numberOfProjects; i++) {
    _loop(i);
  }

  return container;
}



/***/ }),

/***/ "./src/project-module.js":
/*!*******************************!*\
  !*** ./src/project-module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectModule": () => (/* binding */ ProjectModule)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _project_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-card */ "./src/project-card.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _todo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-module */ "./src/todo-module.js");
/* harmony import */ var _todo_list_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list-container */ "./src/todo-list-container.js");
/* harmony import */ var _create_todo_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-todo-item */ "./src/create-todo-item.js");







var ProjectModule = function () {
  var PROJECT_COUNT_KEY = 'projectCount';
  var PROJECT_KEY = 'project';
  var projectCount = 1;

  var getProjectCount = function getProjectCount() {
    return window.localStorage.getItem(PROJECT_COUNT_KEY);
  };

  var initDefaultProject = function initDefaultProject() {
    if (!localStorage.getItem(PROJECT_COUNT_KEY)) {
      window.localStorage.setItem(PROJECT_COUNT_KEY, projectCount);
      var project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Default Project', '09/20/22', 'project0', 2);
      window.localStorage.setItem("project0", JSON.stringify(project));
    } else {}
  };

  var saveProjectToStorage = function saveProjectToStorage(projectName, projectDate) {
    var projectKey = PROJECT_KEY + getProjectCount();
    var INITIAL_ITEM_COUNT = 0;
    var project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(projectName, projectDate, projectKey, INITIAL_ITEM_COUNT);
    window.localStorage.setItem(projectKey, JSON.stringify(project));
    projectCount++;
    window.localStorage.setItem(PROJECT_COUNT_KEY, projectCount);
    console.log('project saved: ' + projectKey);
  };

  var loadProjectsFromStorage = function loadProjectsFromStorage() {
    var projects = new _project__WEBPACK_IMPORTED_MODULE_0__.ProjectList();

    if ((0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)('localStorage')) {
      initDefaultProject();
      _todo_module__WEBPACK_IMPORTED_MODULE_3__.TodoModule.initDefaultItems();
      projectCount = getProjectCount();
      console.log('project count: ' + projectCount);

      for (var i = 0; i < projectCount; i++) {
        var object = window.localStorage.getItem(PROJECT_KEY + i.toString());
        console.log('project' + i.toString());
        projects.newProject(JSON.parse(object)._name, JSON.parse(object)._date, JSON.parse(object)._key, JSON.parse(object)._itemCount);
      }
    } else {
      alert('Not enough storage available. Please clear some space.');
      console.log('bad');
    }

    return projects;
  };

  return {
    saveProjectToStorage: saveProjectToStorage,
    loadProjectsFromStorage: loadProjectsFromStorage
  };
}();



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _item_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-list */ "./src/item-list.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Project = /*#__PURE__*/function () {
  function Project(name, date, key, itemCount) {
    _classCallCheck(this, Project);

    this.name = name;
    this.date = date;
    this.key = key;
    this.itemCount = itemCount;
    var todoList = new _item_list__WEBPACK_IMPORTED_MODULE_0__.TodoItemList();
  }

  _createClass(Project, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      this._name = value;
    }
  }, {
    key: "date",
    get: function get() {
      return this._date;
    },
    set: function set(value) {
      this._date = value;
    }
  }, {
    key: "key",
    get: function get() {
      return this._key;
    },
    set: function set(value) {
      this._key = value;
    }
  }, {
    key: "itemCount",
    get: function get() {
      return this._itemCount;
    },
    set: function set(value) {
      this._itemCount = value;
    }
  }, {
    key: "todoList",
    get: function get() {
      return this.todoList;
    }
  }, {
    key: "addItem",
    value: function addItem() {
      this._itemCount++;
    }
  }, {
    key: "deleteItem",
    value: function deleteItem() {
      this._itemCount--;
    }
  }]);

  return Project;
}();

;

var ProjectList = /*#__PURE__*/function () {
  function ProjectList() {
    _classCallCheck(this, ProjectList);

    this.projects = [];
  }

  _createClass(ProjectList, [{
    key: "newProject",
    value: function newProject(name, date, key) {
      var project = new Project(name, date, key);
      this.projects.push(project);
      return project;
    }
  }, {
    key: "allProjects",
    get: function get() {
      return this.projects;
    }
  }, {
    key: "numberOfProjects",
    get: function get() {
      return this.projects.length;
    }
  }, {
    key: "projectAtIndex",
    value: function projectAtIndex(index) {
      return this.projects.at(index);
    }
  }, {
    key: "removeItemAt",
    value: function removeItemAt(index) {
      if (index > -1) {
        this.projects.splice(index, 1);
      }
    }
  }, {
    key: "lastProjectName",
    get: function get() {
      return this.projects.at(this.projects.length - 1).name;
    }
  }, {
    key: "lastProjectDate",
    get: function get() {
      return this.projects.at(this.projects.length - 1).date;
    }
  }, {
    key: "lastProject",
    get: function get() {
      return this.projects.at(this.projects.length - 1);
    }
  }, {
    key: "projectNameAt",
    value: function projectNameAt(index) {
      return this.projects.at(index).name;
    }
  }, {
    key: "projectDateAt",
    value: function projectDateAt(index) {
      return this.projects.at(index).date;
    }
  }, {
    key: "projectKeyAt",
    value: function projectKeyAt(index) {
      return this.projects.at(index).key;
    }
  }, {
    key: "itemCountAt",
    value: function itemCountAt(index) {
      return this.projects.at(index).itemCount;
    }
  }]);

  return ProjectList;
}();



/***/ }),

/***/ "./src/prompt-delete-item.js":
/*!***********************************!*\
  !*** ./src/prompt-delete-item.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDeletePrompt": () => (/* binding */ createDeletePrompt)
/* harmony export */ });
/* harmony import */ var _todo_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-module */ "./src/todo-module.js");
/* harmony import */ var _todo_list_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list-container */ "./src/todo-list-container.js");



function createDeletePrompt(itemKey) {
  var modal = document.createElement('div');
  modal.classList.add('modal-delete');
  var container = document.createElement('div');
  container.classList.add('prompt-delete-container');
  var topSection = document.createElement('div');
  topSection.textContent = 'Are you sure you want to delete this item?';
  topSection.classList.add('prompt-delete-top');
  var bottomSection = document.createElement('div');
  bottomSection.classList.add('prompt-delete-bottom');
  var btnYes = document.createElement('div');
  btnYes.classList.add('btn-prompt-delete');
  btnYes.textContent = 'YES';
  btnYes.addEventListener('click', function () {
    modal.style.display = 'none';
    var projectName = _todo_module__WEBPACK_IMPORTED_MODULE_0__.TodoModule.extractProjectName(itemKey);
    _todo_module__WEBPACK_IMPORTED_MODULE_0__.TodoModule.removeItemFromStorage(itemKey, projectName);
    var items = _todo_module__WEBPACK_IMPORTED_MODULE_0__.TodoModule.loadProjectItems(projectName);
    (0,_todo_list_container__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)();
    var itemContainer = document.querySelector('.main');
    itemContainer.appendChild((0,_todo_list_container__WEBPACK_IMPORTED_MODULE_1__.populateTodoItems)(items));
  });
  var btnNo = document.createElement('div');
  btnNo.classList.add('btn-prompt-delete');
  btnNo.textContent = 'NO';
  btnNo.addEventListener('click', function () {
    modal.style.display = 'none';
  });
  container.appendChild(topSection);
  bottomSection.appendChild(btnYes);
  bottomSection.appendChild(btnNo);
  container.appendChild(bottomSection);
  modal.appendChild(container);
  return modal;
}



/***/ }),

/***/ "./src/prompt-edit-item.js":
/*!*********************************!*\
  !*** ./src/prompt-edit-item.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEditItem": () => (/* binding */ createEditItem)
/* harmony export */ });
/* harmony import */ var _todo_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-module */ "./src/todo-module.js");
/* harmony import */ var _todo_list_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list-container */ "./src/todo-list-container.js");



function createEditItem(title, description, dueDate, priority, itemKey) {
  var modal = document.createElement('div');
  modal.classList.add('modal');
  var container = document.createElement('div');
  container.classList.add('todo-input-container');
  var heading = document.createElement('div');
  heading.classList.add('modal-heading');
  heading.textContent = 'Edit Task';
  container.appendChild(heading);
  var body = document.createElement('div');
  body.classList.add('modal-body');
  var inputContent = document.createElement('div');
  inputContent.classList.add('todo-modal-input-content');
  var todoTitleLabel = document.createElement('label');
  todoTitleLabel.setAttribute('for', 'todo-item-input-title');
  todoTitleLabel.textContent = 'Title';
  inputContent.appendChild(todoTitleLabel);
  var todoItemTitle = document.createElement('input');
  todoItemTitle.setAttribute('type', 'text');
  todoItemTitle.setAttribute('size', '10');
  todoItemTitle.setAttribute('id', 'todo-item-input');
  todoItemTitle.classList.add('todo-item-input');
  todoItemTitle.value = title;
  inputContent.appendChild(todoItemTitle);
  var todoItemDescriptionLabel = document.createElement('label');
  todoItemDescriptionLabel.setAttribute('for', 'todo-item-input-description');
  todoItemDescriptionLabel.textContent = 'Description';
  inputContent.appendChild(todoItemDescriptionLabel);
  var todoItemDescription = document.createElement('input');
  todoItemDescription.setAttribute('type', 'text');
  todoItemDescription.setAttribute('id', 'todo-description-input');
  todoItemDescription.classList.add('todo-item-input');
  todoItemDescription.value = description;
  inputContent.appendChild(todoItemDescription);
  var todoItemDueDateLabel = document.createElement('label');
  todoItemDueDateLabel.setAttribute('for', 'due-date');
  todoItemDueDateLabel.textContent = 'Due Date';
  inputContent.appendChild(todoItemDueDateLabel);
  var todoItemDueDate = document.createElement('input');
  todoItemDueDate.setAttribute('type', 'text');
  todoItemDueDate.setAttribute('id', 'todo-date-input');
  todoItemDueDate.classList.add('todo-item-input');
  todoItemDueDate.value = dueDate;
  inputContent.appendChild(todoItemDueDate);
  body.appendChild(inputContent);
  var priorityContainer = document.createElement('div');
  priorityContainer.classList.add('priority-container');
  var priorityHighLabel = document.createElement('label');
  priorityHighLabel.setAttribute('for', 'priority-high');
  priorityHighLabel.classList.add('priority-label');
  priorityHighLabel.textContent = 'High Priority';
  priorityContainer.appendChild(priorityHighLabel);
  var priorityMediumLabel = document.createElement('label');
  priorityMediumLabel.setAttribute('for', 'priority-medium');
  priorityMediumLabel.classList.add('priority-label');
  priorityMediumLabel.textContent = 'Medium Priority';
  priorityContainer.appendChild(priorityMediumLabel);
  var priorityLowLabel = document.createElement('label');
  priorityLowLabel.setAttribute('for', 'priority-low');
  priorityLowLabel.classList.add('priority-label');
  priorityLowLabel.textContent = 'Low Priority';
  priorityContainer.appendChild(priorityLowLabel);
  var priorityHigh = document.createElement('input');
  priorityHigh.setAttribute('type', 'radio');
  priorityHigh.setAttribute('name', 'priority');
  priorityHigh.setAttribute('id', 'priority-high');
  priorityHigh.setAttribute('value', 'high priority');
  priorityHigh.classList.add('priority-label');
  priorityContainer.appendChild(priorityHigh);
  var priorityMedium = document.createElement('input');
  priorityMedium.setAttribute('type', 'radio');
  priorityMedium.setAttribute('name', 'priority');
  priorityMedium.setAttribute('id', 'priority-medium');
  priorityMedium.setAttribute('value', 'medium priority');
  priorityMedium.classList.add('priority-label');
  priorityContainer.appendChild(priorityMedium);
  var priorityLow = document.createElement('input');
  priorityLow.setAttribute('type', 'radio');
  priorityLow.setAttribute('name', 'priority');
  priorityLow.setAttribute('id', 'priority-low');
  priorityLow.setAttribute('value', 'low priority');
  priorityLow.classList.add('priority-label');
  priorityContainer.appendChild(priorityLow);
  body.appendChild(priorityContainer);
  var btnSubmit = document.createElement('button');
  btnSubmit.setAttribute('id', 'btn-submit');
  btnSubmit.classList.add('modal-btn');
  btnSubmit.textContent = 'Enter';
  var btnCancel = document.createElement('button');
  btnCancel.setAttribute('id', 'btn-cancel');
  btnCancel.classList.add('modal-btn');
  btnCancel.textContent = 'Cancel';
  var btnContainer = document.createElement('div');
  btnContainer.classList.add('modal-btn-container');
  btnContainer.appendChild(btnSubmit);
  btnContainer.appendChild(btnCancel);
  body.appendChild(btnContainer);
  var priorityOptions = document.getElementsByName('priority');
  console.log('priority= ' + priority);

  if (priority === priorityHigh.value) {
    priorityHigh.checked = true;
  } else if (priority === priorityMedium.value) {
    priorityMedium.checked = true;
  } else {
    priorityLow.checked = true;
  }

  btnSubmit.addEventListener('click', function () {
    var content = document.getElementById('content');
    content.removeChild(modal);
    var prioritySelection;

    if (priorityHigh.checked === true) {
      prioritySelection = priorityHigh.value;
    } else if (priorityMedium.checked === true) {
      prioritySelection = priorityMedium.value;
    } else {
      prioritySelection = priorityLow.value;
    }

    _todo_module__WEBPACK_IMPORTED_MODULE_0__.TodoModule.editItemToStorage(todoItemTitle.value, todoItemDescription.value, todoItemDueDate.value, prioritySelection, itemKey);
    var projectKey = _todo_module__WEBPACK_IMPORTED_MODULE_0__.TodoModule.extractProjectName(itemKey);
    var items = _todo_module__WEBPACK_IMPORTED_MODULE_0__.TodoModule.loadProjectItems(projectKey);
    var itemContainer = document.querySelector('.main');
    (0,_todo_list_container__WEBPACK_IMPORTED_MODULE_1__.removeAllChildNodes)();
    itemContainer.appendChild((0,_todo_list_container__WEBPACK_IMPORTED_MODULE_1__.populateTodoItems)(items));
  });
  btnCancel.addEventListener('click', function () {
    modal.style.display = 'none';
  });
  container.appendChild(body);
  modal.appendChild(container);
  return modal;
}



/***/ }),

/***/ "./src/todo-item-card.js":
/*!*******************************!*\
  !*** ./src/todo-item-card.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadTodoCard": () => (/* binding */ loadTodoCard)
/* harmony export */ });
/* harmony import */ var _prompt_delete_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prompt-delete-item */ "./src/prompt-delete-item.js");
/* harmony import */ var _todo_item_new__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item-new */ "./src/todo-item-new.js");
/* harmony import */ var _todo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-module */ "./src/todo-module.js");




function loadTodoCard(title, description, dueDate, priority, key) {
  var newTodoItem = new _todo_item_new__WEBPACK_IMPORTED_MODULE_1__.TodoItemKey(title, description, dueDate, priority, key);
  var container = document.createElement('div');
  container.classList.add('todo-card-container');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'checkbox';
  checkbox.classList.add('checkbox');
  container.appendChild(checkbox);
  var titleCard = document.createElement('div');
  titleCard.classList.add('todo-card-title');
  titleCard.textContent = newTodoItem.title;
  container.appendChild(titleCard);
  var descriptionCard = document.createElement('div');
  descriptionCard.classList.add('todo-card-description');
  descriptionCard.textContent = newTodoItem.description;
  container.appendChild(descriptionCard);
  var dueDateCard = document.createElement('div');
  dueDateCard.classList.add('todo-card-duedate');
  dueDateCard.textContent = newTodoItem.dueDate;
  container.appendChild(dueDateCard);
  var priorityColor = document.createElement('div');
  priorityColor.classList.add('priority-color');
  priorityColor.style.backgroundColor = getPriorityColor(newTodoItem.priority);
  container.appendChild(priorityColor);
  var iconContainer = document.createElement('div');
  iconContainer.classList.add('icon-container');
  var editContainer = document.createElement('div');
  editContainer.classList.add('icon-container');
  var editIcon = document.createElement('img');
  editIcon.src = './img/edit-icon.svg';
  editIcon.classList.add('item-icon');
  editContainer.appendChild(editIcon);
  iconContainer.appendChild(editContainer);
  var deleteContainer = document.createElement('div');
  deleteContainer.classList.add('icon-container');
  var deleteIcon = document.createElement('img');
  deleteIcon.src = './img/delete-icon.svg';
  deleteIcon.classList.add('item-icon');
  deleteContainer.appendChild(deleteIcon);
  iconContainer.appendChild(deleteContainer);
  container.appendChild(iconContainer);
  container.addEventListener('mouseenter', function () {
    deleteIcon.style.display = 'block';
    editIcon.style.display = 'block';
    deleteIcon.addEventListener('click', function () {
      var content = document.getElementById('content');
      content.appendChild((0,_prompt_delete_item__WEBPACK_IMPORTED_MODULE_0__.createDeletePrompt)(key));
    });
  });
  container.addEventListener('mouseleave', function () {
    deleteIcon.style.display = 'none';
    editIcon.style.display = 'none';
  });
  return container;
}

function getPriorityColor(priority) {
  if (priority.value === 'high priority') {
    return 'red';
  } else if (priority.value === 'medium priority') {
    return 'yellow';
  } else {
    return 'lightgreen';
  }
}



/***/ }),

/***/ "./src/todo-item-list.js":
/*!*******************************!*\
  !*** ./src/todo-item-list.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initList": () => (/* binding */ initList),
/* harmony export */   "loadProjectItems": () => (/* binding */ loadProjectItems),
/* harmony export */   "populateTodoItems": () => (/* binding */ populateTodoItems),
/* harmony export */   "removeTodoItem": () => (/* binding */ removeTodoItem),
/* harmony export */   "saveItemToStorage": () => (/* binding */ saveItemToStorage),
/* harmony export */   "showItems": () => (/* binding */ showItems)
/* harmony export */ });
/* harmony import */ var _item_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-list */ "./src/item-list.js");
/* harmony import */ var _todo_item_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item-card */ "./src/todo-item-card.js");
/* harmony import */ var _todo_item_new__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item-new */ "./src/todo-item-new.js");
/* harmony import */ var _todoitem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoitem */ "./src/todoitem.js");




var ITEM_COUNT_KEY = 'itemCount';
var ITEM_KEY = 'item';
var PROJECT = 'project';
var itemCount = 0;

function setItemCount() {
  if (!localStorage.getItem(ITEM_COUNT_KEY)) {
    window.localStorage.setItem(ITEM_COUNT_KEY, 0);
    return 0;
  } else {
    console.log('storage: ' + window.localStorage.getItem(ITEM_COUNT_KEY));
    return window.localStorage.getItem(ITEM_COUNT_KEY);
  }
}

function showItems() {
  for (var i = 0; i < itemList.numberOfTodoItems; i++) {
    container.appendChild((0,_todo_item_card__WEBPACK_IMPORTED_MODULE_1__.loadTodoCard)(itemList.itemAtIndexTitle(i), itemList.itemAtIndexDescription(i), itemList.itemAtIndexDueDate(i), itemList.itemAtIndexPriority(i)), itemList.itemAtIndexId(i));
  }

  return container;
}

function saveItemToStorage(title, description, date, priority) {
  var itemKey = ITEM_KEY + itemCount.toString();
  var item = new _todo_item_new__WEBPACK_IMPORTED_MODULE_2__.TodoItemKey(title, description, date, priority, itemKey);
  window.localStorage.setItem(itemKey, JSON.stringify(item));
  console.log();
  itemCount++;
  console.log('save item count: ' + itemCount);
  window.localStorage.setItem(ITEM_COUNT_KEY, itemCount);
}

function loadProjectItems(key, counter) {
  var key1 = 'project7item0';
  var key2 = 'project7item1';
  var project0ItemCount = 2;
  var items = new _item_list__WEBPACK_IMPORTED_MODULE_0__.TodoItemList();
  var itemKeyArray = Array();
  /*const item1 = new TodoItemKey('Today', 'What', '4/1/22', 'high', key1);
  console.log(item1.dueDate);
  window.localStorage.setItem(key1, JSON.stringify(item1));
   const item2 = new TodoItemKey('MyTitle2', 'MyDescript2', '4/2/22', 'medium', key2);
  window.localStorage.setItem(key2, JSON.stringify(item2));*/

  for (var i = 0; i < counter; i++) {
    //let object = window.localStorage.getItem('project0' + ITEM_KEY + i.toString());
    var object = window.localStorage.getItem(key);
    items.newTodoItem(JSON.parse(object)._title, JSON.parse(object)._description, JSON.parse(object)._dueDate, JSON.parse(object)._priority, JSON.parse(object)._itemKey);
    console.log('ITEM TITLE: ' + items.itemAtIndexTitle(i));
  }

  return items;
}

function populateTodoItems(items) {
  var parent = document.querySelector('.main');
  var container = document.createElement('div');
  container.classList.add('todo-list-container');
  console.log('number of items: ' + items.numberOfTodoItems);

  for (var i = 0; i < items.numberOfTodoItems; i++) {
    container.appendChild((0,_todo_item_card__WEBPACK_IMPORTED_MODULE_1__.loadTodoCard)(items.itemAtIndexTitle(i), items.itemAtIndexDescription(i), items.itemAtIndexDueDate(i), items.itemAtIndexPriority(i), items.itemAtIndexKey(i)));
  }

  parent.appendChild(container); //return container;
}

function removeTodoItem(key) {
  var main = document.querySelector('.main');
  main.replaceWith(showItems());
  itemList.removeItemById(key);
  window.localStorage.removeItem(key);
}

function initList() {
  var itemList = new _item_list__WEBPACK_IMPORTED_MODULE_0__.TodoItemList();
}



/***/ }),

/***/ "./src/todo-item-new.js":
/*!******************************!*\
  !*** ./src/todo-item-new.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoItemKey": () => (/* binding */ TodoItemKey)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TodoItemKey = /*#__PURE__*/function () {
  function TodoItemKey(title, description, dueDate, priority, isChecked, itemKey) {
    _classCallCheck(this, TodoItemKey);

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isChecked = isChecked;
    this.itemKey = itemKey;
  }

  _createClass(TodoItemKey, [{
    key: "title",
    get: function get() {
      return this._title;
    },
    set: function set(value) {
      this._title = value;
    }
  }, {
    key: "description",
    get: function get() {
      return this._description;
    },
    set: function set(value) {
      this._description = value;
    }
  }, {
    key: "dueDate",
    get: function get() {
      return this._dueDate;
    },
    set: function set(value) {
      this._dueDate = value;
    }
  }, {
    key: "priority",
    get: function get() {
      return this._priority;
    },
    set: function set(value) {
      this._priority = value;
    }
  }, {
    key: "isChecked",
    get: function get() {
      return this._isChecked;
    },
    set: function set(value) {
      this._isChecked = value;
    }
  }, {
    key: "itemKey",
    get: function get() {
      return this._itemKey;
    },
    set: function set(value) {
      this._itemKey = value;
    }
  }]);

  return TodoItemKey;
}();



/***/ }),

/***/ "./src/todo-list-container.js":
/*!************************************!*\
  !*** ./src/todo-list-container.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodoListContainer": () => (/* binding */ createTodoListContainer),
/* harmony export */   "loadTodoCard": () => (/* binding */ loadTodoCard),
/* harmony export */   "populateTodoItems": () => (/* binding */ populateTodoItems),
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
/* harmony import */ var _todo_item_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item-new */ "./src/todo-item-new.js");
/* harmony import */ var _todo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-module */ "./src/todo-module.js");
/* harmony import */ var _prompt_delete_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prompt-delete-item */ "./src/prompt-delete-item.js");
/* harmony import */ var _prompt_edit_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prompt-edit-item */ "./src/prompt-edit-item.js");





function createTodoListContainer() {
  var container = document.createElement('div');
  container.classList.add('todo-list-container');
  return container;
}

function populateTodoItems(items) {
  var container = document.querySelector('.todo-list-container');
  container.classList.add('todo-list-container');

  for (var i = 0; i < items.numberOfTodoItems; i++) {
    container.appendChild(loadTodoCard(items.itemAtIndexTitle(i), items.itemAtIndexDescription(i), items.itemAtIndexDueDate(i), items.itemAtIndexPriority(i), items.itemAtIndexKey(i)));
    console.log('POPULATE: ' + items.itemAtIndexKey(i));
  }

  return container;
}

function removeAllChildNodes() {
  var container = document.querySelector('.todo-list-container');

  if (container.childNodes.length > 0) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
}

function loadTodoCard(title, description, dueDate, priority, key) {
  var newTodoItem = new _todo_item_new__WEBPACK_IMPORTED_MODULE_0__.TodoItemKey(title, description, dueDate, priority, key);
  console.log('TODO: ' + key);
  var container = document.createElement('div');
  container.classList.add('todo-card-container');
  /*const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'checkbox';
  checkbox.classList.add('checkbox');
  container.appendChild(checkbox);*/

  var CHECKBOX_CHECKED = '../dist/img/check_box_checked.svg';
  var CHECKBOX_UNCHECKED = '../dist/img/check_box_blank.svg';
  var isChecked = false;
  /*const checkbox = document.createElement('img');
  checkbox.src = CHECKBOX_UNCHECKED;
  checkbox.classList.add('checkbox_unchecked');
  container.appendChild(checkbox);*/

  var checkbox = document.createElement('div');
  checkbox.classList.add('checkbox_unchecked');
  container.appendChild(checkbox);
  var titleCard = document.createElement('div');
  titleCard.classList.add('todo-card-title');
  titleCard.textContent = newTodoItem.title;
  container.appendChild(titleCard);
  var descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description-container');
  descriptionContainer.style.display = 'none';
  var descriptionHeading = document.createElement('div');
  descriptionHeading.classList.add('description-heading');
  descriptionHeading.textContent = 'Description';
  descriptionContainer.appendChild(descriptionHeading);
  var descriptionCard = document.createElement('div');
  descriptionCard.classList.add('todo-card-description');
  descriptionCard.textContent = newTodoItem.description; //descriptionCard.style.display = 'none';

  descriptionContainer.appendChild(descriptionCard);
  container.appendChild(descriptionContainer);
  var dueDateCard = document.createElement('div');
  dueDateCard.classList.add('todo-card-duedate');
  dueDateCard.textContent = formatDate(newTodoItem.dueDate);
  container.appendChild(dueDateCard);
  var priorityColor = document.createElement('div');
  priorityColor.classList.add('priority-color');
  priorityColor.style.backgroundColor = getPriorityColor(newTodoItem.priority);
  container.appendChild(priorityColor);
  var iconContainer = document.createElement('div');
  iconContainer.classList.add('icon-container');
  var editContainer = document.createElement('div');
  editContainer.classList.add('icon-container');
  editContainer.setAttribute('id', 'edit-icon');
  var editToolTip = document.createElement('span');
  editToolTip.textContent = 'Edit';
  editToolTip.classList.add('tooltip-edit');
  editContainer.appendChild(editToolTip);
  var editIcon = document.createElement('img');
  editIcon.src = './img/edit-icon.svg';
  editIcon.classList.add('item-icon');
  editContainer.appendChild(editIcon);
  iconContainer.appendChild(editContainer);
  var deleteContainer = document.createElement('div');
  deleteContainer.classList.add('icon-container');
  var deleteIcon = document.createElement('img');
  deleteIcon.src = './img/delete-icon.svg';
  deleteIcon.classList.add('item-icon');
  deleteContainer.appendChild(deleteIcon);
  iconContainer.appendChild(deleteContainer);
  var content = document.getElementById('content');
  editContainer.addEventListener('click', function () {
    content.appendChild((0,_prompt_edit_item__WEBPACK_IMPORTED_MODULE_3__.createEditItem)(title, description, dueDate, priority, key));
  });
  container.appendChild(iconContainer);
  container.addEventListener('click', function () {
    if (container.classList.contains('todo-card-selected')) {
      deleteIcon.style.display = 'none';
      editIcon.style.display = 'none';
      descriptionContainer.style.display = 'none';
      container.classList.remove('todo-card-selected');
    } else {
      container.classList.add('todo-card-selected');
      deleteIcon.style.display = 'block';
      editIcon.style.display = 'block';
      descriptionContainer.style.display = 'block';
    }
  });
  checkbox.addEventListener('click', function () {
    if (isChecked === false) {
      checkbox.classList.remove('checkbox_unchecked');
      checkbox.classList.add('checkbox_checked');
      isChecked = true;
    } else if (isChecked === true) {
      checkbox.classList.remove('checkbox_checked');
      checkbox.classList.add('checkbox_unchecked');
      isChecked = false;
    }
  });
  deleteContainer.addEventListener('click', function () {
    content.appendChild((0,_prompt_delete_item__WEBPACK_IMPORTED_MODULE_2__.createDeletePrompt)(key));
    /*let projectName = TodoModule.extractProjectName(key);
        TodoModule.removeItemFromStorage(key, projectName);
        const items = TodoModule.loadProjectItems(projectName);
        removeAllChildNodes();
        const itemContainer = document.querySelector('.main');
        itemContainer.appendChild(populateTodoItems(items));*/
  });
  container.addEventListener('mouseenter', function () {
    /*deleteIcon.style.display = 'block';
    editIcon.style.display = 'block';*/
  });
  container.addEventListener('mouseleave', function () {
    /*deleteIcon.style.display = 'none';
    editIcon.style.display = 'none';*/
  });
  return container;
}

function removeNode(item) {
  item.parentNode.remove();
}

function getPriorityColor(priority) {
  if (priority == 'high priority') {
    return 'red';
  } else if (priority == 'medium priority') {
    return 'yellow';
  } else {
    return 'lightgreen';
  }
}

function formatDate(date) {
  var res = date.split('-');
  var year = res[0];
  var month = res[1];
  var day = res[2];
  return month + '/' + day + '/' + year;
}



/***/ }),

/***/ "./src/todo-module.js":
/*!****************************!*\
  !*** ./src/todo-module.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoModule": () => (/* binding */ TodoModule)
/* harmony export */ });
/* harmony import */ var _item_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-list */ "./src/item-list.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo_item_new__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item-new */ "./src/todo-item-new.js");




var TodoModule = function () {
  var ITEM_COUNT_KEY = 'itemCounter';
  var ITEM_KEY = 'item';
  var PROJECT = 'project';
  var itemCount;

  var initDefaultItems = function initDefaultItems() {
    var defaultItem1 = new _todo_item_new__WEBPACK_IMPORTED_MODULE_2__.TodoItemKey('Title1', 'desc1', '01/11/2022', 'high', 1, 'project0item0');
    var defaultItem2 = new _todo_item_new__WEBPACK_IMPORTED_MODULE_2__.TodoItemKey('Title2', 'desc2', '02/22/2022', 'low', 0, 'project0item1');
    window.localStorage.setItem('project0item0', JSON.stringify(defaultItem1));
    window.localStorage.setItem('project0item1', JSON.stringify(defaultItem2));
  };

  var setItemCount = function setItemCount() {
    if (!localStorage.getItem(ITEM_COUNT_KEY)) {
      window.localStorage.setItem(ITEM_COUNT_KEY, 2);
      console.log('NO ITEM COUNT!');
      return 2;
    } else {
      console.log('WE HAVE ITEM COUNT: ' + window.localStorage.getItem(ITEM_COUNT_KEY));
      return window.localStorage.getItem(ITEM_COUNT_KEY);
    }
  };

  var saveItemToStorage = function saveItemToStorage(title, description, date, priority, projectKey) {
    if (window.localStorage.getItem(projectKey)) {
      var object = window.localStorage.getItem(projectKey);
      var project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(JSON.parse(object)._name, JSON.parse(object)._date, JSON.parse(object)._key, JSON.parse(object)._itemCount);
      var itemKey = projectKey + ITEM_KEY + project.itemCount.toString();
      console.log('ITEM KEY = ' + itemKey);
      project.addItem();
      window.localStorage.setItem(projectKey, JSON.stringify(project));
      var item = new _todo_item_new__WEBPACK_IMPORTED_MODULE_2__.TodoItemKey(title, description, date, priority, itemKey);
      window.localStorage.setItem(itemKey, JSON.stringify(item));
      window.localStorage.setItem(ITEM_COUNT_KEY, itemCount);
    }
  };

  var getItemKey = function getItemKey(key) {
    return key;
  };

  var editItemToStorage = function editItemToStorage(title, description, date, priority, itemKey) {
    var item = new _todo_item_new__WEBPACK_IMPORTED_MODULE_2__.TodoItemKey(title, description, date, priority, itemKey);
    window.localStorage.setItem(itemKey, JSON.stringify(item));
  };

  var removeItemFromStorage = function removeItemFromStorage(key, projectName) {
    console.log('KEYKEYKEY = ' + key);

    if (window.localStorage.getItem(projectName)) {
      var object = window.localStorage.getItem(projectName);
      var project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(JSON.parse(object)._name, JSON.parse(object)._date, JSON.parse(object)._key, JSON.parse(object)._itemCount);
      console.log('project name: ' + project.name); //project.deleteItem();
      //window.localStorage.setItem(projectName, JSON.stringify(project));

      window.localStorage.removeItem(key);
      console.log('count: ' + project.itemCount);
    }
  };

  var extractProjectName = function extractProjectName(key) {
    var projectName = '';

    for (var i = 7; i < key.length; i++) {
      if (key[i] != 'i') {
        projectName += key[i];
      }

      if (key[i] === 'i') {
        break;
      }
    }

    projectName = PROJECT + projectName.toString();
    return projectName;
  };

  var loadProjectItems = function loadProjectItems(projectKey) {
    var items = new _item_list__WEBPACK_IMPORTED_MODULE_0__.TodoItemList();
    console.log('loadProjectItems projectKey: ' + projectKey);

    if (window.localStorage.getItem(projectKey)) {
      var object = window.localStorage.getItem(projectKey);
      var project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(JSON.parse(object)._name, JSON.parse(object)._date, JSON.parse(object)._key, JSON.parse(object)._itemCount);
      var numItems = project.itemCount;
      console.log('item count = ' + numItems);
      var itemKey = projectKey + ITEM_KEY;
      var currentCount = 0;

      if (numItems > 0) {
        for (var i = 0; i < numItems; i++) {
          console.log('SURE' + itemKey + i);

          if (localStorage.getItem(itemKey + i.toString())) {
            var _object = window.localStorage.getItem(itemKey + i.toString());

            items.newTodoItem(JSON.parse(_object)._title, JSON.parse(_object)._description, JSON.parse(_object)._dueDate, JSON.parse(_object)._priority, JSON.parse(_object)._itemKey);
          }
        }
      }
    }

    return items;
  };

  return {
    initDefaultItems: initDefaultItems,
    setItemCount: setItemCount,
    saveItemToStorage: saveItemToStorage,
    getItemKey: getItemKey,
    editItemToStorage: editItemToStorage,
    removeItemFromStorage: removeItemFromStorage,
    extractProjectName: extractProjectName,
    loadProjectItems: loadProjectItems
  };
}();



/***/ }),

/***/ "./src/todoitem.js":
/*!*************************!*\
  !*** ./src/todoitem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoItem": () => (/* binding */ TodoItem)
/* harmony export */ });
/* harmony import */ var _todo_item_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item-card */ "./src/todo-item-card.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var TodoItem = /*#__PURE__*/function () {
  function TodoItem(title, description, dueDate, priority, itemId, projectId) {
    _classCallCheck(this, TodoItem);

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.itemId = itemId;
    this.projectId = projectId;
  }

  _createClass(TodoItem, [{
    key: "title",
    get: function get() {
      return this._title;
    },
    set: function set(value) {
      this._title = value;
    }
  }, {
    key: "description",
    get: function get() {
      return this._description;
    },
    set: function set(value) {
      this._description = value;
    }
  }, {
    key: "dueDate",
    get: function get() {
      return this._dueDate;
    },
    set: function set(value) {
      this._dueDate = value;
    }
  }, {
    key: "priority",
    get: function get() {
      return this._priority;
    },
    set: function set(value) {
      this._priority = value;
    }
  }, {
    key: "itemId",
    get: function get() {
      return this._itemId;
    },
    set: function set(value) {
      this._itemId = value;
    }
  }, {
    key: "projectId",
    get: function get() {
      return this._projectId;
    },
    set: function set(value) {
      this._projectId = value;
    }
  }]);

  return TodoItem;
}();



/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-new-project */ "./src/create-new-project.js");
/* harmony import */ var _project_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-module */ "./src/project-module.js");
/* harmony import */ var _project_list_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-list-container */ "./src/project-list-container.js");
/* harmony import */ var _create_column_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-column-label */ "./src/create-column-label.js");
/* harmony import */ var _todo_list_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list-container */ "./src/todo-list-container.js");






function createHeader() {
  var header = document.createElement('header');
  header.classList.add('header');
  var pageName = document.createElement('h1');
  pageName.classList.add('page-name');
  pageName.textContent = 'To Do List';
  header.appendChild(pageName);
  return header;
}

function createNav() {
  var nav = document.createElement('nav');
  var itemProjects = document.createElement('div');
  itemProjects.classList.add('projects-title');
  itemProjects.textContent = 'Projects';
  nav.appendChild(itemProjects);
  var btnNewProject = document.createElement('button');
  btnNewProject.classList.add('btn-new-project');
  btnNewProject.textContent = 'Create New Project';
  var content = document.getElementById('content');
  btnNewProject.addEventListener('click', function () {
    content.appendChild((0,_create_new_project__WEBPACK_IMPORTED_MODULE_0__.createProjectInput)());
  });
  nav.appendChild(btnNewProject);
  return nav;
}

function createMain() {
  var main = document.createElement('div');
  main.classList.add('main');
  main.appendChild(createNewTodo());
  main.appendChild((0,_create_column_label__WEBPACK_IMPORTED_MODULE_3__.createColumnLabels)());
  main.appendChild((0,_todo_list_container__WEBPACK_IMPORTED_MODULE_4__.createTodoListContainer)());
  return main;
}

function createNewTodo() {
  var openTodoInput = document.createElement('div');
  openTodoInput.classList.add('open-todo-input');
  openTodoInput.style.display = 'none';
  openTodoInput.textContent = 'New To-do Task';
  /*openTodoInput.addEventListener('click', () => {
    content.appendChild(createTodoItemInput());
  })*/

  return openTodoInput;
}

function createBodyContainer() {
  var bodyContainer = document.createElement('div');
  bodyContainer.classList.add('body-container');
  bodyContainer.appendChild(createNav());
  bodyContainer.appendChild(createMain());
  return bodyContainer;
}

function createFooter() {
  var footer = document.createElement("footer");
  footer.classList.add("footer");
  var copyright = document.createElement("p");
  copyright.textContent = "Copyright \xA9 ".concat(new Date().getFullYear(), " Allen Daniels");
  var githubLink = document.createElement("a");
  githubLink.href = "https://github.com/allen11241";
  var githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");
  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);
  return footer;
}

function initWebsite() {
  var content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createBodyContainer());
  content.appendChild(createFooter());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);

/***/ }),

/***/ "./node_modules/js-datepicker/dist/datepicker.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/js-datepicker/dist/datepicker.min.js ***!
  \***********************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=[],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=["January","February","March","April","May","June","July","August","September","October","November","December"],o={t:"top",r:"right",b:"bottom",l:"left",c:"centered"};function s(){}var l=["click","focusin","keydown","input"];function d(e){l.forEach((function(t){e.addEventListener(t,e===document?L:Y)}))}function c(e){return Array.isArray(e)?e.map(c):"[object Object]"===x(e)?Object.keys(e).reduce((function(t,n){return t[n]=c(e[n]),t}),{}):e}function u(e,t){var n=e.calendar.querySelector(".qs-overlay"),a=n&&!n.classList.contains("qs-hidden");t=t||new Date(e.currentYear,e.currentMonth),e.calendar.innerHTML=[h(t,e,a),f(t,e,a),v(e,a)].join(""),a&&window.requestAnimationFrame((function(){M(!0,e)}))}function h(e,t,n){return['<div class="qs-controls'+(n?" qs-blur":"")+'">','<div class="qs-arrow qs-left"></div>','<div class="qs-month-year">','<span class="qs-month">'+t.months[e.getMonth()]+"</span>",'<span class="qs-year">'+e.getFullYear()+"</span>","</div>",'<div class="qs-arrow qs-right"></div>',"</div>"].join("")}function f(e,t,n){var a=t.currentMonth,r=t.currentYear,i=t.dateSelected,o=t.maxDate,s=t.minDate,l=t.showAllDates,d=t.days,c=t.disabledDates,u=t.startDay,h=t.weekendIndices,f=t.events,v=t.getRange?t.getRange():{},m=+v.start,y=+v.end,p=g(new Date(e).setDate(1)),w=p.getDay()-u,D=w<0?7:0;p.setMonth(p.getMonth()+1),p.setDate(0);var b=p.getDate(),q=[],S=D+7*((w+b)/7|0);S+=(w+b)%7?7:0;for(var M=1;M<=S;M++){var E=(M-1)%7,x=d[E],C=M-(w>=0?w:7+w),L=new Date(r,a,C),Y=f[+L],j=C<1||C>b,P=j?C<1?-1:1:0,k=j&&!l,O=k?"":L.getDate(),N=+L==+i,_=E===h[0]||E===h[1],I=m!==y,A="qs-square "+x;Y&&!k&&(A+=" qs-event"),j&&(A+=" qs-outside-current-month"),!l&&j||(A+=" qs-num"),N&&(A+=" qs-active"),(c[+L]||t.disabler(L)||_&&t.noWeekends||s&&+L<+s||o&&+L>+o)&&!k&&(A+=" qs-disabled"),+g(new Date)==+L&&(A+=" qs-current"),+L===m&&y&&I&&(A+=" qs-range-start"),+L>m&&+L<y&&(A+=" qs-range-middle"),+L===y&&m&&I&&(A+=" qs-range-end"),k&&(A+=" qs-empty",O=""),q.push('<div class="'+A+'" data-direction="'+P+'">'+O+"</div>")}var R=d.map((function(e){return'<div class="qs-square qs-day">'+e+"</div>"})).concat(q);return R.unshift('<div class="qs-squares'+(n?" qs-blur":"")+'">'),R.push("</div>"),R.join("")}function v(e,t){var n=e.overlayPlaceholder,a=e.overlayButton;return['<div class="qs-overlay'+(t?"":" qs-hidden")+'">',"<div>",'<input class="qs-overlay-year" placeholder="'+n+'" inputmode="numeric" />','<div class="qs-close">&#10005;</div>',"</div>",'<div class="qs-overlay-month-container">'+e.overlayMonths.map((function(e,t){return'<div class="qs-overlay-month" data-month-num="'+t+'">'+e+"</div>"})).join("")+"</div>",'<div class="qs-submit qs-disabled">'+a+"</div>","</div>"].join("")}function m(e,t,n){var a=t.el,r=t.calendar.querySelector(".qs-active"),i=e.textContent,o=t.sibling;(a.disabled||a.readOnly)&&t.respectDisabledReadOnly||(t.dateSelected=n?void 0:new Date(t.currentYear,t.currentMonth,i),r&&r.classList.remove("qs-active"),n||e.classList.add("qs-active"),p(a,t,n),n||q(t),o&&(y({instance:t,deselect:n}),t.first&&!o.dateSelected&&(o.currentYear=t.currentYear,o.currentMonth=t.currentMonth,o.currentMonthName=t.currentMonthName),u(t),u(o)),t.onSelect(t,n?void 0:new Date(t.dateSelected)))}function y(e){var t=e.instance.first?e.instance:e.instance.sibling,n=t.sibling;t===e.instance?e.deselect?(t.minDate=t.originalMinDate,n.minDate=n.originalMinDate):n.minDate=t.dateSelected:e.deselect?(n.maxDate=n.originalMaxDate,t.maxDate=t.originalMaxDate):t.maxDate=n.dateSelected}function p(e,t,n){if(!t.nonInput)return n?e.value="":t.formatter!==s?t.formatter(e,t.dateSelected,t):void(e.value=t.dateSelected.toDateString())}function w(e,t,n,a){n||a?(n&&(t.currentYear=+n),a&&(t.currentMonth=+a)):(t.currentMonth+=e.contains("qs-right")?1:-1,12===t.currentMonth?(t.currentMonth=0,t.currentYear++):-1===t.currentMonth&&(t.currentMonth=11,t.currentYear--)),t.currentMonthName=t.months[t.currentMonth],u(t),t.onMonthChange(t)}function D(e){if(!e.noPosition){var t=e.position.top,n=e.position.right;if(e.position.centered)return e.calendarContainer.classList.add("qs-centered");var a=e.positionedEl.getBoundingClientRect(),r=e.el.getBoundingClientRect(),i=e.calendarContainer.getBoundingClientRect(),o=r.top-a.top+(t?-1*i.height:r.height)+"px",s=r.left-a.left+(n?r.width-i.width:0)+"px";e.calendarContainer.style.setProperty("top",o),e.calendarContainer.style.setProperty("left",s)}}function b(e){return"[object Date]"===x(e)&&"Invalid Date"!==e.toString()}function g(e){if(b(e)||"number"==typeof e&&!isNaN(e)){var t=new Date(+e);return new Date(t.getFullYear(),t.getMonth(),t.getDate())}}function q(e){e.disabled||!e.calendarContainer.classList.contains("qs-hidden")&&!e.alwaysShow&&("overlay"!==e.defaultView&&M(!0,e),e.calendarContainer.classList.add("qs-hidden"),e.onHide(e))}function S(e){e.disabled||(e.calendarContainer.classList.remove("qs-hidden"),"overlay"===e.defaultView&&M(!1,e),D(e),e.onShow(e))}function M(e,t){var n=t.calendar,a=n.querySelector(".qs-overlay"),r=a.querySelector(".qs-overlay-year"),i=n.querySelector(".qs-controls"),o=n.querySelector(".qs-squares");e?(a.classList.add("qs-hidden"),i.classList.remove("qs-blur"),o.classList.remove("qs-blur"),r.value=""):(a.classList.remove("qs-hidden"),i.classList.add("qs-blur"),o.classList.add("qs-blur"),r.focus())}function E(e,t,n,a){var r=isNaN(+(new Date).setFullYear(t.value||void 0)),i=r?null:t.value;if(13===e.which||13===e.keyCode||"click"===e.type)a?w(null,n,i,a):r||t.classList.contains("qs-disabled")||w(null,n,i);else if(n.calendar.contains(t)){n.calendar.querySelector(".qs-submit").classList[r?"add":"remove"]("qs-disabled")}}function x(e){return{}.toString.call(e)}function C(e){a.forEach((function(t){t!==e&&q(t)}))}function L(e){if(!e.__qs_shadow_dom){var t=e.which||e.keyCode,n=e.type,r=e.target,o=r.classList,s=a.filter((function(e){return e.calendar.contains(r)||e.el===r}))[0],l=s&&s.calendar.contains(r);if(!(s&&s.isMobile&&s.disableMobile))if("click"===n){if(!s)return a.forEach(q);if(s.disabled)return;var d=s.calendar,c=s.calendarContainer,h=s.disableYearOverlay,f=s.nonInput,v=d.querySelector(".qs-overlay-year"),y=!!d.querySelector(".qs-hidden"),p=d.querySelector(".qs-month-year").contains(r),D=r.dataset.monthNum;if(s.noPosition&&!l)(c.classList.contains("qs-hidden")?S:q)(s);else if(o.contains("qs-arrow"))w(o,s);else if(p||o.contains("qs-close"))h||M(!y,s);else if(D)E(e,v,s,D);else{if(o.contains("qs-disabled"))return;if(o.contains("qs-num")){var b=r.textContent,g=+r.dataset.direction,x=new Date(s.currentYear,s.currentMonth+g,b);if(g){s.currentYear=x.getFullYear(),s.currentMonth=x.getMonth(),s.currentMonthName=i[s.currentMonth],u(s);for(var L,Y=s.calendar.querySelectorAll('[data-direction="0"]'),j=0;!L;){var P=Y[j];P.textContent===b&&(L=P),j++}r=L}return void(+x==+s.dateSelected?m(r,s,!0):r.classList.contains("qs-disabled")||m(r,s))}o.contains("qs-submit")?E(e,v,s):f&&r===s.el&&(S(s),C(s))}}else if("focusin"===n&&s)S(s),C(s);else if("keydown"===n&&9===t&&s)q(s);else if("keydown"===n&&s&&!s.disabled){var k=!s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");13===t&&k&&l?E(e,r,s):27===t&&k&&l&&M(!0,s)}else if("input"===n){if(!s||!s.calendar.contains(r))return;var O=s.calendar.querySelector(".qs-submit"),N=r.value.split("").reduce((function(e,t){return e||"0"!==t?e+(t.match(/[0-9]/)?t:""):""}),"").slice(0,4);r.value=N,O.classList[4===N.length?"remove":"add"]("qs-disabled")}}}function Y(e){L(e),e.__qs_shadow_dom=!0}function j(e,t){l.forEach((function(n){e.removeEventListener(n,t)}))}function P(){S(this)}function k(){q(this)}function O(e,t){var n=g(e),a=this.currentYear,r=this.currentMonth,i=this.sibling;if(null==e)return this.dateSelected=void 0,p(this.el,this,!0),i&&(y({instance:this,deselect:!0}),u(i)),u(this),this;if(!b(e))throw new Error("`setDate` needs a JavaScript Date object.");if(this.disabledDates[+n]||n<this.minDate||n>this.maxDate)throw new Error("You can't manually set a date that's disabled.");this.dateSelected=n,t&&(this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),this.currentMonthName=this.months[n.getMonth()]),p(this.el,this),i&&(y({instance:this}),u(i));var o=a===n.getFullYear()&&r===n.getMonth();return o||t?u(this,n):o||u(this,new Date(a,r,1)),this}function N(e){return I(this,e,!0)}function _(e){return I(this,e)}function I(e,t,n){var a=e.dateSelected,r=e.first,i=e.sibling,o=e.minDate,s=e.maxDate,l=g(t),d=n?"Min":"Max";function c(){return"original"+d+"Date"}function h(){return d.toLowerCase()+"Date"}function f(){return"set"+d}function v(){throw new Error("Out-of-range date passed to "+f())}if(null==t)e[c()]=void 0,i?(i[c()]=void 0,n?(r&&!a||!r&&!i.dateSelected)&&(e.minDate=void 0,i.minDate=void 0):(r&&!i.dateSelected||!r&&!a)&&(e.maxDate=void 0,i.maxDate=void 0)):e[h()]=void 0;else{if(!b(t))throw new Error("Invalid date passed to "+f());i?((r&&n&&l>(a||s)||r&&!n&&l<(i.dateSelected||o)||!r&&n&&l>(i.dateSelected||s)||!r&&!n&&l<(a||o))&&v(),e[c()]=l,i[c()]=l,(n&&(r&&!a||!r&&!i.dateSelected)||!n&&(r&&!i.dateSelected||!r&&!a))&&(e[h()]=l,i[h()]=l)):((n&&l>(a||s)||!n&&l<(a||o))&&v(),e[h()]=l)}return i&&u(i),u(e),e}function A(){var e=this.first?this:this.sibling,t=e.sibling;return{start:e.dateSelected,end:t.dateSelected}}function R(){var e=this.shadowDom,t=this.positionedEl,n=this.calendarContainer,r=this.sibling,i=this;this.inlinePosition&&(a.some((function(e){return e!==i&&e.positionedEl===t}))||t.style.setProperty("position",null));n.remove(),a=a.filter((function(e){return e!==i})),r&&delete r.sibling,a.length||j(document,L);var o=a.some((function(t){return t.shadowDom===e}));for(var s in e&&!o&&j(e,Y),this)delete this[s];a.length||l.forEach((function(e){document.removeEventListener(e,L)}))}function F(e,t){var n=new Date(e);if(!b(n))throw new Error("Invalid date passed to `navigate`");this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),u(this),t&&this.onMonthChange(this)}function B(){var e=!this.calendarContainer.classList.contains("qs-hidden"),t=!this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");e&&M(t,this)}t.default=function(e,t){var n=function(e,t){var n,l,d=function(e){var t=c(e);t.events&&(t.events=t.events.reduce((function(e,t){if(!b(t))throw new Error('"options.events" must only contain valid JavaScript Date objects.');return e[+g(t)]=!0,e}),{}));["startDate","dateSelected","minDate","maxDate"].forEach((function(e){var n=t[e];if(n&&!b(n))throw new Error('"options.'+e+'" needs to be a valid JavaScript Date object.');t[e]=g(n)}));var n=t.position,i=t.maxDate,l=t.minDate,d=t.dateSelected,u=t.overlayPlaceholder,h=t.overlayButton,f=t.startDay,v=t.id;if(t.startDate=g(t.startDate||d||new Date),t.disabledDates=(t.disabledDates||[]).reduce((function(e,t){var n=+g(t);if(!b(t))throw new Error('You supplied an invalid date to "options.disabledDates".');if(n===+g(d))throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');return e[n]=1,e}),{}),t.hasOwnProperty("id")&&null==v)throw new Error("`id` cannot be `null` or `undefined`");if(null!=v){var m=a.filter((function(e){return e.id===v}));if(m.length>1)throw new Error("Only two datepickers can share an id.");m.length?(t.second=!0,t.sibling=m[0]):t.first=!0}var y=["tr","tl","br","bl","c"].some((function(e){return n===e}));if(n&&!y)throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');function p(e){throw new Error('"dateSelected" in options is '+(e?"less":"greater")+' than "'+(e||"max")+'Date".')}if(t.position=function(e){var t=e[0],n=e[1],a={};a[o[t]]=1,n&&(a[o[n]]=1);return a}(n||"bl"),i<l)throw new Error('"maxDate" in options is less than "minDate".');d&&(l>d&&p("min"),i<d&&p());if(["onSelect","onShow","onHide","onMonthChange","formatter","disabler"].forEach((function(e){"function"!=typeof t[e]&&(t[e]=s)})),["customDays","customMonths","customOverlayMonths"].forEach((function(e,n){var a=t[e],r=n?12:7;if(a){if(!Array.isArray(a)||a.length!==r||a.some((function(e){return"string"!=typeof e})))throw new Error('"'+e+'" must be an array with '+r+" strings.");t[n?n<2?"months":"overlayMonths":"days"]=a}})),f&&f>0&&f<7){var w=(t.customDays||r).slice(),D=w.splice(0,f);t.customDays=w.concat(D),t.startDay=+f,t.weekendIndices=[w.length-1,w.length]}else t.startDay=0,t.weekendIndices=[6,0];"string"!=typeof u&&delete t.overlayPlaceholder;"string"!=typeof h&&delete t.overlayButton;var q=t.defaultView;if(q&&"calendar"!==q&&"overlay"!==q)throw new Error('options.defaultView must either be "calendar" or "overlay".');return t.defaultView=q||"calendar",t}(t||{startDate:g(new Date),position:"bl",defaultView:"calendar"}),u=e;if("string"==typeof u)u="#"===u[0]?document.getElementById(u.slice(1)):document.querySelector(u);else{if("[object ShadowRoot]"===x(u))throw new Error("Using a shadow DOM as your selector is not supported.");for(var h,f=u.parentNode;!h;){var v=x(f);"[object HTMLDocument]"===v?h=!0:"[object ShadowRoot]"===v?(h=!0,n=f,l=f.host):f=f.parentNode}}if(!u)throw new Error("No selector / element found.");if(a.some((function(e){return e.el===u})))throw new Error("A datepicker already exists on that element.");var m=u===document.body,y=n?u.parentElement||n:m?document.body:u.parentElement,w=n?u.parentElement||l:y,D=document.createElement("div"),q=document.createElement("div");D.className="qs-datepicker-container qs-hidden",q.className="qs-datepicker";var M={shadowDom:n,customElement:l,positionedEl:w,el:u,parent:y,nonInput:"INPUT"!==u.nodeName,noPosition:m,position:!m&&d.position,startDate:d.startDate,dateSelected:d.dateSelected,disabledDates:d.disabledDates,minDate:d.minDate,maxDate:d.maxDate,noWeekends:!!d.noWeekends,weekendIndices:d.weekendIndices,calendarContainer:D,calendar:q,currentMonth:(d.startDate||d.dateSelected).getMonth(),currentMonthName:(d.months||i)[(d.startDate||d.dateSelected).getMonth()],currentYear:(d.startDate||d.dateSelected).getFullYear(),events:d.events||{},defaultView:d.defaultView,setDate:O,remove:R,setMin:N,setMax:_,show:P,hide:k,navigate:F,toggleOverlay:B,onSelect:d.onSelect,onShow:d.onShow,onHide:d.onHide,onMonthChange:d.onMonthChange,formatter:d.formatter,disabler:d.disabler,months:d.months||i,days:d.customDays||r,startDay:d.startDay,overlayMonths:d.overlayMonths||(d.months||i).map((function(e){return e.slice(0,3)})),overlayPlaceholder:d.overlayPlaceholder||"4-digit year",overlayButton:d.overlayButton||"Submit",disableYearOverlay:!!d.disableYearOverlay,disableMobile:!!d.disableMobile,isMobile:"ontouchstart"in window,alwaysShow:!!d.alwaysShow,id:d.id,showAllDates:!!d.showAllDates,respectDisabledReadOnly:!!d.respectDisabledReadOnly,first:d.first,second:d.second};if(d.sibling){var E=d.sibling,C=M,L=E.minDate||C.minDate,Y=E.maxDate||C.maxDate;C.sibling=E,E.sibling=C,E.minDate=L,E.maxDate=Y,C.minDate=L,C.maxDate=Y,E.originalMinDate=L,E.originalMaxDate=Y,C.originalMinDate=L,C.originalMaxDate=Y,E.getRange=A,C.getRange=A}d.dateSelected&&p(u,M);var j=getComputedStyle(w).position;m||j&&"static"!==j||(M.inlinePosition=!0,w.style.setProperty("position","relative"));var I=a.filter((function(e){return e.positionedEl===M.positionedEl}));I.some((function(e){return e.inlinePosition}))&&(M.inlinePosition=!0,I.forEach((function(e){e.inlinePosition=!0})));D.appendChild(q),y.appendChild(D),M.alwaysShow&&S(M);return M}(e,t);if(a.length||d(document),n.shadowDom&&(a.some((function(e){return e.shadowDom===n.shadowDom}))||d(n.shadowDom)),a.push(n),n.second){var l=n.sibling;y({instance:n,deselect:!n.dateSelected}),y({instance:l,deselect:!l.dateSelected}),u(l)}return u(n,n.startDate||n.dateSelected),n.alwaysShow&&D(n),n}}]).default}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_init__WEBPACK_IMPORTED_MODULE_0__.initProjects)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQUEsb0RBQVc7QUFDWGxQLG1EQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2NyZWF0ZS1jb2x1bW4tbGFiZWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jcmVhdGUtbmV3LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9jcmVhdGUtdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvZXhjZXB0aW9uLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9pdGVtLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvcHJvamVjdC1jYXJkLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvcHJvamVjdC1saXN0LWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL3Byb2plY3QtbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL3Byb2plY3QtbW9kdWxlLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL3Byb21wdC1kZWxldGUtaXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL3Byb21wdC1lZGl0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy90b2RvLWl0ZW0tY2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL3RvZG8taXRlbS1saXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvdG9kby1pdGVtLW5ldy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL3RvZG8tbGlzdC1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC8uL3NyYy90b2RvLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL3RvZG9pdGVtLmpzIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3QvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2pzLWRhdGVwaWNrZXIvZGlzdC9kYXRlcGlja2VyLm1pbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbHVtbkxhYmVscygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1sYWJlbC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGJsYW5rRmlsbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmxhbmtGaWxsZXIuY2xhc3NMaXN0LmFkZCgnYmxhbmsnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmxhbmtGaWxsZXIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWxhYmVsJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvKmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1sYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pOyovXG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWxhYmVsJyk7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLWxhYmVsJyk7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgZXhwb3J0IHtjcmVhdGVDb2x1bW5MYWJlbHN9IiwiaW1wb3J0IHsgaW5pdFByb2plY3RzLCByZW1vdmVQcm9qZWN0Q29udGFpbmVyIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCB7Y3JlYXRlUHJvamVjdENhcmR9IGZyb20gJy4vcHJvamVjdC1jYXJkJztcbmltcG9ydCB7IGFkZFByb2plY3QsIHNhdmVQcm9qZWN0VG9TdG9yYWdlIH0gZnJvbSAnLi9wcm9qZWN0LWxpc3QnO1xuaW1wb3J0IHsgUHJvamVjdE1vZHVsZSB9IGZyb20gJy4vcHJvamVjdC1tb2R1bGUnO1xuaW1wb3J0IHsgRXhjZXB0aW9uTW9kdWxlfSBmcm9tICcuL2V4Y2VwdGlvbi1tb2R1bGUnO1xuaW1wb3J0IHsgZGF0ZXBpY2tlciB9IGZyb20gJ2pzLWRhdGVwaWNrZXInO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SW5wdXQoKXtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pbnB1dC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkaW5nJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdDcmVhdGUgYSBOZXcgUHJvamVjdCc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYm9keScpO1xuXG4gICAgY29uc3QgaW5wdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWlucHV0LWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1uYW1lLWlucHV0Jyk7XG4gICAgcHJvamVjdE5hbWVMYWJlbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1sYWJlbCcpO1xuICAgIHByb2plY3ROYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBuYW1lJztcbiAgICBpbnB1dENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCAnMTAnKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZS1pbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW5wdXQnKTtcbiAgICBpbnB1dENvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgY29uc3QgcHJvamVjdERhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJvamVjdERhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LWRhdGUtaW5wdXQnKTtcbiAgICBwcm9qZWN0RGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1kYXRlLWxhYmVsJyk7XG4gICAgcHJvamVjdERhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1sYWJlbCcpO1xuICAgIHByb2plY3REYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgIGlucHV0Q29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGF0ZUxhYmVsKTtcblxuICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIHByb2plY3REYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1kYXRlLWlucHV0Jyk7XG4gICAgcHJvamVjdERhdGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pbnB1dCcpO1xuICAgIGlucHV0Q29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0RGF0ZSk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGlucHV0Q29udGVudCk7XG5cbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZScpO1xuICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9J0Nhbm5vdCBsZWF2ZSB0ZXh0IGZpZWxkKHMpIGVtcHR5JztcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBib2R5LmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XG5cbiAgICBjb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5TdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdidG4tc3VibWl0LXByb2plY3QnKTtcbiAgICBidG5TdWJtaXQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnRuJyk7XG4gICAgYnRuU3VibWl0LnRleHRDb250ZW50ID0gJ0VudGVyJztcblxuICAgIGNvbnN0IGJ0bkNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0bi1jYW5jZWwtcHJvamVjdCcpO1xuICAgIGJ0bkNhbmNlbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idG4nKTtcbiAgICBidG5DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idG4tY29udGFpbmVyJyk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0blN1Ym1pdCk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNhbmNlbCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4gICAgYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKEV4Y2VwdGlvbk1vZHVsZS5pc0VtcHR5KHByb2plY3ROYW1lLnZhbHVlKSB8fFxuICAgICAgICBFeGNlcHRpb25Nb2R1bGUuaXNFbXB0eShwcm9qZWN0RGF0ZS52YWx1ZSkpe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSwgNDAwMCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAgICAgICAvL21vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBQcm9qZWN0TW9kdWxlLnNhdmVQcm9qZWN0VG9TdG9yYWdlKHByb2plY3ROYW1lLnZhbHVlLCBwcm9qZWN0RGF0ZS52YWx1ZSk7XG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgICAgICAgICBpbml0UHJvamVjdHMoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gXG4gICAgYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjbGVhck1vZGFsSW5wdXRzKCk7XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGNsZWFyTW9kYWxJbnB1dHMoKXtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWlucHV0Jyk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbnB1dHNbaV0udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIHJldHVybiBtb2RhbDtcbn1cblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0SW5wdXR9OyIsImltcG9ydCB7IGxvYWRUb2RvQ2FyZCB9IGZyb20gJy4vdG9kby1saXN0LWNvbnRhaW5lcic7XG5pbXBvcnQge1RvZG9Nb2R1bGV9IGZyb20gJy4vdG9kby1tb2R1bGUnO1xuaW1wb3J0IHsgcG9wdWxhdGVUb2RvSXRlbXMsIHJlbW92ZUFsbENoaWxkTm9kZXN9IGZyb20gJy4vdG9kby1saXN0LWNvbnRhaW5lcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtSW5wdXQocHJvamVjdEtleSkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8taW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkaW5nJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdDcmVhdGUgYSBOZXcgVGFzayc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYm9keScpO1xuXG4gICAgY29uc3QgaW5wdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbW9kYWwtaW5wdXQtY29udGVudCcpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvZG9UaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG8taXRlbS1pbnB1dC10aXRsZScpO1xuICAgIHRvZG9UaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICBpbnB1dENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb1RpdGxlTGFiZWwpO1xuXG4gICAgY29uc3QgdG9kb0l0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0l0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRvZG9JdGVtVGl0bGUuc2V0QXR0cmlidXRlKCdzaXplJywgJzEwJyk7XG4gICAgdG9kb0l0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8taXRlbS1pbnB1dCcpO1xuICAgIHRvZG9JdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWlucHV0Jyk7XG4gICAgaW5wdXRDb250ZW50LmFwcGVuZENoaWxkKHRvZG9JdGVtVGl0bGUpO1xuXG4gICAgY29uc3QgdG9kb0l0ZW1EZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b2RvSXRlbURlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kby1pdGVtLWlucHV0LWRlc2NyaXB0aW9uJyk7XG4gICAgdG9kb0l0ZW1EZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBpbnB1dENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0l0ZW1EZXNjcmlwdGlvbkxhYmVsKTtcblxuICAgIGNvbnN0IHRvZG9JdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9JdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0b2RvSXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgIHRvZG9JdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWlucHV0Jyk7XG4gICAgaW5wdXRDb250ZW50LmFwcGVuZENoaWxkKHRvZG9JdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgdG9kb0l0ZW1EdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvZG9JdGVtRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZS1kYXRlJyk7XG4gICAgdG9kb0l0ZW1EdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgIGlucHV0Q29udGVudC5hcHBlbmRDaGlsZCh0b2RvSXRlbUR1ZURhdGVMYWJlbCk7XG5cbiAgICBjb25zdCB0b2RvSXRlbUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9JdGVtRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIHRvZG9JdGVtRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tZGF0ZS1pbnB1dCcpO1xuICAgIHRvZG9JdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWlucHV0Jyk7XG4gICAgaW5wdXRDb250ZW50LmFwcGVuZENoaWxkKHRvZG9JdGVtRHVlRGF0ZSk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGlucHV0Q29udGVudCk7XG5cbiAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlIaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5SGlnaExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5LWhpZ2gnKTtcbiAgICBwcmlvcml0eUhpZ2hMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcpO1xuICAgIHByaW9yaXR5SGlnaExhYmVsLnRleHRDb250ZW50ID0gJ0hpZ2ggUHJpb3JpdHknO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaExhYmVsKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TWVkaXVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TWVkaXVtTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHktbWVkaXVtJyk7XG4gICAgcHJpb3JpdHlNZWRpdW1MYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcpO1xuICAgIHByaW9yaXR5TWVkaXVtTGFiZWwudGV4dENvbnRlbnQgPSAnTWVkaXVtIFByaW9yaXR5JztcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eU1lZGl1bUxhYmVsKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TG93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TG93TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHktbG93Jyk7XG4gICAgcHJpb3JpdHlMb3dMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcpO1xuICAgIHByaW9yaXR5TG93TGFiZWwudGV4dENvbnRlbnQgPSAnTG93IFByaW9yaXR5JztcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxvd0xhYmVsKTtcblxuICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIHByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1oaWdoJyk7XG4gICAgcHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCBwcmlvcml0eScpO1xuICAgIHByaW9yaXR5SGlnaC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcpO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaCk7XG5cbiAgICBjb25zdCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgcHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1tZWRpdW0nKTtcbiAgICBwcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bSBwcmlvcml0eScpO1xuICAgIHByaW9yaXR5TWVkaXVtLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsJyk7XG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlNZWRpdW0pO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIHByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgIHByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktbG93Jyk7XG4gICAgcHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cgcHJpb3JpdHknKTtcbiAgICBwcmlvcml0eUxvdy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcpO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TG93KTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xuXG4gICAgY29uc3QgYnRuU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuU3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuLXN1Ym1pdCcpO1xuICAgIGJ0blN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idG4nKTtcbiAgICBidG5TdWJtaXQudGV4dENvbnRlbnQgPSAnRW50ZXInO1xuXG4gICAgY29uc3QgYnRuQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuQ2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuLWNhbmNlbCcpO1xuICAgIGJ0bkNhbmNlbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idG4nKTtcbiAgICBidG5DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1idG4tY29udGFpbmVyJyk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0blN1Ym1pdCk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNhbmNlbCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4gICAgYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobW9kYWwpO1xuICAgICAgLy9tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbGV0IHByaW9yaXR5U2VsZWN0aW9uO1xuICAgICAgbGV0IHByaW9yaXR5T3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdwcmlvcml0eScpO1xuXG4gICAgaWYocHJpb3JpdHlIaWdoLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICBwcmlvcml0eVNlbGVjdGlvbiA9IHByaW9yaXR5SGlnaC52YWx1ZTtcbiAgICB9IGVsc2UgaWYocHJpb3JpdHlNZWRpdW0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBwcmlvcml0eVNlbGVjdGlvbiA9IHByaW9yaXR5TWVkaXVtLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0aW9uID0gcHJpb3JpdHlMb3cudmFsdWU7XG4gICAgfVxuXG4gICAgICBUb2RvTW9kdWxlLnNhdmVJdGVtVG9TdG9yYWdlKHRvZG9JdGVtVGl0bGUudmFsdWUsIHRvZG9JdGVtRGVzY3JpcHRpb24udmFsdWUsIHRvZG9JdGVtRHVlRGF0ZS52YWx1ZSwgcHJpb3JpdHlTZWxlY3Rpb24sIHByb2plY3RLZXkpXG4gICAgICAvL2NvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0LWNvbnRhaW5lcicpO1xuICAgICAgLy9pdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRUb2RvQ2FyZCh0b2RvSXRlbVRpdGxlLnZhbHVlLCB0b2RvSXRlbURlc2NyaXB0aW9uLnZhbHVlLCB0b2RvSXRlbUR1ZURhdGUudmFsdWUsIHByaW9yaXR5U2VsZWN0aW9uLCBwcm9qZWN0S2V5KSlcbiAgICAgIGNvbnN0IGl0ZW1zID0gVG9kb01vZHVsZS5sb2FkUHJvamVjdEl0ZW1zKHByb2plY3RLZXkpO1xuICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKCk7XG4gICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVsYXRlVG9kb0l0ZW1zKGl0ZW1zKSk7XG4gICAgfSk7XG5cbiAgICBidG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChtb2RhbCk7XG4gICAgICAvL21vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSkgIFxuICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgcmV0dXJuIG1vZGFsO1xuICB9XG5cbiAgZXhwb3J0IHtjcmVhdGVUb2RvSXRlbUlucHV0fTsiLCJjb25zdCBFeGNlcHRpb25Nb2R1bGUgPSAoZnVuY3Rpb24oKSB7XG5cbmNvbnN0IGlzRW1wdHkgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gaW5wdXQgPT09IG51bGwgfHwgaW5wdXQubWF0Y2goL14gKiQvKSAhPT0gbnVsbDtcbn1cblxucmV0dXJuIHtcbiAgICBpc0VtcHR5XG59XG5cbn0pKCk7XG5cbmV4cG9ydCB7RXhjZXB0aW9uTW9kdWxlfSIsImltcG9ydCB7IHBvcHVsYXRlUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0LWxpc3QtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBQcm9qZWN0TW9kdWxlIH0gZnJvbSBcIi4vcHJvamVjdC1tb2R1bGVcIjtcblxuXG5mdW5jdGlvbiBpbml0UHJvamVjdHMoKSB7XG4gICAgLy93aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgbGV0IHByb2plY3RzID0gUHJvamVjdE1vZHVsZS5sb2FkUHJvamVjdHNGcm9tU3RvcmFnZSgpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChwb3B1bGF0ZVByb2plY3RzKHByb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RDb250YWluZXIoKSB7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGxpc3RDb250YWluZXIpO1xuICB9XG5cbmV4cG9ydCB7aW5pdFByb2plY3RzLCByZW1vdmVQcm9qZWN0Q29udGFpbmVyfSIsImltcG9ydCB7IFRvZG9JdGVtS2V5IH0gZnJvbSBcIi4vdG9kby1pdGVtLW5ld1wiO1xuaW1wb3J0IHsgVG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvaXRlbVwiO1xuXG5jbGFzcyBUb2RvSXRlbUxpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudG9kb0l0ZW1zID0gW107XG4gICAgfVxuXG4gICAgbmV3VG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwga2V5KXtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kb0l0ZW1LZXkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwga2V5KVxuICAgICAgICB0aGlzLnRvZG9JdGVtcy5wdXNoKHRvZG8pO1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9XG5cbiAgICBnZXQgYWxsVG9kb0l0ZW1zKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9JdGVtcztcbiAgICB9XG5cbiAgICBnZXQgbGFzdEl0ZW1UaXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvSXRlbXMuYXQodGhpcy50b2RvSXRlbXMubGVuZ3RoIC0gMSkudGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0IGxhc3RJdGVtRGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0l0ZW1zLmF0KHRoaXMudG9kb0l0ZW1zLmxlbmd0aCAtIDEpLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldCBsYXN0SXRlbUR1ZURhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0l0ZW1zLmF0KHRoaXMudG9kb0l0ZW1zLmxlbmd0aCAtIDEpLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGxhc3RJdGVtUHJpb3JpdHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0l0ZW1zLmF0KHRoaXMudG9kb0l0ZW1zLmxlbmd0aCAtIDEpLnByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCBsYXN0SXRlbUtleSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9JdGVtcy5hdCh0aGlzLnRvZG9JdGVtcy5sZW5ndGggLSAxKS5rZXk7XG4gICAgfVxuXG4gICAgaXRlbUF0SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0l0ZW1zLmF0KGluZGV4KTtcbiAgICB9XG5cbiAgICBpdGVtQXRJbmRleFRpdGxlKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9JdGVtcy5hdChpbmRleCkudGl0bGU7XG4gICAgfVxuXG4gICAgaXRlbUF0SW5kZXhEZXNjcmlwdGlvbihpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvSXRlbXMuYXQoaW5kZXgpLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGl0ZW1BdEluZGV4RHVlRGF0ZShpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvSXRlbXMuYXQoaW5kZXgpLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgaXRlbUF0SW5kZXhQcmlvcml0eShpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvSXRlbXMuYXQoaW5kZXgpLnByaW9yaXR5O1xuICAgIH1cblxuICAgIGl0ZW1BdEluZGV4S2V5KGluZGV4KSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0l0ZW1zLmF0KGluZGV4KS5pdGVtS2V5O1xuICAgIH1cblxuICAgIGdldCBudW1iZXJPZlRvZG9JdGVtcygpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvSXRlbXMubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlbW92ZUl0ZW1BdChpbmRleCkge1xuICAgICAgICBpZihpbmRleCA+IC0xKXtcbiAgICAgICAgICAgIHRoaXMudG9kb0l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVJdGVtQnlLZXkoa2V5KSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRvZG9JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy50b2RvSXRlbXNbaV0uaXRlbUlkID09IGtleSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtIHJlbW92ZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW1BdChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtUb2RvSXRlbUxpc3R9OyIsImZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxuXG5leHBvcnQge3N0b3JhZ2VBdmFpbGFibGV9OyIsImltcG9ydCB7bG9hZFByb2plY3RJdGVtcywgcG9wdWxhdGVUb2RvSXRlbXN9IGZyb20gJy4vdG9kby1pdGVtLWxpc3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChuYW1lLCBrZXkpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXJkLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhcmQtbmFtZScpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgLy9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkUHJvamVjdEl0ZW1zKGtleSkpO1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBsb2FkUHJvamVjdEl0ZW1zKGtleSk7XG4gICAgICAgIHBvcHVsYXRlVG9kb0l0ZW1zKGl0ZW1zKTtcbiAgICAgICAgLy9hbGVydCgnQ0xJQ0shJyArIGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0Q2FyZH07IiwiaW1wb3J0IHsgcG9wdWxhdGVUb2RvSXRlbXMsIHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tIFwiLi90b2RvLWxpc3QtY29udGFpbmVyXCI7XG5pbXBvcnQgeyBUb2RvTW9kdWxlfSBmcm9tICcuL3RvZG8tbW9kdWxlJztcbmltcG9ydCB7Y3JlYXRlVG9kb0l0ZW1JbnB1dH0gZnJvbSAnLi9jcmVhdGUtdG9kby1pdGVtJztcblxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XG4gIFxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5udW1iZXJPZlByb2plY3RzOyBpKyspIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3RzLnByb2plY3ROYW1lQXQoaSkpKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2t5JylcbiAgICAgICAgICAgIHNlbGVjdFByb2plY3RDYXJkKHByb2plY3RzLCBjb250YWluZXIsIGkpfSk7XG5cbiAgICAgICAgaWYoaSA9PT0gcHJvamVjdHMubnVtYmVyT2ZQcm9qZWN0cyAtIDEpe1xuICAgICAgICAgICAgc2VsZWN0UHJvamVjdENhcmQocHJvamVjdHMsIGNvbnRhaW5lciwgaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChuYW1lKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2FyZC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXJkLW5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFByb2plY3RDYXJkKHByb2plY3RzLCBwYXJlbnQsIGkpIHtcbiAgICBjb25zdCBpdGVtcyA9IFRvZG9Nb2R1bGUubG9hZFByb2plY3RJdGVtcyhwcm9qZWN0cy5wcm9qZWN0S2V5QXQoaSkpO1xuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKTtcbiAgICBjb25zdCBjcmVhdGVUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tdG9kby1pbnB1dCcpO1xuICAgIGNyZWF0ZVRvZG9Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBjcmVhdGVUb2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUb2RvSXRlbUlucHV0KHByb2plY3RzLnByb2plY3RLZXlBdChpKSkpO1xuICAgICAgfSlcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVsYXRlVG9kb0l0ZW1zKGl0ZW1zKSk7XG5cbiAgICBsZXQgY2xhc3NMaXN0ID0gJ2NsYXNzTGlzdCcgaW4gcGFyZW50O1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gcGFyZW50LmNoaWxkcmVuW2pdO1xuICAgICAgICBpZihjaGlsZC50YWdOYW1lID09ICdESVYnKSB7XG4gICAgICAgICAgICBpZihjbGFzc0xpc3QpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0LWNhcmQtY29udGFpbmVyLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbGVjdGVkQ2hpbGQgPSBwYXJlbnQuY2hpbGRyZW5baV07XG4gICAgICAgIHNlbGVjdGVkQ2hpbGQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXJkLWNvbnRhaW5lci1zZWxlY3RlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtwb3B1bGF0ZVByb2plY3RzLCBjcmVhdGVQcm9qZWN0Q2FyZCwgc2VsZWN0UHJvamVjdENhcmR9IiwiaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gXCIuL3Byb2plY3QtY2FyZFwiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5cbmNvbnN0IFBST0pFQ1RfQ09VTlRfS0VZID0gJ3Byb2plY3RDb3VudCc7XG5jb25zdCBQUk9KRUNUX0tFWSA9ICdwcm9qZWN0Jztcbi8vY29uc3QgcHJvamVjdExpc3QgPSBuZXcgUHJvamVjdExpc3Q7XG4vL3Byb2plY3RMaXN0Lm5ld1Byb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcsICc5LzIwLzIyJywgJ3Byb2plY3QxJyk7XG5sZXQgcHJvamVjdENvdW50ID0gc2V0UHJvamVjdENvdW50KCk7XG5cbmZ1bmN0aW9uIHNldFByb2plY3RDb3VudCgpe1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFBST0pFQ1RfQ09VTlRfS0VZKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShQUk9KRUNUX0NPVU5UX0tFWSwgcHJvamVjdENvdW50KTtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBST0pFQ1RfQ09VTlRfS0VZKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0Q291bnQoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUFJPSkVDVF9DT1VOVF9LRVkpO1xufVxuXG5mdW5jdGlvbiBzZXR1cERlZmF1bHRQcm9qZWN0KCl7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0JywgJzkvMjAvMjInLCAncHJvamVjdDAnKTtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdDBcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xufVxuXG5mdW5jdGlvbiBzYXZlUHJvamVjdFRvU3RvcmFnZShwcm9qZWN0TmFtZSwgcHJvamVjdERhdGUpIHtcbiAgbGV0IHByb2plY3RLZXkgPSBQUk9KRUNUX0tFWSArIGdldFByb2plY3RDb3VudCgpO1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3REYXRlLCBwcm9qZWN0S2V5KTtcbiAgY29uc29sZS5sb2coJ1BST0pFQ1QgS0VZOiAnICsgcHJvamVjdEtleSk7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0S2V5LCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG4gIHByb2plY3RDb3VudCsrO1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oUFJPSkVDVF9DT1VOVF9LRVksIHByb2plY3RDb3VudCk7XG5cbiAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdC1jb250YWluZXInKTtcbiAgcHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdENhcmQocHJvamVjdE5hbWUpKTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RzRnJvbVN0b3JhZ2UoKXtcbiAgc2V0dXBEZWZhdWx0UHJvamVjdCgpO1xuICBjb25zdCBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0TGlzdCgpO1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcblxuICAgIHByb2plY3RDb3VudCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQUk9KRUNUX0NPVU5UX0tFWSk7XG4gICAgY29uc29sZS5sb2coJ3Byb2plY3QgY291bnQ6ICcgKyBwcm9qZWN0Q291bnQpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Q291bnQ7IGkrKykge1xuICAgICAgbGV0IG9iamVjdCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcgKyBpLnRvU3RyaW5nKCkpO1xuICAgICAgcHJvamVjdHMubmV3UHJvamVjdChKU09OLnBhcnNlKG9iamVjdCkuX25hbWUsIEpTT04ucGFyc2Uob2JqZWN0KS5fZGF0ZSwgSlNPTi5wYXJzZShvYmplY3QpLl9rZXkpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUb28gYmFkLCBubyBsb2NhbFN0b3JhZ2UgZm9yIHVzXG4gICAgYWxlcnQoJ05vdCBlbm91Z2ggc3RvcmFnZSBhdmFpbGFibGUuIFBsZWFzZSBjbGVhciBzb21lIHNwYWNlLicpO1xuICAgIGNvbnNvbGUubG9nKCdiYWQnKTtcbiAgfVxuICByZXR1cm4gcHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIGxvYWRMYXN0UHJvamVjdCgpIHtcbiAgbGV0IGpzb25PYmplY3QgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUFJPSkVDVCArIGdldFByb2plY3RDb3VudCgpLnRvU3RyaW5nKCkpO1xuICBsZXQgbGFzdFByb2plY3QgPSBuZXcgUHJvamVjdChKU09OLnBhcnNlKGpzb25PYmplY3QpLl9uYW1lLCBKU09OLnBhcnNlKGpzb25PYmplY3QpLl9kYXRlLCBKU09OLnBhcnNlKGpzb25PYmplY3QpLl9rZXkpO1xuICByZXR1cm4gbGFzdFByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHMocHJvamVjdHMpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XG5cbiAgZm9yKGxldCBpID0gMDsgaTwgcHJvamVjdHMubnVtYmVyT2ZQcm9qZWN0czsgaSsrKSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHMucHJvamVjdE5hbWVBdChpKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDYXJkKFxuICAgICAgcHJvamVjdHMucHJvamVjdE5hbWVBdChpKSwgcHJvamVjdHMucHJvamVjdEtleUF0KGkpKSkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KHByb2plY3RzLnByb2plY3RLZXlBdChpKSk7XG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQge3NhdmVQcm9qZWN0VG9TdG9yYWdlLCBsb2FkUHJvamVjdHNGcm9tU3RvcmFnZSwgcG9wdWxhdGVQcm9qZWN0c307IiwiaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gXCIuL3Byb2plY3QtY2FyZFwiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgeyBUb2RvTW9kdWxlIH0gZnJvbSBcIi4vdG9kby1tb2R1bGVcIjtcbmltcG9ydCB7IHBvcHVsYXRlVG9kb0l0ZW1zLCByZW1vdmVBbGxDaGlsZE5vZGVzIH0gZnJvbSBcIi4vdG9kby1saXN0LWNvbnRhaW5lclwiO1xuaW1wb3J0IHtjcmVhdGVUb2RvSXRlbUlucHV0fSBmcm9tICcuL2NyZWF0ZS10b2RvLWl0ZW0nO1xuXG5jb25zdCBQcm9qZWN0TW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IFBST0pFQ1RfQ09VTlRfS0VZID0gJ3Byb2plY3RDb3VudCc7XG4gICAgY29uc3QgUFJPSkVDVF9LRVkgPSAncHJvamVjdCc7XG4gICAgbGV0IHByb2plY3RDb3VudCA9IDE7XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0Q291bnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oUFJPSkVDVF9DT1VOVF9LRVkpO1xuICAgIH1cblxuICAgICAgY29uc3QgaW5pdERlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFBST0pFQ1RfQ09VTlRfS0VZKSkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShQUk9KRUNUX0NPVU5UX0tFWSwgcHJvamVjdENvdW50KTtcbiAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQgUHJvamVjdCcsICcwOS8yMC8yMicsICdwcm9qZWN0MCcsIDIpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3QwXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgY29uc3Qgc2F2ZVByb2plY3RUb1N0b3JhZ2UgPSAocHJvamVjdE5hbWUsIHByb2plY3REYXRlKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0S2V5ID0gUFJPSkVDVF9LRVkgKyBnZXRQcm9qZWN0Q291bnQoKTtcbiAgICAgICAgY29uc3QgSU5JVElBTF9JVEVNX0NPVU5UID0gMDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0RGF0ZSwgcHJvamVjdEtleSwgSU5JVElBTF9JVEVNX0NPVU5UKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RLZXksIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbiAgICAgICAgcHJvamVjdENvdW50Kys7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShQUk9KRUNUX0NPVU5UX0tFWSwgcHJvamVjdENvdW50KTtcblxuICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdCBzYXZlZDogJyArIHByb2plY3RLZXkpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvYWRQcm9qZWN0c0Zyb21TdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0TGlzdCgpO1xuICAgICAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgICAgICBpbml0RGVmYXVsdFByb2plY3QoKTtcbiAgICAgICAgICBUb2RvTW9kdWxlLmluaXREZWZhdWx0SXRlbXMoKTtcbiAgICAgICAgICBwcm9qZWN0Q291bnQgPSBnZXRQcm9qZWN0Q291bnQoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdCBjb3VudDogJyArIHByb2plY3RDb3VudCk7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqZWN0ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBST0pFQ1RfS0VZICsgaS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0JyArIGkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBwcm9qZWN0cy5uZXdQcm9qZWN0KEpTT04ucGFyc2Uob2JqZWN0KS5fbmFtZSwgSlNPTi5wYXJzZShvYmplY3QpLl9kYXRlLCBKU09OLnBhcnNlKG9iamVjdCkuX2tleSwgSlNPTi5wYXJzZShvYmplY3QpLl9pdGVtQ291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhbGVydCgnTm90IGVub3VnaCBzdG9yYWdlIGF2YWlsYWJsZS4gUGxlYXNlIGNsZWFyIHNvbWUgc3BhY2UuJyk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2JhZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgICAgfVxuICBcbiAgICByZXR1cm4ge1xuICAgICAgICBzYXZlUHJvamVjdFRvU3RvcmFnZSwgXG4gICAgICAgIGxvYWRQcm9qZWN0c0Zyb21TdG9yYWdlLFxuICAgIH1cbiAgfSkoKTtcblxuICBleHBvcnQge1Byb2plY3RNb2R1bGV9IiwiaW1wb3J0IHsgVG9kb0l0ZW1MaXN0IH0gZnJvbSBcIi4vaXRlbS1saXN0XCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIGtleSwgaXRlbUNvdW50KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLml0ZW1Db3VudCA9IGl0ZW1Db3VudDtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBuZXcgVG9kb0l0ZW1MaXN0KClcbiAgICB9XG5cbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH07XG5cbiAgICBzZXQgZGF0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICAgIH07XG5cbiAgICBzZXQga2V5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2tleSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBrZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXk7XG4gICAgfTtcblxuICAgIHNldCBpdGVtQ291bnQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5faXRlbUNvdW50ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1Db3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1Db3VudDtcbiAgICB9XG5cbiAgICBnZXQgdG9kb0xpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvZG9MaXN0O1xuICAgIH1cblxuICAgIGFkZEl0ZW0oKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1Db3VudCsrO1xuICAgIH1cblxuICAgIGRlbGV0ZUl0ZW0oKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1Db3VudC0tO1xuICAgIH1cbn07XG5cbmNsYXNzIFByb2plY3RMaXN0IHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgfVxuXG4gICAgbmV3UHJvamVjdChuYW1lLCBkYXRlLCBrZXkpIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBkYXRlLCBrZXkpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cblxuICAgIGdldCBhbGxQcm9qZWN0cygpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgICB9XG5cbiAgICBnZXQgbnVtYmVyT2ZQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMubGVuZ3RoO1xuICAgIH1cblxuICAgIHByb2plY3RBdEluZGV4KGluZGV4KXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuYXQoaW5kZXgpO1xuICAgIH1cblxuICAgIHJlbW92ZUl0ZW1BdChpbmRleCkge1xuICAgICAgICBpZihpbmRleCA+IC0xKXtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBsYXN0UHJvamVjdE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuYXQodGhpcy5wcm9qZWN0cy5sZW5ndGggLSAxKS5uYW1lO1xuICAgIH1cblxuICAgIGdldCBsYXN0UHJvamVjdERhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuYXQodGhpcy5wcm9qZWN0cy5sZW5ndGggLSAxKS5kYXRlO1xuICAgIH1cblxuICAgIGdldCBsYXN0UHJvamVjdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5hdCh0aGlzLnByb2plY3RzLmxlbmd0aCAtMSk7XG4gICAgfVxuXG4gICAgcHJvamVjdE5hbWVBdChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5hdChpbmRleCkubmFtZTtcbiAgICB9XG5cbiAgICBwcm9qZWN0RGF0ZUF0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmF0KGluZGV4KS5kYXRlO1xuICAgIH1cblxuICAgIHByb2plY3RLZXlBdChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5hdChpbmRleCkua2V5O1xuICAgIH1cbiAgICBcbiAgICBpdGVtQ291bnRBdChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5hdChpbmRleCkuaXRlbUNvdW50O1xuICAgIH1cbn1cblxuZXhwb3J0IHtQcm9qZWN0LCBQcm9qZWN0TGlzdH07IiwiaW1wb3J0IHsgVG9kb01vZHVsZSB9IGZyb20gJy4vdG9kby1tb2R1bGUnO1xuaW1wb3J0IHsgcG9wdWxhdGVUb2RvSXRlbXMsIHJlbW92ZUFsbENoaWxkTm9kZXN9IGZyb20gJy4vdG9kby1saXN0LWNvbnRhaW5lcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZVByb21wdChpdGVtS2V5KSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kZWxldGUnKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9tcHQtZGVsZXRlLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdG9wU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcFNlY3Rpb24udGV4dENvbnRlbnQgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/JztcbiAgICB0b3BTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb21wdC1kZWxldGUtdG9wJyk7XG5cbiAgICBjb25zdCBib3R0b21TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm90dG9tU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9tcHQtZGVsZXRlLWJvdHRvbScpO1xuXG4gICAgY29uc3QgYnRuWWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuWWVzLmNsYXNzTGlzdC5hZGQoJ2J0bi1wcm9tcHQtZGVsZXRlJyk7XG4gICAgYnRuWWVzLnRleHRDb250ZW50ID0gJ1lFUyc7XG4gICAgYnRuWWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBUb2RvTW9kdWxlLmV4dHJhY3RQcm9qZWN0TmFtZShpdGVtS2V5KTtcbiAgICAgICAgICAgIFRvZG9Nb2R1bGUucmVtb3ZlSXRlbUZyb21TdG9yYWdlKGl0ZW1LZXksIHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gVG9kb01vZHVsZS5sb2FkUHJvamVjdEl0ZW1zKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1bGF0ZVRvZG9JdGVtcyhpdGVtcykpO1xuICAgIH0pXG5cbiAgICBjb25zdCBidG5ObyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bk5vLmNsYXNzTGlzdC5hZGQoJ2J0bi1wcm9tcHQtZGVsZXRlJyk7XG4gICAgYnRuTm8udGV4dENvbnRlbnQgPSAnTk8nO1xuICAgIGJ0bk5vLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9wU2VjdGlvbik7XG4gICAgYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChidG5ZZXMpO1xuICAgIGJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQoYnRuTm8pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b21TZWN0aW9uKTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHJldHVybiBtb2RhbDtcbn1cblxuZXhwb3J0IHtjcmVhdGVEZWxldGVQcm9tcHR9XG5cbiIsImltcG9ydCB7VG9kb01vZHVsZX0gZnJvbSAnLi90b2RvLW1vZHVsZSc7XG5pbXBvcnQge3BvcHVsYXRlVG9kb0l0ZW1zLCByZW1vdmVBbGxDaGlsZE5vZGVzfSBmcm9tICcuL3RvZG8tbGlzdC1jb250YWluZXInO1xuXG5mdW5jdGlvbiBjcmVhdGVFZGl0SXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpdGVtS2V5KSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pbnB1dC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhlYWRpbmcnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYm9keScpO1xuXG4gICAgY29uc3QgaW5wdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbW9kYWwtaW5wdXQtY29udGVudCcpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRvZG9UaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG8taXRlbS1pbnB1dC10aXRsZScpO1xuICAgIHRvZG9UaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICBpbnB1dENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb1RpdGxlTGFiZWwpO1xuXG4gICAgY29uc3QgdG9kb0l0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0l0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRvZG9JdGVtVGl0bGUuc2V0QXR0cmlidXRlKCdzaXplJywgJzEwJyk7XG4gICAgdG9kb0l0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8taXRlbS1pbnB1dCcpO1xuICAgIHRvZG9JdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWlucHV0Jyk7XG4gICAgdG9kb0l0ZW1UaXRsZS52YWx1ZSA9IHRpdGxlO1xuICAgIGlucHV0Q29udGVudC5hcHBlbmRDaGlsZCh0b2RvSXRlbVRpdGxlKTtcblxuICAgIGNvbnN0IHRvZG9JdGVtRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9kb0l0ZW1EZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZG8taXRlbS1pbnB1dC1kZXNjcmlwdGlvbicpO1xuICAgIHRvZG9JdGVtRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgaW5wdXRDb250ZW50LmFwcGVuZENoaWxkKHRvZG9JdGVtRGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgICBjb25zdCB0b2RvSXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvSXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdG9kb0l0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICB0b2RvSXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1pbnB1dCcpO1xuICAgIHRvZG9JdGVtRGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvbjtcbiAgICBpbnB1dENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0l0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCB0b2RvSXRlbUR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdG9kb0l0ZW1EdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgICB0b2RvSXRlbUR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgaW5wdXRDb250ZW50LmFwcGVuZENoaWxkKHRvZG9JdGVtRHVlRGF0ZUxhYmVsKTtcblxuICAgIGNvbnN0IHRvZG9JdGVtRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0l0ZW1EdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdG9kb0l0ZW1EdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1kYXRlLWlucHV0Jyk7XG4gICAgdG9kb0l0ZW1EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1pbnB1dCcpO1xuICAgIHRvZG9JdGVtRHVlRGF0ZS52YWx1ZSA9IGR1ZURhdGU7XG5cbiAgICBpbnB1dENvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0l0ZW1EdWVEYXRlKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5wdXRDb250ZW50KTtcblxuICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwcmlvcml0eUhpZ2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlIaWdoTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHktaGlnaCcpO1xuICAgIHByaW9yaXR5SGlnaExhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsJyk7XG4gICAgcHJpb3JpdHlIaWdoTGFiZWwudGV4dENvbnRlbnQgPSAnSGlnaCBQcmlvcml0eSc7XG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoTGFiZWwpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlNZWRpdW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlNZWRpdW1MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eS1tZWRpdW0nKTtcbiAgICBwcmlvcml0eU1lZGl1bUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsJyk7XG4gICAgcHJpb3JpdHlNZWRpdW1MYWJlbC50ZXh0Q29udGVudCA9ICdNZWRpdW0gUHJpb3JpdHknO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TWVkaXVtTGFiZWwpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMb3dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eS1sb3cnKTtcbiAgICBwcmlvcml0eUxvd0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsJyk7XG4gICAgcHJpb3JpdHlMb3dMYWJlbC50ZXh0Q29udGVudCA9ICdMb3cgUHJpb3JpdHknO1xuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TG93TGFiZWwpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgcHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgIHByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LWhpZ2gnKTtcbiAgICBwcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoIHByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHlIaWdoLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsJyk7XG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICBwcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LW1lZGl1bScpO1xuICAgIHByaW9yaXR5TWVkaXVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtIHByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHlNZWRpdW0uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwnKTtcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eU1lZGl1bSk7XG5cbiAgICBjb25zdCBwcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgcHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1sb3cnKTtcbiAgICBwcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdyBwcmlvcml0eScpO1xuICAgIHByaW9yaXR5TG93LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsJyk7XG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3cpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5TdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdidG4tc3VibWl0Jyk7XG4gICAgYnRuU3VibWl0LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJ0bicpO1xuICAgIGJ0blN1Ym1pdC50ZXh0Q29udGVudCA9ICdFbnRlcic7XG5cbiAgICBjb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5DYW5jZWwuc2V0QXR0cmlidXRlKCdpZCcsICdidG4tY2FuY2VsJyk7XG4gICAgYnRuQ2FuY2VsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJ0bicpO1xuICAgIGJ0bkNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJ0bi1jb250YWluZXInKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuU3VibWl0KTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ2FuY2VsKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbiAgICBsZXQgcHJpb3JpdHlPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3ByaW9yaXR5Jyk7XG5cbiAgICBjb25zb2xlLmxvZygncHJpb3JpdHk9ICcgKyBwcmlvcml0eSk7XG4gICAgaWYocHJpb3JpdHkgPT09IHByaW9yaXR5SGlnaC52YWx1ZSkge1xuICAgICAgICBwcmlvcml0eUhpZ2guY2hlY2tlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmKHByaW9yaXR5ID09PSBwcmlvcml0eU1lZGl1bS52YWx1ZSkge1xuICAgICAgICBwcmlvcml0eU1lZGl1bS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcmlvcml0eUxvdy5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBidG5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobW9kYWwpO1xuXG4gICAgICBsZXQgcHJpb3JpdHlTZWxlY3Rpb247XG5cbiAgICAgIGlmKHByaW9yaXR5SGlnaC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0aW9uID0gcHJpb3JpdHlIaWdoLnZhbHVlO1xuICAgICB9IGVsc2UgaWYocHJpb3JpdHlNZWRpdW0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgcHJpb3JpdHlTZWxlY3Rpb24gPSBwcmlvcml0eU1lZGl1bS52YWx1ZTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICAgIHByaW9yaXR5U2VsZWN0aW9uID0gcHJpb3JpdHlMb3cudmFsdWU7XG4gICAgIH1cblxuICAgICAgVG9kb01vZHVsZS5lZGl0SXRlbVRvU3RvcmFnZSh0b2RvSXRlbVRpdGxlLnZhbHVlLCB0b2RvSXRlbURlc2NyaXB0aW9uLnZhbHVlLCB0b2RvSXRlbUR1ZURhdGUudmFsdWUsIHByaW9yaXR5U2VsZWN0aW9uLCBpdGVtS2V5KVxuICAgICAgbGV0IHByb2plY3RLZXkgPSBUb2RvTW9kdWxlLmV4dHJhY3RQcm9qZWN0TmFtZShpdGVtS2V5KTtcbiAgICAgIGNvbnN0IGl0ZW1zID0gVG9kb01vZHVsZS5sb2FkUHJvamVjdEl0ZW1zKHByb2plY3RLZXkpO1xuICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKCk7XG4gICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVsYXRlVG9kb0l0ZW1zKGl0ZW1zKSk7XG4gICAgfSk7XG5cbiAgICBidG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KSAgXG4gICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cblxuICBleHBvcnQge2NyZWF0ZUVkaXRJdGVtfSIsImltcG9ydCB7IGNyZWF0ZURlbGV0ZVByb21wdCB9IGZyb20gJy4vcHJvbXB0LWRlbGV0ZS1pdGVtJztcbmltcG9ydCB7IFRvZG9JdGVtS2V5fSBmcm9tICcuL3RvZG8taXRlbS1uZXcnO1xuaW1wb3J0IHsgVG9kb01vZHVsZSB9IGZyb20gJy4vdG9kby1tb2R1bGUnO1xuXG5mdW5jdGlvbiBsb2FkVG9kb0NhcmQodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwga2V5KSB7XG4gICAgY29uc3QgbmV3VG9kb0l0ZW0gPSBuZXcgVG9kb0l0ZW1LZXkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwga2V5KTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNhcmQtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3gubmFtZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgY29uc3QgdGl0bGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDYXJkLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZC10aXRsZScpO1xuICAgIHRpdGxlQ2FyZC50ZXh0Q29udGVudCA9IG5ld1RvZG9JdGVtLnRpdGxlO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNhcmQpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb25DYXJkLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZC1kZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uQ2FyZC50ZXh0Q29udGVudCA9IG5ld1RvZG9JdGVtLmRlc2NyaXB0aW9uO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNhcmQpO1xuXG4gICAgY29uc3QgZHVlRGF0ZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlQ2FyZC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNhcmQtZHVlZGF0ZScpO1xuICAgIGR1ZURhdGVDYXJkLnRleHRDb250ZW50ID0gbmV3VG9kb0l0ZW0uZHVlRGF0ZTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNhcmQpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5Q29sb3IuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktY29sb3InKTtcbiAgICBwcmlvcml0eUNvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdldFByaW9yaXR5Q29sb3IobmV3VG9kb0l0ZW0ucHJpb3JpdHkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUNvbG9yKTtcblxuICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ljb24tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpY29uLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlZGl0SWNvbi5zcmMgPSAnLi9pbWcvZWRpdC1pY29uLnN2Zyc7XG4gICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCgnaXRlbS1pY29uJyk7XG4gICAgZWRpdENvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpY29uLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlbGV0ZUljb24uc3JjID0gJy4vaW1nL2RlbGV0ZS1pY29uLnN2Zyc7XG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWljb24nKTtcbiAgICBkZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVDb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZUljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGVkaXRJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZURlbGV0ZVByb21wdChrZXkpKTtcbiAgICB9KVxuXG59KVxuXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZUljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZWRpdEljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHlDb2xvcihwcmlvcml0eSkge1xuICAgIGlmKHByaW9yaXR5LnZhbHVlID09PSAnaGlnaCBwcmlvcml0eScpIHtcbiAgICAgICAgcmV0dXJuICdyZWQnO1xuICAgIH0gZWxzZSBpZihwcmlvcml0eS52YWx1ZSA9PT0gJ21lZGl1bSBwcmlvcml0eScpIHtcbiAgICAgICAgcmV0dXJuICd5ZWxsb3cnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnbGlnaHRncmVlbic7XG4gICAgfVxufVxuXG5leHBvcnQge2xvYWRUb2RvQ2FyZH07IiwiaW1wb3J0IHsgVG9kb0l0ZW1MaXN0IH0gZnJvbSBcIi4vaXRlbS1saXN0XCI7XG5pbXBvcnQgeyBsb2FkVG9kb0NhcmQgfSBmcm9tIFwiLi90b2RvLWl0ZW0tY2FyZFwiO1xuaW1wb3J0IHsgVG9kb0l0ZW1LZXkgfSBmcm9tICcuL3RvZG8taXRlbS1uZXcnO1xuaW1wb3J0IHsgVG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvaXRlbVwiO1xuXG5jb25zdCBJVEVNX0NPVU5UX0tFWSA9ICdpdGVtQ291bnQnO1xuY29uc3QgSVRFTV9LRVkgPSAnaXRlbSc7XG5jb25zdCBQUk9KRUNUID0gJ3Byb2plY3QnO1xubGV0IGl0ZW1Db3VudCA9IDA7XG5cbmZ1bmN0aW9uIHNldEl0ZW1Db3VudCgpe1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKElURU1fQ09VTlRfS0VZKSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShJVEVNX0NPVU5UX0tFWSwgMCk7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ3N0b3JhZ2U6ICcgKyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oSVRFTV9DT1VOVF9LRVkpKTtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKElURU1fQ09VTlRfS0VZKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93SXRlbXMoKXtcblxuICBmb3IobGV0IGk9MDsgaTxpdGVtTGlzdC5udW1iZXJPZlRvZG9JdGVtczsgaSsrKSB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRUb2RvQ2FyZChcbiAgICAgIGl0ZW1MaXN0Lml0ZW1BdEluZGV4VGl0bGUoaSksXG4gICAgICBpdGVtTGlzdC5pdGVtQXRJbmRleERlc2NyaXB0aW9uKGkpLFxuICAgICAgaXRlbUxpc3QuaXRlbUF0SW5kZXhEdWVEYXRlKGkpLFxuICAgICAgaXRlbUxpc3QuaXRlbUF0SW5kZXhQcmlvcml0eShpKSksXG4gICAgICBpdGVtTGlzdC5pdGVtQXRJbmRleElkKGkpKVxuICB9XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHNhdmVJdGVtVG9TdG9yYWdlKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgbGV0IGl0ZW1LZXkgPSBJVEVNX0tFWSArIGl0ZW1Db3VudC50b1N0cmluZygpO1xuICBjb25zdCBpdGVtID0gbmV3IFRvZG9JdGVtS2V5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGl0ZW1LZXkpO1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbUtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xuICBjb25zb2xlLmxvZygpXG4gIGl0ZW1Db3VudCsrO1xuICBjb25zb2xlLmxvZygnc2F2ZSBpdGVtIGNvdW50OiAnICsgaXRlbUNvdW50KTtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKElURU1fQ09VTlRfS0VZLCBpdGVtQ291bnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdEl0ZW1zKGtleSwgY291bnRlcikge1xuICBsZXQga2V5MSA9ICdwcm9qZWN0N2l0ZW0wJztcbiAgbGV0IGtleTIgPSAncHJvamVjdDdpdGVtMSc7XG4gIGxldCBwcm9qZWN0MEl0ZW1Db3VudCA9IDJcblxuICBjb25zdCBpdGVtcyA9IG5ldyBUb2RvSXRlbUxpc3QoKTtcbiAgbGV0IGl0ZW1LZXlBcnJheSA9IEFycmF5KCk7XG5cbiAgLypjb25zdCBpdGVtMSA9IG5ldyBUb2RvSXRlbUtleSgnVG9kYXknLCAnV2hhdCcsICc0LzEvMjInLCAnaGlnaCcsIGtleTEpO1xuICBjb25zb2xlLmxvZyhpdGVtMS5kdWVEYXRlKTtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleTEsIEpTT04uc3RyaW5naWZ5KGl0ZW0xKSk7XG5cbiAgY29uc3QgaXRlbTIgPSBuZXcgVG9kb0l0ZW1LZXkoJ015VGl0bGUyJywgJ015RGVzY3JpcHQyJywgJzQvMi8yMicsICdtZWRpdW0nLCBrZXkyKTtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleTIsIEpTT04uc3RyaW5naWZ5KGl0ZW0yKSk7Ki9cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnRlcjsgaSsrKSB7XG4gICAgLy9sZXQgb2JqZWN0ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0MCcgKyBJVEVNX0tFWSArIGkudG9TdHJpbmcoKSk7XG4gICAgbGV0IG9iamVjdCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIGl0ZW1zLm5ld1RvZG9JdGVtKEpTT04ucGFyc2Uob2JqZWN0KS5fdGl0bGUsIEpTT04ucGFyc2Uob2JqZWN0KS5fZGVzY3JpcHRpb24sIFxuICAgIEpTT04ucGFyc2Uob2JqZWN0KS5fZHVlRGF0ZSAsSlNPTi5wYXJzZShvYmplY3QpLl9wcmlvcml0eSwgSlNPTi5wYXJzZShvYmplY3QpLl9pdGVtS2V5KTtcbiAgICBjb25zb2xlLmxvZygnSVRFTSBUSVRMRTogJyArIGl0ZW1zLml0ZW1BdEluZGV4VGl0bGUoaSkpO1xuICB9XG4gIHJldHVybiBpdGVtc1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVRvZG9JdGVtcyhpdGVtcykge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdC1jb250YWluZXInKTtcbiAgY29uc29sZS5sb2coJ251bWJlciBvZiBpdGVtczogJyArIGl0ZW1zLm51bWJlck9mVG9kb0l0ZW1zKTtcbiAgZm9yKGxldCBpID0gMDsgaTwgaXRlbXMubnVtYmVyT2ZUb2RvSXRlbXM7IGkrKykge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkVG9kb0NhcmQoXG4gICAgICBpdGVtcy5pdGVtQXRJbmRleFRpdGxlKGkpLFxuICAgICAgaXRlbXMuaXRlbUF0SW5kZXhEZXNjcmlwdGlvbihpKSxcbiAgICAgIGl0ZW1zLml0ZW1BdEluZGV4RHVlRGF0ZShpKSxcbiAgICAgIGl0ZW1zLml0ZW1BdEluZGV4UHJpb3JpdHkoaSksXG4gICAgICBpdGVtcy5pdGVtQXRJbmRleEtleShpKSkpO1xuICB9XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAvL3JldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRvZG9JdGVtKGtleSkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgbWFpbi5yZXBsYWNlV2l0aChzaG93SXRlbXMoKSk7XG4gIGl0ZW1MaXN0LnJlbW92ZUl0ZW1CeUlkKGtleSk7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xufVxuXG5mdW5jdGlvbiBpbml0TGlzdCgpe1xuICBsZXQgaXRlbUxpc3QgPSBuZXcgVG9kb0l0ZW1MaXN0KCk7XG59XG5cbmV4cG9ydCB7aW5pdExpc3QsIHNob3dJdGVtcywgc2F2ZUl0ZW1Ub1N0b3JhZ2UsIGxvYWRQcm9qZWN0SXRlbXMscG9wdWxhdGVUb2RvSXRlbXMsIHJlbW92ZVRvZG9JdGVtfTsiLCJjbGFzcyBUb2RvSXRlbUtleSB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDaGVja2VkLCBpdGVtS2V5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gaXNDaGVja2VkO1xuICAgICAgICB0aGlzLml0ZW1LZXkgPSBpdGVtS2V5O1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldCBkdWVEYXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0IGlzQ2hlY2tlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pc0NoZWNrZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaXNDaGVja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNDaGVja2VkO1xuICAgIH1cblxuICAgIHNldCBpdGVtS2V5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1LZXkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaXRlbUtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1LZXk7XG4gICAgfVxufVxuXG5leHBvcnQge1RvZG9JdGVtS2V5fTsiLCJpbXBvcnQgeyBUb2RvSXRlbUtleX0gZnJvbSAnLi90b2RvLWl0ZW0tbmV3JztcbmltcG9ydCB7IFRvZG9Nb2R1bGUgfSBmcm9tICcuL3RvZG8tbW9kdWxlJztcbmltcG9ydCB7Y3JlYXRlRGVsZXRlUHJvbXB0fSBmcm9tICcuL3Byb21wdC1kZWxldGUtaXRlbSc7XG5pbXBvcnQgeyBjcmVhdGVFZGl0SXRlbSB9IGZyb20gJy4vcHJvbXB0LWVkaXQtaXRlbSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9MaXN0Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QtY29udGFpbmVyJyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVUb2RvSXRlbXMoaXRlbXMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QtY29udGFpbmVyJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaTwgaXRlbXMubnVtYmVyT2ZUb2RvSXRlbXM7IGkrKykge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRUb2RvQ2FyZChcbiAgICAgICAgaXRlbXMuaXRlbUF0SW5kZXhUaXRsZShpKSxcbiAgICAgICAgaXRlbXMuaXRlbUF0SW5kZXhEZXNjcmlwdGlvbihpKSxcbiAgICAgICAgaXRlbXMuaXRlbUF0SW5kZXhEdWVEYXRlKGkpLFxuICAgICAgICBpdGVtcy5pdGVtQXRJbmRleFByaW9yaXR5KGkpLFxuICAgICAgICBpdGVtcy5pdGVtQXRJbmRleEtleShpKSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnUE9QVUxBVEU6ICcgKyBpdGVtcy5pdGVtQXRJbmRleEtleShpKSlcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdC1jb250YWluZXInKTtcbiAgICBpZihjb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPiAwKXtcbiAgICAgICAgd2hpbGUoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkVG9kb0NhcmQodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwga2V5KSB7XG4gICAgY29uc3QgbmV3VG9kb0l0ZW0gPSBuZXcgVG9kb0l0ZW1LZXkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwga2V5KTtcblxuICAgIGNvbnNvbGUubG9nKCdUT0RPOiAnICsga2V5KVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZC1jb250YWluZXInKTtcblxuICAgIC8qY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94Lm5hbWUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTsqL1xuXG4gICAgY29uc3QgQ0hFQ0tCT1hfQ0hFQ0tFRCA9ICcuLi9kaXN0L2ltZy9jaGVja19ib3hfY2hlY2tlZC5zdmcnO1xuICAgIGNvbnN0IENIRUNLQk9YX1VOQ0hFQ0tFRCA9ICcuLi9kaXN0L2ltZy9jaGVja19ib3hfYmxhbmsuc3ZnJztcblxuICAgIGxldCBpc0NoZWNrZWQgPSBmYWxzZTtcblxuICAgIC8qY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGVja2JveC5zcmMgPSBDSEVDS0JPWF9VTkNIRUNLRUQ7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3hfdW5jaGVja2VkJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTsqL1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveF91bmNoZWNrZWQnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgY29uc3QgdGl0bGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDYXJkLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZC10aXRsZScpO1xuICAgIHRpdGxlQ2FyZC50ZXh0Q29udGVudCA9IG5ld1RvZG9JdGVtLnRpdGxlO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNhcmQpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1jb250YWluZXInKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb25IZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWhlYWRpbmcnKTtcbiAgICBkZXNjcmlwdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSGVhZGluZylcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uQ2FyZC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNhcmQtZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbkNhcmQudGV4dENvbnRlbnQgPSBuZXdUb2RvSXRlbS5kZXNjcmlwdGlvbjtcbiAgICAvL2Rlc2NyaXB0aW9uQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ2FyZCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpXG5cbiAgICBjb25zdCBkdWVEYXRlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVDYXJkLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZC1kdWVkYXRlJyk7XG4gICAgZHVlRGF0ZUNhcmQudGV4dENvbnRlbnQgPSBmb3JtYXREYXRlKG5ld1RvZG9JdGVtLmR1ZURhdGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlQ2FyZCk7XG5cbiAgICBjb25zdCBwcmlvcml0eUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHlDb2xvci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1jb2xvcicpO1xuICAgIHByaW9yaXR5Q29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2V0UHJpb3JpdHlDb2xvcihuZXdUb2RvSXRlbS5wcmlvcml0eSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5Q29sb3IpO1xuXG4gICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaWNvbi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGVkaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ljb24tY29udGFpbmVyJyk7XG4gICAgZWRpdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtaWNvbicpO1xuICAgIGNvbnN0IGVkaXRUb29sVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGVkaXRUb29sVGlwLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGVkaXRUb29sVGlwLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAtZWRpdCcpO1xuICAgIGVkaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdFRvb2xUaXApO1xuXG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlZGl0SWNvbi5zcmMgPSAnLi9pbWcvZWRpdC1pY29uLnN2Zyc7XG4gICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCgnaXRlbS1pY29uJyk7XG4gICAgZWRpdENvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpY29uLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlbGV0ZUljb24uc3JjID0gJy4vaW1nL2RlbGV0ZS1pY29uLnN2Zyc7XG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWljb24nKTtcbiAgICBkZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVDb250YWluZXIpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBlZGl0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVkaXRJdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGtleSkpO1xuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tY2FyZC1zZWxlY3RlZCcpKXtcbiAgICAgICAgICAgIGRlbGV0ZUljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGVkaXRJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZG8tY2FyZC1zZWxlY3RlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZC1zZWxlY3RlZCcpXG4gICAgICAgICAgICBkZWxldGVJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgZWRpdEljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoaXNDaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tib3hfdW5jaGVja2VkJylcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94X2NoZWNrZWQnKVxuICAgICAgICAgICAgaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmKGlzQ2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tib3hfY2hlY2tlZCcpXG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveF91bmNoZWNrZWQnKVxuICAgICAgICAgICAgaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZGVsZXRlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEZWxldGVQcm9tcHQoa2V5KSk7XG4gICAgICAgIC8qbGV0IHByb2plY3ROYW1lID0gVG9kb01vZHVsZS5leHRyYWN0UHJvamVjdE5hbWUoa2V5KTtcbiAgICAgICAgICAgIFRvZG9Nb2R1bGUucmVtb3ZlSXRlbUZyb21TdG9yYWdlKGtleSwgcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBUb2RvTW9kdWxlLmxvYWRQcm9qZWN0SXRlbXMocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcygpO1xuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVsYXRlVG9kb0l0ZW1zKGl0ZW1zKSk7Ki9cbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIC8qZGVsZXRlSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZWRpdEljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7Ki9cbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIC8qZGVsZXRlSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBlZGl0SWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyovXG4gICAgfSlcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUoaXRlbSkge1xuICAgIGl0ZW0ucGFyZW50Tm9kZS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHlDb2xvcihwcmlvcml0eSkge1xuICAgIGlmKHByaW9yaXR5ID09ICdoaWdoIHByaW9yaXR5Jykge1xuICAgICAgICByZXR1cm4gJ3JlZCc7XG4gICAgfSBlbHNlIGlmKHByaW9yaXR5ID09ICdtZWRpdW0gcHJpb3JpdHknKSB7XG4gICAgICAgIHJldHVybiAneWVsbG93JztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2xpZ2h0Z3JlZW4nO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgbGV0IHJlcyA9IGRhdGUuc3BsaXQoJy0nKTtcbiAgICBsZXQgeWVhciA9IHJlc1swXTtcbiAgICBsZXQgbW9udGggPSByZXNbMV07XG4gICAgbGV0IGRheSA9IHJlc1syXTtcbiAgICByZXR1cm4gbW9udGggKyAnLycgKyBkYXkgKyAnLycgKyB5ZWFyO1xufVxuXG5leHBvcnQge2NyZWF0ZVRvZG9MaXN0Q29udGFpbmVyLCBwb3B1bGF0ZVRvZG9JdGVtcywgcmVtb3ZlQWxsQ2hpbGROb2RlcywgbG9hZFRvZG9DYXJkfSIsImltcG9ydCB7IFRvZG9JdGVtTGlzdCB9IGZyb20gXCIuL2l0ZW0tbGlzdFwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRvZG9JdGVtS2V5IH0gZnJvbSBcIi4vdG9kby1pdGVtLW5ld1wiO1xuXG5jb25zdCBUb2RvTW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgSVRFTV9DT1VOVF9LRVkgPSAnaXRlbUNvdW50ZXInO1xuICAgIGNvbnN0IElURU1fS0VZID0gJ2l0ZW0nO1xuICAgIGNvbnN0IFBST0pFQ1QgPSAncHJvamVjdCc7XG4gICAgbGV0IGl0ZW1Db3VudDtcblxuICAgIGNvbnN0IGluaXREZWZhdWx0SXRlbXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRJdGVtMSA9IG5ldyBUb2RvSXRlbUtleSgnVGl0bGUxJywgJ2Rlc2MxJywgJzAxLzExLzIwMjInLCAnaGlnaCcsIDEsICdwcm9qZWN0MGl0ZW0wJyk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRJdGVtMiA9IG5ldyBUb2RvSXRlbUtleSgnVGl0bGUyJywgJ2Rlc2MyJywgJzAyLzIyLzIwMjInLCAnbG93JywgMCwgJ3Byb2plY3QwaXRlbTEnKTtcblxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3QwaXRlbTAnLCBKU09OLnN0cmluZ2lmeShkZWZhdWx0SXRlbTEpKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0MGl0ZW0xJywgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdEl0ZW0yKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SXRlbUNvdW50ID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKElURU1fQ09VTlRfS0VZKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKElURU1fQ09VTlRfS0VZLCAyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOTyBJVEVNIENPVU5UIScpO1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXRSBIQVZFIElURU0gQ09VTlQ6ICcgKyB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oSVRFTV9DT1VOVF9LRVkpKTtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oSVRFTV9DT1VOVF9LRVkpO1xuICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzYXZlSXRlbVRvU3RvcmFnZSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0S2V5KSA9PiB7XG4gICAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdEtleSkpIHtcbiAgICAgICAgbGV0IG9iamVjdCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0S2V5KTtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChKU09OLnBhcnNlKG9iamVjdCkuX25hbWUsIEpTT04ucGFyc2Uob2JqZWN0KS5fZGF0ZSwgSlNPTi5wYXJzZShvYmplY3QpLl9rZXksIEpTT04ucGFyc2Uob2JqZWN0KS5faXRlbUNvdW50KTtcblxuICAgICAgICBsZXQgaXRlbUtleSA9IHByb2plY3RLZXkgKyBJVEVNX0tFWSArIHByb2plY3QuaXRlbUNvdW50LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJVEVNIEtFWSA9ICcgKyBpdGVtS2V5KTtcbiAgICAgICAgcHJvamVjdC5hZGRJdGVtKCk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0S2V5LCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgVG9kb0l0ZW1LZXkodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgaXRlbUtleSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtS2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShJVEVNX0NPVU5UX0tFWSwgaXRlbUNvdW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBnZXRJdGVtS2V5ID0gKGtleSkgPT4ge1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlZGl0SXRlbVRvU3RvcmFnZSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBpdGVtS2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgVG9kb0l0ZW1LZXkodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgaXRlbUtleSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtS2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbW92ZUl0ZW1Gcm9tU3RvcmFnZSA9IChrZXksIHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdLRVlLRVlLRVkgPSAnICsga2V5KVxuICAgICAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKSB7XG4gICAgICAgICAgbGV0IG9iamVjdCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChKU09OLnBhcnNlKG9iamVjdCkuX25hbWUsIEpTT04ucGFyc2Uob2JqZWN0KS5fZGF0ZSwgSlNPTi5wYXJzZShvYmplY3QpLl9rZXksIEpTT04ucGFyc2Uob2JqZWN0KS5faXRlbUNvdW50KTtcbiAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdCBuYW1lOiAnKyBwcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgIC8vcHJvamVjdC5kZWxldGVJdGVtKCk7XG4gICAgICAgICAgLy93aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbiAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY291bnQ6ICcgKyBwcm9qZWN0Lml0ZW1Db3VudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBleHRyYWN0UHJvamVjdE5hbWUgPSAoa2V5KSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9ICcnO1xuICAgICAgICAgIGZvcihsZXQgaSA9IDc7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGtleVtpXSAhPSAnaScpIHtcbiAgICAgICAgICAgICAgcHJvamVjdE5hbWUgKz0ga2V5W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoa2V5W2ldID09PSAnaScpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHByb2plY3ROYW1lID0gUFJPSkVDVCArIHByb2plY3ROYW1lLnRvU3RyaW5nKCk7XG4gICAgICAgICAgcmV0dXJuIHByb2plY3ROYW1lO1xuICAgICAgfVxuXG4gICAgY29uc3QgbG9hZFByb2plY3RJdGVtcyA9IChwcm9qZWN0S2V5KSA9PiB7XG4gICAgICBjb25zdCBpdGVtcyA9IG5ldyBUb2RvSXRlbUxpc3QoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdsb2FkUHJvamVjdEl0ZW1zIHByb2plY3RLZXk6ICcgKyBwcm9qZWN0S2V5KTtcbiAgICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0S2V5KSkge1xuICAgICAgICBsZXQgb2JqZWN0ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RLZXkpO1xuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KEpTT04ucGFyc2Uob2JqZWN0KS5fbmFtZSwgSlNPTi5wYXJzZShvYmplY3QpLl9kYXRlLCBKU09OLnBhcnNlKG9iamVjdCkuX2tleSwgSlNPTi5wYXJzZShvYmplY3QpLl9pdGVtQ291bnQpO1xuICAgICAgICBsZXQgbnVtSXRlbXMgPSBwcm9qZWN0Lml0ZW1Db3VudDtcbiAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gY291bnQgPSAnICsgbnVtSXRlbXMpO1xuICAgICAgICBjb25zdCBpdGVtS2V5ID0gcHJvamVjdEtleSArIElURU1fS0VZO1xuICAgICAgICBsZXQgY3VycmVudENvdW50ID0gMDtcbiAgICAgICAgaWYobnVtSXRlbXMgPiAwKSB7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG51bUl0ZW1zOyBpKyspIHtcbiAgICAgICAgICAgIChjb25zb2xlLmxvZygnU1VSRScgKyBpdGVtS2V5ICsgaSkpO1xuICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbUtleSArIGkudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgbGV0IG9iamVjdCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtS2V5ICsgaS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgaXRlbXMubmV3VG9kb0l0ZW0oSlNPTi5wYXJzZShvYmplY3QpLl90aXRsZSwgSlNPTi5wYXJzZShvYmplY3QpLl9kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgIEpTT04ucGFyc2Uob2JqZWN0KS5fZHVlRGF0ZSwgSlNPTi5wYXJzZShvYmplY3QpLl9wcmlvcml0eSwgSlNPTi5wYXJzZShvYmplY3QpLl9pdGVtS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtc1xuICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdERlZmF1bHRJdGVtcyxcbiAgICAgICAgc2V0SXRlbUNvdW50LFxuICAgICAgICBzYXZlSXRlbVRvU3RvcmFnZSxcbiAgICAgICAgZ2V0SXRlbUtleSxcbiAgICAgICAgZWRpdEl0ZW1Ub1N0b3JhZ2UsXG4gICAgICAgIHJlbW92ZUl0ZW1Gcm9tU3RvcmFnZSxcbiAgICAgICAgZXh0cmFjdFByb2plY3ROYW1lLFxuICAgICAgICBsb2FkUHJvamVjdEl0ZW1zXG4gICAgICB9XG59KSgpO1xuXG5leHBvcnQge1RvZG9Nb2R1bGV9IiwiaW1wb3J0IHsgbG9hZFRvZG9DYXJkIH0gZnJvbSBcIi4vdG9kby1pdGVtLWNhcmRcIjtcblxuY2xhc3MgVG9kb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGl0ZW1JZCwgcHJvamVjdElkKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXRlbUlkID0gaXRlbUlkO1xuICAgICAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZDtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldCBpdGVtSWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5faXRlbUlkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1JZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1JZDtcbiAgICB9XG5cbiAgICBzZXQgcHJvamVjdElkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Byb2plY3RJZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBwcm9qZWN0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0SWQ7XG4gICAgfVxufVxuXG5leHBvcnQge1RvZG9JdGVtfTsiLCJpbXBvcnQge2NyZWF0ZVByb2plY3RJbnB1dH0gZnJvbSAnLi9jcmVhdGUtbmV3LXByb2plY3QnO1xuaW1wb3J0IHtQcm9qZWN0TW9kdWxlfSBmcm9tICcuL3Byb2plY3QtbW9kdWxlJztcbmltcG9ydCB7cG9wdWxhdGVQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0LWxpc3QtY29udGFpbmVyJztcbmltcG9ydCB7Y3JlYXRlQ29sdW1uTGFiZWxzfSBmcm9tICcuL2NyZWF0ZS1jb2x1bW4tbGFiZWwnO1xuaW1wb3J0IHtjcmVhdGVUb2RvTGlzdENvbnRhaW5lcn0gZnJvbSAnLi90b2RvLWxpc3QtY29udGFpbmVyJztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgXG4gICAgY29uc3QgcGFnZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHBhZ2VOYW1lLmNsYXNzTGlzdC5hZGQoJ3BhZ2UtbmFtZScpO1xuICAgIHBhZ2VOYW1lLnRleHRDb250ZW50ID0gJ1RvIERvIExpc3QnO1xuICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocGFnZU5hbWUpO1xuICAgIHJldHVybiBoZWFkZXI7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICBjb25zdCBpdGVtUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtUHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtdGl0bGUnKTtcbiAgICBpdGVtUHJvamVjdHMudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIG5hdi5hcHBlbmRDaGlsZChpdGVtUHJvamVjdHMpO1xuXG4gICAgY29uc3QgYnRuTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bk5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnYnRuLW5ldy1wcm9qZWN0Jyk7XG4gICAgYnRuTmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICdDcmVhdGUgTmV3IFByb2plY3QnO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGJ0bk5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RJbnB1dCgpKTtcbiAgICB9KVxuICAgIG5hdi5hcHBlbmRDaGlsZChidG5OZXdQcm9qZWN0KTtcblxuICAgIHJldHVybiBuYXY7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU5ld1RvZG8oKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb2x1bW5MYWJlbHMoKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVUb2RvTGlzdENvbnRhaW5lcigpKTtcbiAgICByZXR1cm4gbWFpbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1RvZG8oKSB7XG4gICAgY29uc3Qgb3BlblRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wZW5Ub2RvSW5wdXQuY2xhc3NMaXN0LmFkZCgnb3Blbi10b2RvLWlucHV0Jyk7XG4gICAgb3BlblRvZG9JbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG9wZW5Ub2RvSW5wdXQudGV4dENvbnRlbnQgPSAnTmV3IFRvLWRvIFRhc2snO1xuICAgIC8qb3BlblRvZG9JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0l0ZW1JbnB1dCgpKTtcbiAgICB9KSovXG4gICAgcmV0dXJuIG9wZW5Ub2RvSW5wdXQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVCb2R5Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2R5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvZHktY29udGFpbmVyJyk7XG4gICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIHJldHVybiBib2R5Q29udGFpbmVyO1xuICB9XG4gIFxuICBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQWxsZW4gRGFuaWVsc2A7XG4gIFxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbGxlbjExMjQxXCI7XG4gIFxuICAgIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYWJcIik7XG4gICAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtZ2l0aHViXCIpO1xuICBcbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgXG4gICAgcmV0dXJuIGZvb3RlcjtcbiAgfVxuXG5mdW5jdGlvbiBpbml0V2Vic2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCb2R5Q29udGFpbmVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBpbml0V2Vic2l0ZTsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLmRhdGVwaWNrZXI9dCgpOmUuZGF0ZXBpY2tlcj10KCl9KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihhKXtpZih0W2FdKXJldHVybiB0W2FdLmV4cG9ydHM7dmFyIHI9dFthXT17aTphLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbYV0uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsbiksci5sPSEwLHIuZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxhKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6YX0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBhPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKGEpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgciBpbiBlKW4uZChhLHIsZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxyKSk7cmV0dXJuIGF9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCk7dmFyIGE9W10scj1bXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0saT1bXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sbz17dDpcInRvcFwiLHI6XCJyaWdodFwiLGI6XCJib3R0b21cIixsOlwibGVmdFwiLGM6XCJjZW50ZXJlZFwifTtmdW5jdGlvbiBzKCl7fXZhciBsPVtcImNsaWNrXCIsXCJmb2N1c2luXCIsXCJrZXlkb3duXCIsXCJpbnB1dFwiXTtmdW5jdGlvbiBkKGUpe2wuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZS5hZGRFdmVudExpc3RlbmVyKHQsZT09PWRvY3VtZW50P0w6WSl9KSl9ZnVuY3Rpb24gYyhlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lLm1hcChjKTpcIltvYmplY3QgT2JqZWN0XVwiPT09eChlKT9PYmplY3Qua2V5cyhlKS5yZWR1Y2UoKGZ1bmN0aW9uKHQsbil7cmV0dXJuIHRbbl09YyhlW25dKSx0fSkse30pOmV9ZnVuY3Rpb24gdShlLHQpe3ZhciBuPWUuY2FsZW5kYXIucXVlcnlTZWxlY3RvcihcIi5xcy1vdmVybGF5XCIpLGE9biYmIW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwicXMtaGlkZGVuXCIpO3Q9dHx8bmV3IERhdGUoZS5jdXJyZW50WWVhcixlLmN1cnJlbnRNb250aCksZS5jYWxlbmRhci5pbm5lckhUTUw9W2godCxlLGEpLGYodCxlLGEpLHYoZSxhKV0uam9pbihcIlwiKSxhJiZ3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe00oITAsZSl9KSl9ZnVuY3Rpb24gaChlLHQsbil7cmV0dXJuWyc8ZGl2IGNsYXNzPVwicXMtY29udHJvbHMnKyhuP1wiIHFzLWJsdXJcIjpcIlwiKSsnXCI+JywnPGRpdiBjbGFzcz1cInFzLWFycm93IHFzLWxlZnRcIj48L2Rpdj4nLCc8ZGl2IGNsYXNzPVwicXMtbW9udGgteWVhclwiPicsJzxzcGFuIGNsYXNzPVwicXMtbW9udGhcIj4nK3QubW9udGhzW2UuZ2V0TW9udGgoKV0rXCI8L3NwYW4+XCIsJzxzcGFuIGNsYXNzPVwicXMteWVhclwiPicrZS5nZXRGdWxsWWVhcigpK1wiPC9zcGFuPlwiLFwiPC9kaXY+XCIsJzxkaXYgY2xhc3M9XCJxcy1hcnJvdyBxcy1yaWdodFwiPjwvZGl2PicsXCI8L2Rpdj5cIl0uam9pbihcIlwiKX1mdW5jdGlvbiBmKGUsdCxuKXt2YXIgYT10LmN1cnJlbnRNb250aCxyPXQuY3VycmVudFllYXIsaT10LmRhdGVTZWxlY3RlZCxvPXQubWF4RGF0ZSxzPXQubWluRGF0ZSxsPXQuc2hvd0FsbERhdGVzLGQ9dC5kYXlzLGM9dC5kaXNhYmxlZERhdGVzLHU9dC5zdGFydERheSxoPXQud2Vla2VuZEluZGljZXMsZj10LmV2ZW50cyx2PXQuZ2V0UmFuZ2U/dC5nZXRSYW5nZSgpOnt9LG09K3Yuc3RhcnQseT0rdi5lbmQscD1nKG5ldyBEYXRlKGUpLnNldERhdGUoMSkpLHc9cC5nZXREYXkoKS11LEQ9dzwwPzc6MDtwLnNldE1vbnRoKHAuZ2V0TW9udGgoKSsxKSxwLnNldERhdGUoMCk7dmFyIGI9cC5nZXREYXRlKCkscT1bXSxTPUQrNyooKHcrYikvN3wwKTtTKz0odytiKSU3Pzc6MDtmb3IodmFyIE09MTtNPD1TO00rKyl7dmFyIEU9KE0tMSklNyx4PWRbRV0sQz1NLSh3Pj0wP3c6Nyt3KSxMPW5ldyBEYXRlKHIsYSxDKSxZPWZbK0xdLGo9QzwxfHxDPmIsUD1qP0M8MT8tMToxOjAsaz1qJiYhbCxPPWs/XCJcIjpMLmdldERhdGUoKSxOPStMPT0raSxfPUU9PT1oWzBdfHxFPT09aFsxXSxJPW0hPT15LEE9XCJxcy1zcXVhcmUgXCIreDtZJiYhayYmKEErPVwiIHFzLWV2ZW50XCIpLGomJihBKz1cIiBxcy1vdXRzaWRlLWN1cnJlbnQtbW9udGhcIiksIWwmJmp8fChBKz1cIiBxcy1udW1cIiksTiYmKEErPVwiIHFzLWFjdGl2ZVwiKSwoY1srTF18fHQuZGlzYWJsZXIoTCl8fF8mJnQubm9XZWVrZW5kc3x8cyYmK0w8K3N8fG8mJitMPitvKSYmIWsmJihBKz1cIiBxcy1kaXNhYmxlZFwiKSwrZyhuZXcgRGF0ZSk9PStMJiYoQSs9XCIgcXMtY3VycmVudFwiKSwrTD09PW0mJnkmJkkmJihBKz1cIiBxcy1yYW5nZS1zdGFydFwiKSwrTD5tJiYrTDx5JiYoQSs9XCIgcXMtcmFuZ2UtbWlkZGxlXCIpLCtMPT09eSYmbSYmSSYmKEErPVwiIHFzLXJhbmdlLWVuZFwiKSxrJiYoQSs9XCIgcXMtZW1wdHlcIixPPVwiXCIpLHEucHVzaCgnPGRpdiBjbGFzcz1cIicrQSsnXCIgZGF0YS1kaXJlY3Rpb249XCInK1ArJ1wiPicrTytcIjwvZGl2PlwiKX12YXIgUj1kLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuJzxkaXYgY2xhc3M9XCJxcy1zcXVhcmUgcXMtZGF5XCI+JytlK1wiPC9kaXY+XCJ9KSkuY29uY2F0KHEpO3JldHVybiBSLnVuc2hpZnQoJzxkaXYgY2xhc3M9XCJxcy1zcXVhcmVzJysobj9cIiBxcy1ibHVyXCI6XCJcIikrJ1wiPicpLFIucHVzaChcIjwvZGl2PlwiKSxSLmpvaW4oXCJcIil9ZnVuY3Rpb24gdihlLHQpe3ZhciBuPWUub3ZlcmxheVBsYWNlaG9sZGVyLGE9ZS5vdmVybGF5QnV0dG9uO3JldHVyblsnPGRpdiBjbGFzcz1cInFzLW92ZXJsYXknKyh0P1wiXCI6XCIgcXMtaGlkZGVuXCIpKydcIj4nLFwiPGRpdj5cIiwnPGlucHV0IGNsYXNzPVwicXMtb3ZlcmxheS15ZWFyXCIgcGxhY2Vob2xkZXI9XCInK24rJ1wiIGlucHV0bW9kZT1cIm51bWVyaWNcIiAvPicsJzxkaXYgY2xhc3M9XCJxcy1jbG9zZVwiPiYjMTAwMDU7PC9kaXY+JyxcIjwvZGl2PlwiLCc8ZGl2IGNsYXNzPVwicXMtb3ZlcmxheS1tb250aC1jb250YWluZXJcIj4nK2Uub3ZlcmxheU1vbnRocy5tYXAoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuJzxkaXYgY2xhc3M9XCJxcy1vdmVybGF5LW1vbnRoXCIgZGF0YS1tb250aC1udW09XCInK3QrJ1wiPicrZStcIjwvZGl2PlwifSkpLmpvaW4oXCJcIikrXCI8L2Rpdj5cIiwnPGRpdiBjbGFzcz1cInFzLXN1Ym1pdCBxcy1kaXNhYmxlZFwiPicrYStcIjwvZGl2PlwiLFwiPC9kaXY+XCJdLmpvaW4oXCJcIil9ZnVuY3Rpb24gbShlLHQsbil7dmFyIGE9dC5lbCxyPXQuY2FsZW5kYXIucXVlcnlTZWxlY3RvcihcIi5xcy1hY3RpdmVcIiksaT1lLnRleHRDb250ZW50LG89dC5zaWJsaW5nOyhhLmRpc2FibGVkfHxhLnJlYWRPbmx5KSYmdC5yZXNwZWN0RGlzYWJsZWRSZWFkT25seXx8KHQuZGF0ZVNlbGVjdGVkPW4/dm9pZCAwOm5ldyBEYXRlKHQuY3VycmVudFllYXIsdC5jdXJyZW50TW9udGgsaSksciYmci5jbGFzc0xpc3QucmVtb3ZlKFwicXMtYWN0aXZlXCIpLG58fGUuY2xhc3NMaXN0LmFkZChcInFzLWFjdGl2ZVwiKSxwKGEsdCxuKSxufHxxKHQpLG8mJih5KHtpbnN0YW5jZTp0LGRlc2VsZWN0Om59KSx0LmZpcnN0JiYhby5kYXRlU2VsZWN0ZWQmJihvLmN1cnJlbnRZZWFyPXQuY3VycmVudFllYXIsby5jdXJyZW50TW9udGg9dC5jdXJyZW50TW9udGgsby5jdXJyZW50TW9udGhOYW1lPXQuY3VycmVudE1vbnRoTmFtZSksdSh0KSx1KG8pKSx0Lm9uU2VsZWN0KHQsbj92b2lkIDA6bmV3IERhdGUodC5kYXRlU2VsZWN0ZWQpKSl9ZnVuY3Rpb24geShlKXt2YXIgdD1lLmluc3RhbmNlLmZpcnN0P2UuaW5zdGFuY2U6ZS5pbnN0YW5jZS5zaWJsaW5nLG49dC5zaWJsaW5nO3Q9PT1lLmluc3RhbmNlP2UuZGVzZWxlY3Q/KHQubWluRGF0ZT10Lm9yaWdpbmFsTWluRGF0ZSxuLm1pbkRhdGU9bi5vcmlnaW5hbE1pbkRhdGUpOm4ubWluRGF0ZT10LmRhdGVTZWxlY3RlZDplLmRlc2VsZWN0PyhuLm1heERhdGU9bi5vcmlnaW5hbE1heERhdGUsdC5tYXhEYXRlPXQub3JpZ2luYWxNYXhEYXRlKTp0Lm1heERhdGU9bi5kYXRlU2VsZWN0ZWR9ZnVuY3Rpb24gcChlLHQsbil7aWYoIXQubm9uSW5wdXQpcmV0dXJuIG4/ZS52YWx1ZT1cIlwiOnQuZm9ybWF0dGVyIT09cz90LmZvcm1hdHRlcihlLHQuZGF0ZVNlbGVjdGVkLHQpOnZvaWQoZS52YWx1ZT10LmRhdGVTZWxlY3RlZC50b0RhdGVTdHJpbmcoKSl9ZnVuY3Rpb24gdyhlLHQsbixhKXtufHxhPyhuJiYodC5jdXJyZW50WWVhcj0rbiksYSYmKHQuY3VycmVudE1vbnRoPSthKSk6KHQuY3VycmVudE1vbnRoKz1lLmNvbnRhaW5zKFwicXMtcmlnaHRcIik/MTotMSwxMj09PXQuY3VycmVudE1vbnRoPyh0LmN1cnJlbnRNb250aD0wLHQuY3VycmVudFllYXIrKyk6LTE9PT10LmN1cnJlbnRNb250aCYmKHQuY3VycmVudE1vbnRoPTExLHQuY3VycmVudFllYXItLSkpLHQuY3VycmVudE1vbnRoTmFtZT10Lm1vbnRoc1t0LmN1cnJlbnRNb250aF0sdSh0KSx0Lm9uTW9udGhDaGFuZ2UodCl9ZnVuY3Rpb24gRChlKXtpZighZS5ub1Bvc2l0aW9uKXt2YXIgdD1lLnBvc2l0aW9uLnRvcCxuPWUucG9zaXRpb24ucmlnaHQ7aWYoZS5wb3NpdGlvbi5jZW50ZXJlZClyZXR1cm4gZS5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicXMtY2VudGVyZWRcIik7dmFyIGE9ZS5wb3NpdGlvbmVkRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkscj1lLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGk9ZS5jYWxlbmRhckNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxvPXIudG9wLWEudG9wKyh0Py0xKmkuaGVpZ2h0OnIuaGVpZ2h0KStcInB4XCIscz1yLmxlZnQtYS5sZWZ0KyhuP3Iud2lkdGgtaS53aWR0aDowKStcInB4XCI7ZS5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcInRvcFwiLG8pLGUuY2FsZW5kYXJDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCJsZWZ0XCIscyl9fWZ1bmN0aW9uIGIoZSl7cmV0dXJuXCJbb2JqZWN0IERhdGVdXCI9PT14KGUpJiZcIkludmFsaWQgRGF0ZVwiIT09ZS50b1N0cmluZygpfWZ1bmN0aW9uIGcoZSl7aWYoYihlKXx8XCJudW1iZXJcIj09dHlwZW9mIGUmJiFpc05hTihlKSl7dmFyIHQ9bmV3IERhdGUoK2UpO3JldHVybiBuZXcgRGF0ZSh0LmdldEZ1bGxZZWFyKCksdC5nZXRNb250aCgpLHQuZ2V0RGF0ZSgpKX19ZnVuY3Rpb24gcShlKXtlLmRpc2FibGVkfHwhZS5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1oaWRkZW5cIikmJiFlLmFsd2F5c1Nob3cmJihcIm92ZXJsYXlcIiE9PWUuZGVmYXVsdFZpZXcmJk0oITAsZSksZS5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicXMtaGlkZGVuXCIpLGUub25IaWRlKGUpKX1mdW5jdGlvbiBTKGUpe2UuZGlzYWJsZWR8fChlLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJxcy1oaWRkZW5cIiksXCJvdmVybGF5XCI9PT1lLmRlZmF1bHRWaWV3JiZNKCExLGUpLEQoZSksZS5vblNob3coZSkpfWZ1bmN0aW9uIE0oZSx0KXt2YXIgbj10LmNhbGVuZGFyLGE9bi5xdWVyeVNlbGVjdG9yKFwiLnFzLW92ZXJsYXlcIikscj1hLnF1ZXJ5U2VsZWN0b3IoXCIucXMtb3ZlcmxheS15ZWFyXCIpLGk9bi5xdWVyeVNlbGVjdG9yKFwiLnFzLWNvbnRyb2xzXCIpLG89bi5xdWVyeVNlbGVjdG9yKFwiLnFzLXNxdWFyZXNcIik7ZT8oYS5jbGFzc0xpc3QuYWRkKFwicXMtaGlkZGVuXCIpLGkuY2xhc3NMaXN0LnJlbW92ZShcInFzLWJsdXJcIiksby5jbGFzc0xpc3QucmVtb3ZlKFwicXMtYmx1clwiKSxyLnZhbHVlPVwiXCIpOihhLmNsYXNzTGlzdC5yZW1vdmUoXCJxcy1oaWRkZW5cIiksaS5jbGFzc0xpc3QuYWRkKFwicXMtYmx1clwiKSxvLmNsYXNzTGlzdC5hZGQoXCJxcy1ibHVyXCIpLHIuZm9jdXMoKSl9ZnVuY3Rpb24gRShlLHQsbixhKXt2YXIgcj1pc05hTigrKG5ldyBEYXRlKS5zZXRGdWxsWWVhcih0LnZhbHVlfHx2b2lkIDApKSxpPXI/bnVsbDp0LnZhbHVlO2lmKDEzPT09ZS53aGljaHx8MTM9PT1lLmtleUNvZGV8fFwiY2xpY2tcIj09PWUudHlwZSlhP3cobnVsbCxuLGksYSk6cnx8dC5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1kaXNhYmxlZFwiKXx8dyhudWxsLG4saSk7ZWxzZSBpZihuLmNhbGVuZGFyLmNvbnRhaW5zKHQpKXtuLmNhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoXCIucXMtc3VibWl0XCIpLmNsYXNzTGlzdFtyP1wiYWRkXCI6XCJyZW1vdmVcIl0oXCJxcy1kaXNhYmxlZFwiKX19ZnVuY3Rpb24geChlKXtyZXR1cm57fS50b1N0cmluZy5jYWxsKGUpfWZ1bmN0aW9uIEMoZSl7YS5mb3JFYWNoKChmdW5jdGlvbih0KXt0IT09ZSYmcSh0KX0pKX1mdW5jdGlvbiBMKGUpe2lmKCFlLl9fcXNfc2hhZG93X2RvbSl7dmFyIHQ9ZS53aGljaHx8ZS5rZXlDb2RlLG49ZS50eXBlLHI9ZS50YXJnZXQsbz1yLmNsYXNzTGlzdCxzPWEuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5jYWxlbmRhci5jb250YWlucyhyKXx8ZS5lbD09PXJ9KSlbMF0sbD1zJiZzLmNhbGVuZGFyLmNvbnRhaW5zKHIpO2lmKCEocyYmcy5pc01vYmlsZSYmcy5kaXNhYmxlTW9iaWxlKSlpZihcImNsaWNrXCI9PT1uKXtpZighcylyZXR1cm4gYS5mb3JFYWNoKHEpO2lmKHMuZGlzYWJsZWQpcmV0dXJuO3ZhciBkPXMuY2FsZW5kYXIsYz1zLmNhbGVuZGFyQ29udGFpbmVyLGg9cy5kaXNhYmxlWWVhck92ZXJsYXksZj1zLm5vbklucHV0LHY9ZC5xdWVyeVNlbGVjdG9yKFwiLnFzLW92ZXJsYXkteWVhclwiKSx5PSEhZC5xdWVyeVNlbGVjdG9yKFwiLnFzLWhpZGRlblwiKSxwPWQucXVlcnlTZWxlY3RvcihcIi5xcy1tb250aC15ZWFyXCIpLmNvbnRhaW5zKHIpLEQ9ci5kYXRhc2V0Lm1vbnRoTnVtO2lmKHMubm9Qb3NpdGlvbiYmIWwpKGMuY2xhc3NMaXN0LmNvbnRhaW5zKFwicXMtaGlkZGVuXCIpP1M6cSkocyk7ZWxzZSBpZihvLmNvbnRhaW5zKFwicXMtYXJyb3dcIikpdyhvLHMpO2Vsc2UgaWYocHx8by5jb250YWlucyhcInFzLWNsb3NlXCIpKWh8fE0oIXkscyk7ZWxzZSBpZihEKUUoZSx2LHMsRCk7ZWxzZXtpZihvLmNvbnRhaW5zKFwicXMtZGlzYWJsZWRcIikpcmV0dXJuO2lmKG8uY29udGFpbnMoXCJxcy1udW1cIikpe3ZhciBiPXIudGV4dENvbnRlbnQsZz0rci5kYXRhc2V0LmRpcmVjdGlvbix4PW5ldyBEYXRlKHMuY3VycmVudFllYXIscy5jdXJyZW50TW9udGgrZyxiKTtpZihnKXtzLmN1cnJlbnRZZWFyPXguZ2V0RnVsbFllYXIoKSxzLmN1cnJlbnRNb250aD14LmdldE1vbnRoKCkscy5jdXJyZW50TW9udGhOYW1lPWlbcy5jdXJyZW50TW9udGhdLHUocyk7Zm9yKHZhciBMLFk9cy5jYWxlbmRhci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kaXJlY3Rpb249XCIwXCJdJyksaj0wOyFMOyl7dmFyIFA9WVtqXTtQLnRleHRDb250ZW50PT09YiYmKEw9UCksaisrfXI9TH1yZXR1cm4gdm9pZCgreD09K3MuZGF0ZVNlbGVjdGVkP20ocixzLCEwKTpyLmNsYXNzTGlzdC5jb250YWlucyhcInFzLWRpc2FibGVkXCIpfHxtKHIscykpfW8uY29udGFpbnMoXCJxcy1zdWJtaXRcIik/RShlLHYscyk6ZiYmcj09PXMuZWwmJihTKHMpLEMocykpfX1lbHNlIGlmKFwiZm9jdXNpblwiPT09biYmcylTKHMpLEMocyk7ZWxzZSBpZihcImtleWRvd25cIj09PW4mJjk9PT10JiZzKXEocyk7ZWxzZSBpZihcImtleWRvd25cIj09PW4mJnMmJiFzLmRpc2FibGVkKXt2YXIgaz0hcy5jYWxlbmRhci5xdWVyeVNlbGVjdG9yKFwiLnFzLW92ZXJsYXlcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwicXMtaGlkZGVuXCIpOzEzPT09dCYmayYmbD9FKGUscixzKToyNz09PXQmJmsmJmwmJk0oITAscyl9ZWxzZSBpZihcImlucHV0XCI9PT1uKXtpZighc3x8IXMuY2FsZW5kYXIuY29udGFpbnMocikpcmV0dXJuO3ZhciBPPXMuY2FsZW5kYXIucXVlcnlTZWxlY3RvcihcIi5xcy1zdWJtaXRcIiksTj1yLnZhbHVlLnNwbGl0KFwiXCIpLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZXx8XCIwXCIhPT10P2UrKHQubWF0Y2goL1swLTldLyk/dDpcIlwiKTpcIlwifSksXCJcIikuc2xpY2UoMCw0KTtyLnZhbHVlPU4sTy5jbGFzc0xpc3RbND09PU4ubGVuZ3RoP1wicmVtb3ZlXCI6XCJhZGRcIl0oXCJxcy1kaXNhYmxlZFwiKX19fWZ1bmN0aW9uIFkoZSl7TChlKSxlLl9fcXNfc2hhZG93X2RvbT0hMH1mdW5jdGlvbiBqKGUsdCl7bC5mb3JFYWNoKChmdW5jdGlvbihuKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXIobix0KX0pKX1mdW5jdGlvbiBQKCl7Uyh0aGlzKX1mdW5jdGlvbiBrKCl7cSh0aGlzKX1mdW5jdGlvbiBPKGUsdCl7dmFyIG49ZyhlKSxhPXRoaXMuY3VycmVudFllYXIscj10aGlzLmN1cnJlbnRNb250aCxpPXRoaXMuc2libGluZztpZihudWxsPT1lKXJldHVybiB0aGlzLmRhdGVTZWxlY3RlZD12b2lkIDAscCh0aGlzLmVsLHRoaXMsITApLGkmJih5KHtpbnN0YW5jZTp0aGlzLGRlc2VsZWN0OiEwfSksdShpKSksdSh0aGlzKSx0aGlzO2lmKCFiKGUpKXRocm93IG5ldyBFcnJvcihcImBzZXREYXRlYCBuZWVkcyBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3QuXCIpO2lmKHRoaXMuZGlzYWJsZWREYXRlc1srbl18fG48dGhpcy5taW5EYXRlfHxuPnRoaXMubWF4RGF0ZSl0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2FuJ3QgbWFudWFsbHkgc2V0IGEgZGF0ZSB0aGF0J3MgZGlzYWJsZWQuXCIpO3RoaXMuZGF0ZVNlbGVjdGVkPW4sdCYmKHRoaXMuY3VycmVudFllYXI9bi5nZXRGdWxsWWVhcigpLHRoaXMuY3VycmVudE1vbnRoPW4uZ2V0TW9udGgoKSx0aGlzLmN1cnJlbnRNb250aE5hbWU9dGhpcy5tb250aHNbbi5nZXRNb250aCgpXSkscCh0aGlzLmVsLHRoaXMpLGkmJih5KHtpbnN0YW5jZTp0aGlzfSksdShpKSk7dmFyIG89YT09PW4uZ2V0RnVsbFllYXIoKSYmcj09PW4uZ2V0TW9udGgoKTtyZXR1cm4gb3x8dD91KHRoaXMsbik6b3x8dSh0aGlzLG5ldyBEYXRlKGEsciwxKSksdGhpc31mdW5jdGlvbiBOKGUpe3JldHVybiBJKHRoaXMsZSwhMCl9ZnVuY3Rpb24gXyhlKXtyZXR1cm4gSSh0aGlzLGUpfWZ1bmN0aW9uIEkoZSx0LG4pe3ZhciBhPWUuZGF0ZVNlbGVjdGVkLHI9ZS5maXJzdCxpPWUuc2libGluZyxvPWUubWluRGF0ZSxzPWUubWF4RGF0ZSxsPWcodCksZD1uP1wiTWluXCI6XCJNYXhcIjtmdW5jdGlvbiBjKCl7cmV0dXJuXCJvcmlnaW5hbFwiK2QrXCJEYXRlXCJ9ZnVuY3Rpb24gaCgpe3JldHVybiBkLnRvTG93ZXJDYXNlKCkrXCJEYXRlXCJ9ZnVuY3Rpb24gZigpe3JldHVyblwic2V0XCIrZH1mdW5jdGlvbiB2KCl7dGhyb3cgbmV3IEVycm9yKFwiT3V0LW9mLXJhbmdlIGRhdGUgcGFzc2VkIHRvIFwiK2YoKSl9aWYobnVsbD09dCllW2MoKV09dm9pZCAwLGk/KGlbYygpXT12b2lkIDAsbj8ociYmIWF8fCFyJiYhaS5kYXRlU2VsZWN0ZWQpJiYoZS5taW5EYXRlPXZvaWQgMCxpLm1pbkRhdGU9dm9pZCAwKToociYmIWkuZGF0ZVNlbGVjdGVkfHwhciYmIWEpJiYoZS5tYXhEYXRlPXZvaWQgMCxpLm1heERhdGU9dm9pZCAwKSk6ZVtoKCldPXZvaWQgMDtlbHNle2lmKCFiKHQpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBwYXNzZWQgdG8gXCIrZigpKTtpPygociYmbiYmbD4oYXx8cyl8fHImJiFuJiZsPChpLmRhdGVTZWxlY3RlZHx8byl8fCFyJiZuJiZsPihpLmRhdGVTZWxlY3RlZHx8cyl8fCFyJiYhbiYmbDwoYXx8bykpJiZ2KCksZVtjKCldPWwsaVtjKCldPWwsKG4mJihyJiYhYXx8IXImJiFpLmRhdGVTZWxlY3RlZCl8fCFuJiYociYmIWkuZGF0ZVNlbGVjdGVkfHwhciYmIWEpKSYmKGVbaCgpXT1sLGlbaCgpXT1sKSk6KChuJiZsPihhfHxzKXx8IW4mJmw8KGF8fG8pKSYmdigpLGVbaCgpXT1sKX1yZXR1cm4gaSYmdShpKSx1KGUpLGV9ZnVuY3Rpb24gQSgpe3ZhciBlPXRoaXMuZmlyc3Q/dGhpczp0aGlzLnNpYmxpbmcsdD1lLnNpYmxpbmc7cmV0dXJue3N0YXJ0OmUuZGF0ZVNlbGVjdGVkLGVuZDp0LmRhdGVTZWxlY3RlZH19ZnVuY3Rpb24gUigpe3ZhciBlPXRoaXMuc2hhZG93RG9tLHQ9dGhpcy5wb3NpdGlvbmVkRWwsbj10aGlzLmNhbGVuZGFyQ29udGFpbmVyLHI9dGhpcy5zaWJsaW5nLGk9dGhpczt0aGlzLmlubGluZVBvc2l0aW9uJiYoYS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gZSE9PWkmJmUucG9zaXRpb25lZEVsPT09dH0pKXx8dC5zdHlsZS5zZXRQcm9wZXJ0eShcInBvc2l0aW9uXCIsbnVsbCkpO24ucmVtb3ZlKCksYT1hLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT1pfSkpLHImJmRlbGV0ZSByLnNpYmxpbmcsYS5sZW5ndGh8fGooZG9jdW1lbnQsTCk7dmFyIG89YS5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gdC5zaGFkb3dEb209PT1lfSkpO2Zvcih2YXIgcyBpbiBlJiYhbyYmaihlLFkpLHRoaXMpZGVsZXRlIHRoaXNbc107YS5sZW5ndGh8fGwuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLEwpfSkpfWZ1bmN0aW9uIEYoZSx0KXt2YXIgbj1uZXcgRGF0ZShlKTtpZighYihuKSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgcGFzc2VkIHRvIGBuYXZpZ2F0ZWBcIik7dGhpcy5jdXJyZW50WWVhcj1uLmdldEZ1bGxZZWFyKCksdGhpcy5jdXJyZW50TW9udGg9bi5nZXRNb250aCgpLHUodGhpcyksdCYmdGhpcy5vbk1vbnRoQ2hhbmdlKHRoaXMpfWZ1bmN0aW9uIEIoKXt2YXIgZT0hdGhpcy5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1oaWRkZW5cIiksdD0hdGhpcy5jYWxlbmRhckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnFzLW92ZXJsYXlcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwicXMtaGlkZGVuXCIpO2UmJk0odCx0aGlzKX10LmRlZmF1bHQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbihlLHQpe3ZhciBuLGwsZD1mdW5jdGlvbihlKXt2YXIgdD1jKGUpO3QuZXZlbnRzJiYodC5ldmVudHM9dC5ldmVudHMucmVkdWNlKChmdW5jdGlvbihlLHQpe2lmKCFiKHQpKXRocm93IG5ldyBFcnJvcignXCJvcHRpb25zLmV2ZW50c1wiIG11c3Qgb25seSBjb250YWluIHZhbGlkIEphdmFTY3JpcHQgRGF0ZSBvYmplY3RzLicpO3JldHVybiBlWytnKHQpXT0hMCxlfSkse30pKTtbXCJzdGFydERhdGVcIixcImRhdGVTZWxlY3RlZFwiLFwibWluRGF0ZVwiLFwibWF4RGF0ZVwiXS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgbj10W2VdO2lmKG4mJiFiKG4pKXRocm93IG5ldyBFcnJvcignXCJvcHRpb25zLicrZSsnXCIgbmVlZHMgdG8gYmUgYSB2YWxpZCBKYXZhU2NyaXB0IERhdGUgb2JqZWN0LicpO3RbZV09ZyhuKX0pKTt2YXIgbj10LnBvc2l0aW9uLGk9dC5tYXhEYXRlLGw9dC5taW5EYXRlLGQ9dC5kYXRlU2VsZWN0ZWQsdT10Lm92ZXJsYXlQbGFjZWhvbGRlcixoPXQub3ZlcmxheUJ1dHRvbixmPXQuc3RhcnREYXksdj10LmlkO2lmKHQuc3RhcnREYXRlPWcodC5zdGFydERhdGV8fGR8fG5ldyBEYXRlKSx0LmRpc2FibGVkRGF0ZXM9KHQuZGlzYWJsZWREYXRlc3x8W10pLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXt2YXIgbj0rZyh0KTtpZighYih0KSl0aHJvdyBuZXcgRXJyb3IoJ1lvdSBzdXBwbGllZCBhbiBpbnZhbGlkIGRhdGUgdG8gXCJvcHRpb25zLmRpc2FibGVkRGF0ZXNcIi4nKTtpZihuPT09K2coZCkpdGhyb3cgbmV3IEVycm9yKCdcImRpc2FibGVkRGF0ZXNcIiBjYW5ub3QgY29udGFpbiB0aGUgc2FtZSBkYXRlIGFzIFwiZGF0ZVNlbGVjdGVkXCIuJyk7cmV0dXJuIGVbbl09MSxlfSkse30pLHQuaGFzT3duUHJvcGVydHkoXCJpZFwiKSYmbnVsbD09dil0aHJvdyBuZXcgRXJyb3IoXCJgaWRgIGNhbm5vdCBiZSBgbnVsbGAgb3IgYHVuZGVmaW5lZGBcIik7aWYobnVsbCE9dil7dmFyIG09YS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlkPT09dn0pKTtpZihtLmxlbmd0aD4xKXRocm93IG5ldyBFcnJvcihcIk9ubHkgdHdvIGRhdGVwaWNrZXJzIGNhbiBzaGFyZSBhbiBpZC5cIik7bS5sZW5ndGg/KHQuc2Vjb25kPSEwLHQuc2libGluZz1tWzBdKTp0LmZpcnN0PSEwfXZhciB5PVtcInRyXCIsXCJ0bFwiLFwiYnJcIixcImJsXCIsXCJjXCJdLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiBuPT09ZX0pKTtpZihuJiYheSl0aHJvdyBuZXcgRXJyb3IoJ1wib3B0aW9ucy5wb3NpdGlvblwiIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6IHRsLCB0ciwgYmwsIGJyLCBvciBjLicpO2Z1bmN0aW9uIHAoZSl7dGhyb3cgbmV3IEVycm9yKCdcImRhdGVTZWxlY3RlZFwiIGluIG9wdGlvbnMgaXMgJysoZT9cImxlc3NcIjpcImdyZWF0ZXJcIikrJyB0aGFuIFwiJysoZXx8XCJtYXhcIikrJ0RhdGVcIi4nKX1pZih0LnBvc2l0aW9uPWZ1bmN0aW9uKGUpe3ZhciB0PWVbMF0sbj1lWzFdLGE9e307YVtvW3RdXT0xLG4mJihhW29bbl1dPTEpO3JldHVybiBhfShufHxcImJsXCIpLGk8bCl0aHJvdyBuZXcgRXJyb3IoJ1wibWF4RGF0ZVwiIGluIG9wdGlvbnMgaXMgbGVzcyB0aGFuIFwibWluRGF0ZVwiLicpO2QmJihsPmQmJnAoXCJtaW5cIiksaTxkJiZwKCkpO2lmKFtcIm9uU2VsZWN0XCIsXCJvblNob3dcIixcIm9uSGlkZVwiLFwib25Nb250aENoYW5nZVwiLFwiZm9ybWF0dGVyXCIsXCJkaXNhYmxlclwiXS5mb3JFYWNoKChmdW5jdGlvbihlKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiB0W2VdJiYodFtlXT1zKX0pKSxbXCJjdXN0b21EYXlzXCIsXCJjdXN0b21Nb250aHNcIixcImN1c3RvbU92ZXJsYXlNb250aHNcIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSxuKXt2YXIgYT10W2VdLHI9bj8xMjo3O2lmKGEpe2lmKCFBcnJheS5pc0FycmF5KGEpfHxhLmxlbmd0aCE9PXJ8fGEuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGV9KSkpdGhyb3cgbmV3IEVycm9yKCdcIicrZSsnXCIgbXVzdCBiZSBhbiBhcnJheSB3aXRoICcrcitcIiBzdHJpbmdzLlwiKTt0W24/bjwyP1wibW9udGhzXCI6XCJvdmVybGF5TW9udGhzXCI6XCJkYXlzXCJdPWF9fSkpLGYmJmY+MCYmZjw3KXt2YXIgdz0odC5jdXN0b21EYXlzfHxyKS5zbGljZSgpLEQ9dy5zcGxpY2UoMCxmKTt0LmN1c3RvbURheXM9dy5jb25jYXQoRCksdC5zdGFydERheT0rZix0LndlZWtlbmRJbmRpY2VzPVt3Lmxlbmd0aC0xLHcubGVuZ3RoXX1lbHNlIHQuc3RhcnREYXk9MCx0LndlZWtlbmRJbmRpY2VzPVs2LDBdO1wic3RyaW5nXCIhPXR5cGVvZiB1JiZkZWxldGUgdC5vdmVybGF5UGxhY2Vob2xkZXI7XCJzdHJpbmdcIiE9dHlwZW9mIGgmJmRlbGV0ZSB0Lm92ZXJsYXlCdXR0b247dmFyIHE9dC5kZWZhdWx0VmlldztpZihxJiZcImNhbGVuZGFyXCIhPT1xJiZcIm92ZXJsYXlcIiE9PXEpdGhyb3cgbmV3IEVycm9yKCdvcHRpb25zLmRlZmF1bHRWaWV3IG11c3QgZWl0aGVyIGJlIFwiY2FsZW5kYXJcIiBvciBcIm92ZXJsYXlcIi4nKTtyZXR1cm4gdC5kZWZhdWx0Vmlldz1xfHxcImNhbGVuZGFyXCIsdH0odHx8e3N0YXJ0RGF0ZTpnKG5ldyBEYXRlKSxwb3NpdGlvbjpcImJsXCIsZGVmYXVsdFZpZXc6XCJjYWxlbmRhclwifSksdT1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB1KXU9XCIjXCI9PT11WzBdP2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKHUuc2xpY2UoMSkpOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodSk7ZWxzZXtpZihcIltvYmplY3QgU2hhZG93Um9vdF1cIj09PXgodSkpdGhyb3cgbmV3IEVycm9yKFwiVXNpbmcgYSBzaGFkb3cgRE9NIGFzIHlvdXIgc2VsZWN0b3IgaXMgbm90IHN1cHBvcnRlZC5cIik7Zm9yKHZhciBoLGY9dS5wYXJlbnROb2RlOyFoOyl7dmFyIHY9eChmKTtcIltvYmplY3QgSFRNTERvY3VtZW50XVwiPT09dj9oPSEwOlwiW29iamVjdCBTaGFkb3dSb290XVwiPT09dj8oaD0hMCxuPWYsbD1mLmhvc3QpOmY9Zi5wYXJlbnROb2RlfX1pZighdSl0aHJvdyBuZXcgRXJyb3IoXCJObyBzZWxlY3RvciAvIGVsZW1lbnQgZm91bmQuXCIpO2lmKGEuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZWw9PT11fSkpKXRocm93IG5ldyBFcnJvcihcIkEgZGF0ZXBpY2tlciBhbHJlYWR5IGV4aXN0cyBvbiB0aGF0IGVsZW1lbnQuXCIpO3ZhciBtPXU9PT1kb2N1bWVudC5ib2R5LHk9bj91LnBhcmVudEVsZW1lbnR8fG46bT9kb2N1bWVudC5ib2R5OnUucGFyZW50RWxlbWVudCx3PW4/dS5wYXJlbnRFbGVtZW50fHxsOnksRD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtELmNsYXNzTmFtZT1cInFzLWRhdGVwaWNrZXItY29udGFpbmVyIHFzLWhpZGRlblwiLHEuY2xhc3NOYW1lPVwicXMtZGF0ZXBpY2tlclwiO3ZhciBNPXtzaGFkb3dEb206bixjdXN0b21FbGVtZW50OmwscG9zaXRpb25lZEVsOncsZWw6dSxwYXJlbnQ6eSxub25JbnB1dDpcIklOUFVUXCIhPT11Lm5vZGVOYW1lLG5vUG9zaXRpb246bSxwb3NpdGlvbjohbSYmZC5wb3NpdGlvbixzdGFydERhdGU6ZC5zdGFydERhdGUsZGF0ZVNlbGVjdGVkOmQuZGF0ZVNlbGVjdGVkLGRpc2FibGVkRGF0ZXM6ZC5kaXNhYmxlZERhdGVzLG1pbkRhdGU6ZC5taW5EYXRlLG1heERhdGU6ZC5tYXhEYXRlLG5vV2Vla2VuZHM6ISFkLm5vV2Vla2VuZHMsd2Vla2VuZEluZGljZXM6ZC53ZWVrZW5kSW5kaWNlcyxjYWxlbmRhckNvbnRhaW5lcjpELGNhbGVuZGFyOnEsY3VycmVudE1vbnRoOihkLnN0YXJ0RGF0ZXx8ZC5kYXRlU2VsZWN0ZWQpLmdldE1vbnRoKCksY3VycmVudE1vbnRoTmFtZTooZC5tb250aHN8fGkpWyhkLnN0YXJ0RGF0ZXx8ZC5kYXRlU2VsZWN0ZWQpLmdldE1vbnRoKCldLGN1cnJlbnRZZWFyOihkLnN0YXJ0RGF0ZXx8ZC5kYXRlU2VsZWN0ZWQpLmdldEZ1bGxZZWFyKCksZXZlbnRzOmQuZXZlbnRzfHx7fSxkZWZhdWx0VmlldzpkLmRlZmF1bHRWaWV3LHNldERhdGU6TyxyZW1vdmU6UixzZXRNaW46TixzZXRNYXg6XyxzaG93OlAsaGlkZTprLG5hdmlnYXRlOkYsdG9nZ2xlT3ZlcmxheTpCLG9uU2VsZWN0OmQub25TZWxlY3Qsb25TaG93OmQub25TaG93LG9uSGlkZTpkLm9uSGlkZSxvbk1vbnRoQ2hhbmdlOmQub25Nb250aENoYW5nZSxmb3JtYXR0ZXI6ZC5mb3JtYXR0ZXIsZGlzYWJsZXI6ZC5kaXNhYmxlcixtb250aHM6ZC5tb250aHN8fGksZGF5czpkLmN1c3RvbURheXN8fHIsc3RhcnREYXk6ZC5zdGFydERheSxvdmVybGF5TW9udGhzOmQub3ZlcmxheU1vbnRoc3x8KGQubW9udGhzfHxpKS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnNsaWNlKDAsMyl9KSksb3ZlcmxheVBsYWNlaG9sZGVyOmQub3ZlcmxheVBsYWNlaG9sZGVyfHxcIjQtZGlnaXQgeWVhclwiLG92ZXJsYXlCdXR0b246ZC5vdmVybGF5QnV0dG9ufHxcIlN1Ym1pdFwiLGRpc2FibGVZZWFyT3ZlcmxheTohIWQuZGlzYWJsZVllYXJPdmVybGF5LGRpc2FibGVNb2JpbGU6ISFkLmRpc2FibGVNb2JpbGUsaXNNb2JpbGU6XCJvbnRvdWNoc3RhcnRcImluIHdpbmRvdyxhbHdheXNTaG93OiEhZC5hbHdheXNTaG93LGlkOmQuaWQsc2hvd0FsbERhdGVzOiEhZC5zaG93QWxsRGF0ZXMscmVzcGVjdERpc2FibGVkUmVhZE9ubHk6ISFkLnJlc3BlY3REaXNhYmxlZFJlYWRPbmx5LGZpcnN0OmQuZmlyc3Qsc2Vjb25kOmQuc2Vjb25kfTtpZihkLnNpYmxpbmcpe3ZhciBFPWQuc2libGluZyxDPU0sTD1FLm1pbkRhdGV8fEMubWluRGF0ZSxZPUUubWF4RGF0ZXx8Qy5tYXhEYXRlO0Muc2libGluZz1FLEUuc2libGluZz1DLEUubWluRGF0ZT1MLEUubWF4RGF0ZT1ZLEMubWluRGF0ZT1MLEMubWF4RGF0ZT1ZLEUub3JpZ2luYWxNaW5EYXRlPUwsRS5vcmlnaW5hbE1heERhdGU9WSxDLm9yaWdpbmFsTWluRGF0ZT1MLEMub3JpZ2luYWxNYXhEYXRlPVksRS5nZXRSYW5nZT1BLEMuZ2V0UmFuZ2U9QX1kLmRhdGVTZWxlY3RlZCYmcCh1LE0pO3ZhciBqPWdldENvbXB1dGVkU3R5bGUodykucG9zaXRpb247bXx8aiYmXCJzdGF0aWNcIiE9PWp8fChNLmlubGluZVBvc2l0aW9uPSEwLHcuc3R5bGUuc2V0UHJvcGVydHkoXCJwb3NpdGlvblwiLFwicmVsYXRpdmVcIikpO3ZhciBJPWEuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5wb3NpdGlvbmVkRWw9PT1NLnBvc2l0aW9uZWRFbH0pKTtJLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubGluZVBvc2l0aW9ufSkpJiYoTS5pbmxpbmVQb3NpdGlvbj0hMCxJLmZvckVhY2goKGZ1bmN0aW9uKGUpe2UuaW5saW5lUG9zaXRpb249ITB9KSkpO0QuYXBwZW5kQ2hpbGQocSkseS5hcHBlbmRDaGlsZChEKSxNLmFsd2F5c1Nob3cmJlMoTSk7cmV0dXJuIE19KGUsdCk7aWYoYS5sZW5ndGh8fGQoZG9jdW1lbnQpLG4uc2hhZG93RG9tJiYoYS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gZS5zaGFkb3dEb209PT1uLnNoYWRvd0RvbX0pKXx8ZChuLnNoYWRvd0RvbSkpLGEucHVzaChuKSxuLnNlY29uZCl7dmFyIGw9bi5zaWJsaW5nO3koe2luc3RhbmNlOm4sZGVzZWxlY3Q6IW4uZGF0ZVNlbGVjdGVkfSkseSh7aW5zdGFuY2U6bCxkZXNlbGVjdDohbC5kYXRlU2VsZWN0ZWR9KSx1KGwpfXJldHVybiB1KG4sbi5zdGFydERhdGV8fG4uZGF0ZVNlbGVjdGVkKSxuLmFsd2F5c1Nob3cmJkQobiksbn19XSkuZGVmYXVsdH0pKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdFByb2plY3RzIH0gZnJvbSAnLi9pbml0JztcbmltcG9ydCBpbml0V2Vic2l0ZSBmcm9tICcuL3dlYnNpdGUnXG5cbmluaXRXZWJzaXRlKCk7XG5pbml0UHJvamVjdHMoKTsiXSwibmFtZXMiOlsiY3JlYXRlQ29sdW1uTGFiZWxzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYmxhbmtGaWxsZXIiLCJhcHBlbmRDaGlsZCIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJpbml0UHJvamVjdHMiLCJyZW1vdmVQcm9qZWN0Q29udGFpbmVyIiwiY3JlYXRlUHJvamVjdENhcmQiLCJhZGRQcm9qZWN0Iiwic2F2ZVByb2plY3RUb1N0b3JhZ2UiLCJQcm9qZWN0TW9kdWxlIiwiRXhjZXB0aW9uTW9kdWxlIiwiZGF0ZXBpY2tlciIsImNyZWF0ZVByb2plY3RJbnB1dCIsIm1vZGFsIiwiaGVhZGluZyIsImJvZHkiLCJpbnB1dENvbnRlbnQiLCJwcm9qZWN0TmFtZUxhYmVsIiwic2V0QXR0cmlidXRlIiwicHJvamVjdE5hbWUiLCJwcm9qZWN0RGF0ZUxhYmVsIiwicHJvamVjdERhdGUiLCJlcnJvck1lc3NhZ2UiLCJzdHlsZSIsImRpc3BsYXkiLCJidG5TdWJtaXQiLCJidG5DYW5jZWwiLCJidG5Db250YWluZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaXNFbXB0eSIsInZhbHVlIiwic2V0VGltZW91dCIsImNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZUNoaWxkIiwiY2xlYXJNb2RhbElucHV0cyIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwibG9hZFRvZG9DYXJkIiwiVG9kb01vZHVsZSIsInBvcHVsYXRlVG9kb0l0ZW1zIiwicmVtb3ZlQWxsQ2hpbGROb2RlcyIsImNyZWF0ZVRvZG9JdGVtSW5wdXQiLCJwcm9qZWN0S2V5IiwidG9kb1RpdGxlTGFiZWwiLCJ0b2RvSXRlbVRpdGxlIiwidG9kb0l0ZW1EZXNjcmlwdGlvbkxhYmVsIiwidG9kb0l0ZW1EZXNjcmlwdGlvbiIsInRvZG9JdGVtRHVlRGF0ZUxhYmVsIiwidG9kb0l0ZW1EdWVEYXRlIiwicHJpb3JpdHlDb250YWluZXIiLCJwcmlvcml0eUhpZ2hMYWJlbCIsInByaW9yaXR5TWVkaXVtTGFiZWwiLCJwcmlvcml0eUxvd0xhYmVsIiwicHJpb3JpdHlIaWdoIiwicHJpb3JpdHlNZWRpdW0iLCJwcmlvcml0eUxvdyIsInByaW9yaXR5U2VsZWN0aW9uIiwicHJpb3JpdHlPcHRpb25zIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJjaGVja2VkIiwic2F2ZUl0ZW1Ub1N0b3JhZ2UiLCJpdGVtcyIsImxvYWRQcm9qZWN0SXRlbXMiLCJpdGVtQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsInBhcmVudCIsImlucHV0IiwibWF0Y2giLCJwb3B1bGF0ZVByb2plY3RzIiwicHJvamVjdHMiLCJsb2FkUHJvamVjdHNGcm9tU3RvcmFnZSIsIm5hdiIsImxpc3RDb250YWluZXIiLCJUb2RvSXRlbUtleSIsIlRvZG9JdGVtIiwiVG9kb0l0ZW1MaXN0IiwidG9kb0l0ZW1zIiwiZGVzY3JpcHRpb24iLCJrZXkiLCJ0b2RvIiwicHVzaCIsImF0IiwiaW5kZXgiLCJpdGVtS2V5Iiwic3BsaWNlIiwiaXRlbUlkIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW1BdCIsInN0b3JhZ2VBdmFpbGFibGUiLCJ0eXBlIiwic3RvcmFnZSIsIndpbmRvdyIsIngiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImUiLCJET01FeGNlcHRpb24iLCJjb2RlIiwibmFtZSIsInByb2plY3ROYW1lQXQiLCJzZWxlY3RQcm9qZWN0Q2FyZCIsIm51bWJlck9mUHJvamVjdHMiLCJwcm9qZWN0S2V5QXQiLCJjcmVhdGVUb2RvQ29udGFpbmVyIiwiaiIsImNoaWxkcmVuIiwiY2hpbGQiLCJ0YWdOYW1lIiwicmVtb3ZlIiwic2VsZWN0ZWRDaGlsZCIsIlByb2plY3QiLCJQcm9qZWN0TGlzdCIsIlBST0pFQ1RfQ09VTlRfS0VZIiwiUFJPSkVDVF9LRVkiLCJwcm9qZWN0Q291bnQiLCJzZXRQcm9qZWN0Q291bnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0UHJvamVjdENvdW50Iiwic2V0dXBEZWZhdWx0UHJvamVjdCIsInByb2plY3QiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvamVjdExpc3RDb250YWluZXIiLCJvYmplY3QiLCJ0b1N0cmluZyIsIm5ld1Byb2plY3QiLCJwYXJzZSIsIl9uYW1lIiwiX2RhdGUiLCJfa2V5IiwiYWxlcnQiLCJsb2FkTGFzdFByb2plY3QiLCJqc29uT2JqZWN0IiwiUFJPSkVDVCIsImxhc3RQcm9qZWN0IiwiaW5pdERlZmF1bHRQcm9qZWN0IiwiSU5JVElBTF9JVEVNX0NPVU5UIiwiaW5pdERlZmF1bHRJdGVtcyIsIl9pdGVtQ291bnQiLCJkYXRlIiwiaXRlbUNvdW50IiwidG9kb0xpc3QiLCJjcmVhdGVEZWxldGVQcm9tcHQiLCJ0b3BTZWN0aW9uIiwiYm90dG9tU2VjdGlvbiIsImJ0blllcyIsImV4dHJhY3RQcm9qZWN0TmFtZSIsInJlbW92ZUl0ZW1Gcm9tU3RvcmFnZSIsImJ0bk5vIiwiY3JlYXRlRWRpdEl0ZW0iLCJlZGl0SXRlbVRvU3RvcmFnZSIsIm5ld1RvZG9JdGVtIiwiY2hlY2tib3giLCJ0aXRsZUNhcmQiLCJkZXNjcmlwdGlvbkNhcmQiLCJkdWVEYXRlQ2FyZCIsInByaW9yaXR5Q29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRQcmlvcml0eUNvbG9yIiwiaWNvbkNvbnRhaW5lciIsImVkaXRDb250YWluZXIiLCJlZGl0SWNvbiIsInNyYyIsImRlbGV0ZUNvbnRhaW5lciIsImRlbGV0ZUljb24iLCJJVEVNX0NPVU5UX0tFWSIsIklURU1fS0VZIiwic2V0SXRlbUNvdW50Iiwic2hvd0l0ZW1zIiwiaXRlbUxpc3QiLCJudW1iZXJPZlRvZG9JdGVtcyIsIml0ZW1BdEluZGV4VGl0bGUiLCJpdGVtQXRJbmRleERlc2NyaXB0aW9uIiwiaXRlbUF0SW5kZXhEdWVEYXRlIiwiaXRlbUF0SW5kZXhQcmlvcml0eSIsIml0ZW1BdEluZGV4SWQiLCJpdGVtIiwiY291bnRlciIsImtleTEiLCJrZXkyIiwicHJvamVjdDBJdGVtQ291bnQiLCJpdGVtS2V5QXJyYXkiLCJBcnJheSIsIl90aXRsZSIsIl9kZXNjcmlwdGlvbiIsIl9kdWVEYXRlIiwiX3ByaW9yaXR5IiwiX2l0ZW1LZXkiLCJpdGVtQXRJbmRleEtleSIsInJlbW92ZVRvZG9JdGVtIiwibWFpbiIsInJlcGxhY2VXaXRoIiwicmVtb3ZlSXRlbUJ5SWQiLCJpbml0TGlzdCIsImlzQ2hlY2tlZCIsIl9pc0NoZWNrZWQiLCJjcmVhdGVUb2RvTGlzdENvbnRhaW5lciIsImNoaWxkTm9kZXMiLCJmaXJzdENoaWxkIiwiQ0hFQ0tCT1hfQ0hFQ0tFRCIsIkNIRUNLQk9YX1VOQ0hFQ0tFRCIsImRlc2NyaXB0aW9uQ29udGFpbmVyIiwiZGVzY3JpcHRpb25IZWFkaW5nIiwiZm9ybWF0RGF0ZSIsImVkaXRUb29sVGlwIiwiY29udGFpbnMiLCJyZW1vdmVOb2RlIiwicGFyZW50Tm9kZSIsInJlcyIsInNwbGl0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiZGVmYXVsdEl0ZW0xIiwiZGVmYXVsdEl0ZW0yIiwiYWRkSXRlbSIsImdldEl0ZW1LZXkiLCJudW1JdGVtcyIsImN1cnJlbnRDb3VudCIsInByb2plY3RJZCIsIl9pdGVtSWQiLCJfcHJvamVjdElkIiwiY3JlYXRlSGVhZGVyIiwiaGVhZGVyIiwicGFnZU5hbWUiLCJjcmVhdGVOYXYiLCJpdGVtUHJvamVjdHMiLCJidG5OZXdQcm9qZWN0IiwiY3JlYXRlTWFpbiIsImNyZWF0ZU5ld1RvZG8iLCJvcGVuVG9kb0lucHV0IiwiY3JlYXRlQm9keUNvbnRhaW5lciIsImJvZHlDb250YWluZXIiLCJjcmVhdGVGb290ZXIiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnaXRodWJMaW5rIiwiaHJlZiIsImdpdGh1Ykljb24iLCJpbml0V2Vic2l0ZSJdLCJzb3VyY2VSb290IjoiIn0=