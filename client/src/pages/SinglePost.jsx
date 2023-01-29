import React from 'react';
import "../styles/singlepost_style.scss";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Menu from '../components/Menu';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import moment from 'moment'
import DOMPurify from "dompurify";



const SinglePost = () => {
  const [post, setPost] = useState({})

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)
  
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
          const res = await axios.get(`/posts/${postId}`);
          setPost(res.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  }, [postId]);


  const handleDelete = async ()=>{
    try{
      await axios.delete(`/posts/${postId}`);
      navigate("/")
  }catch(error){
    console.error(error.response.data);
  }
}



  return (
    <div className='singlepost'>
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          <div className="info">
          <span>{post.username}</span>
          <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser && currentUser.username === post.username && (
          <div className="edit">
            <Link to={`/write?edit=2`} state={post}>
              <img src={Edit} alt="" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="" />
          </div>)}
        </div>
          <h1>{post.title}</h1>
          <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>
      </div>
      <Menu category={post.category}/>
    </div>
  )
}

export default SinglePost;