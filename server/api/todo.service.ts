import { Task } from '../models/task.model';
import { TaskRepository } from './task.repository';
import { Utilities } from '../utilities/todo.utilities';
export class ToDoService {
    // ideally these functions should return promises

    public static getTasks(): Task[] {
        return TaskRepository.getTaskList();
    }

    public static getTask(id: number): Task {
        return TaskRepository.get(id);
    }

    public static addTask(task: Task): number {
        if (Utilities.isValid(task)) {
            return TaskRepository.add(task);
        } else {
            // handle invalid task
        }
    }

    public static updateTask(task: Task): void {
        if (Utilities.isValid(task)) {
            TaskRepository.update(task);
        } else {
            // handle invalid task
        }
    }

    public static deleteTask(id: number): void {
        TaskRepository.remove(id);
    }
}
