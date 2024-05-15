import { useCallback } from "react"
import EventBus from "../services/event-bus.service";
function Component2Component() {
    const valueChanged = useCallback((event)=>{
        EventBus.dispatch("valueChanged", { value:  event.target.value});
    },[]);
  return (
    <div>
        <h1>This is child component 2</h1>
        <input type="text" onChange={valueChanged}></input>
    </div>
  )
}

export default Component2Component