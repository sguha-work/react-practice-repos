import CounterSubject from "../../behavior-subject/counter.behavior-subject";
import { useEffect } from "react";

function Component1Component() {
    let currentValue;
    useEffect(() => {
        CounterSubject.subscribe((value) => {
            currentValue = value ?? 0;
        });
    }, []);
    const increaseValue = () => {
        currentValue += 1;
        CounterSubject.next(currentValue);
    };
    return (
        <div>
            <h2>This is component 1</h2>
            <button onClick={increaseValue}>Click me to increase counter</button>
        </div>
    )
}

export default Component1Component