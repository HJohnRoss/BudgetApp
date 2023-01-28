import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './veiws/HomePage'
import { Routes, Route } from 'react-router-dom'



function App() {
  const [theme, setTheme] = useState('dark')

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <div className='container'>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route element={<HomePage theme={theme} setTheme={setTheme}/>} path="/" />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
