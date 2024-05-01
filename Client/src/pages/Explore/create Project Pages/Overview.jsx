import React,{useState} from 'react'
import NavBar from '../../../component/NavBar'
import style from "./style/CreatProject.module.css"
import icon from "../../../assets/IconDone.svg"
import { Button, Input } from 'antd';
const { TextArea } = Input;
import { Steps } from 'antd';
import { Breadcrumb } from 'antd';
import { Flex, Tag} from 'antd';
import { useNavigate } from 'react-router-dom';
const tagsData = ['Web Development', 'Design', 'Mobile Development', 'Cyber security'];
const Overview = () => {
const Navigate= useNavigate();
  const description = 'This is a description.';
  //GET THE DATA OF THE TAGS SELECTION //
  const [selectedTags, setSelectedTags] = useState(['Movies']);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };
 
 const SaveAndContinue =()=>{
  Navigate("/project-details")
 }
 const handleBackClick =()=>{
  Navigate("/");
 }
  return (
    <div className={style.hero}>
     <NavBar/>
    <div className={style.Overview}>
        <section className={style.Steps}>
        <h1 className={style.titlePublish}>Publish A New Project</h1>
        <Steps
         direction="vertical"
         current={0}
         items={[
          {
        title: 'Overview',
        description,
        },
        {
          title: 'Project Details',
          description,
        },
        {
          title: 'Project Scope',
          description,
        },
    ]}
  />        
        </section>

        <section className={style.OverviewForm}>     
        <Breadcrumb
                items={[
            {
              title: <a href="/home">Home</a>,
            },
            {
              title: "New project",
            },
            {
              title: "Overview",
            },
      
          ]}
          />
          <p className={style.projectDetailsText}>Let’s create a new project</p>
          <div className={style.textFild}>
             <p className={style.questions}><span className={style.star}>* </span> Project Title</p>
             <Input placeholder="Enter a clear and concise title" size="large"/>
                  <p className={style.passengerAlert}>8 words maximum. Use letters and numbers only.</p>
          </div>
          <div className={style.textFild}>
             <p className={style.questions}><span className={style.star}>* </span> What Skills Will Mentees Learn?</p>
             <Flex gap={4} wrap="wrap" align="center">
      {tagsData.map((tag) => (
        <Tag.CheckableTag
          key={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}
          style={{
            display:"flex",
            gap:"2px",
            alignItems:"center",
            backgroundColor: selectedTags.includes(tag) ? 'var(--Primary-1, #F8F5FF)' : '#fff', // Custom background color
            color: selectedTags.includes(tag) ? '#var(--Primary-6, #6738DD)' : '#333', 
            fontSize:"14px",
            border: selectedTags.includes(tag)  ? "1px solid var(--Primary-5, #7C50E9)":"none",
            borderRadius:selectedTags.includes(tag)  ? 'var(--Interactive-border-radius---radius-i-sm, 12px)':"var(--Interactive-border-radius---radius-i-sm, 12px)",
            padding: '5px 10px',
            cursor: 'pointer',
            transition:selectedTags.includes(tag)  ? 'all ease 200ms': 'all ease 200ms',
          }}
        >
                  {selectedTags.includes(tag) && ( 
            <img src={icon} style={{ alignItems:"center"}} />
          )}
          {tag}
        </Tag.CheckableTag>
      ))}
    </Flex>
                  <p className={style.passengerAlert}>Please input passenger's name or delete this field.</p>
          </div>
          {/*    className={`${style.customTag} ${selectedTags.includes(tag) ? style.clicked : ''}`}*/}
          <div className={style.textFild}>
             <p className={style.questions}><span className={style.star}>* </span> Project summary</p>
             <TextArea rows={4}
               placeholder="Briefly describe the project (2-3 sentences)."
                  style={{
                    height: 152,
                    resize: 'none',
                  }}
                  />
                  <p className={style.passengerAlert}>Please input passenger's name or delete this field.</p>
          </div>
          <div className={style.buttonsSave}>
          <Button type="link" style={{
               display:"flex",
               alignItems:"center",
               color:"#6738DD",
               padding:"6.4px 15px",
               fontSize:"16px",
              }}
              onClick={handleBackClick}
          >Back</Button>
           <Button type="primary"
            style={{
              display:"flex",
              alignItems:"center",
              padding:"6.4px 15px",
              fontSize:"16px",
              background:"#6738DD",
            }}
            onClick={SaveAndContinue}
           >Save & Continue</Button>
          </div>
            
        </section>

    </div>
    </div>

  )
}

export default Overview