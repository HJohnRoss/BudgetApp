import React from 'react'
import NavBar from '../components/NavBar'
import logo from '../images/budget-banner.png';


const HomePage = (props) => {
  return(
    <>
      <NavBar theme={props.theme} setTheme={props.setTheme}/>

      <h1 className='text-center'>Budget App</h1>
      <img src={logo} alt={"logo"} />
    </>
  )
}

export default HomePage

