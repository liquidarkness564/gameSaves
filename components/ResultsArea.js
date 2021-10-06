import React from 'react';
import MiniCard from './MiniCard.js';
import styles from '../styles/Drawer.module.css'

export default function ResultsArea({curSearch}) {
  return (
    <div className={styles.resultsAreaContainer}>
      {
        curSearch.map(card => <MiniCard key={card.id} card={card}/>)
      }
    </div>
  )
}