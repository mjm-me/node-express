import { createServer } from 'node:http';
import type { ServerResponse } from 'node:http';
import 'dotenv/config';
import createDebug from 'debug';
import { HtmlError } from './error.js';
import { createHtmlString } from './template.js';

import { app } from './app.js';

const debug = createDebug('app:server');
debug('Iniciando servidor...');
const PORT = process.env.PORT || 3000;

const listenManager = () => {
  const addr = server.address();
  if (addr === null) return;
  let bind: string;
  if (typeof addr === 'string') {
    bind = 'pipe ' + addr;
  } else {
    bind =
      addr.address === '::'
        ? `http://localhost:${addr?.port}`
        : `${addr.address}:${addr?.port}`;
  }
  console.log(`Server listening on ${bind}`);
  debug(`Servidor escuchando en ${bind}`);
};

const errorManager = (error: HtmlError, response: ServerResponse) => {
  if ('status'! in error) {
    error = {
      ...error,
      statusCode: 500,
      status: 'Internal Server Error',
    };
  }

  debug(error.message, error.statusCode, error.status);

  const html = createHtmlString('Error', 'Error', error.message);
  response.statusCode = error.statusCode;
  response.statusMessage = error.status;
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.end(html);
};

const server = createServer(app);
server.listen(PORT);
server.on('listening', listenManager);
server.on('error', errorManager);
