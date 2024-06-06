import React,{useState,useEffect} from 'react'
import Navbar from '../../component/NavBar'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Navigate, useNavigate } from 'react-router-dom'
const AboutUs = () => {
  const Navigate=useNavigate();
  const [profileData,setProfileData]=useState(null);
  useEffect(()=>{
    const accessToken = localStorage.getItem("accessToken"); 
    const UserData = localStorage.getItem('UserData');
    if(UserData){
      setProfileData(JSON.parse(UserData));
    } 
    if (!accessToken){
      Navigate("/login");
    }
        },[])
        if (!profileData){
          return(
          <Box sx={{ width: '100%' }}>
          <LinearProgress />
          </Box> 
           )
      }
  return (

          <div className={""}>
        <Navbar  Dashboard={false} Explore={false} Mentorship={false} About={true} picture={profileData.profilePicture}/>  
    </div>
 
  )
}

export default AboutUs
