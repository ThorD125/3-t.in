import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/css/colors.css'
import './assets/css/fonts.css'
import './assets/css/index.css'
import './assets/css/tailwind.css'
import './assets/css/widths.css'
import './assets/css/components/darkmode-button.css'
import './assets/css/components/seperator.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
