import IconButton from '@mui/material/IconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'

const Dashboard = (props) => {
  const { id } = useParams()

  const [user, setUser] = useState()
  const [month, setMonth] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8001/api/user/${id}`, { withCredentials: true })
      .then(res => {
        setUser(res.data)
        props.setLogged(true)
      })
      .catch(err => console.log(err))
  }, [])

  const updateUser = () => {
    axios.get(`http://localhost:8001/api/user/${id}`, { withCredentials: true })
      .then(res => {
        setUser(res.data)
        console.log(res.data)
        props.setLogged(true)
      })
      .catch(err => console.log(err))
  }

  const createPage = (e) => {
    e.preventDefault()
    console.log(user.pages)
    let arr = user.pages
    arr.push({
      month: "Enter Month",
      year: "Year example: 2023",
      budget: 0,
      categories: [],
      transactions: []
    })
    axios.put(`http://localhost:8001/api/user/${id}`, {
      pages: arr
    }
      , { withCredentials: true })
      .then(res => {
        updateUser()
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <NavBar theme={props.theme} setTheme={props.setTheme} />
      {user ?
        <>
          <IconButton onClick={createPage}><ControlPointIcon /></IconButton>
          {
            user.pages ?
              <Box sx={{ maxWidth: 300 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Month</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={month}
                    label="Age"
                    onChange={e => setMonth(e.target.value)}
                  >
                    {
                      user.pages.map((page, i) =>
                        <MenuItem key={i} value={page.month}>{page.month} | {page.year}</MenuItem>
                      )
                    }
                  </Select>
                </FormControl>
              </Box> : ""
          }
          <p>{user.email}</p>
          <p>{user.phone ? user.phone : ""}</p>
          <p>{month}</p>
        </> : ""}
    </>
  )
}

export default Dashboard