import React from 'react'
import UserDataTable from '../components/UserDataTable'
import PostDataTable from '../components/PostDataTable'
import SponsorDataTable from '../components/SponsorDataTable'
import { fontFamily } from '@mui/system'


const Admin = () => {

  return (
    <div>
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
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