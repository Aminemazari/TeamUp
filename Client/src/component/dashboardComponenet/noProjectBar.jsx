import React from 'react'
import style from "./styl.module.css"
import image from "../../assets/Frame.svg"
import { Button } from "antd"
import { useNavigate } from 'react-router-dom'
const noProjectBar = () => {
    const Navigate =useNavigate();
    const onclick=()=>{
       Navigate("/home");
    }
  return (
    <div className={style.noProjectBar}>
      <h1 className={style.noProjectTex}>No Projects Yet?</h1>
      <p className={style.browseProjects}>Browse projects , join teams, and experience the power of teamwork.</p>
      <img src={image}></img>
      <Button type="primary" size='large'
     style={{
        background:"#6738DD",
        padding:"6.4px 15px"
     }}
      onClick={onclick}>Explore Projects</Button>
    </div>
  )
}

export default noProjectBar
