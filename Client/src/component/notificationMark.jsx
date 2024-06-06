import React from 'react'
import style from "./style.module.css"
const notificationMark = ({Data,onclick}) => {
  return (
    <div className={style.notificationMark} 
    onClick={()=>onclick(Data)}
    >
      <img src={Data.senderPicture} className={style.notificationMentorPics}></img>
      <p className={style.notificatoinResponseone}>{Data.senderName}  <span className={style.notificatoinResponse}> sent a request to join </span>{Data.projectTitle}</p>
     </div>
  ) 
}

export default notificationMark
