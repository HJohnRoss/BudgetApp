import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AddItem = (props) => {
  const arr = props.user.pages[props.index].categories[props.budgetId].items
  const { id } = useParams()

  const onSubmit = (e) => {
    e.preventDefault()
    const newPages = props.user.pages
    const userTransaction = props.user.transactions
    newPages[props.index].categories[props.budgetId].items.push({
      expense: props.expense,
      amount: props.amnt
    })
    newPages[props.index].transactions.push({
      expense: props.expense,
      amount: props.amnt
    })
    userTransaction.push({
      expense: props.expense,
      amount: props.amnt,
      category: newPages[props.index].categories[props.budgetId].name
    })
    newPages[props.index].categories[props.budgetId].itemTotal += parseFloat(props.amnt)
    axios.put(`http://localhost:8001/api/user/${id}`, {
      transactions: userTransaction,
      pages: newPages
    }
      , { withCredentials: true })
      .then(res => {
        props.setAmnt("")
        props.setExpense("")
        props.updateUser()
        props.setUpdateChart(true)
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div className="rounded mt-3" style={props.theme === "dark" ? { border: "2px solid #39bda7" } : {border: "2px solid rgb(58, 136, 195)"}}>
        <Button
          variant="contained"
          sx={{ mt: 1, ml:1 }}
          onClick={() => props.setBudgetId(null)}
        >
          exit
        </Button>
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
              onChange={e => props.setExpense(e.target.value)}
              value={props.expense}
            />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Amount Billed</InputLabel>
            <Input
              id="standard-number"
              type="number"
              onChange={e => props.setAmnt(e.target.value)}
              value={props.amnt}
              startAdornment={<InputAdornment position="start"><AttachMoneyIcon /></InputAdornment>}
            />
          </FormControl>
          {
            props.expense.length > 0 && props.amnt.length > 0 ?
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
            <div key={i} className='ms-2'>
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