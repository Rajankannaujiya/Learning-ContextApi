import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");

    const {setUser}=useContext(UserContext)


    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({name,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        {" "}
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login