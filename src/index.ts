import express, { Request, Response } from 'express';
import loginRouter from './routes/LoginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['string'] }))
app.use(loginRouter);
app.use(AppRouter.getInstance());

app.listen(3000, (): void => {
    console.log('Server started at port 3000')
})