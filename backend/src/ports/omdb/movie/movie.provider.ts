import { MovieProvider } from '../../../domain/movie/movie.provider.type';
import { MovieFilters, Movie } from '../../../domain/movie/types';
import { client } from '../client';

export class OMDBMovieProvider implements MovieProvider {
    async findOne(filters: MovieFilters): Promise<Movie | null> {
        const movieRes = await client.get('/', {
            params: {
                t: filters.title,
                type: filters.type,
                year: filters.year,
            }
        });

        if (movieRes.data.Response && Boolean(movieRes.data.Response) === false) {
            return null;
        }

        return movieRes.data;
    }
}