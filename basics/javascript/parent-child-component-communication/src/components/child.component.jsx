import { useCallback, useEffect, useState } from "react";
function ChildComponent(props) {
    const [childValue, setChildValue]= useState("");
    useEffect(()=>{
        setChildValue(props.parentValue);
    },[props]);
    const childValueChanged = useCallback((event)=>{
        setChildValue(event.target.value);
        props.childValueChanged(event.target.value);
    },[])
  return (
    <div>
        <h1>This is child component</h1>
        <p>
            <label>Child input box</label>
            &nbsp;<input type="text" value={childValue} onChange={childValueChanged}></input>
        </p>
        <h3> Value from parent component is: {props.parentValue}</h3>
    </div>
  )
}

export default ChildComponent