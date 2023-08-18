import { FC, InputHTMLAttributes } from "react";
import cn from 'classnames';

type Props = InputHTMLAttributes<HTMLInputElement>

export const Input: FC<Props> = (props) => (
    <input
        {...props}
        className={cn("shadow border-solid border-gray-800 border-2 rounded ml-2 p-1", props.className)}
    />
);