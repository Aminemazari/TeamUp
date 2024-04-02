import React from 'react'
import style from "./style/mentorsCard.module.css"
import star from "../assets/star.svg" 
const mentorsCard = ({userName,careerName,pics,tags,review,followers,projects,numberReview}) => {
  return (
    <div className={style.mentorsCard}>
        <section className={style.mentorProfileInfo}>
          <img src={pics} alt="profile picture" />
          <sub>
          <p className={style.mentor_userName}>{userName}</p>
          <p className={style.mentor_careerName}>{careerName}</p>
          </sub>
        </section>
        <div className={style.mentors_skills}>
        {
             tags.map((tag) => (
                        <button className={style.mentors_skill}>
                            {tag}
                        </button>     
             ))
        }        
        </div>
        <mark className={style.mentors_Reviews}>
         <img src={star} className={style.star}></img>
         <p className={style.starNumber}>{review}</p>
         <p className={style.review}>{numberReview} <p className={style.reviewText}>Reviews</p></p>
        </mark>
        <section className={style.mentors_Reach}>
            <section className={style.reach}> 
                <p className={style.followersText}>FOLLOWERS</p>
                <p className={style.followersNum}>{followers}</p>
            </section>
            <section className={style.reach}>
                <p className={style.followersText}>PROJECTS</p>
                <p className={style.followersNum}>{projects}</p>
            </section>
        </section>
        <div className={style.line}></div>
        <section className={style.ViewAndFollow}>
            <button className={style.viewButton}>View</button>
            <button className={style.followButton}>Follow</button>
        </section>
    </div>
  )
}
export default mentorsCard
