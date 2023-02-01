import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

const Dashboard = (props) => {
  const [user, setUser] = useState()
  useEffect(() => {
    axios.get(`http://localhost:8000/api/users`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }, [])
  return(
    <>
      <NavBar theme={props.theme} setTheme={props.setTheme}/>
      <p></p>
    </>
  )
}

export default Dashboard