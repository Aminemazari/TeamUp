import React from 'react'
import styl from "./styl.module.css"
import darhboard_alt from "../../assets/darhboard_alt.svg"
import chat from "../../assets/chatIconblue.svg"
import { Progress } from 'antd';
const MyProjectCard = ({projectName,mentor,Dns,Percent}) => {
  return (
    <div className={styl.MyProjectCard}>
      <button className={styl.noneStyledButton}><img src={darhboard_alt}></img></button>
      <div className={styl.verticalLine}></div>
      <section className={styl.projectBasicInfo}>
        <header className={styl.headerOfCard}>
        <p>{projectName}</p>
        <div className={styl.dns}>
        {
            /*Dns.map((dn)=>{
                return(
                    <p className={styl.dn}>{dn}</p>
                )
            })*/

        }
        </div>
       </header>
       <div>
       <p className={styl.mentor}>{mentor}</p>
       <p></p>
       </div>
       <Progress percent={Percent} showInfo={false} strokeColor="#6738DD" />
      </section>
      <button className={styl.ChatButton}><img src={chat}></img></button>

    </div>
  )
}

export default MyProjectCard
