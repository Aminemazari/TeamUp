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
import { useNavigate } from 'react-router-dom'
import API_URL from '../../component/API_URL'
const signUp = () => {
  const Navigate = useNavigate("");
  const [isVisibale,setVisibale]=useState(false);
  const [isVirification_Form,setVirification_Form]=useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");





  const generateRandomWord = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let word = '';

    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      word += characters[randomIndex];
    }

    return word;
  };
  
const SingUphandleClick = async (e)=>{
  e.preventDefault();
  try{
    const response = await fetch(`${API_URL}/api/v2/auth/register`,{
      method: "POST",
      headers : new Headers( {  'content-type' : 'application/json' } ),
      body: JSON.stringify({
        displayName: generateRandomWord(),
        email: email,
        password: password,
      }),
    }) 
    const data = await response.json() ;
  
    if (data.status === 200 ){
      setVisibale(true);
      setVirification_Form(true);
    }
    
    }catch (error) { 
      console.log(error) 
    }
}
const handleChangeEmail = (newValue) => {
 
  setEmail(newValue);
};

const handleChangePassword = (newValue) => {
 
  setPassword(newValue);
};













const isSignUpForm = classNames(
  style.form,
  { [style.singUpFormNotVisible]: isVisibale },
);

const isButton =
classNames(
  style.visibilityOfSignUpButton,
  { [style.ButtonNotVisibale]: isVisibale },
);

  const LogInhandleClick =(e)=>{
    e.preventDefault();
    Navigate("/");
  }

  return (
    <div className={style.hero}>
      <section className={style.textSide}>  
        <img src={logo} className={style.logo}></img>
        <main className={style.description}>
           <h1 className={style.GrowYourTeam}>Grow Your Team Working Skills</h1>
          <p className={style.dont_have_account}>Don't have an account yet? Sign Up Here</p>
          <mark className={isButton}>
            <Secondary_button border={true} text={"LOG IN"} onclick={LogInhandleClick}></Secondary_button>
          </mark>
        </main>
      </section>
      <section className={style.formSide}>
        {/* the form that will shows when you enter the sign up page */}
     <main className={isSignUpForm}>
        <h1 className={style.creatYourAccount}>Create Your Account.</h1>
        <div className={style.Same_input}>
          <p className={style.enter_Data}>Enter your email</p>
          <Input placeHolder={"eg.mazariamine095@gmail.com"} inputValue={email} onInputChange={handleChangeEmail}></Input>
        </div>
        <div className={style.Same_input}>
          <p className={style.enter_Data}>Enter your password</p>
          <Input_password InputValue={password} onInputChange={handleChangePassword} ></Input_password>
        </div>
       
        <Secondary_button text={"SIGN UP"} border={false} onclick={SingUphandleClick}></Secondary_button>

        <p className={style.or}>Or continue With</p>

        <section className={style.socialMedia}>
          <button>  <img src={google}  /></button>
          <button> <img src={linkdln}  /></button>
          <button> <img src={github}  /></button>
        </section>

     </main>
       {/* the form that will shows when you click to sign up  */}
   
          <Virification_Form confirme={isVisibale} UserEmail={email}/>
    
     
   

      </section>
    </div>
  )
}

export default signUp
