import { Category }  from "../types/types.js";

const handleCategoryChange = (category: Category) => {

if(category === Category.GENERAL) {
    console.log("change general!");

}else if(category === Category.GYM) {
    alert("lecisz na silke");

}else if(category === Category.HOBBY) {
    document.body.style.background = "red";

}else if(category === Category.WORK) {
    console.log("change work!");
    alert("let's Go!");
    document.body.style.background = "green";

}else if(category === Category.SOCIAL) {
    document.body.style.background = "orange";
}
else {
    const never: never = category;
    console.log(never);
}}

export const render = (categories: Category[], 
    categoriesContainerElement: HTMLElement, 
    inputChangeCallBack: (category: Category) => void ) => {
    
    categories.forEach((category)=> {
        const categoryElement: HTMLElement = document.createElement("li");

        const radioInputElement: HTMLInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.title = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;

        radioInputElement.addEventListener("change", ()=> {
            inputChangeCallBack(category);
            handleCategoryChange(category);
        });


        const labelElement: HTMLLabelElement =document.createElement("label");
        labelElement.setAttribute("for",`category-${category}`);

        labelElement.innerHTML = category;

        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);

        categoriesContainerElement.appendChild(categoryElement);
    });
}



