import React, { useState } from 'react'
import style from "./style.module.css"
import ProfileCard from './dashboardComponenet/profileCard'
import star from "../assets/star.svg"
import PostTag from './postTag'
import durationPics from "../assets/duration.png"
import levelPics from "../assets/level.svg"
import memberPics from "../assets/member.svg"
import Entroll_button from './entroll_button'
import iconWeb from "../assets/icons8-web.svg"
import iconMobile from "../assets/mobileDev.svg"
import iconDesign from "../assets/design.svg"
import iconCyberSecurity from "../assets/cyberSecurity.svg"
import iconIA from "../assets/IAdev.svg"
import iconBackend from "../assets/backendDev.svg"
import icongame from "../assets/gameDev.svg"
import iconIos from "../assets/iosDev.svg"
import iconAndriod from "../assets/androidDev.svg"
import { useNavigate } from 'react-router-dom'


const post = ({userName,pics,categorie,date,Title,description,level,member,duration,tags,id}) => { 
    const Navigate = useNavigate("");
        const dateTime = new Date(date);
        const year = dateTime.getFullYear();
        const month = String(dateTime.getMonth() + 1).padStart(2, '0');
        const day = String(dateTime.getDate()).padStart(2, '0');
       date=`${year}-${month}-${day}`;
       const handleclick=(id)=>{
        Navigate("/join-Project", { state: { data : id} });
       }

  return (
    <div className={style.post}>

        <section className={style.postBody}>
        
            <sub className={style.postTags}>
              <div className={style.tagsList}>
            {tags.map((tag) => {
                var iconn ="";
              switch (tag) { 
               case "Web Dev":
                iconn=iconWeb;
                break;
            case "Mobile Dev":
                iconn=iconMobile;
                
                break;

            case "Design":
                iconn=iconDesign;
                break;

            case "Cyber Security":
                iconn=iconCyberSecurity;
                break;

            case "AI":
                iconn=iconIA;
                break;

            case "Backend Dev":
                iconn=iconBackend;
                break;

            case "Game Dev":
                iconn=icongame;
                break;

            case "IOS Dev":
                iconn=iconIos;
                break;

            case "Andriod":
                iconn=iconAndriod;
                break;

            default:
                break;

                }
                return( 
                    <button className={style.categorieButtonPost}><img src={iconn}></img>{tag}</button>
                );   
            })} 
            </div>    
             <p className={style.dateOfPosting}>Posted {date} </p>
            </sub>
          
            <h1 className={style.postTitle}>{Title}</h1>
            <div className={style.additionalInfo}>
                <button className={style.postInfo}><img src={levelPics}></img>{level} </button>
                <button className={style.postInfo}><img src={memberPics}></img> {member} member</button>
                <button className={style.postInfo}><img src={durationPics}></img> {duration}</button>

            </div>
            <p className={style.postDescription}>{description}</p>
     
        </section>
        <div className={style.buttonpostenroll}>
            <div className={style.profileCard}>
                <div className={style.Profile_card_countainer_post}>
                <section className={style.avatar}>
                    <img className={style.avatarImagePost} src={pics} alt={userName}></img>
                    </section>
                    <div className={style.profileCardInfo}>
                    <p className={style.userNamePost}>{userName }</p>
                    <p className={style.CareerName}>{categorie}</p>
                    </div>
                </div>
                </div>

                {/*<p className={style.dateOfPosting}>Posted {date} ago</p>*/}
            <mark className={style.enrollButton}>
                <Entroll_button text={"View Project"} onclick={()=>handleclick(id)}/>
            </mark>
            </div>

    </div>
  )
}

export default post
