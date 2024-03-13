import React from 'react'
import style from "./style.module.css"
import Done from "../pages/assets/Done.svg"
const validAllert = () => {
  return (
   <mark className={style.DoneNotification}>
   <img className={style.done} src={Done}></img>
   <p className={style.Your_account_has_been_verified}>Your account has been verified!</p>
   </mark>
  )
}

export default validAllert
