import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [count,setCount] = useState(0) ;

  function increaseValue(){
    if( count < 10 ){
      setCount( count + 1 );
    }
  }
  function decreaseValue(){
    if( count > 0 )[
      setCount( count - 1 )
    ]
  }

  return (
    <>
      <h1>Abhay Ramkrushna Patil</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={decreaseValue}> Decrease Value</button>

    </>
  )
}

export default App
