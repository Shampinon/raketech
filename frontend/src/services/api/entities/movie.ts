import { client } from '../client';
import { Movie, MovieFilters } from './movie.type';

const basePath = '/movie';

export const movieApi = {
    findOne: (filters: MovieFilters) => client.get<Movie>(basePath, { params: filters })
        .then(r => r.data),
};
