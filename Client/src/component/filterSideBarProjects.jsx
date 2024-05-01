import React, { useState } from 'react'
import style from "./style/filterSideBar.module.css"
import filter from "../assets/Filter.svg"
import Expand_up from "../assets/Expand_up.svg"
import dashboard from "../assets/darhboard_.svg"
import Book_open from "../assets/Book_open.svg"
import Button from './filterCategoriesButton'
import group from "../assets/Grou.svg"
import time from "../assets/Time.svg"
const filterSideBarProjects = ({onFilterSelection,display}) => {
    const [category,setCategory]=useState([]);
    const [availabe,setAvailable]=useState(false);
    const [projectCategory,setProjectCategory]=useState(false); 
    const [availabilityOpen,setavailabilityOpen]=useState(false);


    const [web,setWeb]=useState(false);
    const [Mobile,setMobile]=useState(false);
    const [AI,setAI]=useState(false);
    const [DataScience,setDataScience]=useState(false);
    const [Design,setDesign]=useState(false);
    const [Cybersecurity,setCybersecurity]=useState(false);
    const [GameDev,setGameDev]=useState(false);



   const addCategorie=(categorie,availablity)=>{
    console.log(categorie);
       if (availablity){
          setAvailable(!availabe); 
       }
      if (categorie !=="" ){
        if (category.includes(categorie)) {
            setCategory(category.filter(item => item !== categorie));
          } else {
            setCategory([...category, categorie]);
          }
         

      }
      onFilterSelection({category,availabe});

   switch (categorie) {
    case "Web":
        setWeb(!web);
        break;
    case "Mobile":
        setMobile(!Mobile);
        break;
    case "AI and ML":
        setAI(!AI);
        break;
    case "Data Science":
        setDataScience(!DataScience);
        break;
    case "Design":
        setDesign(!Design);
        break;
        case "GameDev":
            setGameDev(!GameDev);
            break;
        case "Cybersecurity":
            setCybersecurity(!Cybersecurity);
            break;
        default:
            break;
   }
  
}
const categorieOpen = ()=>{
    setProjectCategory(!projectCategory);
}
const availableOpen =()=>{
    setavailabilityOpen(!availabilityOpen);
}







  return (
    <div className={`${style.sideBar} ${!display ? style.not_diplayed: ''}`}>

     <mark className={style.filter_Icon}>
        <img src={filter}></img>
        <p className={style.filters}>Filters</p>
     </mark>
  <section className={`${style.countainer} ${(projectCategory && availabilityOpen )   ? style.countainer_Open : ''}`}>
     <div className={style.Categorie_dropdown}>
        <button className={style.filter_Categorie}  onClick={categorieOpen}>
            <div className={style.label}>
              <img src={Book_open}></img>
              <p className={style.Categorie_filter_name}>Mentoring Category</p>
            </div>
            <img src={Expand_up} className={`${style.Expand_up} ${projectCategory ? style.Expand_down: ''}`}></img>
        </button> 
        <section  className={`${style.project_Categories_countainer} ${projectCategory ? style.project_Categories_countainer_Open : ''}`}>
         <Button text={"Web Dev"}   onclick={() => addCategorie("Web",false)} clicked={web}/>
         <Button text={"AI "} onclick={() => addCategorie("AI and ML",false)} clicked={AI}/>
         <Button text={"Design"} onclick={() => addCategorie("Design",false)} clicked={Design}/>
         <Button text={"Mobile  Dev"} onclick={() => addCategorie("Mobile",false)} clicked={Mobile}/>
         <Button text={"Data Science"} onclick={() => addCategorie("Data Science",false)} clicked={DataScience}/>
         <Button text={"Cybersecurity"} onclick={() => addCategorie("Cybersecurity",false)} clicked={Cybersecurity}/>
         <Button text={"GameDev"} onclick={() => addCategorie("GameDev",false)} clicked={GameDev}/>
        </section>
     </div>

     <div className={style.Categorie_dropdown}>
        <button className={style.filter_Categorie} onClick={availableOpen}>
            <div className={style.label}>
              <img src={group}></img>
              <p>Availability</p>
            </div>
            <img src={Expand_up} className={`${style.Expand_up} ${availabilityOpen ? style.Expand_down: ''}`}></img>
        </button> 
        <section className={`${style.project_Categories_countainer} ${availabilityOpen ? style.project_Categories_countainer_Open : ''}`}>
         <Button text={"Available Now"} onclick={() => addCategorie("",true)} clicked={availabe} />
        </section>
     </div>
     </section>

    </div>
  )
}

export default filterSideBarProjects
