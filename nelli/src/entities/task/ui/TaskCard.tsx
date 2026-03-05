import type {Task, TaskActions} from "entities/task";
import {Checkbox} from "shared/ui/Checkbox";
import clsx from "clsx";
import {Trash} from "lucide-react";
import {memo} from "react";

interface IProps {
    data: Task,
    onDelete: TaskActions["onClickDelete"],
}

export const TaskCard = memo(({data, onDelete}: IProps) => {
    const {title, completed, id} = data

    return (
        <div
            className={clsx('flex justify-between items-center px-3 py-2 bg-amber-100 rounded-lg', completed && 'opacity-50')}>
            <span className={clsx(completed && 'line-through')}>{title}</span>

            <div className={'flex gap-2 items-center'}>
                <Checkbox checked={completed}/>
                <button className={'p-1 cursor-pointer group'} onClick={() => onDelete(id)}>
                    <Trash className={'group-hover:text-red-700 transition'} size={18}/>
                </button>
            </div>
        </div>
    )
})