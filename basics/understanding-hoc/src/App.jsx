
import './App.css'
import EmailInputComponent from './components/hocs/email-input/email-input.component';
import NumberInputComponent from './components/hocs/number-input/number-input.component';
import PasswordInputComponent from './components/hocs/password-input/password-input.component';
import TextInputComponent from './components/hocs/text-input/text-input.component';
import InputComponent from './components/shared/input/input.component';

function App() {
  let email = '', password='';
  const onEmailChange = (value)=>{
    email = value;
  }
  const onPasswordChange = (value)=>{
    password = value;
  }
  const submitRegistrationForm = (event)=>{
    event.preventDefault();
  }
  const submitLoginForm = (event)=>{
    event.preventDefault();
    console.log('email->',email);
    console.log('password->',password);
  }
  return (
    <>
    <h3>Registration form</h3>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <TextInputComponent  use={InputComponent}></TextInputComponent>
            </tr>
            <tr>
              <td>Email</td>
              <td><EmailInputComponent use={InputComponent}></EmailInputComponent></td>
            </tr>
            <tr>
              <td>Phoen number</td>
              <td><NumberInputComponent use={InputComponent}></NumberInputComponent></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><PasswordInputComponent use={InputComponent}></PasswordInputComponent></td>
            </tr>
            <tr>
              <td>Submit</td>
              <td><button onClick={submitRegistrationForm}>Clik me</button></td>
            </tr>
          </tbody>
        </table>
      </form>

      <h3>Login form</h3>
      <form>
      <table>
          <tbody>
            <tr>
              <td>Email</td>
              <td><EmailInputComponent change={onEmailChange} use={InputComponent}></EmailInputComponent></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><PasswordInputComponent change={onPasswordChange} use={InputComponent}></PasswordInputComponent></td>
            </tr>
            <tr>
              <td>Submit</td>
              <td><button onClick={submitLoginForm}>Clik me</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  )
}

export default App
