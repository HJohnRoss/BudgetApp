import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

const SwitchMode = (props) => {

  const changeTheme = (e) => {
    e.preventDefault()
    props.theme === 'light' ? props.setTheme('dark') : props.setTheme('light')
  }

  return (
    <span className='text-center d-flex align-items-center'>
      {props.theme === 'light' ? "Light Mode" : "Dark Mode"}
      <IconButton onClick={changeTheme}>{props.theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}</IconButton>
    </span>
  )
}

export default SwitchMode