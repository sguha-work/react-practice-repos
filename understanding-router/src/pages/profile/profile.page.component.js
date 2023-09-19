import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function ProfilePageComponent() {
    const {email} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        console.log('email->',email);
        if(typeof email==='undefined') {
            navigate("/login",{replace:true});
        }
    });
    return (
        <>
            <h2>This is profile page</h2>
            <h4>Hello user {email}</h4>
        </>
    );
}
export default ProfilePageComponent;