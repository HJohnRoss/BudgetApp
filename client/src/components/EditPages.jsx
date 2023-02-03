import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';

import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const EditPages = (props) => {

  const { id } = useParams()

  const onSubmit = (e) => {
    e.preventDefault()
    let arr = props.user.pages
    arr[props.index].month = props.month
    arr[props.index].year = props.year
    console.log(arr[props.index])
    axios.put(`http://localhost:8001/api/user/${id}`, {
      pages: arr
    }
      , { withCredentials: true })
      .then(res => {
        props.updateUser()
      })
      .catch(err => console.log(err))
  }

  return (
    <Box component="form"
      sx={{
        '& .MuiTextField-root': { width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <FormControl className='me-2' sx={{ minWidth: 200 }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">Change Budget Page</InputLabel>
        <NativeSelect
          id="demo-simple-select"
          value={props.index}
          label="Change Page"
          onChange={e => {
            props.setMonth(props.user.pages[e.target.value].month)
            props.setYear(props.user.pages[e.target.value].year)
            props.setIndex(e.target.value)
          }}
        >
          {
            props.user.pages.map((page, i) =>
              <option key={i} value={i}>{page.month} {page.year}</option>
            )
          }
        </NativeSelect>
      </FormControl>
      {
        props.index !== null ?
          <>
            <FormControl className='me-2' sx={{ minWidth: 200 }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">Month</InputLabel>
              <NativeSelect
                id="demo-simple-select"
                // defaultValue={props.month !== null ? props.month : props.user.pages[props.index].month}
                label="Change Page"
                value={props.month !== null ? props.month : props.user.pages[props.index].month}
                onChange={e => {
                  props.setMonth(e.target.value)
                }}
              >
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </NativeSelect>
            </FormControl>
            <TextField
              id='standard-basic'
              label='Year'
              variant='standard'
              type="number"
              value={props.year !== null ? props.year : props.user.pages[props.index].year}
              onChange={e => props.setYear(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 1 }}
            >
              Update
            </Button>
          </> : ""
      }
    </Box>
  )
}

export default EditPages