import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCounter, setCounter } from "../../redux/actions/counter.action";
export default function ReduxButtonCompoent() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let currentValue;
    useEffect(() => {
        dispatch(fetchCounter());
    }, []);
    useEffect(() => {
        if (state.counter.data != null) {
            currentValue = state.counter.data ?? 0;
        }
    }, [state.counter.data]);
    const increaseValue = () => {
        currentValue += 1;
        console.time();
        dispatch(setCounter(currentValue));
    };
    return (
        <>
            <button onClick={increaseValue}>Click me to increase value</button>
        </>
    );
}