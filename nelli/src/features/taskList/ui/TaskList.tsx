import {type Task, type TaskActions, TaskCard} from "entities/task";
import {FilePlusCorner, Trash} from "lucide-react";
import {Checkbox} from "shared/ui/Checkbox";

interface IProps {
    data: Task[];
    actions: TaskActions;
}

export const TaskList = ({data, actions}: IProps) => {
    if (!data || !data.length) {
        return (
            <div className={'flex flex-col items-center justify-center gap-2 text-gray-500'}>
                <FilePlusCorner size={18}/>
                <p className={'text-center text-[12px] select-none'}>Создайте свою первую задачу или сбросьте фильтр</p>
            </div>
        )
    }

    return (
        <div className={'flex flex-col gap-2'}>
            {data.map((task) => <TaskCard key={task.id} data={task}>
                <Checkbox checked={task.completed}/>
                <button className={'p-1 cursor-pointer group'} onClick={() => actions.onClickDelete(task.id)}>
                    <Trash className={'group-hover:text-red-700 transition'} size={18}/>
                </button>
            </TaskCard>)}
        </div>
    )
}