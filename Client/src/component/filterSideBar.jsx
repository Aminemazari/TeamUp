import React, { useState } from 'react'
import style from "./style/filterSideBar.module.css"
import filter from "../assets/Filter.svg"
import Expand_up from "../assets/Expand_up.svg"
import dashboard from "../assets/darhboard_.svg"
import Button from './filterCategoriesButton'
import group from "../assets/Grou.svg"
import time from "../assets/Time.svg"
const filterSideBar = ({onFilterSelection}) => {
    const [category,setCategory]=useState([]);
    const [teamSize,setTeamSize]=useState([]);
    const [Duration,setDuration]=useState([]);
    
    const [projectCategory,setProjectCategory]=useState(false); 
    const [TeamSizeOpen,setTeamSizeOpen]=useState(false);
    const [DurationOpen,setDurationOpen]=useState(false);



    const [web,setWeb]=useState(false);
    const [Mobile,setMobile]=useState(false);
    const [AI,setAI]=useState(false);
    const [DataScience,setDataScience]=useState(false);
    const [Design,setDesign]=useState(false);
    
    const[twoToTree,setTwoToTree]=useState(false);
    const[treeToFive,setTreeToFive]=useState(false);
    const[fiveToTen,setFiveToTen]=useState(false);
    const[plusTen,setPlusTen]=useState(false);

    const[treeDays,setTreeDays]=useState(false);
    const[oneWeek,setOneWeek]=useState(false);
    const[twoweek,setTwoweek]=useState(false);
    const[plusMounth,setPlusmounth]=useState(false);
    const[treeWeek,setTreeWeek]=useState(false);

   const addCategorie=(categorie,size,date)=>{
      if (categorie !=="" ){
        if (category.includes(categorie)) {
            setCategory(category.filter(item => item !== categorie));
          } else {
            setCategory([...category, categorie]);
          }
         

      }
      if (size !==""){
        if (teamSize.includes(size)) {
            // If it does, remove it
            setTeamSize(teamSize.filter(item => item !== size));
          } else {
            // If it doesn't, add it
            
            setTeamSize([...teamSize, size]);
            
          }
      }
      if (date !==""){
        if (teamSize.includes(date)) {
            // If it does, remove it
            setDuration(Duration.filter(item => item !== date));
          } else {
            // If it doesn't, add it
           
            setDuration([...Duration, date]);
            console.log(Duration);
          }
      }
      onFilterSelection({ category, teamSize, Duration });

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
        default:
            break;
   }
   switch (size) {
    case "2-3":
        setTwoToTree(!twoToTree);
        break;
    case "3-5":
        setTreeToFive(!treeToFive);
        break;
    case "5-10":
        setFiveToTen(!fiveToTen);
        break;
    case "+10":
        setPlusTen(!plusTen);
        break;
        default:
            break;
   }
   switch (date) {
    case "3 days":
        setTreeDays(!treeDays);
        break;
    case "1 week":
        setOneWeek(!oneWeek);
        break;
    case "2 weeks":
        setTwoweek(!twoweek);
        break;
    case "3 weeks":
        setTreeWeek(!treeWeek);
        break;
    case "+1 month":
        setPlusmounth(!plusMounth);
        break;
        default:
            break;
   }
}
const categorieOpen = ()=>{
    setProjectCategory(!projectCategory);
}
const TeamsizeOpen = ()=>{
    setTeamSizeOpen(!TeamSizeOpen);
}
const durationOpen = ()=>{
    setDurationOpen(!DurationOpen);
}






  return (
    <div className={style.sideBar}>

     <mark className={style.filter_Icon}>
        <img src={filter}></img>
        <p className={style.filters}>Filters</p>
     </mark>
  <section className={`${style.countainer} ${(projectCategory &&  TeamSizeOpen && DurationOpen) ? style.countainer_Open : ''}`}>
     <div className={style.Categorie_dropdown}>
        <button className={style.filter_Categorie}  onClick={categorieOpen}>
            <div className={style.label}>
              <img src={dashboard}></img>
              <p className={style.Categorie_filter_name}>Project category</p>
            </div>
            <img src={Expand_up} className={`${style.Expand_up} ${projectCategory ? style.Expand_down: ''}`}></img>
        </button> 
        <section  className={`${style.project_Categories_countainer} ${projectCategory ? style.project_Categories_countainer_Open : ''}`}>
         <Button text={"Web"}   onclick={() => addCategorie("Web","","")} clicked={web}/>
         <Button text={"Mobile"} onclick={() => addCategorie("Mobile","","")} clicked={Mobile}/>
         <Button text={"AI and ML"} onclick={() => addCategorie("AI and ML","","")} clicked={AI}/>
         <Button text={"Data Science"} onclick={() => addCategorie("Data Science","","")} clicked={DataScience}/>
         <Button text={"Design"} onclick={() => addCategorie("Design","","")} clicked={Design}/>
        </section>
     </div>

     <div className={style.Categorie_dropdown}>
        <button className={style.filter_Categorie} onClick={TeamsizeOpen}>
            <div className={style.label}>
              <img src={group}></img>
              <p>Team size</p>
            </div>
            <img src={Expand_up} className={`${style.Expand_up} ${TeamSizeOpen ? style.Expand_down: ''}`}></img>
        </button> 
        <section className={`${style.project_Categories_countainer} ${TeamSizeOpen ? style.project_Categories_countainer_Open : ''}`}>
         <Button text={"2-3"} onclick={() => addCategorie("","2-3","")} clicked={twoToTree}/>
         <Button text={"3-5"} onclick={() => addCategorie("","3-5","")} clicked={treeToFive}/>
         <Button text={"5-10"} onclick={() => addCategorie("","5-10","")} clicked={fiveToTen}/>
         <Button text={"+10"} onclick={() => addCategorie("","+10","")} clicked={plusTen}/>
        </section>
     </div>


     <div className={style.Categorie_dropdown}>
        <button className={style.filter_Categorie} onClick={durationOpen}>
            <div className={style.label}>
              <img src={time}></img>
              <p>Duration</p>
            </div>
            <img src={Expand_up} className={`${style.Expand_up} ${DurationOpen ? style.Expand_down: ''}`}></img>
        </button> 
        <section className={`${style.project_Categories_countainer} ${DurationOpen ? style.project_Categories_countainer_Open : ''}`}>
         <Button text={"3 days"} onclick={() => addCategorie("","","3 days")} clicked={treeDays}/>
         <Button text={"1 week"} onclick={() => addCategorie("","","1 week")} clicked={oneWeek}/>
         <Button text={"2 weeks"} onclick={() => addCategorie("","","2 weeks")} clicked={twoweek}/>
         <Button text={"3 weeks"} onclick={() => addCategorie("","","3 weeks")} clicked={treeWeek}/>
         <Button text={"+1 month"} onclick={() => addCategorie("","","+1 month")} clicked={plusMounth} />
        </section>
     </div>
     </section>

    </div>
  )
}

export default filterSideBar
