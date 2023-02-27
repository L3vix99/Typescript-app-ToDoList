export class Task {
    public title: string;
    public done:  boolean;
    public category?: Category;
    private createdAt: Date;


    constructor(title: string,
         done: boolean,
        category: Category = Category.GENERAL
        ) {
        this.title = title;
        this.done = done;
        this.category = category;
        this.createdAt = new Date;
       

    }

    LogCreationDate(extra: string){
        console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`);
    }
}

export enum Category {
    GENERAL = "general",
    WORK = "work",
    GYM = "gym",
    HOBBY = "hobby",
    SOCIAL = "social",
}