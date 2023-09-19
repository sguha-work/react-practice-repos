import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { JokesComponent } from './components/Jokes/Jokes.component'

function App() {
  
  return (
    <div className="App">
      <JokesComponent></JokesComponent>
    </div>
  )
}

export default App
