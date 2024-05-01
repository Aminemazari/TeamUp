import React from 'react'
import Navbar from '../../component/NavBar'


const Dashboard = () => {
  return (
    <div className={""}>
        <Navbar  Dashboard={false} Explore={false} Mentorship={true} About={false}/>  
    </div>
  )
}

export default Dashboard
