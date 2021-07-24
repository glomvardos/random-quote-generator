import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { QuoteContextProvider } from './context/QuoteContext'
import './index.css'

ReactDOM.render(
  <QuoteContextProvider>
    <App />
  </QuoteContextProvider>,
  document.getElementById('root')
)
