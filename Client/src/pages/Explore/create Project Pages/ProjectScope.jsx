import React,{useState,useEffect} from 'react'
import style from "./style/CreatProject.module.css"
import NavBar from '../../../component/NavBar'
import { Input,Button,Tag} from 'antd';
import { InputNumber } from 'antd';
import { Select } from 'antd';
import { useLocation } from 'react-router-dom';
const { TextArea } = Input;
import { Steps } from 'antd';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';
import API_URL from '../../../component/API_URL';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
const ProjectScope = () => {
  const description = 'This is a description.';
  const Navigate= useNavigate();
  const location  = useLocation();
  const receivedData  = location.state?.data;
  const [tags, setTags] = useState([]);
  const [teamSize, setTeamSize] = useState();
  const [Duration,setDuration]=useState();
  const [loading,setLoading]=useState(false);
  const [storedAccessToken, setStoredAccessToken] = useState('');
  
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setStoredAccessToken(accessToken);
      console.log(accessToken);
    }
  }, []);

  const SaveAndContinue = async ()=>{
    receivedData.Required_Skills=tags;
    receivedData.Team_Size=teamSize;
    receivedData.project_Duration=Duration;

    console.log(receivedData);
    
    setLoading(true);

    try{
      const response = await fetch(`${API_URL}/api/v4/projects-posts`,{
        method: "POST",
        headers : new Headers( {  
          'content-type' : 'application/json',
          'Authorization':`Bearer ${storedAccessToken}`,
          'accept': 'text/plain',

         } ),
        body: JSON.stringify({
          title : receivedData.project_title,
          summary: receivedData.project_Summary,
          scenario: receivedData.project_About,
          learningGoals: receivedData.skills_Learn,
          teamAndRoles: receivedData.team_Roles,
          expectedTeamSize: receivedData.Team_Size,
          expectedDuration: receivedData.project_Duration,
          requiredSkills:  receivedData.Required_Skills,
          categories: receivedData.project_Category,
        }),
      })
     
      const statusCode = response.status;
      Navigate("/dashboard")
      setLoading(true);
      }catch (error) { 
     console.log(error)
  

      }
    
    
  }
   
  

   const handleBackClick =()=>{
    Navigate("/project-details");
      }
  
   const [inputValue, setInputValue] = useState('');
   const handleInputChange = (event) => {
    if (tags.length <= 7) {
    setTags([...tags, inputValue]);
       setInputValue(''); 
      } 
      };

   

   const handleInputKeyDown = (event) => {
     if (event.key === 'Enter' && (tags.length <= 8) ) {
       setTags([...tags, inputValue]);
       setInputValue('');  // Clear input after adding tag
      }
    };

   const handleChange = (event) => {
       setInputValue(event.target.value); //Get The Search Bar Input Change
    };

  const handleChangeDuration=(value)=>{
  
    setDuration(value)
  }

   const handleTagDelete = (tagToDelete) => {
    
    const newtagarray=tags.filter((tag) => tag !== tagToDelete)//Delete the Clicked Tag
    setTags(newtagarray);
  
    };
  
    const handleClearTagsClick =()=>{
    setTags([]);//Clear the Tag
  
   }

  //the select time and the select duration
  const handleTeamSizechange = (value) => { //the select of team size onchange input value
    setTeamSize(value) 
   };

  const options = [ //the options of the duration 
    {
      label: '1 Week',
      value: '1 Week',
    },
    {
      label: '2-3 Weeks',
      value: '2-3 Weeks',
    },
    {
      label: '1 Month',
      value: '1 Month',
    },
    {
      label: '2-3 Month',
      value: '2-3 Month',
    },
    {
      label: '+3 Months',
      value: '+3 Months',
    },

  ];
  const labelRender = (props) => {
    const { label, value } = props;
    if (label) {
      return value;
    }
    return <span>Select a duration</span>;
  };
 
  return (
    <>
    {loading && ( 
  <Box sx={{ width: '100%' }}>
  <LinearProgress />
  </Box>  

)}
    <div className={style.hero}>
    <NavBar/>
   <div className={style.ProjectDetails}>
       <section className={style.Steps}>
        <h1 className={style.titlePublish}>Publish A New Project</h1>
        <Steps
          direction="vertical"
          current={2}
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

       <section className={style.ProjectDetailsForm}>     
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
         <p className={style.projectDetailsText}>Project Details</p>
         <div className={style.textFild}>
            <p className={style.questions}><span className={style.star}>* </span> Required Skills</p>
            <Input.Search
              placeholder="Enter a tag"
              onSearch={handleInputChange} // No longer prevents default behavior
              onKeyDown={handleInputKeyDown}
              onChange={handleChange}
              value={inputValue}
              size="large" 
            />

            <p className={style.passengerAlert}>8 skills maximum. Use letters and numbers only.</p>
          </div>
          <div className={style.textFild}>
            <p className={style.SkillsListText}>Skills list
              <Button type="link" 
                style={{
                  display:"flex",
                  alignItems:"center",
                  color:"#6738DD",
                  padding:"6.4px 15px",
                  fontSize:"0.875rem",
                }}
                onClick={handleClearTagsClick}
              >Clear all
              </Button> 
            </p>
            <div className={style.skillsTag}>
                {tags.map((tag) => (
                <Tag key={tag} 
                  closable 
                  onClose={() => handleTagDelete(tag)}
                  style={{
                    display: 'flex',
                    padding: '0.375rem 0.75rem',
                    alignItems: 'center',
                    gap: '0.1875rem',
                    borderRadius: '0.375rem',
                    border: '1px solid var(--Primary-5, #7C50E9)',
                    background: 'var(--Primary-1, #F8F5FF)',
                    width: 'fit-content'
                  }}>
                  {tag}
                </Tag> 
               ))}
              </div>

          </div>
          <div className={style.slectionField}>
               <div className={style.teamSizeSelection}>
               <p className={style.questions}><span className={style.star}>* </span> Team size</p>
                <InputNumber size="large" min={3} max={24} defaultValue={3} onChange={handleTeamSizechange} changeOnWheel />
                <p className={style.passengerAlert}>Minimum (3) and maximum (24)</p>
               </div>
               <div className={style.teamSizeSelection}>
               <p className={style.questions}><span className={style.star}>* </span> How long will this project take?</p>
               <Select
                  labelRender={labelRender}
                  size='large'
                  defaultValue="1"
                  style={{
                  }}
                  options={options}
                  onChange={handleChangeDuration}

                />
            
               </div>


          </div>
         <div className={style.buttonsSave}>
          <Button 
            type="link" 
            style={{
              display:"flex",
              alignItems:"center",
              color:"#6738DD",
              padding:"6.4px 15px",
              fontSize:"16px",
              }}
            onClick={handleBackClick}
          >Back
          </Button>
           <Button type="primary"
                  style={{
                    display:"flex",
                    alignItems:"center",
                    padding:"6.4px 15px",
                    fontSize:"16px",
                    background:"#6738DD",
                  }}
                  onClick={SaveAndContinue}
                >Save & Continue
             </Button>
          </div>
       </section>
   </div>
   </div>
   </>
  )
}
export default ProjectScope