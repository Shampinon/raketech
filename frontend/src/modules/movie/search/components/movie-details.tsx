import { FC } from "react"
import { Movie } from "../../../../services/api/entities/movie.type"

type Props = {
    data: Movie;
};

export const MoviewDetails: FC<Props> = (props) => {
    return (
        <div className="mt-8 p-2 shadow border-solid border-gray-800 border-2 rounded">
            {Object.entries(props.data).map(([key, value]) => (
                <div className="mb-2 flex">
                    <div className="grow basis-1 mr-2">{key}:</div>
                    <div className="grow basis-2 text-ellipsis overflow-hidden">{value.toString()}</div>
                </div>
            ))}
        </div>
    )
};