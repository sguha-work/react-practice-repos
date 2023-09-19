import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import EmailInput from '../../components/email.input/email.input.component';
import PasswordInput from '../../components/password.input/password.input.component';
import Server from './../../services/server.service';
function LoginPageComponent() {
    const nevigate = useNavigate();
    let email=null,password=null;
    const setEmailValue = (value)=> { // this method will be called from child
        email = value;
    }
    const setPasswordValue = (value)=> {// this method will be called from child
        password = value;
    }
    useEffect(()=>{
        console.log('component updated');
    });
    const loginFormSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        const serverInstance = Server.ServerInstance;
        (async () => {
            try {
                await serverInstance.login(email, password);
                console.log('login succesful');
                
                nevigate('/profile/'+email,{replace:true});
            } catch (error) {
                console.log('Error occured during login',error);
            }
        })();
    }
    return (
        <>
            <h2>This is login page</h2>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td> User id</td>
                            <td>
                               <EmailInput setEmailValue={setEmailValue}></EmailInput> 
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <PasswordInput setPasswordValue={setPasswordValue}></PasswordInput>
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>
                                <button onClick={loginFormSubmit}>Click me to login</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
}
export default LoginPageComponent;