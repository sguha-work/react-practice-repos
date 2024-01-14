import React from "react";
import { useContext } from "react";
import CounterContext from "./../contexts/Counter_context";
function GrandChild(props) {
    console.log('grand child rendered');
    const counter = useContext(CounterContext);
    return (
      <div className="App">
        <h1>grand child component</h1>
        <label>{counter}</label>
      </div>
    );
  }
export default React.memo(GrandChild);