import React from "react"
import LogIn from "./pages/LogIn Page/Log_In"
import SignUp from "./pages/SignUp page/signUp"
import Virification_Form from "./pages/SignUp page/virification_Form"
import { Route, BrowserRouter, Router, Routes } from 'react-router-dom'; 
import NavBar from "./component/NavBar";
function App() {
  
  return (
    <>
          <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
     

       </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
