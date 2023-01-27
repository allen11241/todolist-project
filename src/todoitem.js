import { loadTodoCard } from "./todo-item-card";

class TodoItem {
    constructor(title, description, dueDate, priority, itemId, projectId) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.itemId = itemId;
        this.projectId = projectId;
    }

    set title(value) {
        this._title = value;
    }

    get title() {
        return this._title;
    }

    set description(value) {
        this._description = value;
    }

    get description() {
        return this._description;
    }

    set dueDate(value) {
        this._dueDate = value;
    }

    get dueDate() {
        return this._dueDate;
    }

    set priority(value) {
        this._priority = value;
    }

    get priority() {
        return this._priority;
    }

    set itemId(value) {
        this._itemId = value;
    }

    get itemId() {
        return this._itemId;
    }

    set projectId(value) {
        this._projectId = value;
    }

    get projectId() {
        return this._projectId;
    }
}

export {TodoItem};