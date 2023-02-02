import React from 'react'
import NavBar from '../components/NavBar'
import main_banner from '../images/budget-banner.png';
import balances from '../images/Balances.png';
import bills from '../images/Bills.png';
import budget from '../images/Budget.png';
import cardleft from '../images/card.lhand.png';
import cardright from '../images/card.rhand.png';
import item_1 from '../images/item1.png';
import item_2 from '../images/item2.png';
import item_3 from '../images/item3.png';


const HomePage = (props) => {
  return(
    <>
      <NavBar theme={props.theme} setTheme={props.setTheme}/>

      <h1 className='text-center'>Budget Guard</h1>

    {/* Main Landing Banner */}
      <img src={main_banner} alt={"main_banner"} />

    {/* Second Banner Promotion */}
      <div>
        <div>
          <img src={cardleft} alt={"cardleft"} />
          <div>
            <h2>Introducing Joint Budgetting Plans</h2>
            <p>Get in sync with your partner.</p>
          </div>
            <img src={cardright} alt={"cardright"} />
        </div>
      </div>

    {/* Third Banner Details Space */}
      <div>
        <div>
          <img src={item_1} alt={"item_1"} />
          <img src={item_2} alt={"item_2"} />
          <img src={item_3} alt={"item_3"} />
        </div>
        <div>
          <h2>Take Full Control Of Your Finances</h2>
          <p>Strike the perfect balance</p>
        </div>
        <div>
          <img src={balances} alt={"balances"} />
          <img src={bills} alt={"bills"} />
          <img src={budget} alt={"budget"} />
        </div>
      </div>

    {/* Fourth Banner Space Outro */}
      <div>
        <p>Budget Guard's Mission</p>
        <p>No one cares about your finances like you do. Take charge today.</p>
      </div>
    </>
  )
}

export default HomePage

