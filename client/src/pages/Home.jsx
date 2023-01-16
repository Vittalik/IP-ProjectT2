import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/home_style.scss"
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {

  const [posts, setPosts] = useState([])

  //const location = useLocation()
  

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
// const posts = [
//     {
//       id: 1,
//       title: "Sportivii de la CSM Suceava au câştigat 10 medalii la naţionalele de juniori I şi tineret",
//       desc: "Pe întregul parcurs al săptămânii trecute, sportivii secţiei de tir sportiv de la Clubul Sportiv Municipal Suceava, pregătiţi de antrenorul Ştefan Buiucliu, au fost antrenaţi în lupta pentru medalii",
//       img: "http://web.archive.org/web/20220814072716im_/http://csm-suceava.ro/media/k2/items/cache/11b8145be285a17777ee4d809bfd4d09_M.jpg",
//     },
//     {
//       id: 2,
//       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//       img: "https://th.bing.com/th/id/OIP.Nu1seLWlCcxk0VxMAj96iAHaGf?pid=ImgDet&rs=1",
//     },
//     {
//       id: 3,
//       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//       img: "https://live.staticflickr.com/4666/38431334490_9cc7b3028d.jpg",
//     },
//     {
//       id: 4,
//       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//       img: "https://live.staticflickr.com/7557/15923582802_3e52e1aa77_b.jpg",
//     },
//   ];


const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}

  return (
    <div className='home'>
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