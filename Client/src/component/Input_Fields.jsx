import React from 'react'
import style from "./style.module.css"
import { Input } from 'antd';
const Input_Fields = ({placeHolder}) => {
  return (
    <Input placeholder={placeHolder} className={style.input_ant}/>
  )
}

export default Input_Fields
