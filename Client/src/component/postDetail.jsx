import React from 'react'
import style from "./style.module.css"
import styl from "./style/postDetail.module.css"
import PostTag from './postTag'
import Entroll_button from './entroll_button'
const postDetail = ({userName,pics,careerName,title,description,tags,team,duration,categorie}) => {
  return (
    <div className={styl.postDetail}>
      
        <div className={styl.categorieButton}>
            <button className={style.categorieButton}>{categorie}</button>
        </div>
      
              <div className={style.profileCard}>
            <div className={style.Profile_card_countainer_post}>
            <section className={style.avatar}>
                <img className={style.avatarImage} src={pics} alt={userName}></img>
                </section>
                <div className={style.profileCardInfo}>
                <p className={style.userNamePost}>{userName }</p>
                <p className={style.CareerName}>{careerName}</p>
                </div>
            </div>
            </div>
           
        
            <section className={styl.postBody}>
            <p className={styl.title}>{title}</p>
            <p className={styl.descriptions}>{description}</p>
            <section className={styl.description}>
                <div className={styl.team}>
                    <p className={styl.teamText}>TEAM</p>
                    <p className={styl.teamNum}>{team} <p className={styl.member}>MEMBERS</p></p>
                </div>
                <div className={styl.line}>
                </div>
                <div className={styl.team}>
                <p className={styl.teamText}>DURATION</p>
                <p className={styl.teamNum}>{duration} <p className={styl.member}>WEEKS</p></p>
                </div>
            </section>
            <section className={styl.tags}>
            {
             tags.map((tag, index) => (
                 <PostTag  text={tag}/>                    
             ))
            } 
            </section>
            </section>
            <div className={styl.buttonpostenroll}>
                <Entroll_button text={"Entroll"}/>
            </div>

            


    </div>
  )
}

export default postDetail
