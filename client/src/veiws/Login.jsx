import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import NavBar from '../components/NavBar';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props.sx}>
      {'Copyright © '}
      <Link style={props.theme === "light" ? { color:"rgb(0, 0, 0, 0.6)", textDecoration:"none" } : { color: "rgb(180,180,173)", textDecoration: "none" }} to="/">
        Budget App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Login = (props) => {
  const navigate = useNavigate()

  const [errors, setErrors] = useState([])

  const [email, setEmail] = useState()
  const [password,setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
        axios.post('http://localhost:8001/api/login', {
      email,
      password,
    }, { withCredentials: true })
      .then(res => {
        props.setLogged(res.data)
        console.log(props.logged)
        navigate('/dashboard')
      })
      .catch(err => {
        console.log(err.response.data.errors)
        const errorResponse = err.response.data.errors
        const errArr = []
        for (const key of Object.keys(errorResponse)) {
          errArr.push(errorResponse[key].message)
        }
        setErrors(err.response.data.errors.hasOwnProperty("email") ? [err.response.data.errors["email"]] : errArr)
      })
  }

  return (
    <>
      <NavBar theme={props.theme} setTheme={props.setTheme} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          {
            errors.map((err, i) => <p key={i}>{err}</p>)
          }
          <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/register" variant="body2">
                  Have an Account? Register
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} theme={props.theme}/>
      </Container>
    </>
  )
}

export default Login