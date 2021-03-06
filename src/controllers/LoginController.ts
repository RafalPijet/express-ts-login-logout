import { Request, Response, NextFunction } from 'express';
import { controller, get, use, bodyValidator, post } from './decorators';

@controller('/auth')
class LoginController {
    @get('/login')
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
    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response): void {
        const { email, password } = req.body

        if (email && password) {
            req.session = { loggedIn: true };
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    }
    @get('/logout')
    getLogout(req: Request, res: Response): void {
        req.session = { loggedIn: false };
        res.redirect('/');
    }
}