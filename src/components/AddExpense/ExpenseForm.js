import React, {useState} from 'react';

import styles from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("1");
    const [enteredDate, setEnteredDate] = useState("");

    const formSubmitHandler = e => {
        e.preventDefault();
        props.onAddExpense({
            id: 'e4',
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        })

        setEnteredTitle("")
        setEnteredPrice("")
        setEnteredDate("")
    }

    const titleChangeHandler = e => {
        setEnteredTitle(e.target.value)
    }

    const priceChangeHandler = e => {
        setEnteredPrice(e.target.value)
    }

    const dateChangeHandler = e => {
        setEnteredDate(e.target.value)
    }

  return (
    <form onSubmit={formSubmitHandler} className={styles['expense-form']}>
    <div className={styles['form-group']}>
        <label>Title</label>
        <input onChange={titleChangeHandler} type="text" value={enteredTitle} required />
    </div>
    <div className={styles['form-group']}>
        <label>Price</label>
        <input onChange={priceChangeHandler} type="number" min="1" max="9999" step=".01" value={enteredPrice} required />
    </div>
    <div className={styles['form-group']}>
        <label>Date</label>
        <input onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} required />
    </div>
    <div className={styles['form-group']}>
        <button type='submit'>Submit</button>
    </div>
    </form>
  )
}

export default ExpenseForm