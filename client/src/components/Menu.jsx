import React from 'react'
import "../styles/singlepost_style.scss"

const Menu = () => {

    const posts = [
        {
          id: 1,
          title: "Sportivii de la CSM Suceava au câştigat 10 medalii la naţionalele de juniori I şi tineret",
          desc: "Pe întregul parcurs al săptămânii trecute, sportivii secţiei de tir sportiv de la Clubul Sportiv Municipal Suceava, pregătiţi de antrenorul Ştefan Buiucliu, au fost antrenaţi în lupta pentru medalii",
          img: "http://web.archive.org/web/20220814072716im_/http://csm-suceava.ro/media/k2/items/cache/11b8145be285a17777ee4d809bfd4d09_M.jpg",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://th.bing.com/th/id/OIP.Nu1seLWlCcxk0VxMAj96iAHaGf?pid=ImgDet&rs=1",
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://live.staticflickr.com/4666/38431334490_9cc7b3028d.jpg",
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://live.staticflickr.com/7557/15923582802_3e52e1aa77_b.jpg",
        },
      ];


  return (
    <div className='menu'>
        <h1>Alte posturi:</h1>
        {posts.map(post=>(
            <div className='post' key={post.id}>
                <img src={`../upload/${post.img}`} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu