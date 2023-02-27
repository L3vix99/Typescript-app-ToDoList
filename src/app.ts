import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.js";
import { render as renderCategories } from "./helpers/render-categories.js";


const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addbuttonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [Category.GENERAL, Category.GYM, Category.HOBBY, Category.SOCIAL, Category.WORK];


const tasks: Task[] = [
    new Task("wyrzucić śmieci", false),
    new Task("Nakarmić psa", false, Category.WORK),
    new Task("pójść na siłkę", false, Category.GYM),
    ];



const addTask = (task: Task) => {
    tasks.push(task);
}

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}

addbuttonElement.addEventListener("click", (e: Event) => {
    e.preventDefault();
    const newTask: Task =  new Task(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.LogCreationDate("!!!!");
    renderTasks(tasks, tasksContainerElement);
});


renderCategories(
    categories,
    categoriesContainerElement,
    updateSelectedCategory
);
renderTasks(tasks, tasksContainerElement);





