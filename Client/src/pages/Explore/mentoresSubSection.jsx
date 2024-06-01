import React from 'react'
import style from "./explore.module.css"
import MentorsCard from '../../component/mentorsCard'
import pics from "../../assets/3.svg"
import API_URL from '../../component/API_URL'
const MentoresSubSection =  ({display}) => {

  return (
    <>
    <div className={`${style.Mentores_Sub_Section} ${!display ? style.not_diplayed: ''}`} >
    
     <div className={style.mentoresCards}>
      
       
          <MentorsCard userName={"data.projectsPosts[0].mentor.displayName"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
       
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      <MentorsCard userName={"User name"} careerName={"Careeer name"} pics={pics} tags={["Web","AI","Data Science"]} review={4.5} followers={"2.3k"} projects={"24"} numberReview={237} /> 
      </div>
    </div>
    </>
  )
}

export default MentoresSubSection
