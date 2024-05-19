import { useEffect } from 'react'
import { memo } from 'react';
function Component() {
    useEffect(()=>()=>{
        console.log("MyComponent destroyed.");
    });
  return (
    <div>MyComponent</div>
  )
}
const MyComponent = memo(Component);
export default MyComponent