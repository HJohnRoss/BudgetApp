import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom'
import HomePage from './veiws/HomePage'
import Register from './veiws/Register';
import Login from './veiws/Login';



function App() {
  const [theme, setTheme] = useState('dark')

  const currTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <div className='container'>
      <ThemeProvider theme={currTheme}>
        <CssBaseline />
        <Routes>
          <Route element={<HomePage theme={theme} setTheme={setTheme} />} path="/" />
          <Route element={<Register theme={theme} setTheme={setTheme} />} path="/register" />
          <Route element={<Login theme={theme} setTheme={setTheme} />} path="/login" />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;