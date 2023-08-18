import { Request, Response, NextFunction } from 'express';

import { getService } from '../services';

type Context = {
    getService: typeof getService,
};

declare module 'express-serve-static-core' {
    interface Request {
        context: Context
    }
}

export const contextMiddleware = (req: Request, _: Response, next: NextFunction): void => {
    req.context = {
        getService,
    };

    next();
}