import React from 'react';
import styles from '../styles/Drawer.module.css';

export default function MiniCard({card}) {
  return (
    <div className={styles.miniCardContainer}>
      <img src={card.background_image}></img>
      <h3>{card.name.toUpperCase()}</h3>
      <h3>Released {card.released}</h3>
    </div>
  )
}