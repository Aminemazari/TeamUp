import React from 'react'
import style from "./style.module.css"
const filterCategoriesButton = ({text,onclick,clicked}) => {
  return (
    <button className={`${style.filterCategoriesButton} ${clicked ? style.filterCategoriesButtonActive : ''}`} onClick={onclick}>{text}</button>

  )
}

export default filterCategoriesButton
