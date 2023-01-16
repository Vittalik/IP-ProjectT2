import React from 'react'
import Logo from "../images/csm logo.png"
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
              <Link to="/"><img src={Logo}></img></Link>
            </div>
            <div className='links'>
                <Link className='link' to="/"> 
                <h6>ACASA</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>MULTIMEDIA</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>ANUNTURI</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>ARTICOLE</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>ECHIPE</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>JUNIORI</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>CONTACT</h6> 
                </Link>

                <span>{currentUser?.username}</span>
                {currentUser ? <span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
                <span className='write'><Link className='link' to="/write">Write</Link></span>

            </div>
        </div>
    </div>
  )
}

export default Navbar