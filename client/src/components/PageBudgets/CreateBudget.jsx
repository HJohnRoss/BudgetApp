import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CreateBudget = (props) => {
  const { id } = useParams()

  const onSubmit = (e) => {
    e.preventDefault()
    let newPages = props.user.pages
    newPages[props.index].categories.push({
      name: props.budgetName,
      amount: props.budgetAmount,
      items: [],
      itemTotal: 0
    })
    axios.put(`http://localhost:8001/api/user/${id}`, {
      pages: newPages
    }
      , { withCredentials: true })
      .then(res => {
        props.setBudgetName(null)
        props.setBudgetAmount(null)
        props.updateUser()
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <Box component="form"
        sx={{
          '& .MuiTextField-root': { width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Budget Name</InputLabel>
          <Input
            id="standard-adornment-amount"
            onChange={e => props.setBudgetName(e.target.value)}
            value={props.budgetName ? props.budgetName : ""}
            />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Budget Amount</InputLabel>
          <Input
            id="standard-number"
            type="number"
            onChange={e => props.setBudgetAmount(e.target.value)}
            startAdornment={<InputAdornment position="start"><AttachMoneyIcon /></InputAdornment>}
            value={props.budgetAmount ? props.budgetAmount : ""}
          />
        </FormControl>
        {
          props.budgetName !== null && props.budgetAmount !== null ?
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2 }}
            >
              Set Budget
            </Button> : ""
        }
      </Box>
    </>
  )
}

export default CreateBudget