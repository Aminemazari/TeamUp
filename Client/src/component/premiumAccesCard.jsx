import React from 'react'
import styl from "./style.module.css"
const premiumAccesCard = ({Percentage,projectName}) => {
  return (
    <div className={styl.premiumAccesCard}>
      <p className={styl.Percentage}>%{Percentage}</p>
      <p className={styl.GetAccess}>Get Acces to premium project {projectName}</p>
      <button className={styl.Upgrade_Button}>UPGRADE</button>
    </div>
  )
}

export default premiumAccesCard
