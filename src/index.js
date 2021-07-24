import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { QuoteContextProvider } from './context/QuoteContext'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'

ReactDOM.render(
  <Router>
    <QuoteContextProvider>
      <App />
    </QuoteContextProvider>
  </Router>,
  document.getElementById('root')
)
