import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import styles from '../styles/Drawer.module.css';
import AutoSearch from './AutoSearch.js';
import ManualSearch from './ManualSearch.js';
import AddToggle from './AddToggle.js';

export default function AddDrawer() {
  const [state, setState] = React.useState({top: false,});

  const [alignment, setAlignment] = React.useState(true);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(alignment);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className={styles.drawerButton}>
      <React.Fragment key={'top'}>
        <Button sx={{border: 'solid 0.1rem #282749',color: '#f8a642', backgroundColor: '#282749'}} onClick={toggleDrawer('top', true)}>Add Game</Button>
        <Drawer
          anchor={'top'}
          open={state['top']}
          onClose={toggleDrawer('top', false)}
        >
          <div className={styles.drawerContainer}>
            <h2>Add a Game</h2>
            <AddToggle alignment={alignment} handleChange={handleChange}/>
            {alignment ? <AutoSearch /> : <ManualSearch />}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}