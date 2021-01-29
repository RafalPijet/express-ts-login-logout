import { Request, Response, NextFunction } from 'express';
import { controller, get, use } from './decorators';

const exampleUse = (req: Request, res: Response, next: NextFunction) => {
    console.log('Testing of middleware');
    next();
}

@controller('/auth')
class LoginController {
    @get('/login')
    @use(exampleUse)
    getLogin(req: Request, res: Response): void {
        res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" />
            </div>
            <button>Submit</button>
        </form>
    `)
    }
}