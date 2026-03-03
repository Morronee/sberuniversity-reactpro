import type {Task} from "entities/task";
import clsx from "clsx";
import type {ReactNode} from "react";

interface IProps {
    data: Task,
    children: ReactNode,
}

export const TaskCard = ({data, children}: IProps) => {
    const {title, completed} = data


    return (
        <div
            className={clsx('flex justify-between items-center px-3 py-2 bg-amber-100 rounded-lg', completed && 'opacity-50')}>
            <span className={clsx(completed && 'line-through')}>{title}</span>

            <div className={'flex gap-2 items-center'}>
                {children}
            </div>
        </div>

    )
}