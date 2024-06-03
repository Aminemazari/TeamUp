import React from 'react'
import style from "./style.module.css"
import { Input } from 'antd';
import { useState } from 'react';
const Input_Fields = ({placeHolder,inputValue, onInputChange,Status}) => {
  const [input, setInput] = useState(inputValue || '');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (typeof onInputChange === 'function') {
      onInputChange(e.target.value);
    }
  };
  return (
    <Input placeholder={placeHolder}
    className={style.input_ant}
    value={input} 
    onChange={handleInputChange} 
    status={Status}
    />
  )
}

export default Input_Fields
