import React from 'react';
import GameCard from './GameCard.js';
import styles from '../styles/GameLibrary.module.css';

export default function GameLibrary() {
 return (
   <div className={styles.gameLibraryContainer}>
     <GameCard />
   </div>
 )
}