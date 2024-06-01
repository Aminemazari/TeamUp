import React, { useState } from 'react'
import NavBar from '../../../component/NavBar'
import style from "./style/CreatProject.module.css"
import { Input,Button } from 'antd';
const { TextArea } = Input;
import { Steps } from 'antd';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const ProjectDetails = () => {
  const  location   = useLocation();
  const receivedData  = location.state?.data; 
  const description = 'This is a description.';
  const Navigate= useNavigate();
  const [ProjectAbout,setProjectAbout]=useState("");
  const [ProjectLearn,setProjectLearn]=useState("");
  const [ProjectSkills,setProjectSkills]=useState("");


  const SaveAndContinue =()=>{
    receivedData.project_About=ProjectAbout;
    receivedData.skills_Learn=ProjectLearn;
    receivedData.team_Roles=ProjectSkills;
    Navigate("/project-scope", { state: {data: receivedData} })
   }
   const handleBackClick =()=>{
    Navigate("/overview");
   }
   const handleInputProjectAbout =(event)=>{
    setProjectAbout(event.target.value);
   }
   const handleInputProjectLearn =(event)=>{
    setProjectLearn(event.target.value);
   }
   const handleInputProjectSkills=(event)=>{
    setProjectSkills(event.target.value);
   }
  return (
    <div className={style.hero}>
    <NavBar/>
   <div className={style.ProjectDetails}>
       <section className={style.Steps}>
       <h1 className={style.titlePublish}>Publish A New Project</h1>
       <Steps
        direction="vertical"
        current={1}
        items={[
         {
       title: 'Overview',
       description,
       },
       {
         title: 'Project Details',
         description,
       },
       {
         title: 'Project Scope',
         description,
       },
   ]}
 />        
       </section>

       <section className={style.ProjectDetailsForm}>     
       <Breadcrumb
               items={[
           {
             title: <a href="/home">Home</a>,
           },
           {
             title: "New project",
           },
           {
             title: "Overview",
           },
     
         ]}
         />
         <p className={style.projectDetailsText}>Project Details</p>
         <div className={style.textFild}>
            <p className={style.questions}><span className={style.star}>* </span> What's the Project About ?</p>
            <TextArea rows={4}
            placeholder="Describe the overal project idea and purpose"
                 style={{
                   height: 220,
                   resize: 'none',
                 }}
                 onChange={handleInputProjectAbout}
                 value={ProjectAbout}
                 />
                 <p className={style.passengerAlert}>Please input passenger's name or delete this field.</p>
         </div>
         <div className={style.textFild}>
            <p className={style.questions}><span className={style.star}>* </span> What Skills Will Mentees Learn?</p>
            <TextArea rows={4}
              placeholder="List the specific skills mentees will learn"
                 style={{
                   height: 126,
                   resize: 'none',
                 }}
                 value={ProjectLearn}
                 onChange={handleInputProjectLearn}
                 />
                 <p className={style.passengerAlert}>Please input passenger's name or delete this field.</p>
         </div>
         <div className={style.textFild}>
            <p className={style.questions}><span className={style.star}>* </span> Team and roles</p>
            <TextArea rows={4}
              placeholder="Describe the roles and responsibilities of team members"
                 style={{
                   height: 126,
                   resize: 'none',
                 }}
                 value={ProjectSkills}
                 onChange={handleInputProjectSkills}
                 />
                 <p className={style.passengerAlert}>Please input passenger's name or delete this field.</p>
         </div>
         <div className={style.buttonsSave}>
          <Button type="link" style={{
               display:"flex",
               alignItems:"center",
               color:"#6738DD",
               padding:"6.4px 15px",
               fontSize:"16px",
              }}
              onClick={handleBackClick}
          >Back</Button>
           <Button type="primary"
            style={{
              display:"flex",
              alignItems:"center",
              padding:"6.4px 15px",
              fontSize:"16px",
              background:"#6738DD",
            }}
            onClick={SaveAndContinue}
           >Save & Continue</Button>
          </div>
           
       </section>

   </div>
   </div>
  )
}

export default ProjectDetails
