import React from 'react'

import NavBar from '../components/NavBar';

const Login = (props) => {
  return (
    <>
      <NavBar theme={props.theme} setTheme={props.setTheme} />
    </>
  )
}

export default Login