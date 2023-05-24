import { Request, Router } from 'express';
import { UnprocessableEntity } from '../errors';

const TestRouter = Router();

TestRouter.get('/', (req: Request<{ test: boolean }>, res, next) => {
    try {
        const { test } = req.params;

        if (test) {
            res.json({
                test: 'World!'
            });
        } else {
            throw new UnprocessableEntity('Test error - wrong keyword.');
        }
    } catch (e) {
        next(e);
    }
});

export default TestRouter;