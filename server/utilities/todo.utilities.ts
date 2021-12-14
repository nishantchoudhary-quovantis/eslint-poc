import { Task } from '../models/task.model';

export class Utilities {
    public static isValid(task: Task) {
        if (task) {
            return true;
        }
    }
}
