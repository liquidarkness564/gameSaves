import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/Search.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Search() {
  return (
    <div>
      <div className={styles.searchBar}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-search"
            label="Search Collection"
            type="search"
            variant="filled"
          />
        </Box>
      </div>
    </div>
  )
}