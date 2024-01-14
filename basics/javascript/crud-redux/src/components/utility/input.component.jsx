import { useState, useEffect } from "react"

function InputComponent(props) {
    const [value, setValue] = useState(props.value);
    const valueChanged = (event)=>{
        setValue(event.target.value);
        if(props.change) {
            props.change(event.target.value);
        }
    }
    useEffect(()=>{
        setValue(props.value);
    },[props.value])
  return (
    <input type={props.type} onChange={valueChanged} placeholder={props.placeholder} title={props.title} value={value}></input>
  )
}

export default InputComponent