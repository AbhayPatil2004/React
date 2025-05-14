
import './App.css'
import LogIn from './Components/LogIn'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React & Hello World</h1>
      <LogIn/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
