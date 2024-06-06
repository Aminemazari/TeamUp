import React,{useState,useEffect} from 'react'
import style from "./explore.module.css"
import Post from '../../component/post'
import pics from "../../assets/3.svg"
import API_URL from '../../component/API_URL'

const postSubSection =  ({display,Posts,data}) => {
 
    
    
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
      

        
</div>
  )
}

export default postSubSection
