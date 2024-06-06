import React, { useState,useEffect } from 'react'
import style from "./style.module.css"
import logo from "../assets/TLogo.svg"
import NavigationLinks from './NavigationLinks'
import menu from "../pages/assets/Menu.svg"
import chat from "../pages/assets/Chat.svg"
import Bell from "../assets/Bell.svg"
import { json, useNavigate } from 'react-router-dom'
import picsImport from "../assets/Avatar picture.svg"
import { Dropdown, Menu} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import User from "../assets/User.svg"
import setting from "../assets/Setting_alt_line.svg"
import Headphones from "../assets/Headphones_fill.svg"
import Sign_out from "../assets/Sign_out_squre.svg"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import NotificationMark from './notificationMark'
import API_URL from './API_URL'
import axios from 'axios';
import { Button, Modal } from 'antd';
import { Avatar, Badge, Space, Switch } from 'antd';
import { message } from 'antd';

const NavBar = ({Dashboard,Explore,Mentorship,About,Categories,picture}) => {
  const [visible, setVisible] = useState(false);
  const [VisibleNotification,setVisibleNotification]=useState(false);
  const [NotificationRequest,setNotificationRequest]=useState(null);
  const [data, setData] = useState(null);
  const [dataLenght,setdataLenght]=useState(0);

  const [notificationData,setNotificationData]=useState(null);
  const [requestModalVisible,setModelVisible]=useState(null);
  const Navigate= useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${API_URL}/api/v4/projects-posts/join-requests/for-mentor`,
            {
              headers: {
                Accept: "text/plain",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
      

          setData( response.data);
          const prevlenght = localStorage.getItem("notificationLenght");
          console.log(prevlenght)
          if (!prevlenght){
            localStorage.setItem("notificationLenght",response.data.length.toString())   
            setdataLenght(response.data.length);
          }
          else {
            
            if (response.data.length > Number(prevlenght)){
              localStorage.setItem("notificationLenght",response.data.length.toString())  
              setdataLenght(response.data.length);  
          }
          else{
            setdataLenght(Number(prevlenght));  

          }
        }
  
          
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      // Fetch data initially
      fetchData();

      // Fetch data every 10 seconds
      const interval = setInterval(fetchData, 10000);

      // Cleanup function to clear the interval
      return () => clearInterval(interval);
    }
  }, []);
/*  useEffect(()=>{
    if (!profilePics) {
      const UserData = localStorage.getItem('UserData');
   
        setProfilePics(JSON.parse(UserData).profilePicture);
      
    }
  }, [picture]);
*/
  const logOut=()=>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("UserData")
    Navigate("/login");
    }
  const menu=(
          <div className={style.menuNavBar}>
              <div className={style.navBarCoutainerMenu}>
                <button className={style.menuNavBarButton}><img className={style.navbarImageMenu} src={User}></img>Profile</button>
                <button className={style.menuNavBarButton}><img className={style.navbarImageMenu} src={setting}></img>Settings</button>
              </div>
              <p className={style.line}></p>
              <div className={style.navBarCoutainerMenu}>
                <button className={style.menuNavBarButton}><img className={style.navbarImageMenu} src={Headphones}></img>Support</button>
                <button className={style.menuNavBarButton} onClick={logOut}><img className={style.navbarImageMenu} src={Sign_out}></img>Log Out</button>
              </div>
             
              
              </div>
          )
 
  
 

 
  const DashboardClicked=()=>{
    Navigate("/dashboard")
   }
   const ExploreClicked=()=>{
    Navigate("/home")
   }
   const MentorshipClicked=()=>{
    Navigate("/mentorship")
   }
   const AboutClicked=()=>{
    Navigate("/about")
   }
   const CategoriesClicked=()=>{
    Navigate("/categories")
   }

   const handleMenuClick = (e) => {
     console.log('Menu item clicked', e);
     setVisible(false);
   };
 
   const handleButtonClick = () => {
     setVisible(!visible);
   };
   const handleButtonNotification=()=>{
    setVisibleNotification(!VisibleNotification);
    
   /* const accessToken = localStorage.getItem("accessToken")
    if (accessToken){
      fetch(`${API_URL}/api/v2/auth/login`,{
        method: "GET",
        headers : new Headers( {  
          'content-type' : 'application/json',
          'accept': 'application/json',
          'Authorization':`Bearer ${accessToken}`,
         } ),
        body: JSON.stringify({
          email: email,
          password: password,
   
        }),
      })
      .then(response=>response.json)
      .then(data=>setNotificationRequest())

    }*/
   
   }
   const handleLogo=()=>{
    Navigate("/home")
   }
   const NotificationDecisionRequest =(data)=>{
    setNotificationData(data);
    setVisible(false) 
    setVisibleNotification(!VisibleNotification)
    setModelVisible(true);
   

   }
   const handleAcceptProject =async(state)=>{
    setModelVisible(false);
    const accessToke = localStorage.getItem("accessToken");
    if (accessToke) {
     
      try{

        const response = await fetch(`${API_URL}/api/v4/projects-posts/join-requests/answer?requestId=${Number(notificationData.id)}&isAccepted=${state}`,{
      method:"POST",
      headers:new Headers({  
        'accept': 'text/plain',
        'Authorization':`Bearer ${accessToke}`,
        
       } ),
     })
     
     const statusCode = response.status;
     if (statusCode===200){
       message.success('submit successfully');     
     }
     else{
       message.error('Failed to sumbit project');
     }
  }catch (error) { 
 
  message.error('Error submit ');


}
    }
   }

      const Notifications =(
              <div className={style.Notification_Menu}>
                <div className={style.Notification_Menu_Countainer}>
                  <h1 className={style.NotificationText}>Notifications</h1>
                  <p className={style.Mark_As_Read}>Mark as read</p>
                </div>
                <div className={style.NotificationsCountainer}>
                {
                  data && 
                  data.map((data)=>(
                    <NotificationMark Data={data} onclick={NotificationDecisionRequest}/>
                  )
                  )
                }
                </div>
              </div>
      )

 

  return (
    <div className={style.NavBar}>
       <button onClick={handleLogo}> <img src={logo} alt="logo" className={style.TLogo} /></button>
        <div className={style.Navigation}>
            <NavigationLinks text={"Dashboard"} onclick={DashboardClicked} clicked={Dashboard}/>
            <NavigationLinks text={"Categories"} onclick={CategoriesClicked} clicked={Categories}/>
            <NavigationLinks text={"Explore"} onclick={ExploreClicked} clicked={Explore}/>
            <NavigationLinks text={"Mentorship"} onclick={MentorshipClicked} clicked={Mentorship}/>
            <NavigationLinks text={"About Us"}  onclick={AboutClicked} clicked={About}/>
        </div>
        <section className={style.features}>
 
      <button className={style.navbarChatbuton}><img src={chat}/></button>
      <Dropdown
        placement="topRight" 
        overlay={Notifications}
        visible={VisibleNotification}
        onVisibleChange={(flag) => setVisibleNotification(flag)}
        trigger={['click']}
      >

        <button  className={style.navbarChatbuton} onClick={handleButtonNotification}>
        <Badge count={dataLenght}>
        <img src={Bell}/>        
        </Badge>
        </button>
      </Dropdown>
      <div>




      <Dropdown
        overlay={menu}
        visible={visible}
        onVisibleChange={(flag) => setVisible(flag)}
        trigger={['click']}
      >
        <button onClick={handleButtonClick}>
        <img src={picture}   className={style.profilePicsNavBar}/>
        </button>
      </Dropdown>
      <Modal
       
         centered
       
        open={requestModalVisible}
        onOk={()=>handleAcceptProject(true)}
        onCancel={()=>handleAcceptProject(false)}
        okText="Accept" 
        cancelText="Reject"
        okButtonProps={{ style: { backgroundColor: '#6738DD', color: 'white'}}}
        cancelButtonProps={{ style: { backgroundColor: 'white', color: 'rgba(0, 0, 0, 0.85)' }}}
      >
      {
        notificationData 
      &&
        (
            <div className={style.popUprEquestProject}>
              <div className={style.ProjectInfoPopUp}>
                <p className={style.notificationData_projectTitle}>{notificationData.projectTitle}</p>
                <h1 className={style.notificationData_projectTitleone}>{notificationData.projectTitle}</h1>
              </div>
              <div className={style.senderInfo}>
                <img src={notificationData.senderPicture} className={style.notimag}/>
                <p className={style.notificationData_senderName}>{notificationData.senderName}</p>
              </div>
              <div className={style.line}></div>
              <div >
                <p className={style.AboutRequest}>About request</p>
                <p className={style.AboutRequestDetail}>{notificationData.joinMessage}</p>
              </div>
            </div>
        )
    }
      </Modal>
    </div>
      </section>
      
    </div>
  )
}

export default NavBar
