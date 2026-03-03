import {type Task, type TaskActions, TaskCard} from "entities/task";
import {FilePlusCorner} from "lucide-react";

interface IProps {
    data: Task[];
    onDelete: TaskActions['onClickDelete'];
}

export const TaskList = ({data, onDelete}: IProps) => {
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
            {data.map((task) => <TaskCard key={task.id} data={task} onDelete={onDelete}/>)}
        </div>
    )
}