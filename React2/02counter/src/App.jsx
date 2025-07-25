import { useState } from 'react'
import './App.css'

function App() {
  const [count , counter ] = useState(0)

  function increment(){
    counter(count+1);
  }
  function decrement(){
    counter(count-1);
  }


  return (
    <>
     <h1>React with Me</h1>
      <h2>counter Value : {count}</h2>
      <button onClick={increment}>Add Value</button>
      <button onClick={decrement}>Remove Value</button>

    </>
  )
}

export default App
