import { Movie, MovieFilters } from './types';

export interface MovieProvider {
    findOne(filters: MovieFilters): Promise<Movie | null>
}