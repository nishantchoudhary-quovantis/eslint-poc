import { Task } from '../models/task.model';

export class TaskRepository {
    private static _taskList: Task[] = [];

    // Task methods
    public static get(id: number): Task {
        const task = this._taskList.find((task) => task.id === id);
        console.log(id, this._taskList, task);
        return task;
    }

    public static add(task: Task): number {
        task.id = this._taskList.length + 1;
        this._taskList.push(new Task(task));
        return task.id;
    }

    public static remove(id: number): void {
        this._taskList = this._taskList.filter((task) => task.id !== id);
    }

    public static update(task: Task): void {
        const taskIndex = this._taskList.findIndex((item) => item.id === task.id);
        this._taskList[taskIndex] = task;
    }

    // Task List methods
    public static getTaskList(): Task[] {
        return this._taskList;
    }
}
