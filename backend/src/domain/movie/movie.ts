import { MovieProvider } from "./movie.provider.type";
import { Movie, MovieFilters } from "./types";

export class MovieService {
    constructor(private provider: MovieProvider) { }

    findOne(filters: MovieFilters): Promise<Movie | null> {
        return this.provider.findOne(filters);
    }
}