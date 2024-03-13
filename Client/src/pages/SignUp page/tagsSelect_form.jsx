import React from 'react'
import style from "./tagsSelector.module.css"
import Tag from "../../component/tag"
import Secondary_button from '../../component/secondary_button'
import { useState,useEffect } from 'react'
import classNames from 'classnames'
const tagsSelect_form = ({visible}) => {
  console.log(visible);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (visible) {
      setIsVisible(true);
    }
  }, [visible]);

  const isTagForm = 
  classNames(
    style.TagFormNotVisible,
    { [style.TagFormVisble]: isVisible },
  );
  return (
    <div className={isTagForm}>
      <h1 className={style.discover}>Let's Discover Your Passions!</h1>
      <p className={style.whatField}>What field are you most interested in learning or working in?</p>
      <mark className={style.tags}>
        <Tag text={"AI and Machine Learning"}></Tag>
        <Tag text={"UI UX Design"}></Tag>
        <Tag text={"Frontend Development"}></Tag>
        <Tag text={"Backend Development"}></Tag>
        <Tag text={"Data Science"}></Tag>
        <Tag text={"Cyber Security"}></Tag>
        <Tag text={"Mobile Development"}></Tag>
        <Tag text={"Other"}></Tag>
      </mark>
      <Secondary_button text={"continue"} ></Secondary_button>
    </div>
  )
}

export default tagsSelect_form
