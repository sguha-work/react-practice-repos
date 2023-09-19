import { useState, useEffect } from "react";

function PasswordInput(props) {
    const [password, setPassword] = useState('');
    useEffect(()=>{
        props.setPasswordValue(password);
    },[password]);
    return (
        <>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </>
    );
}
export default PasswordInput;