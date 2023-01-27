import { TodoItemList } from "./item-list";

class Project {
    constructor(name, date, key, itemCount) {
        this.name = name;
        this.date = date;
        this.key = key;
        this.itemCount = itemCount;
        const todoList = new TodoItemList()
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    };

    set date(value) {
        this._date = value;
    }

    get date() {
        return this._date;
    };

    set key(value) {
        this._key = value;
    }

    get key() {
        return this._key;
    };

    set itemCount(value) {
        this._itemCount = value;
    }

    get itemCount() {
        return this._itemCount;
    }

    get todoList() {
        return this.todoList;
    }

    addItem() {
        this._itemCount++;
    }

    deleteItem() {
        this._itemCount--;
    }
};

class ProjectList {
    constructor(){
        this.projects = [];
    }

    newProject(name, date, key) {
        let project = new Project(name, date, key);
        this.projects.push(project);
        return project;
    }

    get allProjects(){
        return this.projects;
    }

    get numberOfProjects() {
        return this.projects.length;
    }

    projectAtIndex(index){
        return this.projects.at(index);
    }

    removeItemAt(index) {
        if(index > -1){
            this.projects.splice(index, 1);
        }
    }

    get lastProjectName(){
        return this.projects.at(this.projects.length - 1).name;
    }

    get lastProjectDate(){
        return this.projects.at(this.projects.length - 1).date;
    }

    get lastProject(){
        return this.projects.at(this.projects.length -1);
    }

    projectNameAt(index) {
        return this.projects.at(index).name;
    }

    projectDateAt(index) {
        return this.projects.at(index).date;
    }

    projectKeyAt(index) {
        return this.projects.at(index).key;
    }
    
    itemCountAt(index) {
        return this.projects.at(index).itemCount;
    }
}

export {Project, ProjectList};