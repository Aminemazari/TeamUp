import React, { useState,useEffect } from 'react'
import style from "./style.module.css"
import logo from "../assets/TLogo.svg"
import NavigationLinks from './NavigationLinks'
import menu from "../pages/assets/Menu.svg"
import chat from "../pages/assets/Chat.svg"
import Setting from "../pages/assets/Setting.svg"
import { useNavigate } from 'react-router-dom'
import picsImport from "../assets/Avatar picture.svg"
const NavBar = ({Dashboard,Explore,Mentorship,About,Categories}) => {
  const [profileData,setProfileData]=useState("");

  useEffect(() => {
    const UserData = localStorage.getItem('UserData');
    setProfileData(JSON.parse(UserData));
  }, []);

  const Navigate= useNavigate();
  const DashboardClicked=()=>{
    Navigate("/dashboard")
   }
   const ExploreClicked=()=>{
    Navigate("/home")
   }
   const MentorshipClicked=()=>{
    Navigate("/mentorship")
   }
   const AboutClicked=()=>{
    Navigate("/about")
   }
   const CategoriesClicked=()=>{
    Navigate("/categories")
   }
  return (
    <div className={style.NavBar}>
        <img src={logo} alt="logo" className={style.TLogo} />
        <div className={style.Navigation}>
            <NavigationLinks text={"Dashboard"} onclick={DashboardClicked} clicked={Dashboard}/>
            <NavigationLinks text={"Categories"} onclick={CategoriesClicked} clicked={Categories}/>
            <NavigationLinks text={"Explore"} onclick={ExploreClicked} clicked={Explore}/>
            <NavigationLinks text={"Mentorship"} onclick={MentorshipClicked} clicked={Mentorship}/>
            <NavigationLinks text={"About Us"}  onclick={AboutClicked} clicked={About}/>
        </div>
        <section className={style.features}>
      <img src={chat}/>
      <img src={Setting}/>
      <img src={profileData.profilePicture}   className={style.profilePicsNavBar}/>
      </section>
      
    </div>
  )
}

export default NavBar
