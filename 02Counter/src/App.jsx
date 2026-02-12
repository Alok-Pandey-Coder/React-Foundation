import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  let addValue = () => {
    counter = counter + 1
    setCounter(counter)
   
  }

  let removeValue = () => {
    if(counter == 0) return; 
    counter = counter - 1;
    setCounter(counter)
  }

  return (
    <>
      <h1>My First React App {counter}</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>ADD Count {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Count {counter}</button>
    </>
  )
}

export default App
