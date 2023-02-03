import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Link } from 'react-router-dom'
import logo from '../images/bg-logo.png'

import SwitchMode from './SwitchMode';


const NavBar = (props) => {

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Features', 'About', 'Login', 'Register'].map((text, index) => (
          <Link
            to={index === 0 ? `/` : `/${text.toLowerCase()}`}
            key={text}
            className="text-decoration-none"
            style={props.theme === 'dark' ? { color: "rgb(233,233,233)" } : { color: "rgb(39,39,39)" }}
          >
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <HomeIcon /> : ""}
                  {index === 1 ? <DisplaySettingsIcon /> : ""}
                  {index === 2 ? <InfoIcon /> : ""}
                  {index === 3 ? <LoginIcon /> : ""}
                  {index === 4 ? <PersonAddAlt1Icon /> : ""}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <div className='d-flex justify-content-between sticky-top align-items-center' style={props.theme === 'light' ? { backgroundColor: "rgb(233,233,233)" } : { backgroundColor: "rgb(39,39,39)" }}>
        <React.Fragment>
          <IconButton onClick={toggleDrawer('left', true)}><MenuIcon /></IconButton>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
        <div style={{ margin: "0 auto" }}>
          <img src={logo} alt="bg-logo" style={{width:100, height:100}} />
        </div>
        <SwitchMode theme={props.theme} setTheme={props.setTheme} />
      </div>
    </>
  )
}

export default NavBar