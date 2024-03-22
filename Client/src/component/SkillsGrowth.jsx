import React from 'react'
import styl from "./style.module.css"
import { Flex, Progress, Tooltip } from 'antd';
import around from "../assets/around.svg"
const SkillsGrowth = ({skill1,skill2,skill3}) => {
  return (
    <div className={styl.SkillsGrowth}>
      <section className={styl.skillsInfo}>
       <p className={styl.SkillsTitle} >Skills Growth</p>
       <mark className={styl.sKillsCountainer}>
            <label className={styl.skillPerformance}>
                <p className={styl.skill}>{skill1}</p>
                <p className={styl.skillNum}>10</p>
            </label>
            <label className={styl.skillPerformance}>
                <p className={styl.skill}>{skill2}</p>
                <p className={styl.skillNum}>5</p>
            </label>
            <label className={styl.skillPerformance}>
                <p className={styl.skill}>{skill3}</p>
                <p className={styl.skillNum}>3</p>
            </label>
       </mark>
      </section>
      <img src={around}/>
    </div>
  )
}

export default SkillsGrowth
