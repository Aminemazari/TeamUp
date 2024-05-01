import React from 'react'
import NavBar from '../../../component/NavBar'
import style from "./style/CreatProject.module.css"
import { Input } from 'antd';
const { TextArea } = Input;
import { Steps } from 'antd';
import { Breadcrumb } from 'antd';
const Overview = () => {
  const description = 'This is a description.';
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
      
                  <p className={style.passengerAlert}>Please input passenger's name or delete this field.</p>
          </div>
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
          <div>
            
          </div>
            
        </section>

    </div>
    </div>

  )
}

export default Overview
