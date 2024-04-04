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
      if (AI_and_Machine_Learning==false){
        setFrontend(false);
        setBackend(false);
        setDataScience(false);
        setSecurity(false);
        setMobile(false);
        setOther(false);
        setDesigner(false);
      }
      break;
    case "UI UX Design":
      setDesigner(!Designer);
      if (Designer==false){
        setAI_and_Machine_Learning(false);
        setFrontend(false);
        setBackend(false);
        setDataScience(false);
        setSecurity(false);
        setMobile(false);
        setOther(false);
      }
      break;
      case "Frontend Development":
        setFrontend(!Frontend);
        if (Frontend==false){
        setAI_and_Machine_Learning(false);
          setDesigner(false);
          setBackend(false);
          setDataScience(false);
          setSecurity(false);
          setMobile(false);
          setOther(false);
        }
        
        break;
      case "Backend Development":
        setBackend(!Backend);

        if (Backend==false){
        setAI_and_Machine_Learning(false);

          setFrontend(false);
          setDesigner(false);
          setDataScience(false);
          setSecurity(false);
          setMobile(false);
          setOther(false);
        }

        break;
        case "Data Science":
          setDataScience(!DataScience);
          if (DataScience==false){
        setAI_and_Machine_Learning(false);

            setFrontend(false);
            setBackend(false);
            setDesigner(false);
            setSecurity(false);
            setMobile(false);
            setOther(false);
          }
          break;
        case "Cyber Security":
          setSecurity(!Security);
          if (Security==false){
        setAI_and_Machine_Learning(false);

            setFrontend(false);
            setBackend(false);
            setDataScience(false);
            setDesigner(false);
            setMobile(false);
            setOther(false);
          }
          break;
          case "Mobile Development":
            setMobile(!Mobile);
            if (Mobile==false){
        setAI_and_Machine_Learning(false);

              setFrontend(false);
              setBackend(false);
              setDataScience(false);
              setSecurity(false);
              setDesigner(false);
              setOther(false);
            }
            break;
          case "Other":
            setOther(!Other);
            if (Other==false){
        setAI_and_Machine_Learning(false);

              setFrontend(false);
              setBackend(false);
              setDataScience(false);
              setSecurity(false);
              setMobile(false);
              setDesigner(false);
            }
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
