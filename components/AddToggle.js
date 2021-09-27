import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function AddToggle({alignment, handleChange}) {

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value={true}>Auto Add</ToggleButton>
      <ToggleButton value={false}>Manual Add</ToggleButton>
    </ToggleButtonGroup>
  );
}