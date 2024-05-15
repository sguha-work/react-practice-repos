import { useState } from "react";
import ParentComponent from "./parent.component"

function GrandParentComponent() {
    const [grandParentValue, setGrandParentValue]=useState("");
    const grandParentValueChanged = (event)=>{
        setGrandParentValue(event.target.value);
    }
  return (
    <div>
        <h1>GrandParentComponent</h1>
        <p>
            <label>Grand Parent input box &nbsp:</label>
            <input type="text" value={grandParentValue} onChange={grandParentValueChanged}></input>
        </p>
        <ParentComponent grandParentValue={grandParentValue}></ParentComponent>
    </div>
  )
}

export default GrandParentComponent