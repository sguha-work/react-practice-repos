import { useState } from 'react';
import './App.css'
import JokeComponent from './components/joke.component';

function App() {
  const [counter, setCounter] = useState(0);
  function buttonClicked() {
    setCounter(counter+1);
  }
  return (
    <>
      <h3>{counter}</h3>
      <button onClick={buttonClicked}>Click me</button>
      <JokeComponent></JokeComponent>
    </>
  )
}

export default App
