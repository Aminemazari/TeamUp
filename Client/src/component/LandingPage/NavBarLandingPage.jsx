import React, { useState, useEffect } from "react";
import style from "../style.module.css";
import logo from "../../assets/TLogo.svg";
import NavigationLinks from "../NavigationLinks";
import { useNavigate } from "react-router-dom";
import User from "../../assets/User.svg";
import setting from "../../assets/Setting_alt_line.svg";
import Headphones from "../../assets/Headphones_fill.svg";
import Sign_out from "../../assets/Sign_out_squre.svg";
import NotificationMark from "../notificationMark";
import API_URL from "../API_URL";
import axios from "axios";
import { Button, message } from "antd";

const NavBarLandingPage = ({
  Dashboard,
  Explore,
  Mentorship,
  About,
  Categories,
  picture,
}) => {
  const [visible, setVisible] = useState(false);
  const [VisibleNotification, setVisibleNotification] = useState(false);
  const [NotificationRequest, setNotificationRequest] = useState(null);
  const [data, setData] = useState(null);
  const [dataLenght, setdataLenght] = useState(0);

  const [notificationData, setNotificationData] = useState(null);
  const [requestModalVisible, setModelVisible] = useState(null);
  const Navigate = useNavigate();

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

          setData(response.data);
          const prevlenght = localStorage.getItem("notificationLenght");
          console.log(prevlenght);
          if (!prevlenght) {
            localStorage.setItem(
              "notificationLenght",
              response.data.length.toString()
            );
            setdataLenght(response.data.length);
          } else {
            if (response.data.length > Number(prevlenght)) {
              localStorage.setItem(
                "notificationLenght",
                response.data.length.toString()
              );
              setdataLenght(response.data.length);
            } else {
              setdataLenght(Number(prevlenght));
            }
          }

          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
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
  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("UserData");
    Navigate("/login");
  };
  const menu = (
    <div className={style.menuNavBar}>
      <div className={style.navBarCoutainerMenu}>
        <button className={style.menuNavBarButton}>
          <img className={style.navbarImageMenu} src={User}></img>Profile
        </button>
        <button className={style.menuNavBarButton}>
          <img className={style.navbarImageMenu} src={setting}></img>Settings
        </button>
      </div>
      <p className={style.line}></p>
      <div className={style.navBarCoutainerMenu}>
        <button className={style.menuNavBarButton}>
          <img className={style.navbarImageMenu} src={Headphones}></img>Support
        </button>
        <button className={style.menuNavBarButton} onClick={logOut}>
          <img className={style.navbarImageMenu} src={Sign_out}></img>Log Out
        </button>
      </div>
    </div>
  );

  const DashboardClicked = () => {
    Navigate("/dashboard");
  };
  const ExploreClicked = () => {
    Navigate("/home");
  };
  const MentorshipClicked = () => {
    Navigate("/mentorship");
  };
  const AboutClicked = () => {
    Navigate("/about");
  };
  const CategoriesClicked = () => {
    Navigate("/categories");
  };

  const handleMenuClick = (e) => {
    console.log("Menu item clicked", e);
    setVisible(false);
  };

  const handleButtonClick = () => {
    setVisible(!visible);
  };
  const handleButtonNotification = () => {
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
  };
  const handleLogo = () => {
    Navigate("/home");
  };
  const NotificationDecisionRequest = (data) => {
    setNotificationData(data);
    setVisible(false);
    setVisibleNotification(!VisibleNotification);
    setModelVisible(true);
  };
  const handleAcceptProject = async (state) => {
    setModelVisible(false);
    const accessToke = localStorage.getItem("accessToken");
    if (accessToke) {
      try {
        const response = await fetch(
          `${API_URL}/api/v4/projects-posts/join-requests/answer?requestId=${Number(
            notificationData.id
          )}&isAccepted=${state}`,
          {
            method: "POST",
            headers: new Headers({
              accept: "text/plain",
              Authorization: `Bearer ${accessToke}`,
            }),
          }
        );

        const statusCode = response.status;
        if (statusCode === 200) {
          message.success("submit successfully");
        } else {
          message.error("Failed to sumbit project");
        }
      } catch (error) {
        message.error("Error submit ");
      }
    }
  };

  const Notifications = (
    <div className={style.Notification_Menu}>
      <div className={style.Notification_Menu_Countainer}>
        <h1 className={style.NotificationText}>Notifications</h1>
        <p className={style.Mark_As_Read}>Mark as read</p>
      </div>
      <div className={style.NotificationsCountainer}>
        {data &&
          data.map((data) => (
            <NotificationMark
              Data={data}
              onclick={NotificationDecisionRequest}
            />
          ))}
      </div>
    </div>
  );

  return (
    <div className={style.NavBar}>
      <button onClick={handleLogo}>
        {" "}
        <img src={logo} alt="logo" className={style.TLogo} />
      </button>
      <div className={style.Navigation}>
        <NavigationLinks
          text={"Dashboard"}
          onclick={DashboardClicked}
          clicked={Dashboard}
        />
        <NavigationLinks
          text={"Categories"}
          onclick={CategoriesClicked}
          clicked={Categories}
        />
        <NavigationLinks
          text={"Explore"}
          onclick={ExploreClicked}
          clicked={Explore}
        />
        <NavigationLinks
          text={"Mentorship"}
          onclick={MentorshipClicked}
          clicked={Mentorship}
        />
        <NavigationLinks
          text={"About Us"}
          onclick={AboutClicked}
          clicked={About}
        />
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default NavBarLandingPage;
