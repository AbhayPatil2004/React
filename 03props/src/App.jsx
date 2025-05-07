import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Card} from "./Components/Card.jsx"

let name = "Hello World"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='flex mx-auto w-full h-screen items-center'>
      <h1 className='bg-green-400 text-black p-4 rounded-xl text-center'>Tailwind Test</h1>
      </div> */}
      <div className='flex mx-auto w-full h-screen items-center' >
        <Card name = "Abhay Ramkrushna Patil"/>
      </div>
      <div className='flex mx-auto w-full h-screen items-center' >
        <Card name = {name}/>
      </div>
    </>
  ) 
}

export default App
