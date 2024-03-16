import React from 'react'
import style from "./tagsSelector.module.css"
import Tag from "../../component/tag"
import Secondary_button from '../../component/secondary_button'
import { useState,useEffect } from 'react'
import classNames from 'classnames'
const tagsSelect_form = ({visible}) => {

  const [isVisible, setIsVisible] = useState(false);

  const [AI_and_Machine_Learning,setAI_and_Machine_Learning]=useState(false);
  const [Designer,setDesigner] =useState(false);
  const [Frontend,setFrontend] =useState(false);
  const [Backend,setBackend] =useState(false);
  const [Security,setSecurity] =useState(false);
  const[Mobile,setMobile]=useState(false);
  const[DataScience,setDataScience]=useState(false);
  const[Other,setOther]=useState(false);
  const [arrayTags,setArrayTags]=useState([]);
 const addTags= (parameter)=> {
  switch (parameter) {
    case "AI and Machine Learning":
      setAI_and_Machine_Learning(!AI_and_Machine_Learning);
      break;
    case "UI UX Design":
      setDesigner(!Designer);
      break;
      case "Frontend Development":
        setFrontend(!Frontend);
        break;
      case "Backend Development":
        setBackend(!Backend);
        break;
        case "Data Science":
          setDataScience(!DataScience);
          break;
        case "Cyber Security":
          setSecurity(!Security);
          break;
          case "Mobile Development":
            setMobile(!Mobile);
            break;
          case "Other":
            setOther(!Other);
            break;
 
  }

  }


  
  

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
        <Tag text={"AI and Machine Learning"} clicked={AI_and_Machine_Learning} onclick={() => addTags("AI and Machine Learning")}></Tag>
        <Tag text={"UI UX Design"} clicked={Designer} onclick={() => addTags("UI UX Design")}></Tag>
        <Tag text={"Frontend Development"} clicked={Frontend} onclick={() => addTags("Frontend Development")}></Tag>
        <Tag text={"Backend Development"} clicked={Backend} onclick={() => addTags("Backend Development")} ></Tag>
        <Tag text={"Data Science"} clicked={DataScience} onclick={() => addTags("Data Science")}></Tag>
        <Tag text={"Cyber Security"} clicked={Security} onclick={() => addTags("Cyber Security")}></Tag>
        <Tag text={"Mobile Development"} clicked={Mobile} onclick={() => addTags("Mobile Development")}></Tag>
        <Tag text={"Other"} clicked={Other} onclick={() => addTags("Other")}></Tag>
      </mark>
      <Secondary_button text={"continue"} ></Secondary_button>
    </div>
  )
}

export default tagsSelect_form
