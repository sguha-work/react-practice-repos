import { useEffect, useRef, useState } from "react";
import CounterContext from "../contexts/Counter_context";
import Child from "./Child_component";
// The counter context which is created globally will pass the value of 'counter' from parent to every nested children component
function Parent() {
    const [counter, setCounter] = useState(0);
    const x = useRef(0); // we have to use useRef here otherwise the value of x will reset to 0 every time the component rerender
    
    useEffect(() => {// this useEffect will be called only once when the component loads for the first time
      window.setInterval(() => {
        x.current = x.current + 1;
        setCounter(x.current);
      }, 1000);
    }, []);
  
    return (
      <CounterContext.Provider value={counter}> 
      <div className="App">
        <h1>parent component</h1>
        <label>value--{counter}</label>
        <Child></Child>
      </div>
      </CounterContext.Provider>
    );
  }
  export default Parent;
  