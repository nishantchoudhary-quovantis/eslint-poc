import { ToDoService } from './todo.service';

export class ToDoApi {
    public static getAllTasks(req, res) {
        const temp = 10;
        return res.status(200).json(ToDoService.getTasks());
    }

    public static getTask(req, res) {
        const id = Number(req.params['id']);
        return res.status(200).json(ToDoService.getTask(id));
    }

    public static createTask(req, res) {
        const task = req.body;
        const id = ToDoService.addTask(task);
        return res.status(200).json({ id });
    }

    public static updateTask(req, res) {
        const task = req.body;
        const id = ToDoService.addTask(task);
        return res.status(200).json({ id });
    }
}
