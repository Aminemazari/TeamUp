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
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const signUp = () => {
  const [loading ,setLoading]= useState(false);
  const Navigate = useNavigate("");
  const [isVisibale,setVisibale]=useState(false);
  const [isVirification_Form,setVirification_Form]=useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  
const SingUphandleClick = async (e)=>{
  e.preventDefault();
  setLoading(true);
  try{
    const response = await fetch(`${API_URL}/api/v2/auth/register`,{
      method: "POST",
      headers : new Headers( { 
         'content-type' : 'application/json',
        } ),
      body: JSON.stringify({
        displayName:userName, 
        email: email,
        password: password,
      }),
    })
    const statusCode = response.status;
   if (statusCode===200){
    console.log("amine")
    setVisibale(true);
    setVirification_Form(true);
    setLoading(false);
   }
  else{
    setLoading(false);
  }
    

    }catch (error) { 
      console.log(error) 
      setLoading(false);
  
    }
}
const handleChangeEmail = (newValue) => {
 
  setEmail(newValue);
};

const handleChangePassword = (newValue) => {
 
  setPassword(newValue);
};
const handleChangeUserName = (newValue) => {
  setUserName(newValue);
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
    Navigate("/login");
  }

  return (
    <>
          {loading && ( 
        <Box sx={{ width: '100%' }}>
        <LinearProgress />
        </Box>  

      )}
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
          <p className={style.enter_Data}>Enter your name</p>
          <Input placeHolder={"Mazari Amine"} inputValue={userName} onInputChange={handleChangeUserName}></Input>
        </div>
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
   
          <Virification_Form confirme={isVisibale} UserEmail={email} password={password}/>
    
     
   

      </section>
    </div>
    </>
  )
}

export default signUp
