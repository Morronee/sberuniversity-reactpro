import {Input} from "shared/ui/Input";
import {useEffect, useRef, useState} from "react";

interface ITimerRef {
    timerId: number | null;
}

export const DebouncedLogger = () => {
    const timerRef = useRef<ITimerRef>({
        timerId: null,
    })

    const [value, setValue] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value.trim())
    }


    useEffect(() => {
        timerRef.current.timerId && clearTimeout(timerRef.current.timerId);

        timerRef.current.timerId = setTimeout(() => {
            value && console.log(value)
            timerRef.current.timerId = null
        }, 1000)
    }, [value])

    return (
        <div className={'p-2'}>
            <Input value={value} onChange={handleChange} />
        </div>
    )
}