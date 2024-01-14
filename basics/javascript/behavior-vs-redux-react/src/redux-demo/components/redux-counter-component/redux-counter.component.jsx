import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
export default function ReduxCounterCompoent () {
    const [counterDisplay, setCounterDisplay]=useState(0);
    const state = useSelector((state) => state);
    useEffect(() => {
        if (state.counter.data != null) {
            console.timeEnd();
            setCounterDisplay(state.counter.data);
        }
    }, [state.counter.data]);
    return(
        <h3>{counterDisplay}</h3>
    );
}