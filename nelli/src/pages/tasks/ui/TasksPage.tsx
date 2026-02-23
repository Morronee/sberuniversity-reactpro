import {TasksWidget} from "widgets/tasks";

export const TasksPage = () => {
    return (
        <div className={'p-8'}>
            <h1 className={'mb-4'}>Мои задачи</h1>

            <TasksWidget />
        </div>
    )
}