import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/Drawer.module.css';
import axios from 'axios';
import API_KEY from '../config/config.js';
import ResultsArea from './ResultsArea.js';

export default function AutoSearch() {
  const [curSearch, setCurSearch] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [toggleSelect, setToggleSelect] = useState(false);

  const handleAutoSearch = () => {
    axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchInput}&page_size=6`)
      .then(res => {
        const results = res.data.results;
        for (let obj of results) {
          obj.selected = false;
        }
        console.log(results);
        setCurSearch(results);
      })
      .catch(err => console.log('failed to fetch data', err))
  }

  const handleSelect = (id) => {
    const items = curSearch.slice();
    for (let obj of items) {
      if (obj.selected === true) {
        obj.selected = false;
      }
      if (obj.id === id) {
        obj.selected = true;
      }
    }
    setCurSearch(items);
    console.log(items);
    setToggleSelect(true);
  }

  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Game Title" variant="outlined" onChange={(e) => setSearchInput(e.target.value)} />
      <Button onClick={handleAutoSearch} className={styles.autoSearchButton}>Search</Button>
      <ResultsArea handleSelect={handleSelect} curSearch={curSearch}/>
      <div style={{display: toggleSelect ? 'flex' : 'none'}} className={styles.selectButtonContainer}>
        <Button className={styles.selectButton}>Select Game</Button>
      </div>
    </Box>
  );
}