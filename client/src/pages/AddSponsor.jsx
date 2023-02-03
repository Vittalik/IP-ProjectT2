import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const AddNewSponsor = () => {
    const [inputs, setInputs] = useState({
      name_sponsor:"",
      img_sponsor: "nordic_museum_logo.png",
      link:"",
      edition:"",
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
        await axios.post("/sponsors/spon", inputs)
        navigate("/sponsors");
        //console.log(res)
      }catch(err){
        setError(err.response.data);
        console.log(err.response)
      }
    };
  
    return (
      <div className='auth'>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <h1>Add New Sponsor</h1>
        <form>
          <input required type="text" placeholder='name_sponsor' name='name_sponsor' onChange={handleChange}/>
          <input required type="text" placeholder='link' name='link' onChange={handleChange}/>
          <input required type="text" placeholder='edition' name='edition' onChange={handleChange}/>
          <button onClick={handleSubmit}>Add New Sponsor</button>
          {err && <p>{err}</p>}
        </form>
      </div>
    )
  }
  
  export default AddNewSponsor