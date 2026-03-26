import {useEffect, useRef} from "react";
import {Button} from "shared/ui/Button";
import {DateTime} from 'luxon'

interface ClickData {
    timestamp: number | null;
    clickCount: number;
}

export const ClickTimer = () => {
    const clickDataRef = useRef<ClickData>({
        timestamp: null,
        clickCount: 0,
    });


    useEffect(() => {
        clickDataRef.current.timestamp = Date.now();
    }, [])


    const handleClick = () => {
        clickDataRef.current.clickCount++;

        console.group('ClickTimer');
        console.log("clickCount: ", clickDataRef.current.clickCount);
        if (clickDataRef.current.timestamp !== null) {
            const timestampFormatted = DateTime.fromMillis(clickDataRef.current.timestamp)
            console.log("differenceFromStart: ", DateTime.now().diff(timestampFormatted, ["minutes", "seconds"]).toObject());
        }
        console.groupEnd();
    }

    return (
        <div className={'p-2'}>
            <Button onClick={handleClick}>Click</Button>
        </div>
    )
}