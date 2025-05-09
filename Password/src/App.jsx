import { useState , useCallback , useEffect , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [lenght,setLenght] = useState(8);
  const [number,setNumber] = useState(false);
  const [symbol,setSymbol] = useState(false);
  const [password,setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () =>{

    let pass = "" ;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if( number ){
      str += "0123456789";
    }
    if( symbol ){
      str += "~!@#$%^&";
    }

    for( let i = 0 ; i < lenght ; i++ ){
      let ch = Math.floor( Math.random() * str.length );
      pass += str[ch];
    }

    setPassword(pass);

  } , [lenght , number , symbol , setPassword ]);

  const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select(); 
      window.navigator.clipboard.writeText(password);
  } , [password])

  useEffect(() => {
    passwordGenerator();
  } , [lenght, number, symbol, passwordGenerator])
  return (

    <div>
      <h1 className='text-4xl text-center p-[25px]'>Password Generator</h1>

      <div className='flex flex-col gap-[15px]'>

        <div className='flex gap-[15px] justify-center items-center'>
          <input type="text" 
          placeholder={password}
          ref = {passwordRef}
          className='h-[30px] w-full rounded-[10px] pl-[20px] text-white text-xl'
          />
          <button className='p-[10px] text-sm'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>

        <div className='flex flex-row justify-evenly'>

          <input 
          type="range" 
          min="1"
          max="20"
          value={lenght}
          onChange={(e) => setLenght(Number(e.target.value))}
          
          />

         <div className='flex gap-[5px]'>
          <input type="checkbox" 
            checked={number}
            onChange={() => setNumber((prev) => !prev)}
            id='Number'
            />
          <label htmlFor="Number">Number</label>
         </div>

          <div className='flex gap-[5px]'>
            <input type="checkbox" 
            checked={symbol}
            onChange={() => setSymbol((prev) => !prev)}
            id='Symbol'
            />
            <label htmlFor="Symbol">Symbol</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
