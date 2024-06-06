import React, { useRef, useEffect, useState } from 'react';
import iconWeb from "../../../assets/icons8-web.svg";
import iconMobile from "../../../assets/mobileDev.svg";
import iconDesign from "../../../assets/design.svg";
import iconCyberSecurity from "../../../assets/cyberSecurity.svg";
import iconIA from "../../../assets/IAdev.svg";
import iconBackend from "../../../assets/backendDev.svg";
import icongame from "../../../assets/gameDev.svg";
import iconIos from "../../../assets/iosDev.svg";
import iconAndriod from "../../../assets/androidDev.svg";
import durationPics from "../../../assets/duration.png";
import levelPics from "../../../assets/level.svg";
import memberPics from "../../../assets/member.svg";
import NavBar from '../../../component/NavBar';
import SearchBar from '../../../component/searchBar';
import style from "./style/joinProject.module.css";
import { Breadcrumb, Button,Modal,Input } from 'antd';
import ProfileCard from '../../../component/dashboardComponenet/profileCard';
import bookOpen from "../../../assets/Book_open.svg";
import API_URL from '../../../component/API_URL';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Footer from "../../../component/Footer";
import image from "../../../assets/sammy-line-man-receives-a-mail 1.svg"
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;
const JoinProject = () => {
  const Navigate=useNavigate("")
  const location = useLocation();
  const [data, setData] = useState(null);
  const [id, setId] = useState(location.state?.data || localStorage.getItem('projectId'));
  const subContainerRef = useRef(null);
  const ReadyRef = useRef(null);
  const lastScrollTop = useRef(0);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open,setModal3Open] = useState(false);
  const [RequestLetter, setRequestLetter] = useState("");
  const [storedAccessToken, setStoredAccessToken] = useState(null);
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setStoredAccessToken(accessToken);
      console.log(accessToken);
    }
  }, []);   
  const [profileData,setProfileData]=useState(null);
  useEffect(()=>{
    const UserData = localStorage.getItem('UserData');
    if(UserData){
      setProfileData(JSON.parse(UserData));
    } 
        },[])
  
  useEffect(() => {
        if (id) {
          localStorage.setItem('projectId', id);
          fetch(`${API_URL}/api/v4/projects-posts/${localStorage.getItem("projectId")}`, {
            method: "GET",
            headers: new Headers({
              'content-type': 'application/json',
              'accept': 'text/plain',
            }),
          }).then(response =>
            response.json()
          ).then(result => {
            setData(result);
            console.log(result);
          }).catch(
            e => console.log(e)
          )
        }
      }, [id]);

  useEffect(() => {
        const handleScroll = () => {
          const projectDetailCountainer = subContainerRef.current;
          const sectionOfReadyToDive = ReadyRef.current;
          const st = window.pageYOffset || document.documentElement.scrollTop;

          if (projectDetailCountainer && projectDetailCountainer.scrollHeight - projectDetailCountainer.scrollTop === projectDetailCountainer.clientHeight) {
            sectionOfReadyToDive.scrollIntoView({ behavior: 'smooth' });
          }

          lastScrollTop.current = st <= 0 ? 0 : st;
        };

        const projectDetailCountainer = subContainerRef.current;
        if (projectDetailCountainer) {
          projectDetailCountainer.addEventListener('scroll', handleScroll);
        }

        return () => {
          if (projectDetailCountainer) {
            projectDetailCountainer.removeEventListener('scroll', handleScroll);
          }
        };
    }, [data]);

  



  const handleInpurRequestLetter=(event)=>{
    setRequestLetter(event.target.value);
  }

  const handleSubmition = async()=>{
    if (storedAccessToken && id){
    try{
   const response = await fetch(`${API_URL}/api/v4/projects-posts/join-requests`,{
    method: 'POST',
    headers:new Headers( {  
      'Content-Type' : 'application/json',
      'Authorization':`Bearer ${storedAccessToken}`,
      'accept': 'text/plain',
     } ),
     body: JSON.stringify({
      projectPostId:   parseInt(id),
     message:RequestLetter
    }),
  });
  const statusCode = response.status;
   if (statusCode===200 ){
    setModal2Open(false);
    setModal3Open(true);
  }
  }
  catch{
     console.log("am tired")
  }
}
  }
 
  








  if (!data) {
    return (
      <>
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      </>
    )
  }


  const profilePics = data.mentor.profilePicture;
  const userName = data.mentor.displayName;
  const careerName = data.mentor.handler;
  const reviewStar = data.mentor.rate;
  const requiredSkills = data.requiredSkills;
  const tags = data.categories;
  const projectTitle = data.title;
  const level = data.projectLevel;
  const duration = data.expectedDuration;
  const members = data.expectedTeamSize;
  const samary = data.summary;
  const projectScenario = data.scenario;
  const projectGoals = data.learningGoals;
  const teamRoles = data.teamAndRols;
  const numberProject = 10;

  var iconForCategorie;

  switch (tags[0]) {
    case "Web":
      iconForCategorie = iconWeb;
      break;
    case "Mobile":
      iconForCategorie = iconMobile;
      break;
    case "Design":
      iconForCategorie = iconDesign;
      break;
    case "Cyber Security":
      iconForCategorie = iconCyberSecurity;
      break;
    case "Ai":
      iconForCategorie = iconIA;
      break;
    case "Backend Dev":
      iconForCategorie = iconBackend;
      break;
    case "Game Dev":
      iconForCategorie = icongame;
      break;
    case "IOS Dev":
      iconForCategorie = iconIos;
      break;
    case "Andriod":
      iconForCategorie = iconAndriod;
      break;
    default:
      break;
  }




  return (
    <>
    <div className={style.hero}>
      <NavBar Explore={true} picture={profileData.profilePicture}/>
      <div className={style.Subhero}>
        <div className={style.SearchBar}>
          <div className={style.subSection}>
            <SearchBar />
          </div>
        </div>

        <section className={style.projectCountainer}>
          <section className={style.projectDetailCountainer} ref={subContainerRef}>
            <div className={style.projectDetailSeperater}>
              <div className={style.projectDetailSubCountainer}>
                <Breadcrumb
                  items={[
                    {
                      title: <a href="/Explore">Explore</a>,
                    },
                    {
                      title: "Projects",
                    },
                    {
                      title: "Project",
                    },
                  ]}
                />
                <div className={style.tags}>
                  {tags && tags.map((tag) => {
                    var iconn = "";
                    switch (tag) {
                      case "Web":
                        iconn = iconWeb;
                        break;
                      case "Mobile":
                        iconn = iconMobile;
                        break;
                      case "Design":
                        iconn = iconDesign;
                        break;
                      case "Cyber Security":
                        iconn = iconCyberSecurity;
                        break;
                      case "Ai":
                        iconn = iconIA;
                        break;
                      case "Backend Dev":
                        iconn = iconBackend;
                        break;
                      case "Game Dev":
                        iconn = icongame;
                        break;
                      case "IOS Dev":
                        iconn = iconIos;
                        break;
                      case "Andriod":
                        iconn = iconAndriod;
                        break;
                      default:
                        break;
                    }
                    return (
                      <button className={style.categorieButtonPost}><img src={iconn} alt={tag} />{tag}</button>
                    );
                  })}
                </div>
                <h1 className={style.projectTitle}>{projectTitle}</h1>
                <div className={style.levelDurationMemember}>
                  <button className={style.postInfo}><img src={levelPics} alt="level" />{level} </button>
                  <button className={style.postInfo}><img src={memberPics} alt="members" /> {members} member</button>
                  <button className={style.postInfo}><img src={durationPics} alt="duration" /> {duration}</button>
                </div>

                <h1 className={style.projectSammary}>{samary}</h1>

                <Button type="primary" size="large"
                onClick={() => setModal2Open(true)}
                  style={{
                    background: "#6738DD",
                    width: "166px",
                  }}>Join Project</Button>
              </div>
              <div className={style.categorieImgCountainer}>
                <img src={iconForCategorie} className={style.categorieImge} alt="category" />
              </div>
            </div>
            <div className={style.theRestOfTheProjectDetail}>
              <div className={style.itemDetail}>
                <h1 className={style.itemTitle}>Project Scenario</h1>
                <p className={style.itemDescription}>{projectScenario}</p>
              </div>
              <div className={style.itemDetail}>
                <h1 className={style.itemTitle}>Project Goals & Learning</h1>
                <p className={style.itemDescription}>{projectGoals}</p>
              </div>
              <div className={style.itemDetail}>
                <h1 className={style.itemTitle}>Team & Roles</h1>
                <p className={style.itemDescription}>{teamRoles}</p>
              </div>
            </div>
          </section>
          <section className={style.mentorDetailCountainer}>
            <h1 className={style.aboutMentor}>About the mentor</h1>
            <div className={style.projectNumberCountainer}>
              <ProfileCard profilePictures={profilePics} userName={userName} CareerName={careerName} ReviewsNumber={100} Reviews={reviewStar} Upload={false} />
              <div className={style.openBook}>
                <img src={bookOpen} alt="book open" />
                <p className={style.numberProject}>{numberProject} <span className={style.projectText}>projects</span></p>
              </div>
            </div>
            <div className={style.line}></div>
            <div className={style.requiredSkillsCountainer}>
              <h1 className={style.aboutMentor}>Required Skills</h1>
              <div className={style.requiredSkills}>
                {
                  requiredSkills.map((requiredSkill) => {
                    return (
                      <button className={style.tagButton}>{requiredSkill}</button>
                    )
                  })
                }
              </div>
            </div>
          </section>
        </section>
        <div className={style.sectionOfReadyToDive} ref={ReadyRef}>
          <h1 className={style.readyToDrive}>Ready to Dive In?</h1>
          <p className={style.GainValuable}>Gain valuable experience and learn from experienced mentors.</p>
          <Button type="primary" size="large"
          onClick={() => setModal2Open(true)}
            style={{
              background: "#070707",
              width: "231px",
            }}>Join Project</Button>
        </div>
      </div>
      <Footer />
    </div>

    <Modal
        centered
        open={modal2Open}
        onOk={handleSubmition}
        onCancel={() => setModal2Open(false)}
        okText="Submit" 
        cancelText="Cancel"
        okButtonProps={{ style: { backgroundColor: '#6738DD', color: 'white'}}}
        cancelButtonProps={{ style: { backgroundColor: 'white', color: 'rgba(0, 0, 0, 0.85)' }}}


        
      >
      <div className={style.ModelJoinProject}>
         <h1 className={style.JoinProject}>Join project</h1>
         <div className={style.joinRequestLetter}>
          <p className={style.RequestDetails}><span className={style.redStar}>*</span> Request details</p>
          <TextArea rows={4}
               placeholder="Describe your motivation for joining this project, specifying the role you want to take, and detail how you plan to contribute"
                  onChange={handleInpurRequestLetter}
                  value={RequestLetter}
                  style={{
                    height: 305,
                    resize: 'none',
                  }}
                  />
                  <p className={style.PleaseInputPassenger}>Please input passenger's name or delete this field.</p>
         </div>
      </div>
      </Modal>


      <Modal
        centered
        open={modal3Open}
        onOk={() =>{
          Navigate("/explore") 
          setModal3Open(false)
          }}
        onCancel={() => {
          setModal3Open(false)
          Navigate("/dashboard") 
          }}
        okText="Continue Exploring" 
        cancelText="Check Dashboard"
        okButtonProps={{ style: { backgroundColor: '#6738DD', color: 'white',marginTop:"25px"}}}
        cancelButtonProps={{ style: { backgroundColor: 'white', color: 'rgba(0, 0, 0, 0.85)',marginTop:"25px" }}}


        
      >
      
      <div className={style.ModelRequestSend}>
         <img src={image} className={style.sendImage}/>
         <h1 className={style.JoinProject}>Request Sent!</h1>
         <p className={style.Your_request_to_join}>Your request to join the project has been sent. You wll be notified when you get accepted.</p>
      </div>
       </Modal>
    </>
  )
}

export default JoinProject;
