import React from 'react'
import style from "./style.module.css"
import logo from "../assets/TLogo.svg"
import NavigationLinks from './NavigationLinks'
import menu from "../pages/assets/Menu.svg"
import chat from "../pages/assets/Chat.svg"
import Setting from "../pages/assets/Setting.svg"
const NavBar = () => {
  return (
    <div className={style.NavBar}>
        <img src={logo} alt="logo" className={style.TLogo} />
        <div className={style.Navigation}>
            <NavigationLinks text={"Dashboard"} />
            <NavigationLinks text={"Explore"}/>
            <NavigationLinks text={"Mentorship"}/>
            <NavigationLinks text={"About Us"} />
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
