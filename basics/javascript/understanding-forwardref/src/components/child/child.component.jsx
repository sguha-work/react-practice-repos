import { forwardRef, useImperativeHandle } from "react"
const ChildComponent = forwardRef((props, ref)=> {
    useImperativeHandle(ref, ()=>({
        childMethod:()=>{
            alert("this is method from child");
        }
    }));
  return (
    <div>ChildComponent</div>
  )
})

export default ChildComponent