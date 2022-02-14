import React from 'react';
import ExpenseItem from './ExpenseItem';

import styles from './Expenses.module.css';

const Expenses = (props) => {
  return (
    <ul className={styles.expenses}>
    {props.expenses.map((expense, index) => (
        <ExpenseItem key={'expense' + index} id={'expense' + index} title={expense.title} price={expense.price} date={expense.date} />
    ))}
    </ul>
  )
}

export default Expenses