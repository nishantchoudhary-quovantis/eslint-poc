import express from 'express';
import cors from 'cors';
import { TaskRouter } from './api/todo.router';
const port = 5000;
const app = express();

app.use(cors());
const allowedOrigins = ['http://localhost:5000'];

const options: cors.CorsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(express.urlencoded());

app.use('/', TaskRouter.init());

app.listen(port, () => {
    console.log('app is running on port 5000');
});
