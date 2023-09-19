import './input.component.css';
import { useState } from 'react';
function InputComponent(props) {
    const [input, setInput] = useState(props.value);
    const inputChange = (event) => {
        setInput(event.target.value);
        if(props.change) {
            props.change(event.target.value);
        }
    }
    return (
        <input onChange={inputChange} placeholder={props.placeholder} title={props.title} type={props.type} className={props.className} value={input} />
    )
}

export default InputComponent