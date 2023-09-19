import { useEffect, useState, useRef } from "react";
import useVariableUpdate from "./hooks/useVariableUpdate.hook";
function App() {
  const [counter, setCounter] = useState(0);
  const x = useRef(0);
  useEffect(() => {
    window.setInterval(() => {
      x.current = x.current + 1;
      setCounter(x.current);
    }, 1000);
  },[]);
  useVariableUpdate(counter);  
  return (
    <div>
      <h1>Here is a custom hook which print the changes of a variable</h1>
      <label>{counter}</label>
    </div>
  );
}

export default App;
