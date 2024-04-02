import React from 'react'
import styl from "../style.module.css"
import Group from "../../assets/Group.svg"
const ProjectsMemberCard = ({number}) => {
  return (
    <div className={styl.ProjectsMemberCard}>
      <section className={styl.staticItem}>
      <p className={styl.NumberOfMember}>{number}</p>
      <p className={styl.Member}>Member</p>
      </section>
      <div className={styl.groupImage}>
      <img  src={Group}></img>
      </div>
    </div>
  )
}

export default ProjectsMemberCard
