import React from 'react'
import style from "./style.module.css"
import ProfileCard from './dashboardComponenet/profileCard'
import star from "../assets/star.svg"
import PostTag from './postTag'
import Entroll_button from './entroll_button'
const post = ({userName,pics,categorie,date,Title,description,tags}) => {
  return (
    <div className={style.post}>
        <mark className={style.postWriterInfo}>
        <div className={style.profileCard}>
            <div className={style.Profile_card_countainer_post}>
            <section className={style.avatar}>
                <img className={style.avatarImage} src={pics} alt={userName}></img>
                </section>
                <div className={style.profileCardInfo}>
                <p className={style.userNamePost}>{userName }</p>
                <p className={style.CareerName}>{categorie}</p>
                </div>
            </div>
            </div>

            <p className={style.dateOfPosting}>Posted {date} ago</p>
        </mark>
        <section className={style.postBody}>
            <h1 className={style.postTitle}>{Title}</h1>
            <p className={style.postDescription}>{description} <button className={style.more}>more</button></p>
            <sub className={style.postTags}>
            {
             tags.map((tag, index) => (
                 <PostTag  text={tag}/>                    
             ))
} 
            </sub>
        </section>
        <div className={style.buttonpostenroll}>
            <mark className={style.enrollButton}>
                <Entroll_button text={"Entroll"}/>
            </mark>
            </div>

    </div>
  )
}

export default post
