"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var LoginRoutes_1 = __importDefault(require("./routes/LoginRoutes"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['string'] }));
app.use(LoginRoutes_1.default);
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log('Server started at port 3000');
});
