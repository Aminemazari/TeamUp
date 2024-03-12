import React from 'react'
import { useState } from 'react';
import style from "./style.module.css"
import { Button, Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const Input_password = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
    <Input.Password
      placeholder="password"
      className={style.input_ant}
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
    </>
  )
}

export default Input_password
