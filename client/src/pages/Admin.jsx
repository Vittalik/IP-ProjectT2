import React from 'react'
import UserDataTable from '../components/UserDataTable'
import PostDataTable from '../components/PostDataTable'
import SponsorDataTable from '../components/SponsorDataTable'


const Admin = () => {

  return (
    <div>Welcome to the Admin Dashboard!
    <br></br>
    <div className='listContainer'>
        <div className="listTitle"> Site Users </div>
        <UserDataTable/>
    </div>
    <div className='listContainer'>
        <div className="listTitle"> Posts </div>
        <PostDataTable/>
    </div>
    <div className='listContainer'>
        <div className="listTitle"> Sponsors </div>
        <SponsorDataTable/>
    </div>
    </div>
  )
}

export default Admin