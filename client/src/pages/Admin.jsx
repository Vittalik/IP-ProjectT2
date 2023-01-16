import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';


const Admin = () => {

  const [user, setUser] = useState([])


  useEffect(()=>{
    const fetchData = async ()=>{
      try{
          const res = await axios.get("/admin")
          setUser(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[])


  return (
    <div>Admin</div>
  )
}

export default Admin