import React from 'react';
import styles from '../styles/Drawer.module.css';

export default function MiniCard() {
  return (
    <div className={styles.miniCardContainer}>
      <img src='https://cdn.pixabay.com/photo/2021/05/06/14/51/gamepad-6233583_960_720.png'></img>
      <h3>{'Uncharted'.toUpperCase()}</h3>
      <h3>Released 10-01-2021</h3>
    </div>
  )
}