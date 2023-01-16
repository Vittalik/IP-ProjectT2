import React from 'react'
import "../styles/write_style.scss"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const Write = () => {

  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [category, setCat] = useState(state?.category || "")

  const navigate = useNavigate()

  const upload = async ()=>{
    try{
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      return res.data
    }catch(err){
      console.log(err)
    }
  }



  const handleClick = async (e) =>{
    e.preventDefault();
    const imgUrl = await upload();

    try{
      state 
      ? await axios.put(`/posts/${state.id}`, {
        title, 
        desc:value,
        category,
        img: file ? imgUrl : "",
      }) 
      : await axios.post(`/posts/`, {
        title,
        desc:value,
        category,
        img: file ? imgUrl : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
      navigate("/")
    }catch(err){
      console.error(err.response.data);
    }
  }



  return (
    <div className='add'>
      <div className='content'>
        <input type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
          <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
          </div>
      </div>
      <div className='menu'>


          <div className='item'>
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input style={{ display: "none" }} type="file" id="file" name="" onChange={(e) => setFile(e.target.files[0])}/>
            <label className='file' htmlFor="file">Upload Image</label>
            <div className="buttons">
              <button>Save as a draft</button>
              <button onClick={handleClick}>Publish</button>
            </div>
          </div>


          <div className='item2'>
            <h1>Categoria:</h1>
            
            <div className="cat">
            <input type="radio" name="cat" checked={category === "Majori"} value="Majori" id="major" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="major">Majori</label>
            </div>
            
            <div className="cat">
            <input type="radio" checked={category === "Minori"} name="cat" value="Minori" id="minor" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="minor">Juvenili</label>
            </div>

            <div className="cat">
            <input type="radio" checked={category === "General"} name="cat" value="General" id="general" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="general">General</label>
            </div>

            <div className="cat">
            <input type="radio" checked={category === "Concurs"} name="cat" value="Concurs" id="concurs" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="concurs">Concurs</label>
            </div>

            <div className="cat">
            <input type="radio" checked={category === "Altele"} name="cat" value="Altele" id="altele" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="altele">Altele</label>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Write