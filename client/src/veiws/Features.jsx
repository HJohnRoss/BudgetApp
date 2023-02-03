import React from 'react';
import NavBar from '../components/NavBar';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import feat_1 from '../images/feat-1.png';
import feat_2 from '../images/feat-2.png';
import feat_3 from '../images/feat-3.png';
import feat_4 from '../images/feat-4.png';

const Features = (props) => {

  const navigate = useNavigate()

  return (

    <div>

      <NavBar theme={props.theme} setTheme={props.setTheme} />

      <div id="header-open">
        <div className="d-flex container">
          <div id="header-text">
            <h3>Never miss a payment. Use our bills and subscription tracking tool</h3>
            <p>Know what you're paying for and when. Define bills' deadlines and get notifications
              from our app - never miss a single due date to avoid issues. No more manual work.
              Everything you need to reach financial wellness is wrapped out in our monthly bill organizer.
            </p>
            <button class="button" onClick={() => navigate("/register")}>Sign Up For BudgetGuard</button>
          </div>
          <img src={feat_1} alt={"feat_1"} />
        </div>
      </div>

      <div id="header-2" className="d-flex container justify-content-between">
        <img src={feat_2} alt={"feat_2"} />
        <div id="feats-text">
          <h3>All your bills in one place</h3>
          <p>Manage it all - from credit card to utilities and even your offline payments. No need
            to search for the bills separately in different places. Get them all in your bills organizer.
          </p>
        </div>
      </div>

      <div id="header-3" className="d-flex container justify-content-between">
        <div id="feats-text">
          <h3>Bill Payment Tracker</h3>
          <p>Budget smarter by knowing how much your bills are. Let us find any subscriptions
            you forgot about, so you're always in charge.
          </p>
        </div>
        <img src={feat_3} alt={"feat_3"} />
      </div>

      <div id="header-4" className="d-flex container justify-content-between">
        <img src={feat_4} alt={"feat_4"} />
        <div id="feats-text">
          <h3>Keep your budget up & running</h3>
          <p>Get a detailed picture of your spending with the BudgetGuard calendar view. Personalize
            your next month's budget based on historical data. Analyze recurring expenses to know
            how much and why you spend. Then, plan your bills for the upcoming month with our calendar
            tracker. Comparing your costs and making adjustments with our tool is simple.
          </p>
          <p>
            Become a successful budgeter with BudgetGuard. From tracking tools and insights to bill
            management and subscription cancellation - all in one app.
          </p>
        </div>
      </div>

      <div id="feats-out" className="container text-center">
        <div id="feats-out-text">
          <h3>Sign up for BudgetGuard today</h3>
          <p>Start reaching your financial goals with powerful tools such as bill tracker,
            subscription cancellation, and much more. Experience a fresh way in bill
            management operations.
          </p>
        </div>
        <button class="button" onClick={() => navigate("/register")}>Sign Up For Free</button>
      </div>


    </div>

  )

}

export default Features