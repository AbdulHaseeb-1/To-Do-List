import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import {ChakraProvider} from "@chakra-ui/react"
import { ThemeProvider } from './Contexts/ThemeContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <ChakraProvider>
      <ThemeProvider>
    <App />
      </ThemeProvider>
    </ChakraProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
