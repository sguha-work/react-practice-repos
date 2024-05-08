import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Child1Component from './components/child1.component';
import Child2Component from './components/child2.component';

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    window.setInterval(() => {
      setCounter((oldValue) => {
        return oldValue + 1;
      })
    }, 5000);
  }, []);
  useEffect(() => {
    console.log("App component updated");
  });
  const clickHandler = useCallback(()=>{
    alert("Button clicked");
  },[]);
  return (
    <>
      <Child1Component counter={counter}></Child1Component>
      <Child2Component handler={clickHandler}></Child2Component>
    </>
  )
}

export default App
