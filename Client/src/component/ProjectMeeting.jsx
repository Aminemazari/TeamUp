import React from 'react'
import styl from "./style.module.css"
import Date_today from "../assets/Date_today.svg"
const ProjectMeeting = ({Date,Time}) => {
  return (
    <div className={styl.ProjectMeeting}>
      <img src={Date_today}></img>
      <section className={styl.ProjectMeetingInfo}>
        <p className={styl.Meetingdate}>{Date}</p>
        <p className={styl.Meetingtime}>Project Meeting {Time}</p>
      </section>
    </div>
  )
}

export default ProjectMeeting
