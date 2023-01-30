import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/sponsor.scss"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons'



const Sponsor = () => {

const [sponsors, setSponsors] = useState([])

useEffect(()=>{
  const fetchData = async ()=>{
    try{
        const res = await axios.get("/sponsors")
        setSponsors(res.data);
    }catch(err){
      console.log(err)
    }
  }
  fetchData();
},[])


  return (

    <div>
    <div className='lol'> 
        <h1>Editia 2022-2023</h1> 
        <div className='iconAdd'>
        <Link className='link' to="/sponsors/new"><PlusCircleTwoTone/></Link>
        </div>
    </div>

    {sponsors.map((sponsor) =>
    <div className='edition' key={sponsor.id}>
    {sponsor.edition === '2022-2023' && (
        <div className='sponsor'>
            <a href={sponsor.link}>
            <Image
            width={150}
            src={`./upload/${sponsor.img_sponsor}`}/>
            </a>
        </div>
    )}
    </div>
    )}


    <div className='lol2'> 
        <h1>Editia 2021-2022</h1> 
        <div className='iconAdd'>
        <Link className='link' to="/sponsors/new"><PlusCircleTwoTone/></Link>
        </div>
    </div>

    {sponsors.map((sponsor) =>
    <div className='edition2' key={sponsor.id}>
    {sponsor.edition === '2021-2022' && (
        <div className='sponsor'>
            <a href={sponsor.link}>
            <Image
            width={150}
            src={`./upload/${sponsor.img_sponsor}`}/>
            </a>
        </div>
    )}
    </div>
    )}



    </div>





  )
}

export default Sponsor