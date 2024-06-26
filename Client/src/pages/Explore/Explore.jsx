import React,{useState,useEffect} from 'react'
import Navbar from "../../component/NavBar"
import CategoriesCard from '../../component/categoriesCard'
import brain from "../../assets/brain.svg"
import computer from "../../assets/computer.svg"
import andriod from "../../assets/android.svg"
import Post from '../../component/post'
import pics from "../../assets/3.svg"
import MentorsCard from '../../component/mentorsCard'
import PostDetail from '../../component/postDetail'
import TagsSelect_form from '../SignUp page/tagsSelect_form'
import FilterSideBar from '../../component/filterSideBar.jsx'
import SearchBar from '../../component/searchBar.jsx'
import style from "./explore.module.css"
import FilterButton from '../../component/filterCategoriesButton.jsx'
import PostSubSection from "./postSubSection.jsx"
import FilterSideBarProjects from '../../component/filterSideBarProjects.jsx'
import MentoresSubSection from './mentoresSubSection.jsx'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import API_URL from '../../component/API_URL.jsx'
const explore = ({Data}) => {
   


    /*FILTER SECTION
   /* filter of the side bar */
  const [selectedFilters, setSelectedFilters] = useState({ category: [], teamSize: [], duration: [] });
    const handleFilterSelection = (filters) => {
        setSelectedFilters(filters);
    };
    /*the end of the side bar collecting the info of the filter*/
    const[filterProject,setProject]=useState(true);
    const[filterMentor,setMentor]=useState(false);
    const[filterPeople,setPeople]=useState(false);
    const handleProjects = ()=>{
        setProject(!filterProject);
        setMentor(false);
        setPeople(false);
    }
    const handleMentor = ()=>{
        setMentor(!filterMentor);
        setProject(false);
        setPeople(false);
    }
    const handlePeople = ()=>{
        setPeople(!filterPeople);
        setProject(false);
        setMentor(false);
    }
   /*END OF THE FILTERING*/



    /*the info of the search bar*/
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
    const handleClear = () => {   /* clear the text of the search*/
        setInputValue('');
      };
    /*end*/

    const [selectedFilterMentor, setSelectedFilterMentor] = useState({ category: [],available:false});
 
  const handleFilterSelectionMentores=(filters)=>{
    setSelectedFilterMentor(filters);
    
}
  return (
    <div className={style.added}>
    <div className={style.hero}>

     <section className={style.Filter_Section}>
        <div className={style.Filter_Section_fixed}>
         <FilterSideBar onFilterSelection={handleFilterSelection} display={filterProject}/>
         <FilterSideBarProjects display={filterMentor} onFilterSelection={handleFilterSelectionMentores}/>
         </div>
     </section>

     <section className={style.countainer}>
        <div className={style.SearchBar}>
            <SearchBar         
            value={inputValue} 
            onchange={handleInputChange} 
            onClear={handleClear}/>
            <div className={style.filterButton}>
                <FilterButton text={"Projects"} clicked={filterProject} onclick={handleProjects}></FilterButton>
                <FilterButton text={"Mentors"} clicked={filterMentor} onclick={handleMentor}></FilterButton>
                <FilterButton text={"People"} clicked={filterPeople} onclick={handlePeople}></FilterButton>
                <p className={style.SortBy}>Sort by :</p>
                <FilterButton text={"Rating"}></FilterButton>

            </div>

        </div>
        <PostSubSection display={filterProject} data={Data}/>
        <MentoresSubSection display={filterMentor}/>
        
     </section>
    </div>
    </div>
  )
}

export default explore
