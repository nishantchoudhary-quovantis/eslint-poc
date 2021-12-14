import express from 'express';
import { ToDoApi } from './todo.api';
export class TaskRouter {
    public static init() {
        const router = express.Router();
        router.get('/tasks', ToDoApi.getAllTasks);
        router.get('/task/:id', ToDoApi.getTask);
        router.post('/task', ToDoApi.createTask);
        router.put('/', ToDoApi.updateTask);
        return router;
    }
}
