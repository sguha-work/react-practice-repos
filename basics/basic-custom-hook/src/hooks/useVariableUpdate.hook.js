import { useEffect } from "react";
function useVariableUpdate(value) {
    useEffect(()=>{
        console.log(`${(new Date()).toISOString()}---> ${value}`);
    },[value]);
}
export default useVariableUpdate;