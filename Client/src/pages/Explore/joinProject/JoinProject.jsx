import React, { useEffect, useState } from 'react'
import iconWeb from "../../../assets/icons8-web.svg"
import iconMobile from "../../../assets/mobileDev.svg"
import iconDesign from "../../../assets/design.svg"
import iconCyberSecurity from "../../../assets/cyberSecurity.svg"
import iconIA from "../../../assets/IAdev.svg"
import iconBackend from "../../../assets/backendDev.svg"
import icongame from "../../../assets/gameDev.svg"
import iconIos from "../../../assets/iosDev.svg"
import iconAndriod from "../../../assets/androidDev.svg"
import durationPics from "../../../assets/duration.png"
import levelPics from "../../../assets/level.svg"
import memberPics from "../../../assets/member.svg"
import NavBar from '../../../component/NavBar'
import SearchBar from '../../../component/searchBar'
import style from "./style/joinProject.module.css"
import { Breadcrumb } from 'antd';
import pics from "../../../assets/4.svg"
import { Button} from 'antd'
import ProfileCard from '../../../component/dashboardComponenet/profileCard'
import bookOpen from "../../../assets/Book_open.svg"
import API_URL from '../../../component/API_URL'
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
const JoinProject = () => {

  const location  = useLocation();
  const [data,setData]=useState(null); 
  const id  = location.state?.data;
  useEffect(()=>{
    if (id) {
    fetch(`${API_URL}/api/v4/projects-posts/${id}`,{
      method: "GET",
      headers : new Headers( {  
        'content-type' : 'application/json',
        'accept': 'text/plain',
       }),
      }
    ).then(response=>
      response.json()
    ).then(result=> {
      setData(result)
     console.log(result)
    }).catch(
      e=>console.log(e)
    )
  }   
  },[id])
  if (!data){
    return (
      <>
         <Box sx={{ width: '100%' }}>
        <LinearProgress />
        </Box> 
      </>
    )
  }
 const profilePics=data.mentor.profilePicture  ;
  const userName=data.mentor.displayName;
  const careerName=data.mentor.handler;
  const reviewStar=data.mentor.rate;
  const requiredSkills=data.requiredSkills;
  const tags=data.categories;
  const categorie="Web Dev";
  const projectTitle=data.title;
  const level=data.projectLevel;
  const duration=data.expectedDuration;
  const members=data.expectedTeamSize;
  const samary=data.summary;
  const projectScenario=data.scenario;
  const projectGoals=data.learningGoals;
  const teamRoles=data.teamAndRols;
  const numberProject=10;
/*
 const profilePics=pics  ;
  const userName="User name";
  const careerName="Careeer name";
  const reviewStar=4.5;
  const numberReview=200;
  const numberProject=10;
  const requiredSkills=["html","css","JS","React","MySQL","Dart","Python",".Net"];
  const tags=["Web Dev"];
  const categorie="Web Dev";
  const projectTitle="Online Note Taking App";
  const level="Beginner";
  const duration="1 month";
  const members=5;
  const samary="Build a user-friendly web app for organized note-taking. Users can create notebooks, add text with formatting, images, and links. This project is a great introduction to web development fundamentals.";
  const projectScenario="Develop a web application for note-taking and organization. Users will be able to:Create multiple notebooks for different purposes.Add rich text notes with formatting options, images, and links for enhanced note-taking.Organize notes using tags for easy search and retrieval.";
  const projectGoals="Build a functional online note-taking application with core features.Learn web development fundamentals (HTML, CSS, JavaScript).Gain experience in user interface (UI) design principles";
  const teamRoles="Front-End Developer (1-2 members): Collaborate with the Mentor to build the user interface (UI) and functionalities using HTML, CSS, and JavaScript. This includes creating forms for adding notes and notebooks, implementing rich text editing functionalities, and designing a user-friendly layout for note organization and retrieval.Back-End Developer (1-2 members): Responsible for server-side logic (user accounts, data storage of notes) under the Mentor's guidance, if the project involves features like user accounts or complex data storage requirements.UI/UX Designer (Optional): Collaborates with the Mentor and front-end developers to design an intuitive and visually appealing interface for note-taking and organization.";*/
  var iconForCategorie;
  switch (categorie) { 
    case "Web Dev":
      iconForCategorie=iconWeb;
      break;
  case "Mobile Dev":
    iconForCategorie=iconMobile;
      
      break;

  case "Design":
    iconForCategorie=iconDesign;
      break;

  case "Cyber Security":
    iconForCategorie=iconCyberSecurity;
      break;

  case "AI":
    iconForCategorie=iconIA;
      break;

  case "Backend Dev":
    iconForCategorie=iconBackend;
      break;

  case "Game Dev":
    iconForCategorie=icongame;
      break;

  case "IOS Dev":
    iconForCategorie=iconIos;
      break;

  case "Andriod":
    iconForCategorie=iconAndriod;
      break;

  default:
      break;

      }
  return (
    <div className={style.hero}>
         <NavBar Explore={true}/>
      <div className={style.Subhero}>
      <div className={style.SearchBar}>
        <div className={style.subSection}>
            <SearchBar/>
        </div>
      </div>
      
      <section className={style.projectCountainer}>
         <section className={style.projectDetailCountainer}>
          <div className={style.projectDetailSeperater}>
            <div className={style.projectDetailSubCountainer}>
              <Breadcrumb
                    items={[
                {
                  title: <a href="/Explore">Explore</a>,
                },
                {
                  title: "Projects",
                },
                {
                  title: "Project",
                },
          
              ]}
              />
              <div className={style.tags}>
                  {tags && tags.map((tag) => {
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
              <h1 className={style.projectTitle}>{projectTitle}</h1>
              <div className={style.levelDurationMemember}>
                  <button className={style.postInfo}><img src={levelPics}></img>{level} </button>
                  <button className={style.postInfo}><img src={memberPics}></img> {members} member</button>
                  <button className={style.postInfo}><img src={durationPics}></img> {duration}</button>

              </div>

                <h1 className={style.projectSammary}>{samary}</h1>

                  <Button type="primary" size="large" 
                  style={{
                  background:"#6738DD",
                  width:"166px",
                  
                }}>Join Project</Button>
            </div>
              <div className={style.categorieImgCountainer}>
                <img src={iconForCategorie} className={style.categorieImge}/>
                </div>
          </div>
          <div className={style.theRestOfTheProjectDetail}>
                <div className={style.itemDetail}>
                  <h1 className={style.itemTitle}>Project Scenario</h1>
                  <p className={style.itemDescription}>{projectScenario}</p>
                </div>
                <div className={style.itemDetail}>
                  <h1 className={style.itemTitle}>Project Goals & Learning</h1>
                  <p className={style.itemDescription}>{projectGoals}</p>
                </div>
                <div className={style.itemDetail}>
                  <h1 className={style.itemTitle}>Team & Roles</h1>
                  <p className={style.itemDescription}>{teamRoles}</p>
                </div>
          </div>
         </section>
         <section className={style.mentorDetailCountainer}>
            <h1 className={style.aboutMentor}>About the mentor</h1>
            <div className={style.projectNumberCountainer}>
               <ProfileCard profilePicture={profilePics} userName={userName} CareerName={careerName} ReviewsNumber={100} Reviews={reviewStar}/>
               
               <div className={style.openBook}>

               <img src={bookOpen}/>
               <p className={style.numberProject}>{numberProject} <span className={style.projectText}>projects</span></p>
               
               </div>
              </div>
              <div className={style.line}></div>
              <div className={style.requiredSkillsCountainer}>
              <h1 className={style.aboutMentor}>Required Skills</h1>
              <div className={style.requiredSkills}>
               {
                requiredSkills.map((requiredSkill)=>{
                  return(
                    <button className={style.tagButton}>{requiredSkill}</button>
                  )})
               }
               </div>
              </div>
         </section>
      </section>
      </div> 
        
      
    </div>
  )
}

export default JoinProject
