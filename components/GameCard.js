import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../styles/GameCard.module.css';

export default function MediaCard({card}) {
  return (
      <Card className={styles.cardContainer}>
        <CardMedia
          component="img"
          height="43%"
          width='100%'
          image={card.background_image}
          alt="green iguana"
        />
        <CardContent className={styles.contentContainer}>
          <Typography gutterBottom variant="h5" component="div">
            {card.name}
          </Typography>
          <Typography variant="body2" color="#C6791E">
            Genre: {card.genres[0].name}
            <br/>
            Released: {card.released}
          </Typography>
        </CardContent>
      </Card>
  )
}