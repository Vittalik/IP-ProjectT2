// import React from 'react'
// //import Logo from "../images/csm logo.png"
// import logo from "../images/white-border-logo.png"
// import "../styles/navbar_footer_style.scss"
// import {Link} from "react-router-dom"
// import { useContext } from 'react'
// import { AuthContext } from '../context/authContext'


// const Navbar = () => {

//   const { currentUser, logout } = useContext(AuthContext)


//   return (
//     <div className='navbar'>
//         <div className='container'>
//             <div className='logo'>
//               <Link to="/"><img src={logo} alt='Logo CSM'></img></Link>
//             </div>
//             <div className='links'>
//             <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
//                 <Link className='link' to="/"> 
//                 <h6 className='acasa'>ACASA</h6>
//                 </Link>
//                 <Link className='link' to="/"> 
//                 <h6 className= 'multimedia'>MULTIMEDIA</h6> 
//                 </Link>
//                 <Link className='link' to="/"> 
//                 <h6 className= 'anunturi'>ANUNTURI</h6> 
//                 </Link>
//                 <Link className='link' to="/"> 
//                 <h6 className='articole'>ARTICOLE</h6> 
//                 </Link>
//                 <Link className='link' to="/"> 
//                 <h6 className='echipe'>ECHIPE</h6> 
//                 </Link>
//                 <Link className='link' to="/"> 
//                 <h6 className='juniori'>JUNIORI</h6> 
//                 </Link>
//                 <Link className='link' to="/sponsors"> 
//                 <h6>SPONSORI</h6>
//                 </Link>
//                 <Link className='link' to="/contacts"> 
//                 <h6 className='contact'>CONTACT</h6> 
//                 </Link>

//                 <span className='currentUser'>{currentUser?.username}</span>
//                 {currentUser ? <span onClick={logout} id='logout'>Logout</span> : <Link className='link' to="/login" id='login'>Login</Link>}
//                 {currentUser ? <span className='write' ><Link className='link' to="/write">Write</Link></span> : null}

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar

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
                <h6 className='acasa'>ACASA</h6> 
                </Link>
                <Link className='link' to="/gallery"> 
                <h6 className='galeria'>GALERIA</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6 className='stiri'>STIRI</h6> 
                </Link>
                <Link className='link' to="/calendar"> 
                <h6 className='calendar'>CALENDAR</h6> 
                </Link>
                <Link className='link' to="/personal"> 
                <h6 className='personal'>PERSONAL</h6> 
                </Link>
                <Link className='link' to="/"> 
                <h6 className='juniori'>JUNIORI</h6> 
                </Link>
                <Link className='link' to="/sponsors"> 
                <h6 className='sponsori'>SPONSORI</h6> 
                </Link>
                <Link className='link' to="/contacts"> 
                <h6 className='contact'>CONTACT</h6> 
                </Link>
                {currentUser && currentUser.role === 'admin' && (<Link className='link' to="/admin"> 
                <h6 className='dashboard'>DASHBOARD</h6> 
                </Link>)}

                <span className='currentUser'>{currentUser?.username}</span>
                {currentUser ? <span onClick={logout} className='login'>Logout</span> : <Link className='link' to="/login"><span className='login'>Login</span></Link>}
                {currentUser && currentUser.role === 'content_creator' ? <span className='write'><Link className='link' to="/write">Write</Link></span> : null}

            </div>
        </div>
    </div>
  )
}

export default Navbar