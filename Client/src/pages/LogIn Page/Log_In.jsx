import React from 'react'
import style from "./logIn.module.css"
import logo from "../assets/WhiteLogo.svg" 
import Button from '../../component/CTA_Button'
import Input from '../../component/Input_Fields'
import withGithub from "../assets/withGithub.svg"
import withGoogle from "../assets/withGoogle.svg"
import withLinkdln from "../assets/withLinkdln.svg"
const logIn = () => {
  return (
    <div className={style.hero}>
        
      <section className={style.textSide}>
         <img src={logo} className={style.logo}/>
         <div className={style.connection}>
          <h1 className={style.TeamUp_connects}> TeamUp connects you with mentors</h1>
          <p className={style.dont_have_account}>Don't have an account yet? Sign Up Here</p>
         <Button text={"Sign Up"} ></Button>
         </div>
      </section>

      <section className={style.formSide}>

        <div className={style.form}>
        <h1 className={style.welcome}>Welcome Back!</h1>
        <div className={style.Same_input}>
          <p className={style.enter_Data}>Enter your email</p>
         <Input placeHolder={"eg.moha riade17@gmail.com"}></Input>
        </div>
        <div className={style.Same_input}>
          <p className={style.enter_Data}>Enter your password</p>
          <Input placeHolder={"password"}></Input>
          <p className={style.informationHolder}>Informative message holder</p>
          
        </div>
       
        <Button text={"LOG IN"} ></Button>
        <p className={style.or}>Or continue With</p>

        <div className={style.socialMedia}>
          <button><img src={withGoogle} className={style.socialImag}></img></button>
          <button> <img src={withGithub} className={style.socialImag}></img></button>
          <button> <img src={withLinkdln} className={style.socialImag}/></button>
        </div>

        </div>

      </section>
    </div>
  )
}

export default logIn
