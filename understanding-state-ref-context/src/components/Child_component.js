import React from "react";
import GrandChild from "./GrandChild_component";
function Child() {
    console.log('child rendered');
    return (
      <div className="App">
        <h1>child component</h1>
        <GrandChild></GrandChild>
      </div>
    );
  }
export default React.memo(Child);