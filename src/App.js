import React, { useState } from 'react'
import ExpenseForm from './components/AddExpense/ExpenseForm';
import Chart from './components/Chart/Chart';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  const [filteredYear, setFilteredYear] = useState('2021');
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: "Gym",
      price: 19.99,
      date: new Date(2021, 7, 17)
    },
    {
      id: 'e2',
      title: "Sweatshirt",
      price: 29.99,
      date: new Date(2022, 1, 17)
    },
    {
      id: 'e3',
      title: "Restaurant",
      price: 36.00,
      date: new Date(2021, 2, 3)
    },
    {
      id: 'e4',
      title: "Books",
      price: 44.99,
      date: new Date(2022, 5, 19)
    },
    {
      id: 'e5',
      title: "New TV",
      price: 299.99,
      date: new Date(2019, 8, 11)
    },
    {
      id: 'e6',
      title: "New Jeans",
      price: 24.99,
      date: new Date(2020, 9, 14)
    },
    {
      id: 'e7',
      title: "Holiday",
      price: 312.35,
      date: new Date(2022, 2, 5)
    },
    {
      id: 'e8',
      title: "Gym",
      price: 19.99,
      date: new Date(2019, 6, 6)
    },
    {
      id: 'e9',
      title: "Jacket",
      price: 66.00,
      date: new Date(2021, 1, 1)
    },
    {
      id: 'e10',
      title: "Dress",
      price: 42.00,
      date: new Date(2022, 3, 24)
    },
    {
      id: 'e11',
      title: "Tennis racket",
      price: 96.00,
      date: new Date(2020, 4, 29)
    },
    {
      id: 'e12',
      title: "Hotel room",
      price: 24.00,
      date: new Date(2022, 7, 17)
    },
    {
      id: 'e13',
      title: "Rent A Car",
      price: 86.00,
      date: new Date(2021, 4, 8)
    },
    {
      id: 'e14',
      title: "Caffe",
      price: 6.00,
      date: new Date(2019, 11, 7)
    },
  ])

  const addExpenseHandler = (newExpense) => {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses]
    })
  }

  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter(item => item.date.getFullYear().toString() === filteredYear )

  return (
    <React.Fragment>
    <ExpenseForm onAddExpense={addExpenseHandler} />
    <Chart expenses={filteredExpenses} onFilterChange={filterChangeHandler} />
      <Expenses expenses={filteredExpenses} />
    </React.Fragment>
  );
}

export default App;
