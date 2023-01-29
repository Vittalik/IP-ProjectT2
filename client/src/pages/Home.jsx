import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/home_style.scss"
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
          const res = await axios.get("/posts")
          setPosts(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[])


const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}

  return (
    <div className='home'>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <div className='posts'>
          {posts.map((post) =>
            <div className='post' key={post.id}>
              <div className='image'>
                <img src={`./upload/${post.img}`} alt=""/>
              </div>
              <div className='content'>
                <Link className='link' to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                  <p>{getText(post.desc)}</p>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

  )
}

export default Home