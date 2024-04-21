import React,{useState} from 'react'
import styl from "./style/home.module.css"
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
import Explore_Page from '../Explore/Explore.jsx'
const home = () => {
 /* the navigation button change */
  const [Dashboard,setDashboard]=useState(false);
  const [Explore,setExplore]=useState(true);
  const [Mentorship,setMentorship]=useState(false);
  const [About,setAbout]=useState(false);
   const dachboardOn=()=>{
    setDashboard(!Dashboard)
    setExplore(false)
    setMentorship(false)
    setAbout(false)
   }
   const exploreOn=()=>{
    setExplore(!Explore)
    setDashboard(false)
    setMentorship(false)
    setAbout(false)
   }
   const MentorshipOn=()=>{
    setMentorship(!Mentorship)
    setExplore(false)
    setDashboard(false)
    setAbout(false)
   }
   const aboutUsOn=()=>{
    setAbout(!About)
    setMentorship(false)
    setExplore(false)
    setDashboard(false)
   }


  





  return (
    <div className={styl.hero}>
      <Navbar DashboardClicked={dachboardOn} ExploreClicked={exploreOn} MentorshipClicked={MentorshipOn} AboutClicked={aboutUsOn} Dashboard={Dashboard} Explore={Explore} Mentorship={Mentorship} About={About}/>
      <Explore_Page display={Explore}/>
            
        {/*<PostDetail userName={"Amine Mazari"} pics={pics} careerName={"Careeer name"} title={"Banking System WebApp"} description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis  Sed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiamSed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis  Sed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis  Sed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiamSed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis  Sed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus "} tags={["APIs","ALSDS","HTTPS Requests","Django","Python","CSS","HTML","JS"]} team={5} duration={2} categorie={"Web Dev"} ></PostDetail>*/} 
    </div>
  )
}

export default home
