import { useEffect, useState } from 'react'
import './App.css'
import MyComponent from './mycomponent.component';

function App() {
  const [data, setData] = useState(0);
  useEffect(() => {
    console.log("Component is loaded");
    window.setInterval(() => {
      setData((oldValueOfState) => {
        return oldValueOfState + 1;
      })
    }, 1000);
  }, []);
  useEffect(() => {
    console.log("Component is changed");
  });
  return (
    <>
      <h1>{data}</h1>
      {data <= 30 &&
        (<MyComponent></MyComponent>)
      }
    </>
  )
}

export default App
