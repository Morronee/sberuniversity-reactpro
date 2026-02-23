import type {IOptions} from "shared/ui/FilterButton";

interface IProps<T extends string> {
    value: T,
    options: Array<IOptions<T>>
    setValue: (value: T) => void
}

export const FilterButton = <T extends string>({value, setValue, options}: IProps<T>) => {

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value as T);
    };

    return (
        <div className={'px-2 py-2 bg-amber-100 rounded-lg mb-4 w-fit cursor-pointer'}>
            <select onChange={handleOnChange} value={value} className={'outline-none focus:outline-none'}>
                {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
        </div>
    )
}