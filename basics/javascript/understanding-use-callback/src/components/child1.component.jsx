import { useEffect } from "react"

function Child1Component({counter}) {
    useEffect(()=>{
        console.log("Child 1 component updated");
    });
  return (
    <div>
        <h3>Value from App component is {counter}</h3>
    </div>
  )
}

export default Child1Component