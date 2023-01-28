import React from 'react'
import NavBar from '../components/NavBar'


const HomePage = (props) => {
  return(
    <>
      <NavBar theme={props.theme} setTheme={props.setTheme}/>

      <h1 className='text-center'>Budget App</h1>
    </>
  )
}

export default HomePage