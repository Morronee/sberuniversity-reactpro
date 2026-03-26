import {Input} from "shared/ui/Input";
import {useRef, useState} from "react";

interface IPreviousInputDataRef {
    previousInputData: string;
}

export const PreviousInput = () => {
    const [value, setValue] = useState<string>('');

    const inputRef = useRef<IPreviousInputDataRef>({
        previousInputData: value,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        inputRef.current.previousInputData = value;
    }


    return (
        <div className={'p-2'}>
            <div>Предыдущее значение: {inputRef.current.previousInputData} </div>
            <Input className={'focus:outline-none'} onChange={handleChange} value={value} />
        </div>
    )
}