import { TodoItemList } from "./item-list";
import { loadTodoCard } from "./todo-item-card";
import { TodoItemKey } from './todo-item-new';
import { TodoItem } from "./todoitem";

const ITEM_COUNT_KEY = 'itemCount';
const ITEM_KEY = 'item';
const PROJECT = 'project';
let itemCount = 0;

function setItemCount(){
  if (!localStorage.getItem(ITEM_COUNT_KEY)) {
    window.localStorage.setItem(ITEM_COUNT_KEY, 0);
    return 0;
  } else {
    console.log('storage: ' + window.localStorage.getItem(ITEM_COUNT_KEY));
    return window.localStorage.getItem(ITEM_COUNT_KEY);
  }
}

function showItems(){

  for(let i=0; i<itemList.numberOfTodoItems; i++) {
    container.appendChild(loadTodoCard(
      itemList.itemAtIndexTitle(i),
      itemList.itemAtIndexDescription(i),
      itemList.itemAtIndexDueDate(i),
      itemList.itemAtIndexPriority(i)),
      itemList.itemAtIndexId(i))
  }
  return container;
}

function saveItemToStorage(title, description, date, priority) {
  let itemKey = ITEM_KEY + itemCount.toString();
  const item = new TodoItemKey(title, description, date, priority, itemKey);
  window.localStorage.setItem(itemKey, JSON.stringify(item));
  console.log()
  itemCount++;
  console.log('save item count: ' + itemCount);
  window.localStorage.setItem(ITEM_COUNT_KEY, itemCount);
}

function loadProjectItems(key, counter) {
  let key1 = 'project7item0';
  let key2 = 'project7item1';
  let project0ItemCount = 2

  const items = new TodoItemList();
  let itemKeyArray = Array();

  /*const item1 = new TodoItemKey('Today', 'What', '4/1/22', 'high', key1);
  console.log(item1.dueDate);
  window.localStorage.setItem(key1, JSON.stringify(item1));

  const item2 = new TodoItemKey('MyTitle2', 'MyDescript2', '4/2/22', 'medium', key2);
  window.localStorage.setItem(key2, JSON.stringify(item2));*/

  for(let i = 0; i < counter; i++) {
    //let object = window.localStorage.getItem('project0' + ITEM_KEY + i.toString());
    let object = window.localStorage.getItem(key);
    items.newTodoItem(JSON.parse(object)._title, JSON.parse(object)._description, 
    JSON.parse(object)._dueDate ,JSON.parse(object)._priority, JSON.parse(object)._itemKey);
    console.log('ITEM TITLE: ' + items.itemAtIndexTitle(i));
  }
  return items
}

function populateTodoItems(items) {
  const parent = document.querySelector('.main');
  const container = document.createElement('div');
  container.classList.add('todo-list-container');
  console.log('number of items: ' + items.numberOfTodoItems);
  for(let i = 0; i< items.numberOfTodoItems; i++) {
    container.appendChild(loadTodoCard(
      items.itemAtIndexTitle(i),
      items.itemAtIndexDescription(i),
      items.itemAtIndexDueDate(i),
      items.itemAtIndexPriority(i),
      items.itemAtIndexKey(i)));
  }
  parent.appendChild(container);
  //return container;
}

function removeTodoItem(key) {
  const main = document.querySelector('.main');
  main.replaceWith(showItems());
  itemList.removeItemById(key);
  window.localStorage.removeItem(key);
}

function initList(){
  let itemList = new TodoItemList();
}

export {initList, showItems, saveItemToStorage, loadProjectItems,populateTodoItems, removeTodoItem};