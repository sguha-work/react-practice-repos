import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonService from "../../services/Common.service";

function LoginForm() {
    const commonService = CommonService.getInstance();
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    const submitButtonClicked = (event) => {
        event.preventDefault();
        commonService.userName = userName;
        navigate("/dashboard");
    }
    return (
        <>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Enter name to display location</td>
                            <td><input type="text" onChange={(event) => setUserName(event.currentTarget.value)} /></td>
                        </tr>
                        <tr>
                            <td><button onClick={submitButtonClicked}>Submit</button></td>
                            <td><button>Reset</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
}
export default LoginForm;