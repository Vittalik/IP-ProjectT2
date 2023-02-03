import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const AddNewUser = () => {
    const [inputs, setInputs] = useState({
      username:"",
      email:"",
      password:"",
      repeatpassword:"",
      ccontent:"",
    })
  
    const [err, setError] = useState(null);
    const navigate = useNavigate()
  
    const handleChange = e =>{
      setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    };
  
    //console.log(inputs)
  
    const handleSubmit = async e =>{
      e.preventDefault()
      try{
        await axios.post("/auth/register", inputs)
        navigate("/admin");
        //console.log(res)
      }catch(err){
        setError(err.response.data);
        //console.log(err)
      }
    };
  
    return (
      <div className='auth'>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <h1>Add New User</h1>
        <form>
          <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
          <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
          <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
          <input required type="password" placeholder='repeat password' name='repeatpassword' onChange={handleChange}/>
          <label className="rad"> Is the user a content creator? <input type="checkbox" placeholder='ccontent' name='ccontent' onChange={handleChange}/> </label>
          <button onClick={handleSubmit}>Add New User</button>
          {err && <p>{err}</p>}
        </form>
      </div>
    )
  }
  
  export default AddNewUser