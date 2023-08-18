export type MovieRating = {
    Source: string;
    Value: string;
}

export type Movie = {
    'imdbID': string,
    'Title': string;
    'Year': string
    'Rated': string
    'Released': Date
    'DVD': Date,
    'Runtime': string
    'Genre': string
    'Director': string
    'Writer': string
    'Actors': string
    'Plot': string
    'Language': string
    'Country': string
    'Awards': string
    'Poster': string
    'Ratings': MovieRating[],
    'Metascore': string,
    'imdbRating': string,
    'imdbVotes': string,
    'Type': MovieType,
    'BoxOffice': string,
    'Production': string,
    'Website': string,
}

export const movieTypes = ['movie', 'series', 'episode'] as const;

export type MovieType = typeof movieTypes[number];

export type MovieFilters = {
    title: string;
    year?: string;
    type?: MovieType;
};
