import { BehaviorSubject } from "rxjs";
import CounterSubject from "../../behavior-subject/counter.behavior-subject";
import { useEffect } from "react";
export default function BehaviorButtonComponent(props) {
  let currentValue;
  useEffect(() => {
    CounterSubject.subscribe((value) => {
      currentValue = value ?? 0;
    });
  }, []);
  const increaseValue = () => {
    currentValue += 1;
    console.time();
    CounterSubject.next(currentValue);
  };
  return (
    <>
      <button onClick={increaseValue}>Click me to increase value</button>
    </>
  );
}
