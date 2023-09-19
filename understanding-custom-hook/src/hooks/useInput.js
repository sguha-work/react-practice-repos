import { useState } from "react";
function useInput(initialValue) {
    const [value, setValue] = useState(initialValue??"");
    const reset = ()=>setValue(initialValue);
    const onChange = e=>setValue(e.target.value)
    const bind = {
        value,
        onChange
    }
    return [value, bind, reset] 
}
export default useInput;