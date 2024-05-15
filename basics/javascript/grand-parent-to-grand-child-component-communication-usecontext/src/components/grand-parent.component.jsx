import { useState } from "react";
import ParentComponent from "./parent.component"
import MyContext from "../contexts/context";

function GrandParentComponent() {
  const [grandParentValue, setGrandParentValue] = useState("");
  const grandParentValueChanged = (event) => {
    setGrandParentValue(event.target.value);
  }
  return (
    <MyContext.Provider value={grandParentValue}>
      <div>
        <h1>GrandParentComponent</h1>
        <p>
          <label>Grand Parent input box &nbsp:</label>
          <input type="text" value={grandParentValue} onChange={grandParentValueChanged}></input>
        </p>
        <ParentComponent grandParentValue={grandParentValue}></ParentComponent>
      </div>
    </MyContext.Provider>
  )
}

export default GrandParentComponent