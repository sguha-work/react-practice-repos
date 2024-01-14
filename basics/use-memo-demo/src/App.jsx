import { useState } from 'react'
import './App.css'
import LabelComponent from './components/label.component'

function App() {
  const [count, setCount] = useState(0)
  const increaseCount = ()=>{
    setCount(count+1);
  }
  return (
    <>
      <button onClick={increaseCount}>Click me</button>
      <label>{count}</label>
      <LabelComponent></LabelComponent>
    </>
  )
}

export default App
