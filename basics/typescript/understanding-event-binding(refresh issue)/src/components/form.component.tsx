import { ChangeEvent, useEffect, useState } from "react"

function FormComponent() {
    useEffect(()=>{
        console.log("Component is refreshed");
    });
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const nameChanged = (event: ChangeEvent<HTMLInputElement>): void => {
        setName((event.target as HTMLInputElement).value);
    }
    const phoneNumberChanged = (event: ChangeEvent<HTMLInputElement>): void => {
        setPhoneNumber((event.target as HTMLInputElement).value);
    }
    const submit = () => {
        console.log({
            name,
            phoneNumber
        })
    }
    return (
        <div>
            <form>
                <p>
                    <input type="text" placeholder="name" onChange={nameChanged} value={name}></input>
                </p>
                <p>
                    <input type="number" placeholder="phone number" onChange={phoneNumberChanged} maxLength={10} value={phoneNumber}></input>
                </p>
                <p>
                    <button type="button" onClick={submit}>Click me to submit</button>
                </p>
            </form>
        </div>
    )
}

export default FormComponent