import MyComponent2 from './../MyComponent2/MyComponent2.component';
import { useState, useEffect } from 'react';
function MyComponent1() {
    const [inputData, setInputData] = useState('');
    const inputValueChanged = (event)=>{
        setInputData(event.target.value);
    }
    useEffect(()=>{},[]);
  return (
    <>
    <input type="text" onChange={inputValueChanged} value={inputData}/>
    <MyComponent2 value={inputData}></MyComponent2>
    </>
  )
}

export default MyComponent1