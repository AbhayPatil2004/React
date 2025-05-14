import { useState , useContext} from "react"
import React from 'react'
import UserContext from "../Context/UserContext"

function LogIn() {

    const [username , setUsername ] = useState("")
    const [password , setPassword ] = useState("")

    const {setUser} = useContext(UserContext);

    const handelSubmit = (e) => {
        e.preventDefault();
        setUser({username,password});
    }

  return (
    <div>

        <h2>LogIn</h2>
        <br />

        <input type="text" 
        placeholder="UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}                

        />
        <br />

        <input type="text" 
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}

        />

        <br />

        <button
            onClick={handelSubmit}
        >
            Submit
        </button>
    </div>
  )
}

export default LogIn