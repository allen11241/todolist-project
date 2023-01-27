import { TodoItemKey } from "./todo-item-new";
import { TodoItem } from "./todoitem";

class TodoItemList {
    constructor(){
        this.todoItems = [];
    }

    newTodoItem(title, description, dueDate, priority, key){
        let todo = new TodoItemKey(title, description, dueDate, priority, key)
        this.todoItems.push(todo);
        return todo;
    }

    get allTodoItems(){
        return this.todoItems;
    }

    get lastItemTitle(){
        return this.todoItems.at(this.todoItems.length - 1).title;
    }

    get lastItemDescription(){
        return this.todoItems.at(this.todoItems.length - 1).description;
    }

    get lastItemDueDate(){
        return this.todoItems.at(this.todoItems.length - 1).dueDate;
    }

    get lastItemPriority(){
        return this.todoItems.at(this.todoItems.length - 1).priority;
    }

    get lastItemKey () {
        return this.todoItems.at(this.todoItems.length - 1).key;
    }

    itemAtIndex(index) {
        return this.todoItems.at(index);
    }

    itemAtIndexTitle(index) {
        return this.todoItems.at(index).title;
    }

    itemAtIndexDescription(index) {
        return this.todoItems.at(index).description;
    }

    itemAtIndexDueDate(index) {
        return this.todoItems.at(index).dueDate;
    }

    itemAtIndexPriority(index) {
        return this.todoItems.at(index).priority;
    }

    itemAtIndexKey(index) {

        return this.todoItems.at(index).itemKey;
    }

    get numberOfTodoItems(){
        return this.todoItems.length;
    }

    removeItemAt(index) {
        if(index > -1){
            this.todoItems.splice(index, 1);
        }
    }

    removeItemByKey(key) {
        for(let i = 0; i < this.todoItems.length; i++) {
            if(this.todoItems[i].itemId == key) {
                console.log('item removed');
                this.removeItemAt(i);
            }
        }
    }
}

export {TodoItemList};