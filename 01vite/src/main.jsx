import React, { StrictMode } from 'react'; // ✅ Needed for React.createElement
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './App.css'

const reactElement = {
  type: 'a',
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: 'Click me to visit Google'
};

const myName = "Abhay";

function MyApp() {
  return (
    <h1>Custom React App {myName}</h1>
  );
}

// JSX element
const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// Using React.createElement
const AreactElement = React.createElement(
  'a',
  { href: "https://google.com", target: "_blank" , class: "a"},
  'Click to visit Google'
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    {AnotherElement}
    <div>
      {AreactElement}
    </div>
  </StrictMode>
);
