import React from 'react'
import UserDataTable from '../components/UserDataTable'
import "../styles/admin_users.scss"


const AdminUsers = () => {
  return (
    <div>
    <div className='listContainer'>
        <div className="listTitle"> Site Users </div>
        <UserDataTable/>
    </div>
    <div className='listContainer'>
        <div className="listTitle"> Posts </div>
    </div>
    </div>
  )
}

export default AdminUsers