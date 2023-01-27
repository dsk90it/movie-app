import React from 'react'
import ReactDOM from 'react-dom/client'
import DefaultLayout from './components/layouts/DefaultLayout'
import Discover from './pages/Discover'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DefaultLayout>
      <Discover />
    </DefaultLayout>
  </React.StrictMode>
)
