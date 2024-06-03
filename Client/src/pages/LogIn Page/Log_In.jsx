import React,{useState,useEffect} from 'react'
import style from "./logIn.module.css"
import logo from "../assets/WhiteLogo.svg" 
import Button from '../../component/CTA_Button'
import Input from '../../component/Input_Fields'
import withGithub from "../assets/withGithub.svg"
import withGoogle from "../assets/withGoogle.svg"
import withLinkdln from "../assets/withLinkdln.svg"
import API_URL from '../../component/API_URL'
import { Navigate, useNavigate } from 'react-router-dom'
import Input_Password from "../../component/Input_password"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const logIn = () => {
  console.log("fhkjdshf")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status,setStatus] = useState("");
  const [loading ,setLoading]= useState(false);



  const Navigate=useNavigate();
  const loginClickHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const response = await fetch(`${API_URL}/api/v2/auth/login`,{
        method: "POST",
        headers : new Headers( {  
          'content-type' : 'application/json',
        'accept': 'application/json'
         } ),
        body: JSON.stringify({
          email: email,
          password: password,
   
        }),
      }).then(response => response.json())
      .then(data => { 
        if (data.accessToken!=null){
          localStorage.setItem('accessToken',data.accessToken);


          fetch(`${API_URL}/api/v4/users/currentUser`,{
            method:"GET",
            headers:new Headers({  
              'accept': 'text/plain',
              'Authorization':`Bearer ${data.accessToken}`,
              
             } ),
          })
          .then(response => response.json())
          .then(UserData => {
            localStorage.setItem('UserData',JSON.stringify(UserData));
          })
          .catch(error =>
            console.log(error)
          );
        

          Navigate("/Home");
        }
        else{
          setStatus("error");
          setLoading(false);
        }
      })
  
    
      }catch (error) { 
        console.log(error)
        setLoading(false);
        setStatus("error");
       
      }
    
    
  }

  const handleChangeEmail = (newValue) => {
    setStatus("");
    setEmail(newValue);
  };

  const handleChangePassword = (newValue) => {
    setStatus("");
    setPassword(newValue);
  };
  const signupClickHandler =(e)=>{
    e.preventDefault();
    Navigate("/SignUp")
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
         <img src={logo} className={style.logo}/>
         <div className={style.connection}>
          <h1 className={style.TeamUp_connects}> TeamUp connects you with mentors</h1>
          <p className={style.dont_have_account}>Don't have an account yet? Sign Up Here</p>
         <Button text={"Sign Up"} onclick={signupClickHandler}></Button>
         </div>
      </section>

      <section className={style.formSide}>

        <div className={style.form}>
        <h1 className={style.welcome}>Welcome Back!</h1>
        <div className={style.Same_input}>
          <p className={style.enter_Data}>Enter your email</p>
         <Input placeHolder={"eg.moha riade17@gmail.com"} Status={status} inputValue={email} onInputChange={handleChangeEmail} ></Input>
        </div>
        <div className={style.Same_input}>
          <p className={style.enter_Data}>Enter your password</p>
          <Input_Password  Status={status} inputValue={password} onInputChange={handleChangePassword}></Input_Password>
          <p className={style.informationHolder}>Informative message holder</p>
          
        </div>
       
        <Button text={"LOG IN"}  onclick={loginClickHandler}></Button>
        <p className={style.or}>Or continue With</p>

        <div className={style.socialMedia}>
          <button><img src={withGoogle} className={style.socialImag}></img></button>
          <button> <img src={withGithub} className={style.socialImag}></img></button>
          <button> <img src={withLinkdln} className={style.socialImag}/></button>
        </div>

        </div>

      </section>
    </div>
    </>
  )
}

export default logIn
