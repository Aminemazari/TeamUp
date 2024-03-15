import React from 'react'
import { useState } from 'react';
import style from "./style.module.css"
import { Button, Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const Input_password = ({inputValue, onInputChange,Status}) => {
  const [input, setInput] = useState(inputValue || '');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (typeof onInputChange === 'function') {
      onInputChange(e.target.value);
    }
  };
  return (
    <>
    <Input.Password
      placeholder="password"
      className={style.input_ant}
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      value={input} 
      onChange={handleInputChange} 
      status={Status}
   />
    </>
  )
}

export default Input_password
