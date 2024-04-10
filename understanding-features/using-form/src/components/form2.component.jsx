import { useEffect, useRef } from "react"
function Form2Component() {
    const addressInputRef = useRef(null);
    const ageInputRef = useRef(null);
    const dobInputRef = useRef(null);
    let formData = {};
    const backupData = ()=>{
        sessionStorage["form2data"] = JSON.stringify(formData);
    }
    const valueGiven = () => {
        formData = {
            address: addressInputRef.current.value?addressInputRef.current.value:"",
            age: ageInputRef.current.value?ageInputRef.current.value:"",
            dob: dobInputRef.current.value?dobInputRef.current.value:""
        }
    }
    useEffect(()=>{
        console.log("Form 2 loaded");
        if(sessionStorage["form2data"]) {
            const data = JSON.parse(sessionStorage["form2data"]);
            addressInputRef.current.value = data.address;
            ageInputRef.current.value = data.age;
            dobInputRef.current.value = data.dob;
            formData = data;
        }
    },[]);
    useEffect(() => {
        return () => {
            console.log("Form2 destroyed");
            backupData();
        }
    });
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Form</th>
                        <th>2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Address</td>
                        <td><input onChange={valueGiven} ref={addressInputRef}></input></td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td><input onChange={valueGiven} ref={ageInputRef}></input></td>
                    </tr>
                    <tr>
                        <td>DOB</td>
                        <td><input onChange={valueGiven} ref={dobInputRef}></input></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Form2Component