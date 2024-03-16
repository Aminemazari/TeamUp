import React from 'react'
import style from "./style.module.css"
const tag = ({text,onclick,clicked}) => {

  return (
<button className={`${style.tag} ${clicked ? style.tagGray : ''}`} onClick={onclick}>{text}</button>
  )
}

export default tag
