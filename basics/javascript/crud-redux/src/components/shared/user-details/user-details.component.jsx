import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function UserDetailsComponent(props) {
    const [userDetails, setUserDetails] = useState(null);
    const state = useSelector((state) => state);
    useEffect(() => {
        console.log(state);
        setUserDetails(state.users.details[props.id]);
    }, [state.users.details]);
    return (
        <div>
            {userDetails != null && (
                <>
                    <h3>Details of user {props.id}</h3>
                    <b>{userDetails.first_name}&nbsp; {userDetails.last_name}</b><br></br>
                    <a href="">{userDetails.email}</a>
                </>
            )}

        </div>
    )
}

export default UserDetailsComponent