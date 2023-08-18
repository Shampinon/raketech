import { useState } from "react";
import _omitBy from 'lodash/omitBy';
import { useFormik } from 'formik';
import { movieApi } from "../../../services/api";
import { MovieFilters, Movie } from "../../../services/api/entities/movie.type";

export const useMovieSearch = () => {
    const [movie, setMovie] = useState<Movie>();

    const form = useFormik<MovieFilters>({
        initialValues: {
            title: '',
            type: undefined,
            year: undefined,
        },
        validate: (values: MovieFilters) => values.title.length > 0 ? undefined : ({ title: 'Required' }),
        onSubmit: async (values: MovieFilters) => {
            const movie = await movieApi.findOne(_omitBy(values, v => v === undefined) as MovieFilters);

            setMovie(movie);
        },
    });

    return { movie, form }
}