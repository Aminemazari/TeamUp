import React from 'react'
import style from "./style.module.css"
const tag = ({text,onclick}) => {
  return (
<button className={style.tag} onClick={onclick}>{text}</button>
  )
}

export default tag
