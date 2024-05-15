import GrandChildComponent from "./grand-child.component"

function ChildComponent() {
    return (
      <div>
        <h1>ChildComponent</h1>
        <GrandChildComponent></GrandChildComponent>
      </div>
    )
  }
  
  export default ChildComponent