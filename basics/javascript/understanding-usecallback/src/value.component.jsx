import { useMemo } from "react";

function ValueComponent({value}) {
    const calculateFactorial = (inputValue) => {console.log("here")
        let result = 1;
        for (let index = inputValue; index >= 1; index--) {
          result *= index;
        }
        return result;
      }
    const memoizedFactorialValue = useMemo(()=>{
        console.log("memo called")
       return calculateFactorial(value)
    }, [value]);
  return (
    <b>{memoizedFactorialValue}</b>
  )
}

export default ValueComponent