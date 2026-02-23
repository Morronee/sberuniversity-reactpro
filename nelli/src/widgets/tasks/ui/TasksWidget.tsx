import {mapFilterToOptions, TaskList, useTasks} from "features/taskList";
import {FilterButton} from "shared/ui/FilterButton";

export const TasksWidget = () => {
    const {tasks, removeTask, filter, setFilter} = useTasks()

    return (

        <div className={'w-75'}>
            <FilterButton options={mapFilterToOptions()} value={filter} setValue={setFilter}/>

            <TaskList data={tasks} actions={{onClickDelete: removeTask}}/>
        </div>
    )
}