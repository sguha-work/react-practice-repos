import { useEffect } from 'react';
import './App.css'
import useStorage from './hooks/useStorage';
function App() {
  const [value, setValue] = useStorage('myval','',{type: 'session'});
  const inputboxvalChange = (event)=>{
    setValue(event.target.value);
  }
  return (
    <>
    <input type="text" value={value} onChange={inputboxvalChange}/>
    </>
  )
}

export default App
