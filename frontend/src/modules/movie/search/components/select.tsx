import { FC, InputHTMLAttributes } from "react";
import cn from 'classnames';

type Props = InputHTMLAttributes<HTMLSelectElement> & {
    options: { label: string; value: string }[]
}

export const Select: FC<Props> = ({ className, options, ...props }) => (
    <select
        {...props}
        className={cn("shadow border-solid border-gray-800 border-2 rounded ml-2 p-1", className)}
    >
        {options.map(({ label, value }) => <option value={value} key={value}>{label}</option>)}
    </select>
);