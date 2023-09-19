import { useState } from 'react';
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const nameChange = (e)=>{
    setName(e.currentTarget.value);
  }
  const emailChange = (e)=>{
    setEmail(e.currentTarget.value);
  }
  useEffect(()=>{
    
  },[]);
  const messageChange = (e)=>{
    setMessage(e.currentTarget.value);
  }
  const sendEmail = (e)=>{
    e.preventDefault();
    const templateParams = {
      from_name: name,
      to_name: "Sahasrangshu",
      message: message + `email:-> ${email}`,
      reply_to: email,
      email: email
  };
    window.emailjs.send('service_zi7b3zv', 'template_w748fag', templateParams, '-EEIvabNx68wPy9Xw');
  }
  return (
    <>
      <div>
        <form>
          <table>
            <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td><input onChange={nameChange} value={name} type="text"/></td>
                  <td><input onChange={emailChange} value={email} type="text"/></td>
                  <td><textarea onChange={messageChange} value={message}></textarea></td>
                </tr>
                <tr>
                  <td>
                    <button onClick={sendEmail}>Click to send message</button>
                  </td>
                </tr>
            </tbody>
          </table>
        </form>
      </div>
      
    </>
  )
}

export default App
