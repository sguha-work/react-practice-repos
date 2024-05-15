function GrandChildComponent(props) {
    return (
      <div>
        <h1>GrandChildComponent</h1>
        <p>Value from grand parent component is {props.childValue}</p>
      </div>
    )
  }
  
  export default GrandChildComponent