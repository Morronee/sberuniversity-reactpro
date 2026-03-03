export interface Task {
    id: string;
    title: string;
    completed: boolean;
}

export interface TaskActions {
    onClickCheckbox?: (id: Task['id']) => void,
    onClickDelete: (id: Task['id']) => void,
}