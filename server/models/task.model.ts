export interface TaskModel {
    id: number;
    title: string;
    description: string;
    completedOn: string;
    createdOn: string;
    isComplete: boolean;
}

export class Task {
    id: number;
    title: string;
    description: string;
    completedOn: string;
    createdOn: string;
    isComplete = false;

    constructor(data: TaskModel) {
        this.upsertTask(data);
    }

    public markAsComplete() {
        this.isComplete = true;
        this.completedOn = Date.now().toString();
        return this;
    }

    public upsertTask(data: TaskModel) {
        console.log(data);
        this.id = data && data.id ? data.id : null;
        this.title = data && data.title ? data.title : null;
        this.description = data && data.description ? data.description : null;
        this.completedOn = data && data.completedOn ? data.completedOn : null;
        this.createdOn = data && data.completedOn ? data.createdOn : Date.now().toString();
        this.isComplete = data && data.isComplete ? data.isComplete : false;
    }
}
