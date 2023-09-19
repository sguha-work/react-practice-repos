import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Server from './../../services/server.service';
function ProfilePageComponent(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        "name": "",
        "phonenumber": 0,
        "age": 0,
        "address": ""
    });
    useEffect(() => {
        console.log('email->', id);
        if (typeof id === 'undefined') {
            navigate("/login", { replace: true });
        }
        document.title = props.title;
    });
    useEffect(() => {
        const serverInstance = Server.ServerInstance;
        (async () => {
            const profileData = await serverInstance.getProfileDetails(id, sessionStorage['user_token']);
            console.log('profile data', profileData.data);
            setProfile(profileData.data);
        })();

    }, [])
    return (
        <>
            <h2>This is profile page</h2>
            <h4>Hello user {profile.name}</h4>
            <h4>Your age is {profile.age}</h4>
            <h4>Your mobile number is {profile.phonenumber}</h4>
            <h4>Your address is {profile.address}</h4>
        </>
    );
}
export default ProfilePageComponent;