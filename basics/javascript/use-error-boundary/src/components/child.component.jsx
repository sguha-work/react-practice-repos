import { useInterval } from 'usehooks-ts'
import { useState, useEffect } from 'react';
import { useErrorBoundary } from "react-error-boundary";
function ChildComponent() {
  const [counter, setCounter] = useState(0);
  const { showBoundary } = useErrorBoundary();
  // useInterval(() => {
  //     setCounter(counter + 1);
  //     console.log(counter);
  //     if(counter>14) {
  //       showBoundary(new Error("Wrong"));
  //     }
  //   }, 1000);
  useEffect(() => {
    window.setInterval(() => {
      setCounter((previousValueOfCounter) => {
        console.log(previousValueOfCounter, counter);// both will be 0
        if (previousValueOfCounter > 14) {
          showBoundary(new Error("Wrong"));
        }
        return previousValueOfCounter + 1;
      });
    }, 1000);

  }, [])
  return (
    <h1>{counter}</h1>
  )
}

export default ChildComponent;