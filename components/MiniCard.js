import React from 'react';
import styles from '../styles/Drawer.module.css';

export default function MiniCard({card, handleSelect}) {
  return (
    <div style={{border: card.selected ? 'solid 0.5rem rgb(0, 189, 0)' : null}} onClick={() => handleSelect(card.id)} className={styles.miniCardContainer}>
      <img src={card.background_image}></img>
      <h3>{card.name.toUpperCase()}</h3>
      <h3>Released {card.released}</h3>
    </div>
  )
}