import React from 'react'
import logo from "../images/white-border-logo.png"
//import Logo from "../images/csm logo.png"
import "../styles/admin_navbar.scss"
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'


const AdminNavbar = () => {

  const { currentUser, logout } = useContext(AuthContext)


  return (
    <div className='admin_navbar'>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <div className='container'>
            <div className='logo'>
              <Link to="/"><img src={logo}></img></Link>
            </div>
            <div className='links'>
                <Link className='link' to="/personal"> 
                <h6 className='personal'>PERSONAL</h6> 
                </Link>
                <Link className='link' to="/admin/users"> 
                <h6 className='users'>USERS AND POSTS</h6> 
                </Link>
                <Link className='link' to="/calendar"> 
                <h6 className='matches'>MATCHES</h6>
                </Link>

                <span className='currentUser'>{currentUser?.username}</span>
                {currentUser ? <span onClick={logout} className='login'>Logout</span> : <Link className='link' to="/login"><span className='login'>Login</span></Link>}
                <span className='write'><Link className='link' to="/write">Write</Link></span>

            </div>
        </div>
    </div>
  )
}

export default AdminNavbar