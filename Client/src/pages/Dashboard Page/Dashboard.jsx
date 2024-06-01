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
import picture from "../../assets/Avatar.svg"
import SearchBar from '../../component/dashboardComponenet/SearchBarWithCreatProjectButton'
import book from "../../assets/book.svg"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import NoProjectBar from '../../component/dashboardComponenet/noProjectBar'
const Dashboard = () => {
  const Navigate= useNavigate();
  const [inputValue,setInputValue]=useState();
  const createNewProject=()=>{
    Navigate("/overview");
  }
  const handleSearchInput=(e)=>{
   setInputValue(e.target.value);
  }
  const clearSearchInput=()=>{
    setInputValue("");
  }
  return (
    <div className={style.hero}>
        <Navbar  Dashboard={true} Explore={false} Mentorship={false} About={false}/> 

        <main className={style.MainCountainer}>
          <section className={style.sideBarRight}>
      
              <ProfileCard userName={"Amine Mazari"}  CareerName={"Web Developer"} profilePicture={picture} ReviewsNumber={0} Reviews={0.0}/>
              <Streak/>
              
              <PremiumAccesCard Percentage={"50"} projectName={"web developer"} />
          </section>
          <section className={style.rightCountainer}>
            <div className={style.searchBar}>
                <SearchBar onCreate={createNewProject}
                value={inputValue}
                onchange={handleSearchInput}
                onClear={clearSearchInput}/>
              
              </div>
            <div className={style.myProjectBar}>
              <div className={style.myProjectIcon}>
                <img src={book}/>
                <p className={style.myProjectText}>My project</p>
              </div>
              <p className={style.seeAllButton}>See All</p>
            </div>
            
            <NoProjectBar/>

          </section>
        </main>

    </div>
  )
}

export default Dashboard
