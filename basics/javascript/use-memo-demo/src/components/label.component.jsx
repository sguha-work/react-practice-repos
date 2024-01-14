import { useEffect } from "react"
import { memo } from "react";
function LabelComponentRaw() {
    useEffect(()=>{
        console.log('lable component refreshed');
    });
  return (
    <div>LabelComponent</div>
  )
}
const LabelComponent = memo(LabelComponentRaw);
export default LabelComponent;