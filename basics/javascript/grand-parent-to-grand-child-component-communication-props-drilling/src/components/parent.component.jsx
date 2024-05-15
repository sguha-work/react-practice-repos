import ChildComponent from "./child.component"

function ParentComponent(props) {
    return (
      <div>
        <h1>ParentComponent</h1>
        <ChildComponent parentValue={props.grandParentValue}></ChildComponent>
      </div>
    )
  }
  
  export default ParentComponent