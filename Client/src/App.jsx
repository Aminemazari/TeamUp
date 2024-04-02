import React from "react"
import LogIn from "./pages/LogIn Page/Log_In"
import SignUp from "./pages/SignUp page/signUp"
import Virification_Form from "./pages/SignUp page/virification_Form"
import { Route, BrowserRouter, Router, Routes } from 'react-router-dom'; 
import Dashboard from "./pages/Dashboard Page/Dashboard";
import Home from "./pages/Home/home";
function App() {
  
  return (
    <>
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Home" element={<Home/>}/>
       </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
