import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.js";
import { render as renderCategories } from "./helpers/render-categories.js";
const taskNameInputElement = document.querySelector("#name");
const addbuttonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [Category.GENERAL, Category.GYM, Category.HOBBY, Category.SOCIAL, Category.WORK];
const tasks = [
    new Task("wyrzucić śmieci", false),
    new Task("Nakarmić psa", false, Category.WORK),
    new Task("pójść na siłkę", false, Category.GYM),
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addbuttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.LogCreationDate("!!!!");
    renderTasks(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
