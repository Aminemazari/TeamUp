import React from 'react'
import Navbar from '../../component/NavBar'
import style from "./style/Dashboard.module.css"
import ProfileCard from '../../component/dashboardComponenet/profileCard'
import Streak from '../../component/dashboardComponenet/Streak'
import PremiumAccesCard from '../../component/dashboardComponenet/premiumAccesCard'
import ProjectsMemberCard from '../../component/dashboardComponenet/ProjectsMemberCard'
import ProjectCard from '../../component/dashboardComponenet/projectCard'
import SkillsGrowth from '../../component/dashboardComponenet/SkillsGrowth'
import ProjectMeeting from '../../component/dashboardComponenet/ProjectMeeting'
import MyProjectCard from '../../component/dashboardComponenet/MyProjectCard'
import pictur from "../../assets/Avatar.svg"
import SearchBar from '../../component/dashboardComponenet/SearchBarWithCreatProjectButton'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import book from "../../assets/book.svg"
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import NoProjectBar from '../../component/dashboardComponenet/noProjectBar'
import API_URL from '../../component/API_URL'
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const Dashboard = () => {
  const Navigate= useNavigate();
  const [inputValue,setInputValue]=useState();
  const [profileData,setProfileData]=useState(null);
  const [accessToken,setaccessToken]=useState(null); 
  const [MyProject,setMyProject]=useState(null);
  useEffect(()=>{
    setaccessToken( localStorage.getItem("accessToken")); 
   if (!localStorage.getItem("accessToken")){
     Navigate("/login");
   }
       },[])


  useEffect(() => {
  
    const UserData = localStorage.getItem('UserData');
    if (UserData){
      setProfileData(JSON.parse(UserData));
      console.log(JSON.parse(UserData))
      }
    }, []);

   useEffect(()=>{
     if (profileData){
        fetch((`${API_URL}/api/v4/projects-posts/for-user/${profileData.id}?pageSize=100&pageNumber=1`),{
          method: 'GET',
          headers:new Headers( {  
            'accept': 'text/plain',
           } ),
        })
        .then(response=>response.json())
        .then(ProjectData=>{
          setMyProject(ProjectData)

      })
        .catch(error=>console.log(error))
     } 
   },[profileData])

  const handleImageChange = async (event) => {

    const files = event.target.files;
    if (files && accessToken) {
      const formData = new FormData();
      Array.from(files).forEach(file => {
        formData.append('image', file);
      });
      try {
        console.log(accessToken)
        const response = await fetch(`${API_URL}/api/v1/files/user-picture`, {
          method: 'POST',
          headers:new Headers( {  
            'Authorization':`Bearer ${accessToken}`,
            'accept': 'text/plain',
           } ),
          body: formData,
        });
        if (response.ok) {
          message.success('Image uploaded successfully');
          
          fetch(`${API_URL}/api/v4/users/currentUser`,{
            method:"GET",
            headers:new Headers({  
              'accept': 'text/plain',
              'Authorization':`Bearer ${accessToken}`,
              
             } ),
          })
          .then(response => response.json())
          .then(UserData => {
            localStorage.setItem('UserData',JSON.stringify(UserData));
            setProfileData( UserData);
            
          })
          .catch(error =>
            console.log("error")
          );
         
       

        } else {
          message.error('Failed to upload image');
        }
      } catch (error) {
        message.error('Error uploading image');
      }
    }
  
  };


  useEffect(()=>{
         
       })
 
  const createNewProject=()=>{
    Navigate("/overview");
  }
  const handleSearchInput=(e)=>{
   setInputValue(e.target.value);
  }
  const clearSearchInput=()=>{
    setInputValue("");
  }
  const formatDate = (timestamp) => {
    const dateTime = new Date(timestamp);
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  if (!profileData ||  !MyProject){
    return (
      <>
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      </>
    )
  }
  return (
    <div className={style.hero}>
        <Navbar  Dashboard={true} Explore={false} Mentorship={false} About={false} picture={profileData.profilePicture} /> 

        <main className={style.MainCountainer}>
          <section className={style.sideBarRight}>
      {/*profileData.displayName */}
              <ProfileCard userName={"amine mazari "}  CareerName={profileData.handler} profilePictures={profileData.profilePicture} ReviewsNumber={profileData.followersCount} Reviews={profileData.rate} Upload={true} onChangePhoto={handleImageChange}/>
              <Streak/>
              
              <PremiumAccesCard Percentage={"50"} projectName={"web developer"} />
          </section>
          <section className={style.rightCountainer}>
            <div className={style.searchBar}>
                <SearchBar onCreate={createNewProject}
                value={inputValue}
                onchange={handleSearchInput}
                onClear={clearSearchInput}/>
              
              </div>
            <div className={style.myProjectBar}>
              <div className={style.myProjectIcon}>
                <img src={book}/>
                <p className={style.myProjectText}>My project</p>
              </div>
              <p className={style.seeAllButton}>See All</p>
            </div>
            <div className={style.MyProject}>
            {
                 (MyProject.totalCount == 0 )   
                 && 
                <NoProjectBar/>           
            }
           {
           !(MyProject.totalCount == 0 )   
                 && 
            MyProject.projectsPosts.map((project)=>{
              return(
              <MyProjectCard projectName={project.title} mentor={project.mentor.displayName}  date={formatDate(project.postingTime)} categorie={project.categories[0]} />
            )
            })
           }
          
           </div>
          </section>
        </main>

    </div>
  )
}

export default Dashboard
