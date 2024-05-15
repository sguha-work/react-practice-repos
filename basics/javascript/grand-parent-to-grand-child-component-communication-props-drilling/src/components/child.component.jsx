import GrandChildComponent from "./grand-child.component"

function ChildComponent(props) {
    return (
      <div>
        <h1>ChildComponent</h1>
        <GrandChildComponent childValue={props.parentValue}></GrandChildComponent>
      </div>
    )
  }
  
  export default ChildComponent