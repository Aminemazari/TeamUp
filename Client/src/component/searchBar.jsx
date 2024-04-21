import React from 'react'
import style from "./style.module.css"
import search from "../assets/Icon.svg"
import filter from "../assets/Filter_icon.svg"
const searchBar = ({value, onchange, onClear,onFilter }) => {

    const handleChange = (e) => {
        onchange(e.target.value);
      };
    
      const handleClear = () => {
        onClear();
      };

  return (
    <div className={style.searchBar}>
        <section className={style.SearchInput}>
      <img src={search}></img>
      <input className={style.search_Input}         
        type="text" 
        value={value} 
        onChange={handleChange} 
        placeholder={"Placeholder text"} 
        ></input>

      <button className={style.clearButton} onClick={handleClear}>clear</button>
         </section>
      <button className={style.filterButton} onClick={onFilter}><img src={filter}></img> Filter</button>
    </div>
  )
}

export default searchBar
