import React from 'react'
import { Button } from 'antd';
import style from "./style.module.css"
const secondary_button = ({text,border,onclick}) => {
 const customButtonStyle = {
    display: "flex",
    width: "100%",
    padding: "2.1vw",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "var(--Interactive-border-radius---radius-i-sm, 12px)",
    border: "1px solid var(--Main-goten, #682DFE)",
    color: "var(--Main-goten, #FFF)",
    textAlign: "center", // Use camelCase for text-align
    fontFeatureSettings: "'clig' off, 'liga' off", // Use camelCase for font-feature-settings
    fontFamily: "DM Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "24px",
    background:"#682DFE",
  };
  if ( border ){
     customButtonStyle.border="1px solid var(--Main-goten, #FFF)";
 }


  return (
  <Button onClick={onclick} size='large' block type="primary" style={customButtonStyle} >{text}</Button>
  )
}

export default secondary_button
