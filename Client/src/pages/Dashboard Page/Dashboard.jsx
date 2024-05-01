import React from 'react'
import Navbar from '../../component/NavBar'
import style from "./style/Dashboard.module.css"
import ProfileCard from '../../component/dashboardComponenet/profileCard'
import Streak from '../../component/dashboardComponenet/Streak'
import PremiumAccesCard from '../../component/dashboardComponenet/premiumAccesCard'
import ProjectsMemberCard from '../../component/dashboardComponenet/ProjectsMemberCard'
import ProjectCard from '../../component/dashboardComponenet/projectCard'
import SkillsGrowth from '../../component/dashboardComponenet/SkillsGrowth'
import ProjectMeeting from '../../component/dashboardComponenet/ProjectMeeting'
import MyProjectCard from '../../component/dashboardComponenet/MyProjectCard'
const Dashboard = () => {
  return (
    <div className={style.hero}>
        <Navbar  Dashboard={true} Explore={false} Mentorship={false} About={false}/>  
    </div>
  )
}

export default Dashboard
