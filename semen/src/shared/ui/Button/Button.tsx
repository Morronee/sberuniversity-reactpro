import {type ButtonHTMLAttributes, forwardRef, type ReactNode} from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}


export const Button = forwardRef<HTMLButtonElement, IProps>(({children, ...props}, ref) => {
    return (
        <button
            className={'border border-amber-600 py-3 px-2 rounded-lg bg-amber-600 text-white cursor-pointer'} {...props}
            ref={ref}>{children}</button>
    )
})