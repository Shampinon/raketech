import { Router } from 'express';

import { movieRouter } from './movie/movie.router';

export const router = Router();

router.use('/movie', movieRouter);

