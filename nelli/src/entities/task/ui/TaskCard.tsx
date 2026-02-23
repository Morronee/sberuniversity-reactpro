import type {Task, TaskActions} from "entities/task";
import {Checkbox} from "shared/ui/Checkbox";
import clsx from "clsx";
import {Trash} from "lucide-react";

interface IProps {
    data: Task,
    actions: TaskActions
}

export const TaskCard = ({data, actions}: IProps) => {
    const {title, completed} = data
    const {onClickDelete} = actions

    const handleOnClickDelete = () => {
        onClickDelete(data.id)
    }

    return (
        <div
            className={clsx('flex justify-between items-center px-3 py-2 bg-amber-100 rounded-lg', completed && 'opacity-50')}>
            <span className={clsx(completed && 'line-through')}>{title}</span>

            <div className={'flex gap-2 items-center'}>
                <Checkbox checked={completed}/>
                <div className={'p-1 cursor-pointer group'} onClick={handleOnClickDelete}>
                    <Trash className={'group-hover:text-red-700 transition'} size={18}/>
                </div>
            </div>
        </div>

    )
}