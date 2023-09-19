import { useState, useEffect } from 'react';
function InputComponent(props) {
    const [value, setValue] = useState('');
    useEffect(()=>{
        props.getValue(value);
    },[value]);
  return (
    <input value={value} onChange={(e)=>{setValue(e.target.value)}}/>
  )
}

export default InputComponent