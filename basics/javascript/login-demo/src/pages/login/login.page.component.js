import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailInput from '../../components/email.input/email.input.component';
import PasswordInput from '../../components/password.input/password.input.component';
import Server from './../../services/server.service';
function LoginPageComponent(props) {
    const nevigate = useNavigate();
    let email = null, password = null;
    const setEmailValue = (value) => { // this method will be called from child
        email = value;
    }
    const setPasswordValue = (value) => {// this method will be called from child
        password = value;
    }
    useEffect(() => {
        console.log('component updated');
        document.title = props.title;
    });
    useEffect(() => {
        // this use effect will be called when the component is loaded
        const userTokenData = sessionStorage['user_token'];
        if (userTokenData) {
            const serverInstance = Server.ServerInstance;
            const parsedTokenOnfo = serverInstance.parseJwt(sessionStorage['user_token']);
            nevigate('/profile/' + parsedTokenOnfo.id, { replace: true });
        }
    }, []);
    const loginFormSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        const serverInstance = Server.ServerInstance;
        (async () => {
            try {
                const loginResponse = await serverInstance.login(email, password);
                console.log('login succesful', loginResponse);
                // the reponse is holding the token value which we have to store in HTML5 storage
                sessionStorage['user_token'] = loginResponse.data.token;
                const parsedTokenOnfo = serverInstance.parseJwt(loginResponse.data.token);
                console.log(parsedTokenOnfo);
                nevigate('/profile/' + parsedTokenOnfo.id, { replace: true });
            } catch (error) {
                console.log('Error occured during login', error);
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