import React from 'react'
import { Button, Flex } from 'antd';
const CTA_Button = ({text,onclick}) => {
  const customButtonStyle = {
    display: "flex",
    width: "100%",
    padding: "2.1vw",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "var(--Interactive-border-radius---radius-i-sm, 12px)",
    border: "1px solid var(--Main-piccolo, #682DFE)",
    color: "#682DFE",
    textAlign: "center", // Use camelCase for text-align
    fontFeatureSettings: "'clig' off, 'liga' off", // Use camelCase for font-feature-settings
    fontFamily: "DM Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "24px",
    background:"white",
  };
  
  return (
   <>
 <Button size='large'  block style={customButtonStyle} onClick={onclick} >{text}</Button>
   </>
  )
}

export default CTA_Button
