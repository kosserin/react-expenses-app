import React from 'react';

import styles from './ExpenseItem.module.css'

const ExpenseItem = (props) => {
    const day = props.date.toLocaleString('en-US', {day : '2-digit'})
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const year = props.date.getFullYear();

    const price = props.price.toFixed(2)

  return (
    <li id={props.id} className={styles['expense-item']}>
        <div className={styles['title-price']}>
            <h2>{props.title}</h2>
            <h3>${price}</h3>
        </div>
        <div className={styles.date}>
            <span>{month}</span>
            <span>{day}</span>
            <span>{year}</span>
        </div>
    </li>
  )
}

export default ExpenseItem