import React from 'react'
import style from "./style.module.css"
const NavigationLinks = ({clicked,onclick,text}) => {
  return (
 <button className={`${style.NavigationLinks} ${clicked ? style.FixedUnderlineButton: ''}`} onClick={onclick} >{text}</button>
  )
}

export default NavigationLinks
