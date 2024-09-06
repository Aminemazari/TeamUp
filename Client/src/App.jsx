import React, { useEffect } from "react";
import { TopBarProgress } from "react-topbar-progress-indicator";
import LogIn from "./pages/LogIn Page/Log_In";
import LandingPage from "./pages/Landing Page/LandingPage";
import SignUp from "./pages/SignUp page/signUp";
import Virification_Form from "./pages/SignUp page/virification_Form";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard Page/Dashboard";
import Home from "./pages/Home/home";
import Explore from "./pages/Explore/Explore.jsx";
import Mentorship from "./pages/Mentorship page/mentorship.jsx";
import AboutUs from "./pages/aboutUs Page/AboutUs.jsx";
import Overview from "./pages/Explore/create Project Pages/Overview.jsx";
import ProjectDetails from "./pages/Explore/create Project Pages/ProjectDetails.jsx";
import { ConfigProvider } from "antd";
import ProjectScope from "./pages/Explore/create Project Pages/ProjectScope.jsx";
import Categories from "./pages/Categories/Categories.jsx";
import JoinProject from "./pages/Explore/joinProject/JoinProject.jsx";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#6738DD",
            // Alias Token
          },
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route
              path="/project-scope"
              element={<ProjectScope></ProjectScope>}
            />
            <Route path="/categories" element={<Categories></Categories>} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/explore" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/join-Project" element={<JoinProject></JoinProject>} />
            <Route path="/landingPage" element={<LandingPage />} />
          </Routes>
        </Router>
      </ConfigProvider>
    </>
  );
}

export default App;
