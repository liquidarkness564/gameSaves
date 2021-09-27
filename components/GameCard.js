import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../styles/GameCard.module.css';

export default function MediaCard() {
  return (
      <Card className={styles.cardContainer}>
        <CardMedia
          component="img"
          height="43%"
          width='100%'
          image="https://cdn.pixabay.com/photo/2021/05/06/14/51/gamepad-6233583_960_720.png"
          alt="green iguana"
        />
        <CardContent className={styles.contentContainer}>
          <Typography gutterBottom variant="h5" component="div">
            Subnautica
          </Typography>
          <Typography variant="body2" color="#C6791E">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
  )
}