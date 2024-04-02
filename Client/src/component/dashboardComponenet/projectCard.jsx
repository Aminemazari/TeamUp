import React from 'react'
import styl from "../style.module.css"
import Flag from "../../assets/Flag.svg"
const projectCard = ({number}) => {
  return (
    <div className={styl.projectCard}>
      <section className={styl.staticItem}>
      <p className={styl.NumberOfMember}>{number}</p>
      <p className={styl.Projects}>Projects</p>
      </section>
      <div className={styl.groupImage}>
      <img  src={Flag}></img>
      </div>
    </div>
  )
}

export default projectCard
