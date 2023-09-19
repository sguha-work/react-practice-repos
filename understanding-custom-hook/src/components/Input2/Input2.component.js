import {useState} from 'react';
function Input2(props) {
    const [input,setInput]=useState('');
    return (
        <input onChange={(e)=>{setInput(e.target.value);props.setValueToParent(2,e.target.value);}} value={input} type={props.type??"text"} placeholder={props.placeholder??""}></input>
    );
}
export default Input2;