import React, { useState,useEffect } from 'react';
import style from "../style.module.css";
import star from "../../assets/star.svg";
import badge from "../../assets/Badges.svg";
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import API_URL from '../API_URL';
const ProfileCard = ({ userName, CareerName, ReviewsNumber, Reviews, profilePictures,Upload}) => {
  const [selectedImages, setSelectedImages] = useState(profilePictures);
  const [storedAccessToken, setStoredAccessToken] = useState('');
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setStoredAccessToken(accessToken);
      console.log(accessToken);
    }
  }, []);   
     



  const handleImageChange = async (event) => {
  
    const files = event.target.files;
    if (files) {
      const formData = new FormData();
      Array.from(files).forEach(file => {
        formData.append('image', file);
      });

      try {
        console.log(storedAccessToken)
        const response = await fetch(`${API_URL}/api/v1/files/user-picture`, {
          method: 'POST',
          headers:new Headers( {  
            'Authorization':`Bearer ${storedAccessToken}`,
            'accept': 'text/plain',
           } ),
          body: formData,
        });
        if (response.ok) {
          message.success('Image uploaded successfully');
        } else {
          message.error('Failed to upload image');
        }
      } catch (error) {
        message.error('Error uploading image');
        setSelectedImages(profilePictures);
      }

      const imagesArray = Array.from(files).map(file => URL.createObjectURL(file));
      setSelectedImages(imagesArray);
    }
  
  };

  return (
    <div className={style.profileCard}>
      <div className={style.Profile_card_countainer}>

        <label htmlFor="imageUpload">
         
            <img className={style.avatarImage} src={selectedImages} alt={userName} />
            <input
          type="file"
          id={Upload ? "imageUpload" : ""}
          style={{ display: "none" }}
          onChange={handleImageChange}
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
