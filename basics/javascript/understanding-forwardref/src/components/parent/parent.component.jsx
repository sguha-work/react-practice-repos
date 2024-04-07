import ChildComponent from "../child/child.component"
import { useRef } from "react";
function ParentComponent() {
    const childRef = useRef();
    // useEffect(()=>{
    //     childRef.current.childMethod();
    // },[]);
    const buttonClick = (()=>{
        childRef.current.childMethod();
    });
  return (
    <div>
        <h2>ParentComponent</h2>
        <button onClick={buttonClick}>Click me to call child</button>
        <ChildComponent ref={childRef}></ChildComponent>
    </div>
  )
}

export default ParentComponent