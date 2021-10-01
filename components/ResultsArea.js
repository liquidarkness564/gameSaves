import React from 'react';
import MiniCard from './MiniCard.js';
import styles from '../styles/Drawer.module.css'

export default function ResultsArea() {
  return (
    <div className={styles.resultsAreaContainer}>
      {
        [1, 2, 3, 4, 5, 6].map(card => <MiniCard />)
      }
    </div>
  )
}