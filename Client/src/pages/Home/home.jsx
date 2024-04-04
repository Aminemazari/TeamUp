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
const home = () => {
  const [selectedFilters, setSelectedFilters] = useState({ category: [], teamSize: [], duration: [] });

  const handleFilterSelection = (filters) => {
      setSelectedFilters(filters);
  };
  console.log(selectedFilters.category);
  return (
    <div className={styl.hero}>
      <Navbar/>
   <FilterSideBar onFilterSelection={handleFilterSelection}/>
        {/*<PostDetail userName={"Amine Mazari"} pics={pics} careerName={"Careeer name"} title={"Banking System WebApp"} description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis  Sed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiamSed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis  Sed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis  Sed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiamSed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis  Sed ut perspiciatis unde omnis iste natus error sitSed ut perspiciatis unde omnis iste natus "} tags={["APIs","ALSDS","HTTPS Requests","Django","Python","CSS","HTML","JS"]} team={5} duration={2} categorie={"Web Dev"} ></PostDetail>*/}
       
    </div>
  )
}

export default home