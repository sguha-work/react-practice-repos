import InputComponent from "../../utility/input.component";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
function EditUserFormComponent(props) {
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });
    const state = useSelector((state) => state);
    useEffect(() => {
        console.log("state",state,props.id);
        setUserDetails({
            firstName: state.users.details[props.id]?state.users.details[props.id].first_name:"",
            lastName: state.users.details[props.id]?state.users.details[props.id].last_name:"",
            email: state.users.details[props.id]?state.users.details[props.id].email:""
        });
    }, [state.users.details]);
    useEffect(()=>{
        console.log('user details changed', userDetails);
    },[userDetails]);

    const firstNameChanged = (value) => {
        setUserDetails({
            ...userDetails,
            firstName: value
        })
    }
    const lastNameChanged = (value) => {
        setUserDetails({
            ...userDetails,
            lastName: value
        })
    }
    const emailChanged = (value) => {
        setUserDetails({
            ...userDetails,
            email: value
        })
    }
    const updateUser = (event) => {
        event.preventDefault();
        console.log(userDetails);
    }
    return (
        <form>
            <table>
                <tbody>
                    <tr>
                        <td>First name</td>
                        <td><InputComponent type="text" value={userDetails.firstName} title="Enter first name" placeholder="First name" change={firstNameChanged}></InputComponent></td>
                    </tr>
                    <tr>
                        <td>Last name</td>
                        <td><InputComponent type="text" value={userDetails.lastName} title="Enter last name" placeholder="Last name" change={lastNameChanged}></InputComponent></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><InputComponent type="email" value={userDetails.email} title="Enter email" placeholder="Email" change={emailChanged}></InputComponent></td>
                    </tr>
                    <tr>
                        <td>Click to save</td>
                        <td><button onClick={updateUser}>Save</button></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default EditUserFormComponent