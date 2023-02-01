import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'

const Dashboard = (props) => {
  const { id } = useParams()

  const [user, setUser] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8001/api/user/${id}`, { withCredentials: true })
      .then(res => {
        setUser(res.data)
        props.setLogged(true)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <NavBar theme={props.theme} setTheme={props.setTheme} />
      <p>{user ? 
      <>
      <p>{user.email}</p>
        <p>{user.phone}</p>
      </> : ""}</p>
    </>
  )
}

export default Dashboard