import { FC } from "react";
import { movieTypes } from "../../../services/api/entities/movie.type";
import { useMovieSearch } from "./use-movie-search";
import { MoviewDetails } from "./components/movie-details";
import { Input } from "./components/input";
import { Select } from "./components/select";

export const MoviewSearch: FC = () => {
    const {
        form,
        movie,
    } = useMovieSearch();

    return (
        <div className="max-w-lg w-full py-6 mx-auto">
            <form className="flex flex-col" onSubmit={form.handleSubmit}>
                <label className="mb-2">
                    Title:
                    <Input
                        type="text"
                        name="title"
                        onChange={form.handleChange}
                        value={form.values.title}
                    />
                </label>
                <label className="mb-2">
                    Year:
                    <Input
                        type="text"
                        name="year"
                        onChange={form.handleChange}
                        value={form.values.year}
                    />
                </label>
                <label className="mb-2">
                    Type:
                    <Select
                        type="text"
                        name="type"
                        onChange={form.handleChange}
                        value={form.values.type}
                        options={movieTypes.map((type) => ({ label: type, value: type }))}
                    />
                </label>

                <input className="shadow border-solid border-gray-800 border-2 rounded" type="submit" value="Search" />
            </form>
            {movie !== undefined ? <MoviewDetails data={movie} /> : null}
        </div>
    );
};
