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
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Link } from 'react-router-dom'

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
        {['Features', 'About', 'Contact', 'Login', 'Register'].map((text, index) => (
          <Link to={`/${text.toLowerCase()}`} key={text} className="text-decoration-none" style={props.theme === 'dark' ? { color: "rgb(233,233,233)" } : {color: "rgb(39,39,39)"}}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <DisplaySettingsIcon /> : ""}
                  {index === 1 ? <InfoIcon /> : ""}
                  {index === 2 ? <ContactSupportIcon /> : ""}
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
      <div className='d-flex justify-content-between'>
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
        <SwitchMode theme={props.theme} setTheme={props.setTheme} />
      </div>
    </>
  )
}

export default NavBar