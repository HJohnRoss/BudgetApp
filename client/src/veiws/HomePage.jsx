import React from 'react'
import NavBar from '../components/NavBar'
import main_banner from '../images/budget-banner3.png';
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
import out_ban1 from '../images/out-ban1.png';
import out_ban2 from '../images/out-ban2.png';
import out_ban3 from '../images/out-ban3.png';
import Card from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Modal';

const HomePage = (props) => {

  return (
    <div>
      <NavBar theme={props.theme} setTheme={props.setTheme} />

      <h1 className='text-center'>BudgetGuard</h1>

      {/* Main Landing Banner */}
      <div id="main-banner">
        <img src={main_banner} alt={"main_banner"} className="img-fluid" />
      </div>

      {/* Second Banner Promotion */}
      <div id="second-banner" className="mt-4">
        <div className="text-center">
          <h2>Introducing Joint Budgetting Plans</h2>
          <p>Get in sync with your partner.</p>
        </div>
        <div id="second-banner-img" className="d-flex justify-content-between gap-5 mt-5">
          <img src={cardleft} alt={"cardleft"} className="img-fluid mb-5" />
          <div>
          <button class="btn">Get Started</button>
          </div>
          <img src={cardright} alt={"cardright"} className="img-fluid" />
        </div>
      </div>


      {/* Indicator Carasoul */}
      <div id="carouselExampleIndicators" className="carousel slide mt-5 mb-4">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={out_ban1} className="d-block w-100" alt={out_ban1} />
          </div>
          <div className="carousel-item">
            <img src={out_ban2} className="d-block w-100" alt={out_ban2} />
          </div>
          <div className="carousel-item">
            <img src={out_ban3} className="d-block w-100" alt={out_ban3} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Sample Items */}
      <div>
        <div id="icons-1" className="d-flex gap-5 justify-content-center mt-5 mb-4">
          <img src={item_1} alt={"item_1"} />
          <img src={item_2} alt={"item_2"} />
          <img src={item_3} alt={"item_3"} />
        </div>
        <div className="text-center mb-5">
          <h2>Take Full Control Of Your Finances</h2>
          <p>Strike the perfect balance</p>
        </div>
        <div className="d-flex justify-content-evenly">
          <img src={balances} alt={"balances"} className="w-25 h-25" />
          <img src={bills} alt={"bills"} className="w-25 h-25" />
          <img src={budget} alt={"budget"} className="w-25 h-25" />
        </div>
      </div>

      {/* Interval Timed Carousel */}
      <div id="carouselExampleInterval" className="carousel slide mt-5 mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={car1} className="d-block w-100" alt={car1} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={car2} className="d-block w-100" alt={car2} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={car3} className="d-block w-100" alt={car3} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
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

