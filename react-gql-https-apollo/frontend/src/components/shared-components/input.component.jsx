import { useEffect, useState } from 'react';
function InputComponent(props) {
    const [value, setValue] = useState(props.value ?? '');
    useEffect(() => {
        if (typeof props.getValue === 'function') {
            props.getValue(value);
        }
    }, [value]);
    return (
        <input type={props.type} className={props.className} placeholder={props.placeholder} name={props.uname} value={value} onChange={(e) => setValue(e.target.value)} />
    )
}
export default InputComponent;