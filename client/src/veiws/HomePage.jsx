import React from 'react'
import NavBar from '../components/NavBar'
import logo from '../images/budget-banner.png';
import logo2 from '../images/Balances.png';
import logo3 from '../images/Bills.png';
import logo4 from '../images/Budget.png';


const HomePage = (props) => {
  return(
    <>
      <NavBar theme={props.theme} setTheme={props.setTheme}/>

      <h1 className='text-center'>Budget Guard</h1>
      <img src={logo} alt={"logo"} />
      <div>
      </div>
      <div>
        <img src={logo2} alt={"logo2"} />
        <img src={logo3} alt={"logo3"} />
        <img src={logo4} alt={"logo4"} />
      </div>
    </>
  )
}

export default HomePage

