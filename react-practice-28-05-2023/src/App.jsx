import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputComponent from './input.component';

function App() {
  let value1, value2;
  const getValue1 = (value)=>{
    console.log('value1->',value);
    value1 = value;
  }
  const getValue2 = (value)=>{
    console.log('value2->',value);
    value2 = value;
  }
  useEffect(()=>{
    console.log('component is modified');
  });
  const onSubmit = ()=>{
    console.log(`submitting value1 as ${value1} and value2 as ${value2}`);
  }
  return (
    <>
      
      <InputComponent getValue={getValue1}></InputComponent>
      <InputComponent getValue={getValue2}></InputComponent>
      <button onClick={onSubmit}>Submit</button>
      <div>

      </div>
      <p></p>
      <h2></h2>
    </>
  )
}

export default App
