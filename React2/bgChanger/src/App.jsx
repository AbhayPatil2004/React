import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [color,setColor] = useState('white');

  function changeColor(Color){
    setColor(Color);
  }
  return (
    <>
      <div className={`w-full h-screen flex justify-center items-end`} style={{backgroundColor:color}}>

            <div className='w-full flex justify-center gap-[50px] mb-[25px]'>
              <button className='bg-yellow-400 text-white p-[10px] rounded-[10px]' 
              onClick={() => setColor('yellow')}
              >Yellow</button>
              <button className='bg-black text-white p-[10px] rounded-[10px]' 
              onClick={() => changeColor('black')}
              >Black</button>
              <button className='bg-red-600 text-white p-[10px] rounded-[10px]' 
              onClick={() => changeColor('red')}
              >Red</button>
              <button className='bg-green-600 text-white p-[10px] rounded-[10px]' 
              onClick={() => changeColor('green')}
              >Green</button>
              <button className='bg-blue-700 text-white p-[10px] rounded-[10px]' 
              onClick={() => changeColor('blue')}
              >Blue</button>
              <button className='bg-orange-500 text-white p-[10px] rounded-[10px]' 
              onClick={() => changeColor('orange')}
              >Orange</button>
            </div>
      </div>
    </>
  )
}

export default App
