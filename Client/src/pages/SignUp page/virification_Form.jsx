import React from 'react'
import style from "./virification.module.css"
import OTP from "../../component/OTP"
import { PinInput, PinInputField } from '@chakra-ui/react'
import Secondary_button from "../../component/secondary_button"
import ValidAllert from '../../component/validAllert'
import { useState,useEffect } from 'react'
import TagsSelect from './tagsSelect_form'
import classNames from 'classnames';
import value from "../../component/OTP"
const virification_Form = ({confirme,UserEmail}) => {
  const [isTagForm,setTagForm]=useState(false); 
  const [isVisible, setIsVisible] = useState(false);
  const [isVerified,setVirification]=useState(false);
  const [animate,setAnimate]=useState(false);

  useEffect(() => {
    if (confirme) {
      setIsVisible(true);
    }
  }, [confirme]);
  

  const clickHandler=(e)=>{
    e.preventDefault();
    setTagForm(true); 
    setIsVisible(false)

  }

  const isVirificationForm = classNames(
    style.verificationForm,
    { [style.NotactiveClass]: isVisible },
  );

  const [otp, setOTP] = useState('');

  const handleOTPChange = (index, value) => {
    const newOTP = otp.slice(0, index) + value + otp.slice(index + 1);
    setOTP(newOTP);
  };

  return (
    <>
    <div className={isVirificationForm} >
      
    <h1 className={style.verify}>Verify Your Account</h1>
    <p className={style.weveSentACode}>We've sent a code to [email address] to verify your account</p>
    <section className={style.verificationProcess}>
      <p className={style.enterPin}>Enter PIN Code</p>
      <OTP length={6} onChange={handleOTPChange} />

        <button className={style.didntReceiveACode}>Didn't receive a code?</button>
    </section>

    <mark className={`${style.animatedDiv} ${animate ? style.visible : ''}`}>
    <ValidAllert> </ValidAllert> 
    </mark>
    

         <Secondary_button text={"Continue"} onclick={clickHandler}/>    
    </div>
    
      <TagsSelect visible={isTagForm}></TagsSelect>
    
    </>

  )
}

export default virification_Form
