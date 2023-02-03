import React from 'react'
import NavBar from '../components/NavBar'

const About = (props) => {


  return (
    <div>
      <NavBar theme={props.theme} setTheme={props.setTheme} />
      <label>Name:</label>
      <input type="text" />
    </div>
  )

}

export default About