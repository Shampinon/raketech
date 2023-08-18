import NodeCache from 'node-cache';
import { MovieProvider } from "../../../domain/movie/movie.provider.type";
import { MovieFilters, Movie } from "../../../domain/movie/types";
import { config } from '../../../config';

export class CacheDecorator implements MovieProvider {
    private cache: NodeCache = new NodeCache({ stdTTL: config.omdb.cacheTTL });
    constructor(private component: MovieProvider) { }

    private getKey(filters: MovieFilters): string {
        return [filters.type, filters.title, filters.year].join('/');
    }

    async findOne(filters: MovieFilters): Promise<Movie | null> {
        const key = this.getKey(filters);
        const cachedValue = this.cache.get<Movie>(key);

        if (cachedValue) {
            return cachedValue;
        }

        const res = await this.component.findOne(filters);

        this.cache.set(key, res);

        return res;
    }
}