import React from 'react'
import NavBar from '../components/NavBar'
import about_banner from '../images/about-banner.png';
import sm_fb from '../images/sm-fb.png';
import sm_ig from '../images/sm-ig.png';
import sm_ln from '../images/sm-ln.png';
import sm_p from '../images/sm-p.png';
import sm_tumb from '../images/sm-tumb.png';
import sm_tw from '../images/sm-tw.png';

const About = (props) => {


  return (
    <div>

      <NavBar theme={props.theme} setTheme={props.setTheme} />


      <div id="about_banner">
        <img src={about_banner} alt={"about_banner"} />
      </div>

      <div id="about" className="container-sm text-center mt-4">
        <h3>Who We Are</h3>
        <p>We are Budget Guard. A team of friendly and caring builders that have risen
          from the depths of the Coding Dojo. With the mission of helping families, friends,
          and couples outsmarting money together, everyone can conquer their own finances and
          expenditures.  We believe that building better financial tools represent our greatest
          opportunity to liberate families from financial stress.  We contribute to huan progress
          by cultivating trust and transparency, delivering clarity and insight, enriching
          autonomy and wellness.</p>
        <h3>Our Story</h3>
        <p>In 2023, John and Austin started Budget Guard to help friends and families develop better
          financial literacy and habits. After seeing that most friends were using spreadsheets to
          manage their finances, Budget Guard was launched to disentangle the difficulties of people's
          financial troubles with the thought in mind of a friendly, easy-to-use user interface.
        </p>
        <h3>Our Team</h3>
        <p>Our small team consists of passionate entrepreneurs, designers, and builders
          hoping ot make a long-lasting impact on the lives of millions.
        </p>
      </div>

      <div id="about-contact" className="text-center text-white mt-4">
        <h3>Contact Us</h3>
        <p>If you wish to contact us, please fill out the form below and one of our
          team representatives will reach out within 48 hours.
        </p>
        <div>
          <p>
            <label>Name: </label>
            <input type="text" />
          </p>
          <p>
            <label>E-mail: </label>
            <input type="text" />
          </p>
          <p className="me-3">
            <label>Message: </label>
            <textarea type="textarea" rows="4" cols="50" />
          </p>
        </div>
      </div>

      <div id="sm-icons" className="d-flex justify-content-center">
        <div className="d-flex gap-4">
          <img src={sm_fb} alt={sm_fb} />
          <img src={sm_ig} alt={sm_ig} />
          <img src={sm_ln} alt={sm_ln} />
          <img src={sm_tw} alt={sm_tw} />
          <img src={sm_p} alt={sm_p} />
          <img src={sm_tumb} alt={sm_tumb} />
        </div>
      </div>

    </div>
  )

}

export default About