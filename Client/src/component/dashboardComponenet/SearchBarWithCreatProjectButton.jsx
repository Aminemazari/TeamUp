import React from 'react'
import style from "../style.module.css"
import { Button } from "antd"

import search from "../../assets/Icon.svg"
const SearchBarWithCreatProjectButton = ({value, onchange, onClear,onCreate}) => {
  return (
    <div className={style.searchBar}>
    <section className={style.SearchInput}>
  <img src={search}></img>
  <input className={style.search_Input}         
    type="text" 
    value={value} 
    onChange={onchange} 
    placeholder={"Placeholder text"} 
    ></input>

  <button className={style.clearButton} onClick={onClear}>clear</button>
     </section>
     <Button type="primary" size='large'
     style={{
        background:"#6738DD",
        padding:"6.4px 15px"
     }}
      onClick={onCreate}>Creat project</Button>
</div>
  )
}

export default SearchBarWithCreatProjectButton
