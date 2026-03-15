import type {FC, InputHTMLAttributes} from "react";
import {Input} from "shared/ui/Input";
import clsx from "clsx";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

export const FormInput: FC<IProps> = ({error, className, ...props}) => {

    return (
        <div className={'relative'}>
            <Input className={clsx(error && 'border-red-500 bg-red-100', 'focus:outline-none', className)} {...props}/>
            {error && <p className={'absolute text-[8px] text-red-400'}>{error}</p>}
        </div>
    )
}