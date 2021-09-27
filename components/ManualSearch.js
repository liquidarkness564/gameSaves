import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ManualSearch() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Game Title" variant="outlined" />
      <TextField id="outlined-basic" label="Genre" variant="outlined" />
      <TextField id="outlined-basic" label="Platforms" variant="outlined" />
      <TextField id="outlined-basic" label="Market Cost" variant="outlined" />
    </Box>
  );
}