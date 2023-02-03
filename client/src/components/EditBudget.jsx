import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


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
        <TextField
          id="standard-number"
          label="Edit Budget"
          type="number"
          value={props.budget !== null ? props.budget : page.budget}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          onChange={e => props.setBudget(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 1 }}
        >
          Set Budget
        </Button>
      </Box>
    </>
  )
}

export default EditBudget