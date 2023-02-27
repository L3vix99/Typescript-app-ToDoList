export class Task {
    constructor(title, done, category = Category.GENERAL) {
        this.title = title;
        this.done = done;
        this.category = category;
        this.createdAt = new Date;
    }
    LogCreationDate(extra) {
        console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`);
    }
}
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
    Category["SOCIAL"] = "social";
})(Category || (Category = {}));
