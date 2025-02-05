import { resolve } from 'path';
import express from 'express';

export const app = express();
const debug = createDebug('demo:app');

app.disabled('x-powered-by');

app.use((req: Request, _res: Response, next: NextFunction) => {
    debug(req.method, req.url):
    next()
})

const controller = (req: Request, res: Response) => {
  res.send('Hola mundo');
};

app.get('/', controller);
app.post('/');
app.patch('/');
app.put('/');
app.delete('/');

app.use('*', (req: Request, res: Response) => {
  res.status(405);
  res.setHeader('Content Type', 'text/plain; charset=utf-8');
  res.send('Method not allowed');
});
