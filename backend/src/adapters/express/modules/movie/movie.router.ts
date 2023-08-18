import { Router, Request, Response, NextFunction } from 'express';

import { Movie } from '../../../../domain/movie/types';

import { MovieFilters, movieFiltersDto } from './movie.dto';

export const movieRouter = Router();

const pipeMovieFiltersParams = (req: Request, res: Response, next: NextFunction): void => {
    try {
        req.query = movieFiltersDto.parse(req.query);
        next();

        return;
    } catch (e) {
        res.status(400).send(e);

        return;
    }
};

const getMovieController = async <
    Res extends Response<Movie>,
    Req extends Request<
        Record<string, unknown>,
        Res, unknown, MovieFilters
    >>(req: Req, res: Res): Promise<void> => {
    const service = req.context.getService('movie');

    try {
        const movie = await service.findOne(req.query);

        if (!movie) {
            res.status(404).send();

            return;
        }

        res.status(200).json(movie);

        return;
    } catch (e) {
        res.status(500).send(e);

        return;
    }
}

movieRouter.get('/', pipeMovieFiltersParams, getMovieController);