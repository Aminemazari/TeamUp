import React from 'react'
import styl from "./styl.module.css"
import darhboard_alt from "../../assets/darhboard_alt.svg"
import chat from "../../assets/chatIconblue.svg"
import iconWeb from "../../assets/icons8-web.svg";
import iconMobile from "../../assets/mobileDev.svg";
import iconDesign from "../../assets/design.svg";
import iconCyberSecurity from "../../assets/cyberSecurity.svg";
import iconIA from "../../assets/IAdev.svg";
import iconBackend from "../../assets/backendDev.svg";
import icongame from "../../assets/gameDev.svg";
import iconIos from "../../assets/iosDev.svg";
import iconAndriod from "../../assets/androidDev.svg";
import { Progress } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';
const MyProjectCard = ({projectName,mentor,date,categorie}) => {
  var iconn = "";
  switch (categorie) {
    case "Web":
      iconn = iconWeb;
      break;
    case "Mobile":
      iconn = iconMobile;
      break;
    case "Design":
      iconn = iconDesign;
      break;
    case "Cyber Security":
      iconn = iconCyberSecurity;
      break;
    case "Ai":
      iconn = iconIA;
      break;
    case "Backend Dev":
      iconn = iconBackend;
      break;
    case "Game Dev":
      iconn = icongame;
      break;
    case "IOS Dev":
      iconn = iconIos;
      break;
    case "Andriod":
      iconn = iconAndriod;
      break;
    default:
      iconn=iconWeb;
      break;
  }
  return (
    <div className={styl.MyProjectCard}>
      <img src={iconn} className={styl.MyProjectCardImageCategories}/>
      <div className={styl.verticalLine}></div>
      <section className={styl.projectBasicInfo}>
        <header className={styl.headerOfCard}>
        <p>{projectName}</p>
        <div className={styl.mentoresProfiles}>
        
          <Avatar.Group>
          <Tooltip title="User" placement="top" style={{
            gap:"20px"
          }}>
          <Avatar
               size={30}
            style={{
              backgroundColor: '#F5F5F5',
              color: 'var(--Main-bulma, #000)',
              textAlign: 'center',
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontFamily: '"DM Sans"',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '16px' // or you can use lineHeight: '133.333%
            }}
            /*icon={}*/
          >DN</Avatar>
          <a href="">
          <Avatar
               size={30}
            style={{
              backgroundColor: '#F5F5F5',
              color: 'var(--Main-bulma, #000)',
              textAlign: 'center',
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontFamily: '"DM Sans"',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '16px' // or you can use lineHeight: '133.333%
            }}
            /*icon={}*/
          >DN</Avatar>
          </a>
         
          <Avatar
               size={30}
            style={{
              backgroundColor: '#F5F5F5',
              color: 'var(--Main-bulma, #000)',
              textAlign: 'center',
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontFamily: '"DM Sans"',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '16px' // or you can use lineHeight: '133.333%
            }}
            /*icon={}*/
          >DN</Avatar>
          
          <Avatar
               size={30}
            style={{
              backgroundColor: '#F5F5F5',
              color: 'var(--Main-bulma, #000)',
              textAlign: 'center',
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontFamily: '"DM Sans"',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '16px' // or you can use lineHeight: '133.333%
            }}
            /*icon={}*/
          >DN</Avatar>
          </Tooltip>
        </Avatar.Group>
        <p className={styl.date}>{date}</p>
         
        </div>
       </header>
       <div>
       <p className={styl.mentor}>@{mentor}</p>
       </div>
      </section>
      <div className={styl.verticalLine}></div>
      <button className={styl.ChatButton}><img src={chat}></img></button>

    </div>
  )
}

export default MyProjectCard
