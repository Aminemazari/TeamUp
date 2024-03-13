import React from 'react'
import style from "./virification.module.css"
import OTP from "../../component/OTP"
import { PinInput, PinInputField } from '@chakra-ui/react'
import Secondary_button from "../../component/secondary_button"
import ValidAllert from '../../component/validAllert'
import { useState,useEffect } from 'react'
import TagsSelect from './tagsSelect_form'
import classNames from 'classnames';
const virification_Form = ({animate}) => {
  const [isTagForm,setTagForm]=useState(false); 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animate) {
      setIsVisible(true);
    }
  }, [animate]);
  

  const clickHandler=(e)=>{
    e.preventDefault();
    setTagForm(true); 
    setIsVisible(false)

  }

  const isVirificationForm = classNames(
    style.verificationForm,
    { [style.NotactiveClass]: isVisible },
  );
 
  return (
    <>
    <div className={isVirificationForm} >
      
    <h1 className={style.verify}>Verify Your Account</h1>
    <p className={style.weveSentACode}>We've sent a code to [email address] to verify your account</p>
    <section className={style.verificationProcess}>
      <p className={style.enterPin}>Enter PIN Code</p>
          <OTP></OTP>
        <button className={style.didntReceiveACode}>Didn't receive a code?</button>
    </section>

    <mark className={`${style.animatedDiv} ${isVisible ? style.visible : ''}`}>
    <ValidAllert> </ValidAllert> 
    </mark>
    

         <Secondary_button text={"Continue"} onclick={clickHandler}/>    
    </div>
    
      <TagsSelect visible={isTagForm}></TagsSelect>
    
    </>

  )
}

export default virification_Form
