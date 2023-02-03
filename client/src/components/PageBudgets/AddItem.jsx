import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AddItem = (props) => {
  const arr = props.user.pages[props.index].categories[props.budgetId].items
  const { id } = useParams()

  const [expense, setExpense] = useState("")
  const [amnt, setAmnt] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    const newPages = props.user.pages
    const transaction = props.user.transactions
    newPages[props.index].categories[props.budgetId].items.push({
      expense: expense,
      amount: amnt
    })
    transaction.push({
      expense: expense,
      amount: amnt,
      category: newPages[props.index].categories[props.budgetId].name
    })
    newPages[props.index].categories[props.budgetId].itemTotal += parseFloat(amnt)
    axios.put(`http://localhost:8001/api/user/${id}`, {
      transactions: transaction,
      pages: newPages
    }
      , { withCredentials: true })
      .then(res => {
        setAmnt("")
        setExpense("")
        props.updateUser()
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div style={{ backgroundColor: "gray" }}>
        <button onClick={() => props.setBudgetId(null)}>exit</button>
        <Box component="form"
          sx={{
            '& .MuiTextField-root': { width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Expense</InputLabel>
            <Input
              id="standard-adornment-amount"
              onChange={e => setExpense(e.target.value)}
              value={expense}
            />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Amount Billed</InputLabel>
            <Input
              id="standard-number"
              type="number"
              onChange={e => setAmnt(e.target.value)}
              value={amnt}
              startAdornment={<InputAdornment position="start"><AttachMoneyIcon /></InputAdornment>}
            />
          </FormControl>
          {
            expense.length > 0 && amnt.length > 0 ?
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Add Expense
              </Button> : ""
          }
        </Box>

        {/* show all items */}
        {
          arr.map((item, i) =>
            <div key={i}>
              <h5>{item.expense}</h5>
              <h6>${item.amount}</h6>
              <hr />
            </div>
          )
        }
      </div>
    </>
  )
}

export default AddItem