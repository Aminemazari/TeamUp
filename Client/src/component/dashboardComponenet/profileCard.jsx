import React from 'react'
import style from "../style.module.css"
import picture from "../../assets/Avatar.svg"
import star from "../../assets/star.svg"
import badge from "../../assets/Badges.svg"
const profileCard = ({userName,CareerName,ReviewsNumber,Reviews,profilePicture}) => {
  if (profilePicture==null){
    profilePicture=picture;
  }
  else{
  
  }
  return (
 <div className={style.profileCard}>
  <div className={style.Profile_card_countainer}>
   <section className={style.avatar}>
     <img className={style.avatarImage} src={profilePicture} alt={userName}></img>
     <img className={style.bdge} src={badge}></img>
    </section>
    <div className={style.profileCardInfo}>
      <p className={style.userName}>{userName }</p>
      <p className={style.CareerName}>{CareerName}</p>
    </div>
  </div>
  <div className={style.ReviewsSection}>
    <img src={star}></img>
    <p className={style.Reviews}>{Reviews}</p>
    <p className={style.ReviewsNumber}>{ReviewsNumber} Reviews</p>
  </div>
 </div>
  )
}

export default profileCard
