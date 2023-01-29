import React from 'react'
import logo from "../images/white-border-logo.png"
import "../styles/navbar_footer_style.scss"
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'


const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext)


  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
            <Link to="/"><img src={logo} alt='Logo CSM'></img></Link>
            </div>
            <div className='links'>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
                <Link className='link' to="/"> 
                <h6>ACASA</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>GALERIA</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>STIRI</h6> 
                </Link>
                <Link className='link' to="/calendar"> 
                <h6>CALENDAR</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>PERSONAL</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>JUNIORI</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>SPONSORI</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>CONTACT</h6> 
                </Link>
                {currentUser && currentUser.role === 'admin' && (<Link className='link' to="/admin"> 
                <h6>DASHBOARD</h6> 
                </Link>)}

                <span className='currentUser'>{currentUser?.username}</span>
                {currentUser ? <span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
                {currentUser && currentUser.role == 'content_creator' ? <span className='write'><Link className='link' to="/write">Write</Link></span> : null}

            </div>
        </div>
    </div>
  )
}

export default Navbar