import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom'
import HomePage from './veiws/HomePage'
import Register from './veiws/Register';
import Login from './veiws/Login';
import Dashboard from './veiws/Dashboard';
import About from './veiws/About'



function App() {
  const [theme, setTheme] = useState('dark')

  const [logged, setLogged] = useState(null)

  const currTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <div>
      <ThemeProvider theme={currTheme}>
        <CssBaseline />
        <Routes>
          <Route
            element={
              <HomePage
                theme={theme}
                setTheme={setTheme}
                logged={logged}
              />}
            path="/"
          />

          <Route element={
            <Register
              theme={theme}
              setTheme={setTheme}
              setLogged={setLogged}
              logged={logged}
            />}
            path="/register"
          />

          <Route
            element={
              <Login
                theme={theme}
                setTheme={setTheme}
                setLogged={setLogged}
              />}
            path="/login"
          />

          <Route
            element={
              <Dashboard
                theme={theme}
                setTheme={setTheme}
                logged={logged}
                setLogged={setLogged}
              />}
            path="/dashboard/:id"
          />
          <Route
            element={
              <About
                theme={theme}
                setTheme={setTheme}
              />}
            path="/about"
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;