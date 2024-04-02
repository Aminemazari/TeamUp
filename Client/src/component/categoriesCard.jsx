import React from 'react'
import styl from "./style.module.css"

import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';
const categoriesCard = ({categorie,project,mentors,photo,onclick}) => {

  return (
    <button className={styl.categoriesCard} onClick={onclick}>
        <section className={styl.categorie_countainer}>
      <section className={styl.categorieName}>
        <img src={photo}/>
        <p>{categorie}</p>
      </section>

      <div className={styl.number_Of_Project_In_Catedorie}>
        <p className={styl.projectNumbertext}>{project}</p>
        <p className={styl.projecettext}>Project</p>
      </div>

      <div className={styl.mentoresProfiles}>
      <Avatar.Group>
      <Avatar
       size={30}
          style={{
            backgroundColor: '#FFFFFF',
            color: 'var(--Main-bulma, #000)',
            textAlign: 'center',
            fontFeatureSettings: "'clig' off, 'liga' off",
            fontFamily: '"DM Sans"',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '16px' // or you can use lineHeight: '133.333%
          }}
        >
          D
        </Avatar>
      <a href="">
        <Avatar
     size={30}
          style={{
            backgroundColor: '#FFFFFF',
            color: 'var(--Main-bulma, #000)',
            textAlign: 'center',
            fontFeatureSettings: "'clig' off, 'liga' off",
            fontFamily: '"DM Sans"',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '16px' // or you can use lineHeight: '133.333%
          }}
        >
          D
        </Avatar>
      </a>
      <Tooltip title="Ant User" placement="top">
        <Avatar
    size={30}
          style={{
            backgroundColor: '#FFFFFF',
            color: 'var(--Main-bulma, #000)',
            textAlign: 'center',
            fontFeatureSettings: "'clig' off, 'liga' off",
            fontFamily: '"DM Sans"',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '16px' // or you can use lineHeight: '133.333%
          }}
        >D</Avatar>
      </Tooltip>
      <Avatar
           size={30}
        style={{
          backgroundColor: '#FFFFFF',
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
    </Avatar.Group>
      <p className={styl.mentortext}>+{mentors} mentor</p>
      </div>
      </section>
    </button>
  )
}

export default categoriesCard
