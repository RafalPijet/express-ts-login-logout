import express, { Request, Response } from 'express';
import loginRouter from './routes/loginRoutes';

const app = express();

app.use(loginRouter);

app.listen(3000, (): void => {
    console.log('Server started at port 3000')
})