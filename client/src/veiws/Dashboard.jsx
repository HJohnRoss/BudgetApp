import IconButton from '@mui/material/IconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'

import EditPages from '../components/EditPages';
import EditBudget from '../components/EditBudget'
import ShowBudget from '../components/ShowBudget';
import CreateBudget from '../components/PageBudgets/CreateBudget';
import AllBudgets from '../components/PageBudgets/AllBudgets';

const Dashboard = (props) => {

  const { id } = useParams()

  const [user, setUser] = useState()

  const [index, setIndex] = useState(0)
  const [month, setMonth] = useState("January")
  const [year, setYear] = useState(2023)
  const [budget, setBudget] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:8001/api/user/${id}`, { withCredentials: true })
      .then(res => {
        setUser(res.data)
        console.log(res.data)
        props.setLogged(true)
        if(res.data.pages[0]){
          setBudget(res.data.pages[0].budget)
        } else {
          setBudget(0)
        }
      })
      .catch(err => console.log(err))
  }, [])

  const updateUser = () => {
    axios.get(`http://localhost:8001/api/user/${id}`, { withCredentials: true })
      .then(res => {
        setUser(res.data)
        props.setLogged(true)
      })
      .catch(err => console.log(err))
  }

  const createPage = (e) => {
    e.preventDefault()
    console.log(user.pages)
    let arr = user.pages
    arr.push({
      month: "January",
      year: 2023,
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
      {
        user ?
          <div>
            <IconButton onClick={createPage}><ControlPointIcon /></IconButton>
            {
              user.pages.length > 0 ?
                <>
                  <EditPages
                    index={index}
                    setIndex={setIndex}
                    user={user}
                    year={year}
                    setYear={setYear}
                    month={month}
                    setMonth={setMonth}
                    updateUser={updateUser}
                    setBudget={setBudget}
                  // function ^
                  />
                  <hr />
                  <div>
                    <ShowBudget
                      budget={budget}
                      index={index}
                      user={user}
                      year={year}
                      month={month}
                    />
                    <EditBudget
                      user={user}
                      budget={budget}
                      setBudget={setBudget}
                      index={index}
                      updateUser={updateUser}
                    // function ^
                    />
                    <hr />
                  </div>
                  <div>
                    <CreateBudget
                      user={user}
                      index={index}
                      updateUser={updateUser}
                    />
                    <hr />
                    <AllBudgets
                      user={user}
                      index={index}
                      theme={props.theme}
                    />
                  </div>
                </>
                : ""
            }
            <div>



            </div>

          </div> : ""
      }
    </>
  )
}

export default Dashboard