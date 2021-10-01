import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/Drawer.module.css';
import axios from 'axios';
import API_KEY from '../config/config.js';
import ResultsArea from './ResultsArea.js';

export default function AutoSearch() {
  const handleAutoSearch = () => {
    axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=Uncharted&page_size=6`)
      .then(res => console.log(res.data))
      .catch(err => console.log('failed to fetch data', err))
  }

  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Game Title" variant="outlined" />
      <Button onClick={handleAutoSearch} className={styles.autoSearchButton}>Search</Button>
      <ResultsArea />
    </Box>
  );
}