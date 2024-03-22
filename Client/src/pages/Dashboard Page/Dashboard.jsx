import React from 'react'
import NavBar from '../../component/NavBar'
import style from "./style/Dashboard.module.css"
import ProfileCard from '../../component/profileCard'
import Streak from '../../component/Streak'
import PremiumAccesCard from '../../component/premiumAccesCard'
import ProjectsMemberCard from '../../component/ProjectsMemberCard'
import ProjectCard from '../../component/projectCard'
import SkillsGrowth from '../../component/SkillsGrowth'
import ProjectMeeting from '../../component/ProjectMeeting'
import MyProjectCard from '../../component/MyProjectCard'
const Dashboard = () => {
  return (
    <div className={style.hero}>
    <NavBar></NavBar>
    <MyProjectCard/>
    </div>
  )
}

export default Dashboard
