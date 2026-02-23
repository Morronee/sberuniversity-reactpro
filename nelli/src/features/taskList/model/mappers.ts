import type {IOptions} from "shared/ui/FilterButton";
import type {Filter} from "features/taskList/model/useTasks.ts";


export const mapFilterToOptions = (): Array<IOptions<Filter>> => {
    return [
        {
            value: "all",
            label: "Все",
        },
        {
            value: "completed",
            label: "Выполненные",
        },
        {
            value: "incomplete",
            label: "В процессе",
        }
    ]
}