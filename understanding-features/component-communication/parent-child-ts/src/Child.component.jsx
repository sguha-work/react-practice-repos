import { useState, useEffect } from "react";
function ChildComponent(props) {
  const [childValue, setChildValue] = useState('');
  useEffect(()=>{
    setChildValue(props.parentValue);
  },[props.parentValue]);
  const childValueChanged = (e)=>{
    setChildValue(e.target.value);
    props.setParentValueFromChild(e.target.value);
  }
  return (
    <div className="child-component">
        <p><b>This is child component</b></p>
        <p><input type="text" onChange={(e) =>childValueChanged(e)} value={childValue}></input></p>
    </div>
  )
}

export default ChildComponent