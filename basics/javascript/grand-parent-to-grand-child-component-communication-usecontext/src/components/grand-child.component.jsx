import { useContext } from "react"
import MyContext from "../contexts/context"

function GrandChildComponent() {
    const value = useContext(MyContext);
    return (
      <div>
        <h1>GrandChildComponent</h1>
        <p>Value from grand parent component is {value}</p>
      </div>
    )
  }
  
  export default GrandChildComponent