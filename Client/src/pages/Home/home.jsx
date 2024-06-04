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

const home = () => {
  const Navigate=useNavigate();

  useEffect(()=>{
   const accessToken = localStorage.getItem("accessToken"); 
   if (!accessToken){
     Navigate("/login");
   }
       },[])


  return (
    <div className={styl.hero}>
      <Navbar  Dashboard={false} Explore={true} Mentorship={false} About={false}/>
      <Explore_Page/>
    </div>
  )
}

export default home
