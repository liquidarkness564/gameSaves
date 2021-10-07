import React from 'react';
import MiniCard from './MiniCard.js';
import styles from '../styles/Drawer.module.css'

export default function ResultsArea({curSearch, handleSelect}) {
  return (
    <div className={styles.resultsAreaContainer}>
      {
        curSearch.map(card => <MiniCard handleSelect={handleSelect} key={card.id} card={card}/>)
      }
    </div>
  )
}