import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/RootController';
import './controllers/LoginController';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['string'] }));
app.use(AppRouter.getInstance());

app.listen(3000, (): void => {
    console.log('Server started at port 3000')
})