import React, { useEffect, useState } from 'react'
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
import logolm from '../images/bg-logo-lm.png'
import logodm from '../images/bg-logo-dm.png'
import LogoutIcon from '@mui/icons-material/Logout';
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios';

import SwitchMode from './SwitchMode';


const NavBar = (props) => {
  const [buttons, setButtons] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (props.logged === true) {
      setButtons(['Dashboard', 'Logout'])
    } else {
      setButtons(['Home', 'Features', 'About', 'Login', 'Register'])
    }
  }, [props.logged])

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleLogout = (e) => {
    e.preventDefault()
    axios.get("http://localhost:8001/api/logout", { withCredentials: true })
      .then(res => {
        props.setUser(null)
        props.setLogged(false)
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {
          buttons ?
            buttons.map((text, index) => (
              <Link
                to={
                  index === 0 && buttons.length > 2 ? `/` :
                    index === 0 && buttons.length === 2 ? `/${text.toLowerCase()}/${id}` :
                      index === 1 && buttons.length === 2 ? ``
                        : `/${text.toLowerCase()}`
                }
                key={text}
                className="text-decoration-none"
                style={props.theme === 'dark' ? { color: "rgb(233,233,233)" } : { color: "rgb(39,39,39)" }}
              >

                <ListItem key={text} disablePadding>
                  {
                    index === 1 && buttons.length === 2 ?
                      <ListItemButton onClick={handleLogout}>
                        <ListItemIcon>
                          {<LogoutIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                      :
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
                  }
                </ListItem>
              </Link>
            )) : ""
        }

      </List>
    </Box >
  );
  return (
    <>
      <div className='d-flex sticky-top align-items-center' style={props.theme === 'light' ? { backgroundColor: "rgb(233,233,233)" } : { backgroundColor: "rgb(39,39,39)" }}>
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
          {
            props.theme === "light" ?
              <img src={logolm} alt="bg-logo" style={{ width: 100, height: 100, marginLeft: '70px' }} /> :
              <img src={logodm} alt="bg-logo" style={{ width: 100, height: 100, marginLeft: '70px' }} />
          }
        </div>
        <h1>{props.logged}</h1>
        <SwitchMode theme={props.theme} setTheme={props.setTheme} />
      </div>
    </>
  )
}

export default NavBar