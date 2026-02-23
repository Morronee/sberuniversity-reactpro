import clsx from "clsx";

type CheckboxProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type"
>;

export const Checkbox = (props: CheckboxProps) => {
    return (
        <input className={clsx(props.className, 'w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft')} type="checkbox" {...props}/>
    )
}