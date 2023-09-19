import { useState, useEffect } from "react";

function EmailInput(props) {
    const [email, setEmail] = useState('');
    useEffect(()=>{
        props.setEmailValue(email);
    },[email]);
    return (
        <>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </>
    );
}
export default EmailInput;