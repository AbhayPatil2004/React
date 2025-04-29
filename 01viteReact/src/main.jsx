// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import {App} from './App.jsx'

// function myApp(){
//   return(
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   )
// }

const Element = (
  <a href="htpps:/google.com" target="_blank"> Click here to Visit google</a>
)

const createElement = React.createElement(
  'a',
  {
    href:"https://google.com" , target :"_blank"
  },
  "Click me to Visit google"
)

createRoot(document.getElementById('root')).render(
 
    Element
    // <myApp/>
  
)
