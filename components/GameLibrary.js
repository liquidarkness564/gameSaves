import React, { useState, useEffect } from 'react';
import GameCard from './GameCard.js';
import styles from '../styles/GameLibrary.module.css';

export default function GameLibrary() {
  const [collection, setCollection] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])

  return (
   <div className={styles.gameLibraryContainer}>
     {
       collection.map(card => <GameCard />)
     }
   </div>
 )
}