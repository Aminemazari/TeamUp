import React, { useRef, useEffect, useState } from 'react';
import style from "./style/Categories.module.css";
import SearchBar from '../../component/searchBar';
import NavBar from "../../component/NavBar";
import CategoriesCard from '../../component/categoriesCard';
import brain from "../../assets/brain.svg";
import computer from "../../assets/computer.svg";
import android from "../../assets/android.svg";
import Footer from '../../component/Footer.jsx';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Categories = () => {
  const [profileData, setProfileData] = useState(null);
  const subContainerRef = useRef(null);
  const footerRef = useRef(null);
  const lastScrollTop = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const UserData = localStorage.getItem('UserData');
    if (UserData) {
      setProfileData(JSON.parse(UserData));
    }
    if (!accessToken) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const subContainer = subContainerRef.current;
      const footer = footerRef.current;
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (subContainer && subContainer.scrollHeight - subContainer.scrollTop === subContainer.clientHeight) {
        footer.scrollIntoView({ behavior: 'smooth' });
      } else if (st < lastScrollTop.current && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        subContainer.scrollIntoView({ behavior: 'smooth' });
      }

      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    const subContainer = subContainerRef.current;
    if (subContainer) {
      subContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (subContainer) {
        subContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  if (!profileData) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <div className={style.Main}>
      <NavBar Categories={true} picture={profileData.profilePicture} />
      <div className={style.hero}>
        <mark className={style.searchBar}>
          <SearchBar />
        </mark>
        <section className={style.CategoriesCountainer}>
          <p className={style.exploreCatefories}>Explore Categories</p>
          <div className={style.subCountainer} ref={subContainerRef}>
            <CategoriesCard categorie={"Web"} project={122} mentors={"+24"} photo={computer} />
            <CategoriesCard categorie={"AI"} project={100} mentors={"+24"} photo={brain} />
            <CategoriesCard categorie={"Mobile"} project={122} mentors={"+106"} photo={android} />
            <CategoriesCard categorie={"Web"} project={122} mentors={"+24"} photo={computer} />
            <CategoriesCard categorie={"AI"} project={100} mentors={"+24"} photo={brain} />
            <CategoriesCard categorie={"Mobile"} project={122} mentors={"+106"} photo={android} />
            <CategoriesCard categorie={"Web"} project={122} mentors={"+24"} photo={computer} />
            <CategoriesCard categorie={"AI"} project={100} mentors={"+24"} photo={brain} />
            <CategoriesCard categorie={"Mobile"} project={122} mentors={"+106"} photo={android} />
            <CategoriesCard categorie={"Web"} project={122} mentors={"+24"} photo={computer} />
            <CategoriesCard categorie={"AI"} project={100} mentors={"+24"} photo={brain} />
            <CategoriesCard categorie={"Mobile"} project={122} mentors={"+106"} photo={android} />
            <CategoriesCard categorie={"Web"} project={122} mentors={"+24"} photo={computer} />
            <CategoriesCard categorie={"AI"} project={100} mentors={"+24"} photo={brain} />
            <CategoriesCard categorie={"Mobile"} project={122} mentors={"+106"} photo={android} />
          </div>
        </section>
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Categories;
