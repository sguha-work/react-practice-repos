import { useEffect, useState } from "react";
import CounterSubject from "../../behavior-subject/counter.behavior-subject";
function Component2Component() {
    const [currentValue, setCurrentValue] = useState(0);
    useEffect(() => {
        CounterSubject.subscribe((value) => {
            setCurrentValue(value ?? 0);
        });
    }, []);
    // useEffect(
    //     () => () => {
    //         CounterSubject.unsubscribe();
    //     },
    //     []
    // );
    return (
        <div>
            <h2>This is component 2</h2>
            <p>The value of counter is <b>{currentValue}</b></p>
        </div>
    )
}

export default Component2Component