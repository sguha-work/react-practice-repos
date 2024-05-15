import { useEffect, useState } from "react"
import EventBus from "../services/event-bus.service";

function Component1Component() {
    const [value, setValue] = useState("");
    useEffect(()=>{
        EventBus.on("valueChanged", (data) =>
            setValue(data.value)
          );
    },[]);
  return (
    <div>
        <h1>This is child component 1</h1>
        <h2>Value from child component 2  {value}</h2>
    </div>
  )
}

export default Component1Component