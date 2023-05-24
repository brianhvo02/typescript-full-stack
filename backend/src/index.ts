import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';
import TestRouter from './routes/test';
import { port } from './config';
import { ServerError } from './errors';

const app = express();

app.use(bodyParser.json());

app.use('/api/test', TestRouter);

app.use('/static', express.static(join(__dirname, '../../frontend/build/static')));

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../../frontend/build/index.html'));
});

app.use((err: ServerError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode).json({ error: err.message });
});

app.listen(port || 5000, () => {
    console.log(`App listening on port ${port || 5000}`);
})