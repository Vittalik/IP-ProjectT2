import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"


import logo from "../images/croppedLogo.png"

const Register = () => {

  const [err, setError] = useState(null);
  const navigate = useNavigate()
  
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    repeatpassword:"",
    ccontent:"",
  })


  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  };


  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post("/auth/register", inputs)
      navigate("/login");
    }catch(err){
      setError(err.response.data);
    }
  };



  return (
    <div className='auth'>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <h1>Register</h1>
      <form>
      <div className='logo'>
        <img src={logo} alt='Logo CSM'  height="60" width="50"></img>
      </div>
        <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
        <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
        <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
        <input required type="password" placeholder='repeat password' name='repeatpassword' onChange={handleChange}/>
        <label className="rad"> Are you a verified content creator? <input type="checkbox" placeholder='ccontent' name='ccontent' onChange={handleChange}/> </label>
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>Already have an account? <Link to="/login">Login</Link></span> 
      </form>
    </div>
  )
}

export default Register