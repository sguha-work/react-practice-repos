import { memo, useEffect } from "react"
function Component({ handler }) {
  useEffect(() => {
    console.log("Child 2 component updated");
  });
  return (
    <div>
      <h4>Child2Component</h4>
      <button onClick={handler}>Click me</button>
    </div>
  )
}
const Child2Component = memo(Component);
export default Child2Component;