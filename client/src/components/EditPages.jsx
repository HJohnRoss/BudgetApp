import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const EditPages = (props) => {


  return (
    <Box component="form"
      sx={{
        '& .MuiTextField-root': { width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      // onSubmit={updateUser}
      >
      <FormControl className='me-2' sx={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">Change Page</InputLabel>
        <Select
          labelId="demo-simple-select-label"
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
              <MenuItem key={i} value={i}>{page.month} | {page.year}</MenuItem>
            )
          }
        </Select>
      </FormControl>
      {
        props.index !== null ?
          <>
            <TextField
              id="outlined-basic"
              label="Month"
              variant="outlined"
              value={props.month !== null ? props.month : props.user.pages[props.index].month}
              onChange={e => props.setMonth(e.target.value)}
            />
            <TextField
              id='outlined-basic'
              label='Year'
              variant='outlined'
              value={props.year !== null ? props.year : props.user.pages[props.index].year}
              onChange={e => props.setYear(e.target.value)}
            />
            <Button value={props.index}>edit</Button>
          </> : ""
      }
    </Box>
  )
}

export default EditPages