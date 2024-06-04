import React,{useEffect}from 'react'
import Navbar from '../../component/NavBar'
import style from "./style/Mentorship.module.css"
import {Button } from 'antd';
import Footer from "../../component/Footer"
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const Navigate=useNavigate();

  useEffect(()=>{
   const accessToken = localStorage.getItem("accessToken"); 
   if (!accessToken){
     Navigate("/login");
   }
       },[])

   const Learn_Button_style={
    display: 'inline-flex',
    padding: 'var(--py-4, 24px) var(--px-6, 24px)',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--Size-none, 0px)',
    borderRadius: 'var(--Interactive-border-radius---radius-i-sm, 12px)',
    border: '1px solid var(--Main-trunks, #595D62)',
    color: 'var(--Neutral-12, #141414)',
    textAlign: 'center',
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: '"DM Sans"',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '24px' // You can include comments like this if you want
            }

  const Request_Button_style={
    display: 'inline-flex',
    padding: 'var(--py-4, 24px) var(--px-6, 24px)',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--Size-none, 0px)',
    borderRadius: 'var(--Interactive-border-radius---radius-i-sm, 12px)',
    background: 'var(--Primary-6, #6738DD)',
    color: 'var(--Neutral-1, #FFF)',
    textAlign: 'center',
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: '"DM Sans"',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '24px' // or '150%'
  }
  return (
    <div className={style.hero}>
        <Navbar  Dashboard={false} Explore={false} Mentorship={true} About={false}/> 
        <section className={style.MentorshipContainerOne}>
            <div className={style.RequestMentorshipDetail}>
              <h1 className={style.TeamUpMentorship}>TeamUp Mentorship Program</h1>
              <p className={style.TeamUpProgram}>TeamUp's Mentorship Program offers a unique opportunity for experienced professionals to share their expertise, connect with individuals, and contribute to groundbreaking projects.</p>
              <div className={style.requestButton}>
                 <Button
                  type="primary"
                  style={Request_Button_style}
                 >Request Mentorship</Button>

                <Button
                 
                 style={Learn_Button_style}
                 >Learn More</Button>
              </div>
            </div>
            <div className={style.image}>
              
            </div>
          </section> 
          
          <section className={style.QandA}>
            <div className={style.QuestionTypeone}>
              <h1 className={style.Question}>What is Project Mentorship at TeamUp?</h1>
              <p className={style.Answer}>TeamUp offers a unique mentorship program that goes beyond traditional guidance. As a Project Mentor, you'll work closely with aspiring individuals and teams, helping them navigate real-world projects and tackle critical challenges in their fields.</p>
            </div>
            <div className={style.QuestionTypeone}>
              <h1 className={style.Question}>Why Become a Mentor?</h1>
              <p className={style.AnswerParagraphs}>
                <p>Sharpen Your Expertise: Guiding others provides fresh perspectives and helps refine your own skills through collaboration and problem-solving.</p>
                <p>Expand Your Network: Connect with passionate individuals and teams working on cutting-edge projects.</p> 
                <p>Experience Personal Fulfillment: Witness the growth and success of your mentees as they bring their projects to life.</p>
                <p>Give Back to the Community: Share your knowledge and experience with the next generation of innovators, shaping a brighter future.</p>
                <p>Continuous Learning: Stay updated with the latest trends and innovations in your field.</p>
                <p>Leadership Development: Enhance your leadership and management skills by mentoring diverse teams.</p>
                <p>Professional Recognition: Gain recognition within the TeamUp community and beyond as a thought leader and expert.</p>
              </p>
            </div>
            <div className={style.QuestionTypeone}>
              <h1 className={style.Question}>What is My Mission as a Mentor?</h1>
              <p className={style.AnswerParagraphs}>
                <h1 className={style.subTitle}>Your Mentor Journey:</h1>
                <p>At TeamUp, as a mentor, you will:</p>
                <p>Propose Project Ideas: Share innovative project ideas with the community of learners.</p> 
                <p>Build Your Team: Select and customize a team of passionate individuals for each project.</p>
                <p>Guide and Support: Lead your team through each phase of the project, offering best practices and valuable insights.</p>
                <p>Evaluate Progress: Provide constructive feedback and assess the team's performance to ensure project success.</p>
                <p>Leadership Development: Enhance your leadership and management skills by mentoring diverse teams.</p>
                <h1 className={style.subTitle}>Mentor Access at TeamUp</h1>
                <p>As a mentor, you will have enhanced access and additional privileges, including the ability to:</p>
                <p>Initiate Projects: Create and launch new projects tailored to your expertise and interests.</p>
                <p>Manage Team Members: Oversee user participation, review requests, and approve or reject team members.</p>
                <p>Access Exclusive Resources: Utilize advanced tools and resources available only to mentors to facilitate project success.</p>
              </p>
            </div>
            <div className={style.QuestionTypeone}>
              <h1 className={style.Question}>How to Register for TeamUp Mentorship</h1>
              <p className={style.AnswerParagraphs}>
                <h1 className={style.subTitle}>Mentorship Requirements</h1>
                <p>Verified User Status: Ensure your profile is verified.</p>
                <p>Skill and Experience Verification: Provide proof of your skills and experience.</p> 
                <h1 className={style.subTitle}>Registration Process</h1>
                <p>Complete the Application Form: Fill out the mentorship application form, which takes less than a minute.</p>
                <p>Submit Your Request: Your application will be reviewed by our support team.</p>
                <p>Confirmation: Receive a confirmation email within 24 hours once your request is processed.</p>
              </p>
            </div>
            <div className={style.frame}>
                <p className={style.text_wrapper}>Join our community of mentors today and start making an impact!</p>
                <p className={style.teamup_s_mentorship}>
                  TeamUp&#39;s Mentorship Program offers a unique opportunity for experienced professionals
                </p>
                  <Button
                  type="primary"
                  style={
                    {
                    ...Request_Button_style,
                       color:"white",
                       backgroundColor:'#070707',
                      width:"231px" 

                  }
                  }
                 >Request Mentorship</Button>
                  </div>
                  <Footer/>

          </section>
           
    </div>
  )
}

export default Dashboard
