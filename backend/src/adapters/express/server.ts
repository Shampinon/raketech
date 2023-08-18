import type { Server } from 'http';

import express from 'express';
import cors from 'cors';

import { config } from '../../config';

import { contextMiddleware } from './middleware/context.middleware';
import { router } from './modules';

const port = config.port;
const host = config.host;

const app = express();

app.use(cors());
app.use(contextMiddleware);
app.use(router);

export const init = (): Server => app.listen(port, host, () => {
    // eslint-disable-next-line
    console.log(`Server listening on port ${host}:${port}`);
});
