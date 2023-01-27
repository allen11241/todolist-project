import { TodoItemList } from "./item-list";
import { Project } from "./project";
import { TodoItemKey } from "./todo-item-new";

const TodoModule = (function() {

    const ITEM_COUNT_KEY = 'itemCounter';
    const ITEM_KEY = 'item';
    const PROJECT = 'project';
    let itemCount;

    const initDefaultItems = () => {
        const defaultItem1 = new TodoItemKey('Title1', 'desc1', '01/11/2022', 'high', 1, 'project0item0');
        const defaultItem2 = new TodoItemKey('Title2', 'desc2', '02/22/2022', 'low', 0, 'project0item1');

        window.localStorage.setItem('project0item0', JSON.stringify(defaultItem1));
        window.localStorage.setItem('project0item1', JSON.stringify(defaultItem2));
    }

    const setItemCount = () => {
        if (!localStorage.getItem(ITEM_COUNT_KEY)) {
            window.localStorage.setItem(ITEM_COUNT_KEY, 2);
            console.log('NO ITEM COUNT!');
            return 2;
          } else {
            console.log('WE HAVE ITEM COUNT: ' + window.localStorage.getItem(ITEM_COUNT_KEY));
            return window.localStorage.getItem(ITEM_COUNT_KEY);
          }
    }

    const saveItemToStorage = (title, description, date, priority, projectKey) => {
      if(window.localStorage.getItem(projectKey)) {
        let object = window.localStorage.getItem(projectKey);
        let project = new Project(JSON.parse(object)._name, JSON.parse(object)._date, JSON.parse(object)._key, JSON.parse(object)._itemCount);

        let itemKey = projectKey + ITEM_KEY + project.itemCount.toString();
        console.log('ITEM KEY = ' + itemKey);
        project.addItem();
        window.localStorage.setItem(projectKey, JSON.stringify(project));
        const item = new TodoItemKey(title, description, date, priority, itemKey);
        window.localStorage.setItem(itemKey, JSON.stringify(item));
        window.localStorage.setItem(ITEM_COUNT_KEY, itemCount);
        }
      }

      const getItemKey = (key) => {
        return key;
      }

      const editItemToStorage = (title, description, date, priority, itemKey) => {
        const item = new TodoItemKey(title, description, date, priority, itemKey);
        window.localStorage.setItem(itemKey, JSON.stringify(item));
      }

      const removeItemFromStorage = (key, projectName) => {
        console.log('KEYKEYKEY = ' + key)
        if(window.localStorage.getItem(projectName)) {
          let object = window.localStorage.getItem(projectName);
          let project = new Project(JSON.parse(object)._name, JSON.parse(object)._date, JSON.parse(object)._key, JSON.parse(object)._itemCount);
          console.log('project name: '+ project.name);
          //project.deleteItem();
          //window.localStorage.setItem(projectName, JSON.stringify(project));
          window.localStorage.removeItem(key);
          console.log('count: ' + project.itemCount)
        }
      }

      const extractProjectName = (key) => {
        let projectName = '';
          for(let i = 7; i < key.length; i++) {
            if(key[i] != 'i') {
              projectName += key[i];
            }
            if(key[i] === 'i') {
              break;
            }
          }
          projectName = PROJECT + projectName.toString();
          return projectName;
      }

    const loadProjectItems = (projectKey) => {
      const items = new TodoItemList();
      console.log('loadProjectItems projectKey: ' + projectKey);
      if(window.localStorage.getItem(projectKey)) {
        let object = window.localStorage.getItem(projectKey);
        let project = new Project(JSON.parse(object)._name, JSON.parse(object)._date, JSON.parse(object)._key, JSON.parse(object)._itemCount);
        let numItems = project.itemCount;
        console.log('item count = ' + numItems);
        const itemKey = projectKey + ITEM_KEY;
        let currentCount = 0;
        if(numItems > 0) {
          for(let i = 0; i < numItems; i++) {
            (console.log('SURE' + itemKey + i));
            if(localStorage.getItem(itemKey + i.toString())) {
              let object = window.localStorage.getItem(itemKey + i.toString());
              items.newTodoItem(JSON.parse(object)._title, JSON.parse(object)._description, 
              JSON.parse(object)._dueDate, JSON.parse(object)._priority, JSON.parse(object)._itemKey);
            }
          }
        }
      }
      return items
    }

      return {
        initDefaultItems,
        setItemCount,
        saveItemToStorage,
        getItemKey,
        editItemToStorage,
        removeItemFromStorage,
        extractProjectName,
        loadProjectItems
      }
})();

export {TodoModule}