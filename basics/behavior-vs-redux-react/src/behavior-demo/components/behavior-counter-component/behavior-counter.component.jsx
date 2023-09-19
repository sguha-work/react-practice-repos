import { useEffect, useState } from "react";
import CounterSubject from "../../behavior-subject/counter.behavior-subject";
export default function BehaviorCounterComponent(props) {
  const [currentValue, setCurrentValue] = useState(0);
  useEffect(() => {
    CounterSubject.subscribe((value) => {
      console.timeEnd();
      setCurrentValue(value ?? 0);
    });
  }, []);
  useEffect(
    () => () => {
      CounterSubject.unsubscribe();
    },
    []
  );
  return (
    <>
      <h3>{currentValue}</h3>
    </>
  );
}
