import express, { Request, Response } from 'express';
import loginRouter from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['string'] }))
app.use(loginRouter);

app.listen(3000, (): void => {
    console.log('Server started at port 3000')
})