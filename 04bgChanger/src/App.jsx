import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [color,setColor] = useState('white');

  function setYellow(){
    setColor('yellow-400');
  }
  function setBlack(){
    setColor('black');
  }
  function setRed(){
    setColor('red-600');
  }
  function setGreen(){
    setColor('green-600');
  }
  function setBlue(){
    setColor('blue-700');
  }
  function setOrange(){
    setColor('orange-500');
  }
  return (
    <>
      <div className={`w-full h-screen bg-${color} flex justify-center items-end`}>

            <div className='w-full flex justify-center gap-[50px] mb-[25px]'>
              <button className='bg-yellow-400 text-white p-[10px] rounded-[10px]' 
              onClick={setYellow}
              >Yellow</button>
              <button className='bg-black text-white p-[10px] rounded-[10px]' 
              onClick={setBlack}
              >Black</button>
              <button className='bg-red-600 text-white p-[10px] rounded-[10px]' 
              onClick={setRed}
              >Red</button>
              <button className='bg-green-600 text-white p-[10px] rounded-[10px]' 
              onClick={setGreen}
              >Green</button>
              <button className='bg-blue-700 text-white p-[10px] rounded-[10px]' 
              onClick={setBlue}
              >Blue</button>
              <button className='bg-orange-500 text-white p-[10px] rounded-[10px]' 
              onClick={setOrange}
              >Orange</button>
            </div>
      </div>
    </>
  )
}

export default App
