import React from 'react'
import style from "./virification.module.css"
import OTP from "../../component/OTP"
import { PinInput, PinInputField } from '@chakra-ui/react'
import Secondary_button from "../../component/secondary_button"
const virification_Form = () => {

  return (
    <div className={style.hero} >
      
    <h1 className={style.verify}>Verify Your Account</h1>
    <p className={style.weveSentACode}>We've sent a code to [email address] to verify your account</p>
    <section className={style.verificationProcess}>
      <p className={style.enterPin}>Enter PIN Code</p>
          <OTP></OTP>
        
        <button className={style.didntReceiveACode}>Didn't receive a code?</button>
    </section> 
         <Secondary_button text={"Continue"}/>
        
  
    
    </div>
  )
}

export default virification_Form
