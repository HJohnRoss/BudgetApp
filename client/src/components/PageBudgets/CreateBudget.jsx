import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import React, { useState } from 'react'

const CreateBudget = (props) => {
  const [budgetName, setBudgetName] = useState()
  const [budgetAmount, setBudgetAmount] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(budgetName, budgetAmount)
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
            onChange={e => setBudgetName(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Budget Amount</InputLabel>
          <Input
            id="standard-number"
            type="number"
            onChange={e => setBudgetAmount(e.target.value)}
            startAdornment={<InputAdornment position="start"><AttachMoneyIcon /></InputAdornment>}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Set Budget
        </Button>
      </Box>
    </>
  )
}

export default CreateBudget