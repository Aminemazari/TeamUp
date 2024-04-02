import React from 'react'
import styl from "../style.module.css"
const Streak = ({sun,mon,tue,Wed,thu,frd,sat}) => {

  return (
    <div className={styl.streak}>
        <p className={styl.StreakTitle}>Streak</p>
        <section className={styl.StreakCountainer}>
            <div className={styl.streakStatus}>
                <div className={`${styl.statusDefault} ${sun ? styl.statusConfirmed: ''}`}></div>
                <p className={styl.days}>S</p>
            </div>
            <div className={styl.streakStatus}>
                 <div className={`${styl.statusDefault} ${mon ? styl.statusConfirmed: ''}`}> </div>
                <p className={styl.days}>M</p>
            </div>
            <div className={styl.streakStatus}>
            <div className={`${styl.statusDefault} ${tue ? styl.statusConfirmed: ''}`}></div>
            <p className={styl.days}>T</p>
              
            </div>
            <div className={styl.streakStatus}>
                <div className={`${styl.statusDefault} ${Wed ? styl.statusConfirmed: ''}`}></div>
                <p className={styl.days}>W</p>
                
            </div>
            <div className={styl.streakStatus}>
                 <div className={`${styl.statusDefault} ${thu ? styl.statusConfirmed: ''}`}></div>
                <p className={styl.days}>T</p>
            </div>
            <div className={styl.streakStatus}>
                <div className={`${styl.statusDefault} ${frd ? styl.statusConfirmed: ''}`}></div>
                <p className={styl.days}>F</p>
                
            </div>
            <div className={styl.streakStatus}>
              <div className={`${styl.statusDefault} ${sat ? styl.statusConfirmed: ''}`}></div>
                <p className={styl.days}>S</p>
              
            </div>

        </section>
    </div>
  )
}

export default Streak 
