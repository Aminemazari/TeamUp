import React from 'react'
import style from "./style.module.css"
const postTag = ({text}) => {
  return (
  <div className={style.postTag}>{text}</div>
  )
}

export default postTag
