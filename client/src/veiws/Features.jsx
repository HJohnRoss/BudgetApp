import React from 'react';
import NavBar from '../components/NavBar';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import feat_1 from '../images/feat-1.png';

const Features = (props) => {

  return (

    <div>
      <NavBar theme={props.theme} setTheme={props.setTheme} />
      <div>
        <div>
          <h3>Never miss a payment. Use our bills and subscription tracking tool</h3>
          <p>Know what you're paying for and when. Define bills' deadlines and get notifications
            from our app - never miss a single due date to avoid issues. No more manual work.
            Everything you need to reach financial wellness is wrapped out in our monthly bill organizer.
          </p>
        </div>
        <img src={feat_1} alt={"feat_1"} />
      </div>

      <div>

      </div>



    </div>

  )

}

export default Features