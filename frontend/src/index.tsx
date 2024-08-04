import React from 'react'
import ReactDOM from 'react-dom/client'
// Default styles
import './index.css'
// Components
import Routing from '@pages/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
)
