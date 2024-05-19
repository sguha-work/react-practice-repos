import {useEffect, useRef } from "react"

function FormComponent() {
    useEffect(()=>{
        console.log("Component is refreshed");
    });
    const nameInputDOM = useRef(null);
    const phoneNumberInputDOM = useRef(null);
    const submit = () => {
        const name: string = nameInputDOM?((nameInputDOM as React.MutableRefObject<null|object>).current as HTMLInputElement).value:"";
        const phoneNumber: string = phoneNumberInputDOM?((phoneNumberInputDOM as React.MutableRefObject<null|object>).current as HTMLInputElement).value:"";
        console.log({
            name,
            phoneNumber
        })
    }
    return (
        <div>
            <form>
                <p>
                    <input type="text" placeholder="name" ref={nameInputDOM} ></input>
                </p>
                <p>
                    <input type="number" placeholder="phone number" ref={phoneNumberInputDOM} maxLength={10}></input>
                </p>
                <p>
                    <button type="button" onClick={submit}>Click me to submit</button>
                </p>
            </form>
        </div>
    )
}

export default FormComponent