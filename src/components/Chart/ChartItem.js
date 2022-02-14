import React from 'react';

import styles from './ChartItem.module.css';

const ChartItem = (props) => {

  let barFillHeight = '0%'
  if(props.maxValue > 0) {
      barFillHeight = Math.round((props.value / props.maxValue) *100) + '%'
  }

  return (
    <li className={styles['chart-item']}>
      <span>{props.label}</span>
      <div className={styles.outer}>
        <div className={styles.inner} style={{height: barFillHeight}}></div>
      </div>
    </li>
  )
}

export default ChartItem