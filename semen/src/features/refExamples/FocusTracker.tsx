import {Input} from "shared/ui/Input";
import {Button} from "shared/ui/Button";
import {useRef} from "react";

interface IFocusCounterRef {
    focusCounter: number;
}

export const FocusTracker = () => {
    const firstInputRef = useRef<HTMLInputElement>(null)
    const focusCounterRef = useRef<IFocusCounterRef>({
        focusCounter: 0,
    })

    const handleFocus = () => {
        focusCounterRef.current.focusCounter++
        console.log(focusCounterRef.current.focusCounter)
    }

    const handleClick = () => {
        firstInputRef.current?.focus()
    }


    return (
        <div className={'p-12'}>
            <div className={'flex gap-4'}>
                <Input onFocusCapture={handleFocus} ref={firstInputRef} />
                <Input onFocusCapture={handleFocus}/>
            </div>

            <div className={'flex justify-center mt-4'}>
                <Button onClick={handleClick}>Сфокусировать на первом</Button>
            </div>
        </div>
    )
}