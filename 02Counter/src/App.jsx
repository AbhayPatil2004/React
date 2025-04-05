import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 0 ;
  const [counter , setCounter] = useState(0);

  const addValue = () =>{
    setCounter(counter+1);
    // setCounter(counter+2);
    // setCounter(counter+10);
    // setCounter(counter-10);

    // setCounter((prevCounter) => prevCounter + 1 );
    // setCounter((prevCounter) => prevCounter + 1 );
    // setCounter((prevCounter) => prevCounter + 1 );
  }
  const removeValue = () => {
    setCounter(counter-1);
  }

  return (

    <>
     <h1>React Course with Abhay { counter}</h1>
     <h2>Counter value : {counter}</h2>
     <button
     onClick={addValue}>Add value</button> { " " }
     <button onClick={removeValue}>Remove Value</button>
     <p>Footer : {counter}</p>
    </>
  )
}

export default App
