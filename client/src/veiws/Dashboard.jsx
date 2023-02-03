import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'

import IconButton from '@mui/material/IconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditPages from '../components/EditPages';
import EditBudget from '../components/EditBudget'
import ShowBudget from '../components/ShowBudget';
import CreateBudget from '../components/PageBudgets/CreateBudget';
import AllBudgets from '../components/PageBudgets/AllBudgets';
import AddItem from '../components/PageBudgets/AddItem';
import RecentTransactions from '../components/Transactions/RecentTransactions'
import AllTransactions from '../components/Transactions/AllTransactions'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Dashboard = (props) => {

  const { id } = useParams()

  const [user, setUser] = useState()

  const [index, setIndex] = useState(0)
  const [month, setMonth] = useState("January")
  const [year, setYear] = useState(2023)
  const [budget, setBudget] = useState("")

  const [budgetId, setBudgetId] = useState(null)
  const [showTransactions, setShowTransactions] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:8001/api/user/${id}`, { withCredentials: true })
      .then(res => {
        setUser(res.data)
        props.setLogged(true)
        if (res.data.pages[0]) {
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
            <div className='mb-4 text-center'>
              <IconButton onClick={createPage}><ControlPointIcon /></IconButton>
            </div>
            {
              user.pages.length > 0 ?
                <Grid container spacing={2} className="d-flex justify-content-evenly">
                  <div>

                    <Grid item xs={12}>
                      <Card variant="outlined" color="secondary" className='rounded mb-4' sx={{ minWidth: 1, maxWidth: 500 }}>
                        <CardContent>
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
                            setBudgetId={setBudgetId}
                            setShowTransactions={setShowTransactions}
                          // function ^
                          />
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12}>
                      <Card variant="outlined" className='rounded mb-4' sx={{ minWidth: 1, maxWidth: 500 }}>
                        <CardContent>
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
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Card variant="outlined" className='rounded' sx={{ minWidth: 1, maxWidth: 500 }}>
                        <CardContent>
                          <h5 className='ms-2'>Create Budget</h5>
                          <CreateBudget
                            user={user}
                            index={index}
                            updateUser={updateUser}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                  </div>

                  <div>
                    <Grid item xs={12}>
                      <Card variant="outlined" className='rounded' sx={{ minWidth: 1, maxWidth: 425 }}>
                        <CardContent>
                          <AllBudgets
                            user={user}
                            index={index}
                            theme={props.theme}
                            setBudgetId={setBudgetId}
                            budgetId={budgetId}
                          />

                          {
                            budgetId !== null ?
                              <>
                                <AddItem
                                  user={user}
                                  index={index}
                                  budgetId={budgetId}
                                  setBudgetId={setBudgetId}
                                  updateUser={updateUser}
                                  theme={props.theme}
                                />
                              </>
                              : ""
                          }
                        </CardContent>
                      </Card>
                    </Grid>
                  </div>

                  <div>
                    <Grid item xs={12}>
                      <Card variant="outlined" sx={{ minWidth: 15, maxWidth: 425 }}>
                        <CardContent>
                          {
                            user.transactions.length > 0 ?
                              <>
                                <h1>Recent Transactions</h1>
                                <RecentTransactions
                                  user={user}
                                  index={index}
                                />
                                <Button onClick={() => {
                                  if (!showTransactions) {
                                    setShowTransactions(true)

                                  } else {
                                    setShowTransactions(false)
                                  }
                                }}>
                                  {
                                    showTransactions === false ?
                                      "Show All Transactions" : "Hide All Transactions"
                                  }
                                </Button>
                              </> :
                              <div>
                                <h2>No Recent Transactions</h2>
                              </div>
                          }
                          {
                            showTransactions === true ?
                              <AllTransactions
                                user={user}
                                index={index}
                              /> : ""
                          }
                        </CardContent>
                      </Card>
                    </Grid>
                  </div>
                </Grid>
                :
                <h1 className='text-center'>Click <ControlPointIcon /> to create a budget page!</h1>
            }
          </div> : ""
      }
    </>
  )
}

export default Dashboard