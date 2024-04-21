import React, { useState } from 'react'
import style from "./style.module.css"
import logo from "../assets/TLogo.svg"
import NavigationLinks from './NavigationLinks'
import menu from "../pages/assets/Menu.svg"
import chat from "../pages/assets/Chat.svg"
import Setting from "../pages/assets/Setting.svg"
import { useNavigate } from 'react-router-dom'
const NavBar = ({DashboardClicked,ExploreClicked,MentorshipClicked,AboutClicked,Dashboard,Explore,Mentorship,About}) => {
  /*
  const [Dashboard,setDashboard]=useState(false);
  const [Explore,setExplore]=useState(false);
  const [Mentorship,setMentorship]=useState(false);
  const [About,setAbout]=useState(false);
   const dachboardOn=()=>{
    setDashboard(!Dashboard)
    setExplore(false)
    setMentorship(false)
    setAbout(false)
   }
   const exploreOn=()=>{
    setExplore(!Explore)
    setDashboard(false)
    setMentorship(false)
    setAbout(false)
   }
   const MentorshipOn=()=>{
    setMentorship(!Mentorship)
    setExplore(false)
    setDashboard(false)
    setAbout(false)
   }
   const aboutUsOn=()=>{
    setAbout(!About)
    setMentorship(false)
    setExplore(false)
    setDashboard(false)
   }*/
  return (
    <div className={style.NavBar}>
        <img src={logo} alt="logo" className={style.TLogo} />
        <div className={style.Navigation}>
            <NavigationLinks text={"Dashboard"} onclick={DashboardClicked} clicked={Dashboard}/>
            <NavigationLinks text={"Explore"} onclick={ExploreClicked} clicked={Explore}/>
            <NavigationLinks text={"Mentorship"} onclick={MentorshipClicked} clicked={Mentorship}/>
            <NavigationLinks text={"About Us"}  onclick={AboutClicked} clicked={About}/>
        </div>
        <section className={style.features}>
      <img src={chat}/>
      <img src={Setting}/>
      <img src={menu}/>
      </section>
      
    </div>
  )
}

export default NavBar
