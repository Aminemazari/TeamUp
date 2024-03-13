import React, { useState } from 'react'
import style from "./signUp.module.css"
import Secondary_button from '../../component/secondary_button'
import Input from "../../component/Input_Fields"
import Input_password from '../../component/Input_password'
import google from "../assets/google.svg"
import github from "../assets/github.svg"
import linkdln from "../assets/linkdln.svg"
import logo from "../assets/logo.svg"
import Virification_Form from './virification_Form'
import classNames from 'classnames';
import TagsSelect from './tagsSelect_form'

const signUp = () => {
  const [isVisibale,setVisibale]=useState(false);

  const [isVirification_Form,setVirification_Form]=useState(false);

const handleClick = (e)=>{
  e.preventDefault();
  setVisibale(true);
  setVirification_Form(true);
}



const isSignUpForm = classNames(
  style.form,
  { [style.singUpFormNotVisible]: isVisibale },
);

const isButton =
classNames(
  style.visibilityOfSignUpButton,
  { [style.ButtonNotVisibale]: isVisibale },
);


  return (
    <div className={style.hero}>
      <section className={style.textSide}>  
        <img src={logo} className={style.logo}></img>
        <main className={style.description}>
           <h1 className={style.GrowYourTeam}>Grow Your Team Working Skills</h1>
          <p className={style.dont_have_account}>Don't have an account yet? Sign Up Here</p>
          <mark className={isButton}>
            <Secondary_button border={true} text={"LOG IN"}></Secondary_button>
          </mark>
        </main>
      </section>
      <section className={style.formSide}>
        {/* the form that will shows when you enter the sign up page */}
     <main className={isSignUpForm}>
        <h1 className={style.creatYourAccount}>Create Your Account.</h1>
        <div className={style.Same_input}>
          <p className={style.enter_Data}>Enter your email</p>
          <Input placeHolder={"eg.mazariamine095@gmail.com"}></Input>
        </div>
        <div className={style.Same_input}>
          <p className={style.enter_Data}>Enter your password</p>
          <Input_password ></Input_password>
        </div>
       
        <Secondary_button text={"SIGN UP"} border={false} onclick={handleClick}></Secondary_button>

        <p className={style.or}>Or continue With</p>

        <section className={style.socialMedia}>
          <button>  <img src={google}  /></button>
          <button> <img src={linkdln}  /></button>
          <button> <img src={github}  /></button>
        </section>

     </main>
       {/* the form that will shows when you click to sign up  */}
   
          <Virification_Form animate={isVisibale}/>
    
     
   

      </section>
    </div>
  )
}

export default signUp
