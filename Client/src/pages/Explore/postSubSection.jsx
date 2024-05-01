import React from 'react'
import style from "./explore.module.css"
import Post from '../../component/post'
import pics from "../../assets/3.svg"
const postSubSection = ({display,Posts}) => {
  return (
    <div className={`${style.posts} ${!display ? style.not_diplayed: ''}`}>
    <Post userName={"Lorem Ipsum"} pics={pics} categorie={"Mobile Developer"} date={"3h"} 
        Title={"Habit Tracker: A Simple Mobile App for Daily Habits"}
        description={"This project aims to introduce users to Teal programming for mobile development by building a basic habit tracker app. Users will learn fundamental Teal concepts like user interface design, data storage, notifications, and user interaction."}
        tags={["Flutter","SQLlite","HTTPS Requests","Django","Python","XML"]} 
        ></Post>
            <Post userName={"Lorem Ipsum"} pics={pics} categorie={"Mobile Developer"} date={"3h"} 
        Title={"Habit Tracker: A Simple Mobile App for Daily Habits"}
        description={"This project aims to introduce users to Teal programming for mobile development by building a basic habit tracker app. Users will learn fundamental Teal concepts like user interface design, data storage, notifications, and user interaction."}
        tags={["Flutter","SQLlite","HTTPS Requests","Django","Python","XML"]} 
        ></Post>
            <Post userName={"Lorem Ipsum"} pics={pics} categorie={"Mobile Developer"} date={"3h"} 
        Title={"Habit Tracker: A Simple Mobile App for Daily Habits"}
        description={"This project aims to introduce users to Teal programming for mobile development by building a basic habit tracker app. Users will learn fundamental Teal concepts like user interface design, data storage, notifications, and user interaction."}
        tags={["Flutter","SQLlite","HTTPS Requests","Django","Python","XML"]} 
        ></Post>
            <Post userName={"Lorem Ipsum"} pics={pics} categorie={"Mobile Developer"} date={"3h"} 
        Title={"Habit Tracker: A Simple Mobile App for Daily Habits"}
        description={"This project aims to introduce users to Teal programming for mobile development by building a basic habit tracker app. Users will learn fundamental Teal concepts like user interface design, data storage, notifications, and user interaction."}
        tags={["Flutter","SQLlite","HTTPS Requests","Django","Python","XML"]} 
        ></Post>
            <Post userName={"Lorem Ipsum"} pics={pics} categorie={"Mobile Developer"} date={"3h"} 
        Title={"Habit Tracker: A Simple Mobile App for Daily Habits"}
        description={"This project aims to introduce users to Teal programming for mobile development by building a basic habit tracker app. Users will learn fundamental Teal concepts like user interface design, data storage, notifications, and user interaction."}
        tags={["Flutter","SQLlite","HTTPS Requests","Django","Python","XML"]} 
        ></Post>
            <Post userName={"Lorem Ipsum"} pics={pics} categorie={"Mobile Developer"} date={"3h"} 
        Title={"Habit Tracker: A Simple Mobile App for Daily Habits"}
        description={"This project aims to introduce users to Teal programming for mobile development by building a basic habit tracker app. Users will learn fundamental Teal concepts like user interface design, data storage, notifications, and user interaction."}
        tags={["Flutter","SQLlite","HTTPS Requests","Django","Python","XML"]} 
        ></Post>
            <Post userName={"Lorem Ipsum"} pics={pics} categorie={"Mobile Developer"} date={"3h"} 
        Title={"Habit Tracker: A Simple Mobile App for Daily Habits"}
        description={"This project aims to introduce users to Teal programming for mobile development by building a basic habit tracker app. Users will learn fundamental Teal concepts like user interface design, data storage, notifications, and user interaction."}
        tags={["Flutter","SQLlite","HTTPS Requests","Django","Python","XML"]} 
        ></Post>
 
</div>
  )
}

export default postSubSection
