import React from 'react';

import styles from './ChartForm.module.css'

const ChartForm = (props) => {

  const optionChangeHandler = e => {
    props.onFilterChange(e.target.value)
  }

  return (
    <form className={styles['chart-form']}>
    <div className={styles['form-group']}>
    <label>Filter by:</label>
    <select defaultValue="2021" onChange={optionChangeHandler}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
    </select>
    </div>
    </form>
  )
}

export default ChartForm