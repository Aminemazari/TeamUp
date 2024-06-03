import React,{useState,useEffect} from 'react'
import style from "./explore.module.css"
import Post from '../../component/post'
import pics from "../../assets/3.svg"
import API_URL from '../../component/API_URL'

const postSubSection =  ({display,Posts}) => {
  const [data,setData]=useState([]);
  
    useEffect( () => {const response= fetch(`${API_URL}/api/v4/projects-posts?PageSize=10&PageNumber=1`)
    .then( result => result.json() )
    .then ( result=>setData(result.projectsPosts)) },[])
    
     
    
  return (
    <div className={`${style.posts} ${!display ? style.not_diplayed: ''}`}>
      {data &&
       data.map((dat)=>{
        return(
      <Post userName={dat.mentor.displayName} 
      pics={dat.mentor.profilePicture} 
      categorie={dat.mentor.handler} 
      date={dat.postingTime} 
        Title={dat.title}
        description={dat.summary}
        duration={dat.expectedDuration}
        member={dat.expectedTeamSize}
        level={dat.projectLevel}
        tags={dat.categories  }
        id={dat.id}
       
        />
        )
       })
      }
      
        <Post userName={"Lorem Ipsum"} pics={pics} categorie={"Mobile Developer"} date={"3h"} 
        Title={"Habit Tracker: A Simple Mobile App for Daily Habits"}
        description={"This project aims to introduce users to Teal programming for mobile development by building a basic habit tracker app. Users will learn fundamental Teal concepts like user interface design, data storage, notifications, and user interaction."}
        duration={"1 mounth"}
        member={5}
        level={"Beginner"}
        tags={["Web Dev","Mobile Dev"]}
       
        />
             <Post userName={"Lorem Ipsum"} pics={pics} categorie={"Mobile Developer"} date={"3h"} 
        Title={"Habit Tracker: A Simple Mobile App for Daily Habits"}
        description={"This project aims to introduce users to Teal programming for mobile development by building a basic habit tracker app. Users will learn fundamental Teal concepts like user interface design, data storage, notifications, and user interaction."}
        duration={"1 mounth"}
        member={5}
        level={"Beginner"}
        tags={["Web Dev","Mobile Dev"]}
       
        />
        
</div>
  )
}

export default postSubSection
