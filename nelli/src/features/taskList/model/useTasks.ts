import {useCallback, useEffect, useMemo, useState} from "react";
import type {Task} from "entities/task";
import {useGetTasksQuery} from "entities/task/api/tasksApi.ts";


export type Filter = 'all' | 'completed' | 'incomplete';

export const mockTasks: Task[] = [
    {
        id: "1",
        title: "Купить продукты",
        completed: false
    },
    {
        id: "2",
        title: "Сходить в спортзал",
        completed: true
    },
    {
        id: "3",
        title: "Прочитать книгу",
        completed: false
    },
    {
        id: "4",
        title: "Ответить на письма",
        completed: false
    },
    {
        id: "5",
        title: "Заплатить за интернет",
        completed: true
    },
    {
        id: "6",
        title: "Позвонить родителям",
        completed: false
    },
    {
        id: "7",
        title: "Подготовить отчет",
        completed: true
    },
    {
        id: "8",
        title: "Убраться в квартире",
        completed: false
    },
    {
        id: "9",
        title: "Купить подарок другу",
        completed: false
    },
    {
        id: "10",
        title: "Записаться к врачу",
        completed: true
    }
];

export const useTasks = (): {
    tasks: Task[];
    filter: Filter;
    setFilter: (filter: Filter) => void;
    removeTask: (id: Task['id']) => void;
} => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<Filter>('all');

    const {data: remoteTasks = []} = useGetTasksQuery()

    useEffect(() => {
        if (remoteTasks.length > 0 && tasks.length === 0) {
            setTasks(remoteTasks)
        }
    }, [remoteTasks]);

    const removeTask = useCallback((id: string) => {
        setTasks((prevState) => prevState.filter(task => task.id !== id));
    }, [])

    const filteredTasks = useMemo(() => {
        switch (filter) {
            case "completed": {
                return tasks.filter(task => task.completed)
            }

            case "incomplete": {
                return tasks.filter(task => !task.completed)
            }

            default: {
                return tasks
            }

        }
    }, [tasks, filter]);

    return {
        tasks: filteredTasks, filter, removeTask, setFilter
    }
}