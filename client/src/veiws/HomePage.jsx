import React from 'react'
import NavBar from '../components/NavBar'
import main_banner from '../images/budget-banner2.png';
import balances from '../images/Balances.png';
import bills from '../images/Bills.png';
import budget from '../images/Budget.png';
import cardleft from '../images/card.lhand.png';
import cardright from '../images/card.rhand.png';
import car1 from '../images/car1.png';
import car2 from '../images/car2.png';
import car3 from '../images/car3.png';
import item_1 from '../images/item1.png';
import item_2 from '../images/item2.png';
import item_3 from '../images/item3.png';
import Card from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Modal';

const HomePage = (props) => {
  return (
    <div>
      <NavBar theme={props.theme} setTheme={props.setTheme} />

      <h1 className='text-center'>Budget Guard</h1>

      {/* Main Landing Banner */}
      <img src={main_banner} alt={"main_banner"} className="img-fluid" />

      {/* Second Banner Promotion */}
      <div className="mt-5">
        <div className="d-flex justify-content-between">
          <img src={cardleft} alt={"cardleft"} className="img-fluid" />
          <div className="text-center">
            <h2>Introducing Joint Budgetting Plans</h2>
            <p>Get in sync with your partner.</p>
          </div>
          <img src={cardright} alt={"cardright"} className="img-fluid" />
        </div>
      </div>

      {/* Third Banner Carasoul */}
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={car1} className="d-block w-100" alt={car1} />
          </div>
          <div class="carousel-item">
            <img src={car2} className="d-block w-100" alt={car2} />
          </div>
          <div class="carousel-item">
            <img src={car3} className="d-block w-100" alt={car3} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* SAMPLE ITEMS */}
      <div>
        <div id="icons-1">
          <img src={item_1} alt={"item_1"} />
          <img src={item_2} alt={"item_2"} />
          <img src={item_3} alt={"item_3"} />
        </div>
        <div className="text-center">
          <h2>Take Full Control Of Your Finances</h2>
          <p>Strike the perfect balance</p>
        </div>
        <div className="d-flex justify-content-evenly">
          <img src={balances} alt={"balances"} className="w-25 h-25" />
          <img src={bills} alt={"bills"} className="w-25 h-25" />
          <img src={budget} alt={"budget"} className="w-25 h-25" />
        </div>
      </div>

      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={car1} className="d-block w-100" alt={car1} />
          </div>
          <div class="carousel-item">
            <img src={car2} className="d-block w-100" alt={car2} />
          </div>
          <div class="carousel-item">
            <img src={car3} className="d-block w-100" alt={car3} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* Fourth Banner Space Outro */}
      <div className="text-center">
        <p>Budget Guard's Mission</p>
        <p>No one cares about your finances like you do. Take charge today.</p>
      </div>
    </div>
  )
}

export default HomePage

