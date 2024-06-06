import React,{useState,useEffect} from 'react'
import styl from "./style/home.module.css"
import Navbar from "../../component/NavBar"
import { Navigate, useNavigate } from 'react-router-dom'
import CategoriesCard from '../../component/categoriesCard'
import brain from "../../assets/brain.svg"
import computer from "../../assets/computer.svg"
import andriod from "../../assets/android.svg"
import Post from '../../component/post'
import pics from "../../assets/3.svg"
import MentorsCard from '../../component/mentorsCard'
import PostDetail from '../../component/postDetail'
import TagsSelect_form from '../SignUp page/tagsSelect_form'
import FilterSideBar from '../../component/filterSideBar.jsx'
import SearchBar from '../../component/searchBar.jsx'
import Explore_Page from '../Explore/Explore.jsx'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import API_URL from '../../component/API_URL.jsx'
const home = () => {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // This will stop the loading state after the timeout
    }, 5000); // Set your desired timeout duration (in milliseconds)

    const UserData = localStorage.getItem('UserData');
    if (UserData) {
      setProfileData(JSON.parse(UserData));
      clearTimeout(timeout); // Clear the timeout if data is found before timeout
      setLoading(false); // Stop loading immediately
    }
  }, []);

  const [Data,setData]=useState(null);  
  useEffect( () => {    
     fetch(`${API_URL}/api/v4/projects-posts?pageSize=100&pageNumber=1`,{
    method:"GET",
    headers:new Headers({  
      'accept': 'text/plain',
     } ),
  })
  .then( response => response.json() )
  .then (DataPost=>{setData(DataPost.projects)})}  
,[])  

  if (loading) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );
  }

  if (!profileData) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );
  }
  if (!Data) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );
  }
        
       
    
  return (
    <div className={styl.hero}>
      <Navbar  Dashboard={false} Explore={true} Mentorship={false} About={false} picture={profileData.profilePicture}/>
      <Explore_Page Data={Data}/>
    </div>
  )
}

export default home
