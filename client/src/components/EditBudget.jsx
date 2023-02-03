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

const EditBudget = (props) => {
  const page = props.user.pages[props.index]

  const { id } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    page.budget = props.budget
    axios.put(`http://localhost:8001/api/user/${id}`, {
      pages: props.user.pages
    }
      , { withCredentials: true })
      .then(res => {
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
        onSubmit={handleSubmit}
      >
        <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Edit Budget</InputLabel>
        <Input
          id="standard-number"
          type="number"
          startAdornment={<InputAdornment position="start"><AttachMoneyIcon/></InputAdornment>}
          value={ props.budget}
          variant="standard"
          onChange={e => props.setBudget(e.target.value)}
        />
        </FormControl>
        {
        props.budget.length > 0 ?
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

export default EditBudget