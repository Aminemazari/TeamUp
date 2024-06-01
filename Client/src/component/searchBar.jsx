import React from 'react'
import style from "./style.module.css"
import search from "../assets/Icon.svg"
import filter from "../assets/Filter_icon.svg"
const searchBar = ({value, onchange, onClear,onFilter }) => {

  return (
    <div className={style.searchBar}>
        <section className={style.SearchInput}>
      <img src={search}></img>
      <input className={style.search_Input}         
        type="text" 
        value={value} 
        onChange={onchange} 
        placeholder={"Search"} 
        ></input>

      <button className={style.clearButton} onClick={onClear}>clear</button>
         </section>
      <button className={style.filterButton} onClick={onFilter}><img src={filter}></img> Filter</button>
    </div>
  )
}

export default searchBar
