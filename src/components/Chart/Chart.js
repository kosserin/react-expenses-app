import React from 'react';

import styles from './Chart.module.css'
import ChartForm from './ChartForm';
import ChartItem from './ChartItem';

const Chart = (props) => {

    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    for(const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth() // starting at 0 => January is 0
        chartDataPoints[expenseMonth].value += expense.price;
    }

    const valueArray = chartDataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...valueArray) //use spread & rest operator so instead of array you get individual numbers

  return (
    <div className={styles.chart}>
    <ChartForm onFilterChange={props.onFilterChange} />
    <ul>{chartDataPoints.map(dataPoint => <ChartItem key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />)}</ul>
    </div>
  )
}

export default Chart