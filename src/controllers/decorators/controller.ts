import 'reflect-metadata';
import { Request, Response, RequestHandler, NextFunction } from 'express';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

const bodyValidator = (keys: string): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {

        if (!req.body) {
            res.status(422).send('Invalid request!!! Body is empty!!!');
            return;
        }

        for (let key of keys) {

            if (!req.body[key]) {
                res.status(422).send(`Missing property ${key}`);
                return;
            }
        }
        next();
    }
}

export const controller = (routePrefix: string) => {
    return (target: Function) => {
        const router = AppRouter.getInstance();

        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
            const requairedBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];
            const validator = bodyValidator(requairedBodyProps);

            if (path) {
                router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
            }
        }
    }
}