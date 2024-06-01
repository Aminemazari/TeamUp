import React from 'react'
import style from "./style.module.css"
const entroll_button = ({text,onclick}) => {
    
  return (
 <button className={style.entrole_button} onClick={onclick}>{text}</button>
  )
}

export default entroll_button
