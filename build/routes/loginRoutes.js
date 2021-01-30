"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
};
var router = express_1.Router();
// router.get('/login', (req: Request, res: Response) => {
//     res.send(`
//         <form method="POST">
//             <div>
//                 <label>Email</label>
//                 <input name="email" />
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input name="password" type="password" />
//             </div>
//             <button>Submit</button>
//         </form>
//     `)
// });
// router.post('/login', (req: RequestWithBody, res: Response) => {
//     const { email, password } = req.body
//     if (email && password) {
//         req.session = { loggedIn: true };
//         res.redirect('/');
//     } else {
//         res.redirect('/');
//     }
// })
// router.get('/', (req: Request, res: Response) => {
//     if (req.session && req.session.loggedIn) {
//         res.send(`
//             <div>
//                 <div>You are logged in</div>
//                 <a href="/logout">Logout</a>
//             </div>
//         `)
//     } else {
//         res.send(`
//             <div>
//                 <div>You are not logged in</div>
//                 <a href="/login">Login</a>
//             </div>
//     `)
//     }
// })
// router.get('/logout', (req: Request, res: Response) => {
//     req.session = { loggedIn: false };
//     res.redirect('/');
// })
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user');
});
exports.default = router;
