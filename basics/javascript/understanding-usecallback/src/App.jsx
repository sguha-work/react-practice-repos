import { useState } from 'react';
import ValueComponent from './value.component';

function App() {
  
  const [value, setValue] = useState(0);
  const inputchanged = (event) => {
    setValue(event.target.value);
  }
  return (
    <>
      <input type="number" onChange={inputchanged} value={value}></input>
      <ValueComponent value={value}></ValueComponent>
    </>
  )
}

export default App
