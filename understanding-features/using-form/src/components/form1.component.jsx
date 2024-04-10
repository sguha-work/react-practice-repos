import { useEffect, useRef } from "react"

function Form1Component() {
    const nameInputRef = useRef(null);
    const phoneInputRef = useRef(null);
    const emailInputRef = useRef(null);
    let formData = {};
    const backupData = ()=>{
        sessionStorage["form1data"] = JSON.stringify(formData);
    }
    const valueGiven = () => {
        formData = {
            name: nameInputRef.current.value?nameInputRef.current.value:"",
            phone: phoneInputRef.current.value?phoneInputRef.current.value:"",
            email: emailInputRef.current.value?emailInputRef.current.value:""
        }
    }
    useEffect(()=>{
        console.log("Form 1 loaded");
        if(sessionStorage["form1data"]) {
            const data = JSON.parse(sessionStorage["form1data"]);
            nameInputRef.current.value = data.name;
            phoneInputRef.current.value = data.phone;
            emailInputRef.current.value = data.email;
            formData = data;
        }
    },[]);
    useEffect(() => {
        return () => {
            console.log("Form1 destroyed");
            backupData();
        }
    });
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Form</th>
                        <th>1</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input onChange={valueGiven} ref={nameInputRef}></input></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td><input onChange={valueGiven} ref={phoneInputRef}></input></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input onChange={valueGiven} ref={emailInputRef}></input></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Form1Component