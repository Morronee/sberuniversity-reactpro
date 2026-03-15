import {forwardRef} from "react";
import type {InputHTMLAttributes} from "react";
import clsx from "clsx";

type TProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, TProps>(({className, ...props}, ref) => {
    return <input className={clsx('py-2 px-3 bg-amber-50 rounded-lg border border-amber-600 w-full', className)} ref={ref} {...props} />;
});