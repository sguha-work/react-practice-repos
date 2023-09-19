import ChildComponent from "./Child.component"
import { useState } from "react"
function ParentComponent() {
    const [parentValue, setParentValue] = useState('');
    const setParentValueFromChild = (value)=>{
        setParentValue(value);
    }
    return (
        <div className="parent-component">
            <p><b>This is parent component</b></p>
            <p><input type="text" onChange={(e) => setParentValue(e.target.value)} value={parentValue}></input></p>
            <ChildComponent parentValue={parentValue} setParentValueFromChild={setParentValueFromChild}></ChildComponent>
        </div>
    )
}

export default ParentComponent