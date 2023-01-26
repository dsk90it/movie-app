import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/default.css'
import Dashboard from './pages/Dashboard'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
)
