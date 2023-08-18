import { MovieService } from "../../domain/movie/movie";
import { OMDBMovieProvider } from "../../ports/omdb/movie/movie.provider";
import { CacheDecorator as MovieProviderCacheDecorator } from "../../ports/omdb/movie/cache.decorator";

const services = {
    'movie': new MovieService(new MovieProviderCacheDecorator(new OMDBMovieProvider())),
} as const;

type ServiceName = keyof typeof services;

export const getService = (name: ServiceName): typeof services[typeof name] => services[name];
