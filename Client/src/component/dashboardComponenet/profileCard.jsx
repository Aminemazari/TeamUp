import React, { useState,useEffect } from 'react';
import style from "../style.module.css";
import star from "../../assets/star.svg";
import badge from "../../assets/Badges.svg";
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import API_URL from '../API_URL';
const ProfileCard = ({ userName, CareerName, ReviewsNumber, Reviews, profilePictures,Upload,onChangePhoto}) => {

  return (
    <div className={style.profileCard}>
    
    <div className={style.profileCardAdditional}>
        <label htmlFor="imageUpload" className={style.profilepicsstyle}>
         
            <img className={style.avatarImage} src={profilePictures} alt={userName} />
            <input
          type="file"
          id={Upload ? "imageUpload" : ""}
          style={{ display: "none" }}
          onChange={onChangePhoto}
          multiple
        />
          
        </label>
      
       
        <div className={style.profileCardInfo}>
          <p className={style.userName}>{userName}</p>
          <p className={style.CareerName}>{CareerName}</p>
        </div>
        </div>
      <div className={style.ReviewsSection}>
        <img src={star} alt="star icon" />
        <p className={style.Reviews}>{Reviews}</p>
        <p className={style.ReviewsNumber}>{ReviewsNumber} Reviews</p>
      
      </div>
   
    </div>
  );
};

export default ProfileCard;
