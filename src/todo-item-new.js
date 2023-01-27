class TodoItemKey {
    constructor(title, description, dueDate, priority, isChecked, itemKey) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isChecked = isChecked;
        this.itemKey = itemKey;
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

    set isChecked(value) {
        this._isChecked = value;
    }

    get isChecked() {
        return this._isChecked;
    }

    set itemKey(value) {
        this._itemKey = value;
    }

    get itemKey() {
        return this._itemKey;
    }
}

export {TodoItemKey};