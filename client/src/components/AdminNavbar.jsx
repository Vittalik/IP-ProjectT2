import React from 'react'
import Logo from "../images/csm logo.png"
import "../styles/admin_navbar.scss"
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'


const AdminNavbar = () => {

  const { currentUser, logout } = useContext(AuthContext)


  return (
    <div className='admin_navbar'>
        <div className='container'>
            <div className='logo'>
              <Link to="/"><img src={Logo}></img></Link>
            </div>
            <div className='links'>
                <Link className='link' to="/"> 
                <h6>PERSONAL</h6> 
                </Link>
                <Link className='link' to="/admin/users"> 
                <h6>USERS AND POSTS</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6>MATCHES</h6>
                </Link>

                <span>{currentUser?.username}</span>
                {currentUser ? <span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
                <span className='write'><Link className='link' to="/write">Write</Link></span>

            </div>
        </div>
    </div>
  )
}

export default AdminNavbar