import {useState} from 'react';
function Input1(props) {
    const [input,setInput]=useState('');
    return (
        <input onChange={(e)=>{setInput(e.target.value);props.setValueToParent(1,e.target.value);}} value={input} type={props.type??"text"} placeholder={props.placeholder??""}></input>
    );
}
export default Input1;