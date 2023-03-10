import { Task } from "../types/types";

 const renderTasks = (tasks: Task[], tasksContainerElement: HTMLElement) => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement("li");
        if(task.category){
        taskElement.classList.add(task.category);
        }
        const id: string = `task-${index}`;
       const labelElement: HTMLLabelElement = document.createElement("label");
       labelElement.innerText = task.title;
       labelElement.setAttribute("for", id);

        const checkboxElement: HTMLInputElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.title = "task.title";
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", ()=> {
            task.done = !task.done;
        });

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);


        tasksContainerElement.appendChild(taskElement);


    });
};

export default renderTasks;