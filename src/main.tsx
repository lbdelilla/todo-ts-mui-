import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline} from '@mui/material'
import fixedTheme from './theme.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={fixedTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
