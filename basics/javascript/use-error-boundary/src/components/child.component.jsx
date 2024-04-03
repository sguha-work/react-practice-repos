import { useInterval } from 'usehooks-ts'
import { useState } from 'react';
import { useErrorBoundary } from "react-error-boundary";
function ChildComponent() {
    const [counter, setCounter] = useState(0);
    const { showBoundary } = useErrorBoundary();
    useInterval(() => {
        setCounter(counter + 1);
        console.log(counter);
        if(counter>15) {
          showBoundary(new Error("Wrong"));
        }
      }, 1000);
  return (
    <h1>{counter}</h1>
  )
}

export default ChildComponent;