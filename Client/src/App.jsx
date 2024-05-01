import React from "react"
import LogIn from "./pages/LogIn Page/Log_In"
import SignUp from "./pages/SignUp page/signUp"
import Virification_Form from "./pages/SignUp page/virification_Form"
import { Route, BrowserRouter, Router, Routes } from 'react-router-dom'; 
import Dashboard from "./pages/Dashboard Page/Dashboard";
import Home from "./pages/Home/home";
import Explore from "./pages/Explore/Explore.jsx";
import Mentorship from "./pages/Mentorship page/mentorship.jsx"
import AboutUs from "./pages/aboutUs Page/AboutUs.jsx";
import Overview from "./pages/Explore/create Project Pages/Overview.jsx";
import ProjectDetails from "./pages/Explore/create Project Pages/ProjectDetails.jsx";
function App() {
  
  return (
    <>
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Overview/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/explore" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/mentorship" element={<Mentorship/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      



       </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
