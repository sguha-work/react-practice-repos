import { useCallback, useState } from "react";
import ChildComponent from "./child.component"

function ParentComponent() {
    const [parentValue, setParentValue]=useState("");
    const parentValueChanged = (event)=>{
        setParentValue(event.target.value);
    }
    const childValueChanged = useCallback((value)=>{
      setParentValue(value);
    },[])
  return (
    <div>
        <h1>This is parent component</h1>
        <p>
            <label>Parent input box</label>
            &nbsp;<input onChange={parentValueChanged} value={parentValue} type="text"></input>
        </p>
        <h3> Value from child component is: {parentValue}</h3>
        <ChildComponent childValueChanged={childValueChanged} parentValue={parentValue}></ChildComponent>
    </div>
  )
}

export default ParentComponent