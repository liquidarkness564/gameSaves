import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../styles/Drawer.module.css';

export default function AutoSearch() {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Game Title" variant="outlined" />
      <Button className={styles.autoSearchButton}>Search</Button>
    </Box>
  );
}